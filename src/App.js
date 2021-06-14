import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import {Header, Footer} from 'components'; 
import {CustomerPage} from 'pages';
import {QueryClient, QueryClientProvider} from 'react-query'; 
import { ReactQueryDevtools } from 'react-query/devtools';
import './index.css';

// import logo from './logo.svg';
// import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Header/>
          <CustomerPage/>
        <Footer/>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
