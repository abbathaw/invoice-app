import { Phase as PhaseModel } from '../../types';
import CostItem from './CostItem';

const Phase: React.FC<{ phase: PhaseModel }> = ({ phase }) => (
  <div>
    <h2>{phase.name}</h2>
    {phase.costItems.map((costItem, index) => (
      <CostItem key={index} costItem={costItem} />
    ))}
    <div>Discount/fee: {phase.discountOrFee}</div>
  </div>
);
export default Phase;
