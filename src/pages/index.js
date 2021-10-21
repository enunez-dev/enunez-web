import React from 'react';
// import { ThemeProvider } from 'theme-ui';
// import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
// import SEO from 'components/seo';
import Layout from 'components/layout';
import Inicio from 'sections/inicio';
import Conoceme from 'sections/conoceme';
import Portafolio from 'sections/portafolio';
import Blog from 'sections/blog';
import Contactame from 'sections/contactame';

export default function IndexPage() {
  return (
    // <ThemeProvider theme={theme}>
      //<StickyProvider> */}
        <Layout>
           <Inicio />
          <Conoceme />
          <Portafolio />
          <Blog />
          <Contactame />
        </Layout>
      // </StickyProvider> */}
    // </ThemeProvider>
  );
}
