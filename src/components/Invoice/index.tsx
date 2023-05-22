import { Invoice as InvoiceModel } from '../../types';
import Phase from './Phase';
import { calculateInvoiceTotal } from '../../utils/invoiceCalculator.ts';
import { formatPrice } from '../../utils/formatter.ts';

const Invoice = ({ invoice }: { invoice: InvoiceModel }) => {
  const invoiceSum = calculateInvoiceTotal(invoice);
  const isDiscount = invoice.totalDiscountOrFee <= 0;
  const { totalTax, totalInvoice } = invoiceSum;

  return (
    <>
      <h2 className="title">{invoice.project.name}</h2>
      <div className="table">
        <div className="table-row table-header">
          <div>Phase</div>
          <div>Unit</div>
          <div>Cost</div>
          <div>Tax</div>
          <div>Subtotal (Excl Tax)</div>
        </div>
        {invoice.phases.map((phase, index) => (
          <Phase key={index} phase={phase} />
        ))}
        <div className="section-summary">
          <div className="summary-details">
            <div className="summary-row">
              {isDiscount ? 'Additional Invoice Discount' : 'Extra Fee'}: {formatPrice(invoice.totalDiscountOrFee)}
            </div>
            <div className="summary-row">Tax {formatPrice(totalTax)}</div>
            <div className="summary-row">Total (excl. Tax) {formatPrice(totalInvoice)}</div>
            <div className="summary-row bold">Total (incl. Tax) {formatPrice(totalInvoice + totalTax)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
