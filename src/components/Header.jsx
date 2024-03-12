
import caraImage from '../assets/cara.png';



const Header = () => {
  return (
    <>
      <div className='flex justify-between items-center m-12'>
        <img src={caraImage} alt="cara" className='ml-10 h-96'/>
        <div className='pt-10 pr-20 pb-8'>
          <h1 className='archivo-black-regular text-blue-100 text-8xl opacity-80'>CRISTINA</h1>
          <br />
          <h1 className='archivo-black-regular text-blue-100 text-8xl opacity-80'>LUQUE</h1>
          <br />
          <h1 className='archivo-black-regular text-blue-100 text-8xl opacity-80'>SANTAELLA</h1>
        </div>
      </div>
      </>
  )
  
}

export default Header
