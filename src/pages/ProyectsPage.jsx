import { useNavigate } from "react-router-dom"


const ProyectsPage = () => {

    const navigate= useNavigate();

    const handleClick=()=>{
        navigate("/");
    }
    return (
        <div className="bgTwo justify-center items-center flex flex-col mt-20 mr-20 ml-20  p-12 border rounded-md border-none relative">
          {/* Div semi-transparente */}
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
          {/* Contenido del div */}
          <div className="z-10 flex flex-col justify-center items-center">
            <p className="text-white text-2xl">PROYECTOS</p>
            <div className="h-80 w-80"></div>
            <button className="text-white" onClick={handleClick}>Volver</button>
          </div>
        </div>
      )
}

export default ProyectsPage
