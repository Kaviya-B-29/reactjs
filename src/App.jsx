import { useEffect, useState} from "react";
import ProductCard from "./Components/productcard";
import Navbar from "./Components/navBar";
import CartModal from "./Components/cartModal";

const App = () => {
  //states
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
         .then(response => response.json())
         .then(data => setProducts(data))
         .catch(err => console.error('Fetch error:', err));

    }, []);
//Addtocart function 
    const addToCart = (product) => {
      const exists = cart.find(item => item.id === product.id);
      if (exists) {
        alert("Item already added to the cart");
      } 
      else {
        setCart([...cart, { ...product, quantity: 1 }]);
        console.log("Cart:", cart);
      }

    }

    console.log(products);

    return (
      <div>
        <Navbar cartCount={cart.length} setShowModal={setShowModal} />
        {showModal && <CartModal cart={cart} setCart={setCart} setShowModal={setShowModal} />}
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Fake Store</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (<ProductCard key={product.id} product={ product} addToCart={addToCart} />))}
            </div>
          </div>
      </div>
    );
}
export default App;