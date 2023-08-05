//import logo from './logo.svg';
import './App.css';
import AvailableProducts from './components/AvailableProducts';
import { ProductsContainer } from './state/productState';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './pages/Header';
import ProductAdd from "./components/ProductAdd.js";
import ProductEdit from './components/ProductEdit';
import ProductDelete from './components/ProductDelete';

function App() {
  return (
   <>
<ProductsContainer>
 <BrowserRouter>
 <div className="App">
  <Header branding='Products App'/>
  <div className="container">
    <Routes>
    <Route path="/" element={<AvailableProducts/>}/>
    <Route path="/product/add" element={<ProductAdd/>}/>
    <Route path="/product/edit/:id" element={<ProductEdit/>}/>
    <Route path="/product/delete/:id" element={<ProductDelete/>}/>
    </Routes>
 </div>
 </div>
 </BrowserRouter>
   </ProductsContainer>
   </>
  );
}

export default App;
