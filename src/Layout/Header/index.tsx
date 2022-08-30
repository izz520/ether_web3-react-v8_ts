import { Button, Divider, Dropdown, Menu, MenuProps, message, Popover, Space, Switch } from "antd";
import styled from "styled-components";
import metaMask from "../../assets/images/metamask.svg";
import { useWeb3React } from "@web3-react/core";
import { AppState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeAccount, changeSelectChainId } from "../../store/module/user";
import { GlobalOutlined } from "@ant-design/icons";
//使用国际化
import { useTranslation } from 'react-i18next';
import { toggleTheme } from "../../store/module/system";
const HeaderBox = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header_info{
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info_logo{
      font-size: 30px;
      font-weight: 700;
    }
    .info_nav{
      display: flex;
      &>div+div{
        margin-left: 20px;
      }
    }
  }
  .header_login{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 20%;
    .header_lang{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
const MetaMaskBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .metamask_img{
    width: 30px;
    height: 30px;
  }
  .metamask_text{
    margin-left: 10px;
  }
`
const LangBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .lang_item{
    cursor: pointer;
    &:hover{
      background: #ccc;
    }
  }
`
const Header = () => {
  //实例化国际化
  const { t, i18n } = useTranslation();
  //实例化store的方法
  const dispatch = useDispatch();
  //实例化出connector，account
  const { account, connector } = useWeb3React();
  //从store中取得selectChainId
  const selectChainId = useSelector((state: AppState) => state.user.selectChainId);
  //监听account和connector的变化
  useEffect(() => {
    console.log(account);
    dispatch(changeAccount(account))
  }, [account, connector])
  //连接钱包
  const linkWallet = async () => {
    try {
      await connector.activate(selectChainId === -1 ? undefined : selectChainId)
    } catch (err: any) {
      message.error(err.message)
    }
  }
  //切换语言
  const changeLang: MenuProps['onClick'] = ({ key }) => {
    i18n.changeLanguage(key)
    localStorage.setItem('lang', key)
  };
  //登录的窗口
  const loginContent = (
    <MetaMaskBox onClick={linkWallet}>
      <img className="metamask_img" src={metaMask} alt="" />
      <span className="metamask_text">MetaMask</span>
    </MetaMaskBox>
  );
  //国际化的窗口
  const menu = (
    <Menu
      onClick={changeLang}
      items={[
        {
          key: 'en',
          label: (
            <div>English</div>
          ),
        },
        {
          key: 'zh',
          label: (
            <div>简体中文</div>
          ),
        },
      ]}
    />
  );
  //改变主题
  const changeTheme = (checked: boolean) => {
    console.log(checked);
    const theme = checked ? 'light' : 'dark';
    dispatch(toggleTheme())
  }
  return (
    <HeaderBox>
      <div className="header_info">
        {/* LOGO */}
        <div className="info_logo">LOGO</div>
        {/* 导航 */}
        <nav className="info_nav">
          <div>{t('header.menu.item1')}</div>
          <div>{t('header.menu.item2')}</div>
          <div>{t('header.menu.item3')}</div>
          <div>{t('header.menu.item4')}</div>
        </nav>
      </div>
      {/* 登录及国际化 */}
      <div className="header_login">
        <Space size={20}>
          {/* 主题切换 */}
          <div className="header_lang">
            <Switch checkedChildren="亮色" unCheckedChildren="暗色" defaultChecked onChange={changeTheme} />
          </div>
          {/* 国际化 */}
          <div className="header_lang">
            <Dropdown overlay={menu}>
              <Space size={6}>
                <GlobalOutlined />
                <span>{t('header.lang')}</span>
              </Space>
            </Dropdown>
          </div>
          {/* 登录 */}
          <Popover className="logo_popover" content={loginContent} trigger="click" placement="topRight">
            {
              account ? <span>{account}</span> : <Button type="primary">{t('header.login')}</Button>
            }
          </Popover>
        </Space>
      </div>
    </HeaderBox>
  )
}

export default Header;