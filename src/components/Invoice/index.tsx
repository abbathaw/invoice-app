import React from 'react';
import { Invoice as InvoiceModel } from '../../types';
import Phase from './Phase';

const Invoice: React.FC<{ invoice: InvoiceModel }> = ({ invoice }) => (
  <div>
    {invoice.phases.map((phase, index) => (
      <Phase key={index} phase={phase} />
    ))}
    <div>Total discount/fee: {invoice.totalDiscountOrFee}</div>
    <div>Total: {invoice.total}</div>
  </div>
);

export default Invoice;
