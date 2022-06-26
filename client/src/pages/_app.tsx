import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { createClient, Provider } from "urql";
import theme from "../theme/theme";

const client = createClient({
  url: "http://localhost:3001/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
