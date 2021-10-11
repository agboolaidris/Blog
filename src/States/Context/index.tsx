import React from "react";
import { Authprovider } from "./Auth";

export function Provider({ children }: { children: React.ReactNode }) {
  return <Authprovider>{children}</Authprovider>;
}
