import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "../States/Context/Auth";

export const publicRoute = () => {
  const router = useRouter();

  const { isAuthenticated } = useAuthState();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);
};
