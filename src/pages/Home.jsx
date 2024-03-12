import curriculumPdf from '../assets/Curriculum.pdf';

const Home = () => {

  const handleDownloadCurriculum = () => {
    const link = document.createElement('a');
    link.href = curriculumPdf; 
    link.download = 'curriculum.pdf'; 
    
    link.click();
  };

  return (
    <>
      <div className='homebg'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center m-20 fondo1 w-80 h-80 mb-20'>
            <a href="https://github.com/Crixls/" className='m-6 ibm-plex-sans-semibold text-xl bg-blue-100 p-1 colorazul'>GITHUB</a>
            <button className='m-6 ibm-plex-sans-semibold text-xl p-1 colorazul bg-blue-100' onClick={handleDownloadCurriculum}>CURRICULUM</button>
            <p className='m-6 ibm-plex-sans-semibold text-xl p-1 colorazul bg-blue-100'>CONTACTO</p>
          </div>
          <div className='flex flex-col justify-center items-center fondo2 rounded-md m-40 w-80 h-80 mb-12'>
            <span className='p-1 ibm-plex-sans-semibold colorazulfondo text-xl text-white'>PROYECTOS</span>
          </div>
          <div className='flex flex-col justify-center items-center fondo rounded-full m-20  w-80 h-80 mb-4'>
            <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100'>HABILIDAD PRINCIPAL</p>
            <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100'>HABILIDADES TÉCNICAS</p>
            <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100'>HABILIDADES BLANDAS</p>
          </div>
        </div>
        <div className='flex justify-center pt-80 pb-80'>
          <div className='border-blue-100 flex flex-col justify-center items-center forma2 rounded-full m-40 w-80 h-80 '>
            <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100'>AFICIONES</p>
          </div>
          <div className=' flex flex-col justify-center  items-center forma1  m-40 w-80 h-80 mb-8'>
            <p className='text-blue-100 p-1 colorazul ibm-plex-sans-semibold text-lg bg-blue-100'>OTROS PROYECTOS</p>
          </div>
          <div className='border-blue-100 flex flex-col justify-center items-center forma3 rounded-full m-40 w-80 h-80'>
            <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100'>ESTOY APRENDIENDO ...</p>
          </div>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <div className='h-40 '>
            <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100 '>EXPERIENCIA LABORAL</p>
          </div>
          <div className=' h-40'>
            <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100'>FORMACIÓN</p>
          </div>
          <div className='h-40'>
            <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100'>SOBRE MÍ</p>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Home;
