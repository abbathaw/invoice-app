import { InMemoryCache, ApolloClient } from '@apollo/client';
import { MockLink } from '@apollo/client/testing';
import { DocumentNode } from 'graphql';
import { mockInvoice } from './mockInvoiceData.ts';
import { GET_INVOICE } from './getInvoice.ts';

const mockQuery: DocumentNode = GET_INVOICE;

const mockLink = new MockLink([
  {
    request: {
      query: mockQuery,
    },
    result: {
      data: {
        getInvoice: mockInvoice,
      },
    },
  },
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: mockLink,
});
