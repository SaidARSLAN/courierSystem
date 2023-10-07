import './App.css'
import OrderList from './components/OrderList';

function App() {

  

  return (
    <div className='px-4 py-2 relative h-full w-full '>
      <div className='flex flex-col items-start justify-start w-full fixed py-4 px-8'>
        <div className='flex items-center justify-center w-full gap-x-4'>
        <button className='bg-green-400 font-bold text-white px-4 py-2'>Müsait</button>
          <button className='text-sm font-bold bg-black text-white  px-2 py-4 cursor-pointer w-[100px] flex items-center justify-center rounded-full'>Ana Sayfa</button>
          <button className='text-sm font-bold bg-black text-white  px-2 py-4 cursor-pointer w-[120px] flex items-center whitespace-nowrap justify-center rounded-full'>Boşta Paketler</button>
          <button className='text-sm font-bold bg-black text-white   px-2 py-4 cursor-pointer w-[100px] flex items-center justify-center rounded-full'>Arşiv</button>
          </div>
          </div>
          <OrderList />
          <div className='fixed bottom-12 right-48'>
            <a href='/' className='bg-blue-800 px-8 py-4 rounded-full text-white text-lg font-bold'>Yenile</a>
          </div>
        </div>
  )
}

export default App
