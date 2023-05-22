import { useQuery } from '@apollo/client';
import { GET_INVOICE } from '../api/getInvoice';
import { Invoice as InvoiceModel } from '../types';
import Invoice from '../components/Invoice';
import Loading from '../components/Loading.tsx';
import Error from '../components/Error.tsx';

const InvoicePage = () => {
  const { loading, error, data } = useQuery(GET_INVOICE);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const invoice: InvoiceModel = data.getInvoice;

  return <Invoice invoice={invoice} />;
};

export default InvoicePage;
