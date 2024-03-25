import Element from './Element';
import elementsData from '../Data/elements.json';
import EmptyElement from './EmptyElement';

const BFamliy = () => {
  const indexesToRender = [5, 13, 31, 49, 81, 113]; 

  return (
    <div className='w-[72.7px]  h-[70%]   inline-block'>
        <EmptyElement />
      {/* Render Element components with fetched data */}
      {indexesToRender.map((index) => {
        const element = elementsData[index-1];
        const bgc = 'blue-400';
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

export default BFamliy;
