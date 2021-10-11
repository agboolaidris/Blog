import axios from "axios";
import { NextRouter } from "next/router";
import { User } from "../../helper/types";
import * as types from "../types";

export const isMe = async (dispatch: any) => {
  try {
    const { data }: { data: User } = await axios.get("auth/me");
    dispatch({ type: types.ISME, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const register = async (
  state: {
    email: string;
    password: string;
    password2: string;
    username: string;
  },
  router: any,
  dispatch: any
) => {
  try {
    await axios.post("/auth/register", state);
    router.push("/signin");
  } catch (error) {
    dispatch({ type: types.REGISTER_ERROR, payload: error.response.data });
  }
};

export const login = async (
  state: { email: string; password: string },
  router: NextRouter,
  dispatch: any
) => {
  try {
    const { data }: { data: User } = await axios.post("/auth/login", state);
    dispatch({ type: types.LOGIN_SUCCESS, payload: data });
    router.back();
  } catch (error) {
    dispatch({ type: types.LOGIN_ERROR, payload: error.response?.data });
  }
};

export const logout = async (dispatch: any) => {
  try {
    await axios.get("/auth/logout");
    dispatch({ type: types.LOGOUT, payload: null });
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
