import Element from "./Element"
import EmptyElementF from "./EmptyElementF"
import elementsData from '../Data/elements.json';

const FBlock2 = () => {
    const indexesToRender = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103];
  return (
    <div className='w-[100%] h-[65.7px] inline-block'>
        <EmptyElementF />
        <EmptyElementF />
        <EmptyElementF />
        <EmptyElementF />
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
  )
}

export default FBlock2
