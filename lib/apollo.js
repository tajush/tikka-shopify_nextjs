// lib/apollo.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-04/graphql.json`,
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
  },
  cache: new InMemoryCache()
});

export default client;
