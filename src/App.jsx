import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css'
import { Provider } from './context/MainContext';
import EmptyPackets from './pages/EmptyPackets';
import MainPage from './pages/MainPage';
import Completed from './pages/Completed';
import OrderDetails from './components/OrderDetails';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(false)
  const [situation, setSituation] = useState("Müsait")

  return (
    <Provider>
    <div className='px-4 py-2 relative w-full'>
      <div className='flex flex-col items-start justify-start w-full fixed py-4 px-8'>
        <div className='flex items-center justify-center w-full gap-x-4'>
        <button className='bg-green-400 font-bold text-black px-4 py-2' onClick={() => {setToggle(!toggle)}}>{situation}</button>
        <div className={toggle ? 'absolute left-3 top-20 bg-yellow-400 border-2 space-y-2 border-black px-4 py-2 flex flex-col' : "hidden"}>
          <button className='bg-green-400 py-2 font-bold' onClick={() => {setSituation("15DK MOLA");setToggle(false)}}>15 Dakika Mola</button>
          <button className='bg-green-400 py-2 font-bold' onClick={() => {setSituation("15DK MOLA");setToggle(false)}}>15 Dakika Mola</button>
          <button className='bg-green-400 py-2 px-2 font-bold' onClick={() => {setSituation("45 DK MOLA");setToggle(false)}}>45 Dakika Yemek Molası</button>
        </div>
          <NavLink to='/'  className={({isActive}) => isActive ? "text-sm font-bold bg-yellow-400 text-black px-2 py-4 cursor-pointer w-[100px] flex items-center justify-center rounded-full" : 'text-sm font-bold bg-black text-white  px-2 py-4 cursor-pointer w-[100px] flex items-center justify-center rounded-full'}>Paketler</NavLink>
          <NavLink to='/empty'className={({isActive}) => isActive ? "text-sm font-bold bg-yellow-400 text-black px-2 py-4 cursor-pointer w-[100px] flex items-center whitespace-nowrap justify-center rounded-full" : 'text-sm font-bold bg-black text-white whitespace-nowrap  px-2 py-4 cursor-pointer w-[100px] flex items-center justify-center rounded-full'}>Boşta Paketler</NavLink>
          <NavLink to='/history' className={({isActive}) => isActive ? "text-sm font-bold bg-yellow-400 text-black px-2 py-4 cursor-pointer w-[100px] flex items-center justify-center rounded-full" : 'text-sm font-bold bg-black text-white  px-2 py-4 cursor-pointer w-[100px] flex items-center justify-center rounded-full'}>Arşiv</NavLink>
          </div>
          </div>
          <div className='fixed bottom-12 right-48'>
            <a href='/' className='bg-blue-800 px-8 py-4 rounded-full text-white text-lg font-bold'>Yenile</a>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<MainPage /> } />
          <Route path='/empty' element={<EmptyPackets />} />
          <Route path='/history' element={<Completed />} />
          <Route path='/orderDetail' element={<OrderDetails />}/>
        </Routes>
        </Provider>
  )
}

export default App
