import Element from "./Element"
import EmptyElementF from "./EmptyElementF"
import elementsData from '../Data/elements.json';

const FBlock1 = () => {
    const indexesToRender = [58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71];
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

export default FBlock1
