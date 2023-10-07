import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css'
import OrderList from './components/OrderList';
import { Provider } from './context/MainContext';
import EmptyPackets from './pages/EmptyPackets';
import MainPage from './pages/MainPage';

function App() {

  

  return (
    <Provider>
    <div className='px-4 py-2 relative w-full'>
      <div className='flex flex-col items-start justify-start w-full fixed py-4 px-8'>
        <div className='flex items-center justify-center w-full gap-x-4'>
        <button className='bg-green-400 font-bold text-white px-4 py-2'>Müsait</button>
          <NavLink to='/' className='text-sm font-bold bg-black text-white  px-2 py-4 cursor-pointer w-[100px] flex items-center justify-center rounded-full'>Ana Sayfa</NavLink>
          <NavLink to='/empty' className='text-sm font-bold bg-black text-white  px-2 py-4 cursor-pointer w-[120px] flex items-center whitespace-nowrap justify-center rounded-full'>Boşta Paketler</NavLink>
          <button className='text-sm font-bold bg-black text-white   px-2 py-4 cursor-pointer w-[100px] flex items-center justify-center rounded-full'>Arşiv</button>
          </div>
          </div>
          <div className='fixed bottom-12 right-48'>
            <a href='/' className='bg-blue-800 px-8 py-4 rounded-full text-white text-lg font-bold'>Yenile</a>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<MainPage /> } />
          <Route path='/empty' element={<EmptyPackets/>} />
        </Routes>
        </Provider>
  )
}

export default App
