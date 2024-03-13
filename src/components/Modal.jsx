
const Modal = ({ isOpen, title, onClose, children , background }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 ">
      <div className={`bg-white p-6 rounded-lg shadow-md w-80 ${background} border-2 border-solid`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-blue-100 pr-10">{title}</h2>
          <button className="text-gray-300 hover:text-gray-500" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <br />
        <div className="text-lg">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
