import React from "react";
import axios from "axios";
import { SWRConfig } from "swr";
import { AppProps } from "next/dist/next-server/lib/router/router";

import Layout from "../layout";
import "../styles/globals.css";
import { Provider } from "../States/Context";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_CLIENT_BASE_URL + "/api";
//axios.defaults.baseURL = "http://localhost:3000/api/";
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axios.get(url).then((res) => res.data),
        dedupingInterval: 10000,
      }}
    >
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SWRConfig>
  );
}

export default MyApp;
