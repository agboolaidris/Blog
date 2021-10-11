import React, { createContext, useReducer, useContext, useEffect } from "react";
import * as types from "../types";
import { User } from "../../helper/types";
import { isMe } from "../Api/Auth";

interface Props {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | undefined;
  error: any;
  type: string;
}

interface Action {
  type: string;
  payload: any;
}

const initalState = {
  isAuthenticated: false,
  user: null,
  error: {},
  isLoading: false,
  type: "",
};

export const AuthStateContext = createContext<Props>(initalState);
export const AuthDispatchContext = createContext(null);

const reducer = (state, { payload, type }: Action) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
    case types.ISME:
      return {
        ...state,
        user: payload,
        type: "",
        error: {},
        isAuthenticated: true,
      };
      break;

    case types.LOGIN_ERROR:
      return {
        ...state,
        error: payload,
        type: "LOGIN",
      };
      break;

    case types.REGISTER_ERROR:
      return {
        ...state,
        error: payload,
        type: "REGISTER",
      };
      break;

    case types.LOGOUT:
      return {
        error: {},
        type: "",
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };
      break;

    default:
      return state;
      break;
  }
};

export const Authprovider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    isMe(dispatch);
  }, []);

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
