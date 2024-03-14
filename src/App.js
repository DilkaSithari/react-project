
import './App.css';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: 'flex' }}>
       <Products />
       <ProductDetails />
      </div>
    </div>
  );
}

export default App;
