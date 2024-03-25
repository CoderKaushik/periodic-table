import Element from './Element';
import elementsData from '../Data/elements.json';

const HeFamliy = () => {
  const indexesToRender = [2, 10, 18, 36, 54, 86, 118]; 

  return (
    <div className='w-[72.7px]  h-[70%]   inline-block'>
      {/* Render Element components with fetched data */}
      {indexesToRender.map((index) => {
        const element = elementsData[index-1];
        const bgc = 'red-400';
        return (
          <Element
            key={index}
            atomicNumber={index}
            symbol={element.symbol}
            name={element.name}
            backgroundColor={bgc} // Set background color
          />
        );
      })}
    </div>
  );
};

export default HeFamliy;
