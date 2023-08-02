import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { Routes, Route } from 'react-router-dom'
import CartPage from './components/cartPage'
import './App.css'
function App() {


  return (
    <>

      <Navbar />
      <Routes>
        <Route exact path='/' element={<ProductCard />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>

    </>
  )
}

export default App
