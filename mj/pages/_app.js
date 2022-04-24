import React, { useMemo } from "react";
import "antd/dist/antd.css";
import wrapper from "../store/storeConfigure";
import GlobalStyle from "../utils/globalStyles";

const AppShell = ({ Component }) => {
  return (
    <>
      <GlobalStyle />

      <Component />
    </>
  );
};

export default wrapper.withRedux(AppShell);
