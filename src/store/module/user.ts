import { createSlice } from "@reduxjs/toolkit";

//初始化的值
export const initialState = {
  selectChainId: sessionStorage.getItem("selectChainId") ? parseInt(sessionStorage.getItem("selectChainId") || "") : 1, //当前连接的链
  account: sessionStorage.getItem("account") ? sessionStorage.getItem("account") : "", //连接的钱包地址
}
//创建userStore
const userSlice = createSlice({
  //实例的名称
  name: "user",
  //store的值
  initialState,
  //修改store的方法
  reducers: {
    //更改当前连接的链ID
    changeSelectChainId(state, { payload }) {
      state.selectChainId = payload;
      sessionStorage.setItem("selectChainId", payload)
    },
    //改变钱包地址
    changeAccount(state, { payload }) {
      state.account = payload
      sessionStorage.setItem("account", payload)
    }
  }
})
//导出方法
export const {
  changeSelectChainId,
  changeAccount
} = userSlice.actions
//导出方法
export default userSlice.reducer
