import { mockInvoice } from './mockInvoiceData.ts';

export const getInvoice = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockInvoice), 500));
};
