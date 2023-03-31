import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";
import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";
import MeshmapCollaborate from "../../../sections/Meshmap/Meshmap-collaborate";

const MeshmapCollaboratePage = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <GlobalStyle />
      <Layout>
        <Navigation theme={theme} themeSetter={themeSetter} />
        <MeshmapCollaborate theme={theme} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default MeshmapCollaboratePage;


export const Head = () => {
  return <SEO title="MeshMap" description="Collaboratively design and manage your Kubernetes clusters, service mesh deployments, and cloud native apps. Confidently configure your systems with MeshMap's visual topology and built-in design patterns." />;
};