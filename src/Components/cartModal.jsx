import React from 'react';

const CartModal = ({ cart, setCart, setShowModal }) => {
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-2">
                <img src={item.image} alt={item.title} className="h-16 w-16 object-contain mr-4" />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"onClick={() => removeFromCart(item.id)}> Remove</button>
              </div>
            ))}
          </div>
        )}
        <div className="mt-4 text-center">
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"onClick={() => setShowModal(false)}>Close </button> 
        </div>
      </div>
    </div>
  );
};

export default CartModal;


