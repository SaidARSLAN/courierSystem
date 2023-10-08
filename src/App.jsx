import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css'
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
          <NavLink to='/'  className={({isActive}) => isActive ? "text-sm font-bold bg-yellow-400 text-black px-2 py-4 cursor-pointer w-[100px] flex items-center justify-center rounded-full" : 'text-sm font-bold bg-black text-white  px-2 py-4 cursor-pointer w-[100px] flex items-center justify-center rounded-full'}>Teslim</NavLink>
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
          <Route path='/empty' element={<EmptyPackets/>} />
        </Routes>
        </Provider>
  )
}

export default App
