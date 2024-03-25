import Element from './Element';
import elementsData from '../Data/elements.json';
import EmptyElement from './EmptyElement';

const ScFamliy = () => {
  const indexesToRender = [21, 39, 57, 89]; 

  return (
    <div className='w-[72.7px]  h-[70%]   inline-block'>
        <EmptyElement />
        <EmptyElement />
        <EmptyElement />
      {/* Render Element components with fetched data */}
      {indexesToRender.map((index) => {
        const element = elementsData[index-1];
        const bgc = 'purple-400';
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

export default ScFamliy;
