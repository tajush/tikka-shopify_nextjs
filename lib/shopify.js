// lib/shopify.js
import { gql } from '@apollo/client';
import client from './apollo';

export async function fetchProducts() {
  const { data } = await client.query({
    query: gql`
      {
        products(first: 10) {
          edges {
            node {
              id
              title
              description
              images(first: 1) {
                edges {
                  node {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `
  });
  return data.products.edges;
}
