const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="h-40 w-40 object-contain mb-4" />
      <h3 className="text-lg font-semibold text-center">{product.title.slice(0, 20) + "..."}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;