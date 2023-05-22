import { CostItem as CostItemModel } from '../../types';
import { formatPrice } from '../../utils/formatter.ts';

const CostItem = ({ costItem }: { costItem: CostItemModel }) => (
  <div className="table-row">
    <h3 className="row-name-icon">{costItem.name}</h3>
    <div>{costItem.units}</div>
    <div>{formatPrice(costItem.pricePerUnit)}</div>
    <div>{costItem.taxRate * 100}%</div>
    <div>{formatPrice(costItem.pricePerUnit * costItem.units)}</div>
  </div>
);

export default CostItem;
