// pages/index.js
import { fetchProducts } from '../lib/shopify';

export default function Home({ products }) {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(({ node }) => (
          <li key={node.id}>
            <h2>{node.title}</h2>
            <p>{node.description}</p>
            <img src={node.images.edges[0]?.node.src} alt={node.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: {
      products,
    },
  };
}
