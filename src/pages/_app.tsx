import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Layout from "../components/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Layout><Component {...pageProps} /></Layout>;
};

export default MyApp;
