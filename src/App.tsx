import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { router } from './router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/apolloClient.ts';

function App() {
  return (
    <>
      <HelmetProvider>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Helmet titleTemplate="InvoicePage - %s" defaultTitle="InvoicePage">
            <title>Invoices Home</title>
          </Helmet>
          <ApolloProvider client={client}>
            <RouterProvider router={router} />
            <ToastContainer autoClose={3000} theme={'colored'} />
          </ApolloProvider>
        </ErrorBoundary>
      </HelmetProvider>
    </>
  );
}

export default App;
