import { product } from "./utils/data";
import ProductDetails from "./components/Products/ProductDetails";

function App() {
  return (
    <div>
      <ProductDetails
        images={product.images}
        brand={product.brand}
        title={product.title}
        price={product.price}
        description={product.description}
        color={product.color}
        size={product.size}
        stock={product.stock}
        category={product.category}
      />
    </div>
  );
}

export default App;
