import { useState } from 'react';
import curriculumPdf from '../assets/Curriculum.pdf';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenThree1, setModalOpenThree1] = useState(false);
  const [modalOpenThree2, setModalOpenThree2] = useState(false);
  const [modalOpenThree3, setModalOpenThree3] = useState(false);
  const [modalOpenFour, setModalOpenFour] = useState(false);
  const [modalOpenFive, setModalOpenFive] = useState(false);
  const navigate = useNavigate();


  const handleDownloadCurriculum = () => {
    const link = document.createElement('a');
    link.href = curriculumPdf; 
    link.download = 'curriculum.pdf'; 
    link.click();
  };  


  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleProyect = () => {
    navigate("proyects");
  };

  const handleOpenModalThree1 = () => {
    setModalOpenThree1(true);
  };

  const handleCloseModalThree1 = () => {
    setModalOpenThree1(false);
  };
  const handleOpenModalThree2 = () => {
    setModalOpenThree2(true);
  };

  const handleCloseModalThree2 = () => {
    setModalOpenThree2(false);
  };
  const handleOpenModalThree3 = () => {
    setModalOpenThree3(true);
  };

  const handleCloseModalThree3 = () => {
    setModalOpenThree3(false);
  };

  const handleProyectTwo = () => {
    navigate("proyectsTwo");
  };

  const handleOpenModalFour = () => {
    setModalOpenFour(true);
  };
  const handleCloseModalFour = () => {
    setModalOpenFour(false);
  };

  const handleOpenModalFive = () => {
    setModalOpenFive(true);
  };
  const handleCloseModalFive = () => {
    setModalOpenFive(false);
  };



  return (
    <>
      <div className='homebg'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center m-20 fondo1 w-80 h-80 mb-20'>
            <a href="https://github.com/Crixls/" className='m-6 ibm-plex-sans-semibold text-xl bg-blue-100 p-1 colorazul rounded-md'>GITHUB</a>
            <button className='m-6 ibm-plex-sans-semibold text-xl p-1 colorazul bg-blue-100 rounded-md' onClick={handleDownloadCurriculum} >CURRICULUM</button>
            
            <button onClick={handleOpenModal} className='m-6 ibm-plex-sans-semibold text-xl p-1 colorazul bg-blue-100 rounded-md'>CONTACTO</button>
            <Modal isOpen={modalOpen} title="EMAIL DE CONTACTO" background='bgFirst' onClose={handleCloseModal}>
              <p className='text-blue-100'>luquecristina29@gmail.com</p>
            </Modal>
          </div>

          <div className='flex flex-col justify-center items-center fondo2 rounded-md m-40 w-80 h-80 mb-12'>
            <button onClick={handleProyect} className='p-1 ibm-plex-sans-semibold colorazulfondo text-xl text-white rounded-md'>PROYECTOS</button>
          </div>
          <div className='flex flex-col justify-center items-center fondo rounded-full m-20  w-80 h-80 mb-4'>

            <button onClick={handleOpenModalThree1} className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100 rounded-md'>HABILIDADES PRINCIPAL</button>
            <button onClick={handleOpenModalThree2} className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100 rounded-md'>HABILIDADES TÉCNICAS</button>
            <button onClick={handleOpenModalThree3} className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100 rounded-md'>HABILIDADES BLANDAS</button>

            <Modal isOpen={modalOpenThree1} title="HABILIDAD PRINCIPAL" background='bgFirst' onClose={handleCloseModalThree1} >
              <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100'>HABILIDAD PRINCIPAL</p>
            </Modal>
            <Modal isOpen={modalOpenThree2} title="HABILIDADES TÉCNICAS" background='bgFirst' onClose={handleCloseModalThree2}>
              <p className='text-blue-100'>HABILIDADES TÉCNICAS</p>
            </Modal>
            <Modal isOpen={modalOpenThree3} title="HABILIDADES BLANDAS" background='bgFirst' onClose={handleCloseModalThree3}>
              <p className='text-blue-100'>HABILIDADES BLANDAS</p>
            </Modal>
          </div>
        </div>
        <div className='flex justify-center pt-80 pb-80'>
          <div className='border-blue-100 flex flex-col justify-center items-center forma2 rounded-full m-40 w-80 h-80 '>
            <button onClick={handleOpenModalFour} className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100 rounded-md'>AFICIONES</button>

            <Modal isOpen={modalOpenFour} title="AFICIONES" background='bgFour' onClose={handleCloseModalFour} >
              <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100'>todas aficiones</p>
            </Modal>

          </div>

          <div className='flex flex-col justify-center items-center forma1 rounded-md m-40 w-80 h-80 mb-12'>
            <button onClick={handleProyectTwo} className='text-blue-100 p-1 colorazul ibm-plex-sans-semibold text-lg bg-blue-100 rounded-md'>OTROS PROYECTOS</button>
          </div>
          <div className='border-blue-100 flex flex-col justify-center items-center forma3 rounded-full m-40 w-80 h-80'>
            <button onClick={handleOpenModalFive} className='text-blue-100 p-1 colorazul ibm-plex-sans-semibold text-lg bg-blue-100 rounded-md'>ESTOY APRENDIENDO ...</button>

            <Modal isOpen={modalOpenFive} title="ESTOY APRENDIENDO ..." background='bgFour' onClose={handleCloseModalFive} >
              <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100'>Me encuentro aprendiendo</p>
            </Modal>

          </div>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <div className='h-40 '>
            <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100 rounded-md'>EXPERIENCIA LABORAL</p>
          </div>
          <div className=' h-40'>
            <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100 rounded-md'>FORMACIÓN</p>
          </div>
          <div className='h-40'>
            <p className='text-blue-100 p-1 m-6 colorazul ibm-plex-sans-semibold text-lg bg-blue-100 rounded-md'>SOBRE MÍ</p>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Home;
