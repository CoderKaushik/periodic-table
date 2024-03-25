import React from 'react';

interface ModalProps {
  onClose: () => void;
  symbol: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, symbol }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 opacity-75 z-50 flex justify-center items-center">
      <div className="bg-white h-[10rem] w-[15rem] rounded-md p-4 shadow-2xl">
        <h2>Detailed Information for {symbol}</h2>
        {/* Add content for detailed element information here */}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
