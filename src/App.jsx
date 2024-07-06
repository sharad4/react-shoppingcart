import { useEffect, useState } from "react"
import Cart from "./components/Cart"
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import { AuthProvider, useAuth } from "./context/AuthContext";


const products = [
  {id: 1, name: "Product 1", description: "Description for Product 1", price: 29.99 },
  {id: 2, name: "Product 2", description: "Description for Product 2", price: 39.99 },
  {id: 3, name: "Product 3", description: "Description for Product 3", price: 49.99 },
  {id: 4, name: "Product 4", description: "Description for Product 4", price: 59.99 },
];

function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

const Main = () => {
    const { user, logout } = useAuth();
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">E-commerce Shopping Cart</h1>
      {user ? (
        <>
          <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded mb-4">Logout</button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProductList products={products} addToCart={addToCart} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        </>
      ) : (
        <Login />
      )}

    </div>
  );
};


export default App
