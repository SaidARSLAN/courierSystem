import './App.css'

function App() {

  const handleClick = (event) => {
      event.target.textContent = "+";
      event.target.classList = "approved";
  }

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
          <div className='flex items-center justify-center space-y-4 w-full flex-col my-20'>
          <div className='border-2 px-2 py-2 flex bg-white space-x-4 rounded-lg'>
            <div className='flex items-center justify-center space-x-2'>
            <div className='flex flex-col items-center justify-center'>
              <label className='font-bold bg-yellow-400 px-1'>Restoran</label>
              <h1 className='text-base font-bold whitespace-nowrap '>Güney Kebap</h1>
              </div>
              <div className='w-[2px] h-full bg-black'>
              </div>
            </div>
            <div className='flex items-center justify-center space-x-2'>
            <div className='flex flex-col w-full items-center justify-center'>
              <label className='font-bold bg-yellow-400  px-1 text-center'>Adres</label>
              <p className='text-lg font-bold text-center'>Akpınar mahallesi 237.sokak no 8 Manisa / Şehzadeler</p>
            </div>
            <div className='w-[2px] h-full bg bg-black'></div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='font-bold whitespace-nowrap bg-yellow-400 px-1'>Tutar</h1>
              <p className='text-base font-bold whitespace-nowrap'>250 TL</p>
              <p className='font-bold'>Kredi</p>
            </div>
    
            <div className='flex flex-col items-center justify-center space-y-1'>
              <button className='text-sm bg-green-400 px-2 py-2 font-bold w-[60px] rounded-full' onClick={handleClick}>Onayla</button>
              <button className='text-sm bg-yellow-400 px-2 py-2 font-bold w-[60px] rounded-full'>Yolda</button>
              <button className='text- sm bg-red-600 px-2 py-2 font-bold w-[60px] rounded-full'>Teslim</button>
            </div>
          </div>

          
          </div>
          <div className='fixed bottom-12 right-48'>
            <a href='/' className='bg-blue-800 px-8 py-4 rounded-full text-white text-lg font-bold'>Yenile</a>
          </div>
        </div>
  )
}

export default App
