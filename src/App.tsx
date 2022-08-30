import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from "./store/index";
import { Button } from 'antd';
import { changeSelectChainId } from './store/module/user';
function App() {
  const account = useSelector((state: AppState) => state.user.account);
  const selectChainId = useSelector((state: AppState) => state.user.selectChainId);
  const dispatch = useDispatch()
  const changeId = () => {
    dispatch(changeSelectChainId(selectChainId + 1))
  }
  return (
    <div className="App">
      内容区域
      <Button onClick={changeId}>更改ChainId</Button>
      <br />
      {account}
      <br />
      {selectChainId}
    </div>
  );
}

export default App;
