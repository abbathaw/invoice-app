import { Invoice, Phase } from '../types/invoice';

export const calculatePhaseTotal = (phase: Phase, additionalDiscountOrFee = 0) => {
  let remainingDiscountOrFee = phase.discountOrFee;
  let additionalDiscountFeeCopy = additionalDiscountOrFee;

  let subTotal = 0;
  let phaseTax = 0;

  phase.costItems.forEach((costItem) => {
    let originalTotal = costItem.pricePerUnit * costItem.units;

    /**
     *     assumptions made here related to the totalDiscountOrFee on the phase itself.
     *     I added the discount/fee on the costItem 1 and any carryover goes to the next costItem.
     */
    if (Math.abs(remainingDiscountOrFee) > 0) {
      const [updatedCostItemTotal, remainingDiscountFee] = handleDiscountFee(originalTotal, remainingDiscountOrFee);
      remainingDiscountOrFee = remainingDiscountFee;
      originalTotal = updatedCostItemTotal;
    }

    /**
     *     assumptions made here related to the totalDiscountOrFee on the whole invoice.
     *     I added the discount/fee on the phase 1, costItem 1 and any carryover goes to the next phase.
     */
    if (Math.abs(additionalDiscountFeeCopy) > 0) {
      const [updatedCostItemTotal, remainingDiscountFee] = handleDiscountFee(originalTotal, additionalDiscountFeeCopy);
      additionalDiscountFeeCopy = remainingDiscountFee;
      originalTotal = updatedCostItemTotal;
    }

    subTotal += originalTotal;
    if (originalTotal >= 0) {
      phaseTax += originalTotal * costItem.taxRate;
    }
  });

  return {
    remainingDiscountOrFee: additionalDiscountFeeCopy,
    subTotal,
    phaseTax,
  };
};

export const calculateInvoiceTotal = (invoice: Invoice) => {
  let totalInvoice = 0;
  let totalTax = 0;
  let additionalDiscount = invoice.totalDiscountOrFee;

  for (const phase of invoice.phases) {
    const { subTotal, phaseTax, remainingDiscountOrFee } = calculatePhaseTotal(phase, additionalDiscount);

    totalInvoice += subTotal;
    totalTax += phaseTax;
    additionalDiscount = remainingDiscountOrFee;
  }

  return {
    totalInvoice,
    totalTax,
  };
};

function handleDiscountFee(n1: number, n2: number) {
  let result;

  if (n2 < 0) {
    result = n1 + n2;
    if (result < 0) {
      return [0, result];
    } else {
      return [result, 0];
    }
  } else {
    result = n1 + n2;
    return [result, 0];
  }
}
