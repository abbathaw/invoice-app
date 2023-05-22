import { gql } from '@apollo/client';

export const GET_INVOICE = gql`
  query GetInvoice {
    getInvoice {
      project {
        id
        name
      }
      phases {
        id
        name
        costItems {
          name
          pricePerUnit
          units
          taxRate
        }
        discountOrFee
      }
      totalDiscountOrFee
    }
  }
`;
