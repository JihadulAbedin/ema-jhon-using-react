
import './App.css'
import Banner from './components/banner/bannerComponentCombiner/Banner'
import Header from './components/header/Header'
import ShopCombiner from './components/shop/shop Combiner/ShopCombiner'

function App() {
  return(
    <div>
      <div>
      <Header></Header>
      <Banner></Banner>
    </div>
    <div>
      <ShopCombiner></ShopCombiner>
    </div>
    </div>
  )
}

export default App
