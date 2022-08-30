import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../../theme/type";

//初始化的值
export const initialState = {
  theme: localStorage.getItem("theme") as Theme ?? Theme.Light, //配置主题切换
}
//创建systemStore
const systemSlice = createSlice({
  //实例的名称
  name: "system",
  //store的值
  initialState,
  //修改store的方法
  reducers: {
    //更改主题
    toggleTheme(state) {
      state.theme = state.theme === Theme.Light ? Theme.Dark : Theme.Light;
      sessionStorage.setItem("theme", state.theme)
    },
  }
})
//导出方法
export const {
  toggleTheme
} = systemSlice.actions
//导出方法
export default systemSlice.reducer
