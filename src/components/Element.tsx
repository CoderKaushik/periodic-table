import React, { useState } from 'react';
import Modal from './Modal';

interface ElementProps {
  atomicNumber: number;
  symbol: string;
  name: string;
  backgroundColor: string;
}

const Element: React.FC<ElementProps> = ({
  atomicNumber,
  symbol,
  name,
  backgroundColor,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

// const Element: React.FC<ElementProps> = ({ atomicNumber, symbol, name, backgroundColor }) => {
  return (
    <div className={`w-[72.7px] h-[65.4px] border border-black inline-block rounded-md bg-${backgroundColor} cursor-pointer shadow-lg hover:border-${backgroundColor}-900 hover:scale-150 hover:shadow-2xl`} onClick={handleClick}>
      <div className='w-full h-full flex flex-col'>
        <div className='w-full h-[20%] flex justify-start items-start'>
            <h2>{atomicNumber}</h2>
        </div>
        <div className='w-full h-[60%] flex justify-center items-center'>
            <h1 className='text-[2rem]'>{symbol}</h1>
        </div>
        <div className='w-full h-[20%] flex justify-center items-end'>
            <p className='text-[10px]'>{name}</p>
        </div>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} symbol={symbol} />}
    </div>
  );
};

export default Element;
