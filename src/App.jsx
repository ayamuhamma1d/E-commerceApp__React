import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar/NavBar';
import Product from './component/product/Product';
import ProductDetails from './component/product/ProductDetails';
import Counter from './component/counter/Counter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './component/footer/Footer';
import { NotFoundPage } from './component/notFound/NotFoundPage';
import SignUp from './component/signup/SignUp';
import Signin from './component/signin/Signin';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
