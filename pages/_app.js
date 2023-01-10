import '../styles/globals.css'
import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';


export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return <>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </Hydrate>
    </QueryClientProvider>
  </>
}
