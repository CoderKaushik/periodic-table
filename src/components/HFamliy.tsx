import Element from './Element';
import elementsData from '../Data/elements.json';

const HFamliy = () => {
  const indexesToRender = [1, 3, 11, 19, 37, 55, 87]; 

  return (
    <div className='w-[72.7px]  h-[70%] inline-block'>
      {/* Render Element components with fetched data */}
      {indexesToRender.map((index) => {
        const element = elementsData[index-1];
        return (
          <Element
            key={index}
            atomicNumber={index}
            symbol={element.symbol}
            name={element.name}
            backgroundColor='green-400' // Set background color
          />
        );
      })}
    </div>
  );
};

export default HFamliy;
