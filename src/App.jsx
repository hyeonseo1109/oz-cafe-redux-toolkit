import './App.scss'
import Header from './components/Header'
import Menu from './components/Menu'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'

function App() {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Menu />}/>
          <Route path='/cart' element={<Cart />}/>
          {/*   <Route path='/cart' element={<Cart menu={menu} cart={cart} setCart={setCart} />}/>  */}
          {/* 이제 전역으로 바로바로 가져올 수 있기 때문에 프롭스 내리는 거 다 지워도 됨 */}
        </Routes>
      </main>
    </div>
  )
}

export default App
