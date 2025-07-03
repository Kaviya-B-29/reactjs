const Navbar = ({ cartCount, setShowModal }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Fake Store</h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded flex items-center"
          onClick={() => {
            console.log("Cart clicked"); //  for testing
            setShowModal(true);
          }}
        >
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
};
export default Navbar;