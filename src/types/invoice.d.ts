export interface CostItem {
  name: string;
  pricePerUnit: number;
  units: number;
  taxRate: number;
}

export interface Phase {
  id: string;
  name: string;
  costItems: CostItem[];
  discountOrFee: number;
}

export interface Invoice {
  project: {
    id: string;
    name: string;
  };
  phases: Phase[];
  totalDiscountOrFee: number;
}
