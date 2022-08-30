import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./module/user";
import systemSlice from "./module/system";
//创建store实例
export const store = configureStore({
  //引入多个redux
  reducer: combineReducers({
    user: userSlice,
    system: systemSlice
  })
})
//导出变量使用-->
export type AppState = ReturnType<typeof store.getState>
//外部dispatch使用
export type AppDispatch = typeof store.dispatch