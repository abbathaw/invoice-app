import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import ErrorPage from '../components/ErrorPage.tsx';
import Home from '../pages/Home.tsx';
import InvoicePage from '../pages/InvoicePage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/invoices',
        element: <InvoicePage />,
      },
    ],
  },
]);
