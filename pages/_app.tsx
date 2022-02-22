import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../utils/theme";
import ThemeSwitcher from "../components/ThemeSwitcher";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <title>Dapr Media</title>
      </Head>
      <ChakraProvider theme={theme} resetCSS>
        <Container py="28px">
          <ThemeSwitcher />
          <NavBar />
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
