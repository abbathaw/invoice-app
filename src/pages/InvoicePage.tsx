import { useEffect, useState } from 'react';
import { getInvoice } from '../api/getInvoice';
import { Invoice as InvoiceModel } from '../types';
import Invoice from '../components/Invoice';
const InvoicePage = () => {
  const [invoice, setInvoice] = useState<InvoiceModel | null>(null);

  useEffect(() => {
    getInvoice().then(setInvoice);
  }, []);

  if (!invoice) {
    return <div>Loading...</div>;
  }

  return <Invoice invoice={invoice} />;
};

export default InvoicePage;
