export interface CostItem {
  name: string;
  pricePerUnit: number;
  units: number;
  taxRate: number;
}

export interface Phase {
  name: string;
  costItems: CostItem[];
  discountOrFee: number;
}

export interface Invoice {
  phases: Phase[];
  totalDiscountOrFee: number;
  total: number;
}
