import React from 'react';
import { CostItem as CostItemModel } from '../../types';

const CostItem: React.FC<{ costItem: CostItemModel }> = ({ costItem }) => (
  <div>
    <h3>{costItem.name}</h3>
    <div>Price per unit: {costItem.pricePerUnit}</div>
    <div>Units: {costItem.units}</div>
    <div>Tax rate: {costItem.taxRate}</div>
  </div>
);

export default CostItem;
