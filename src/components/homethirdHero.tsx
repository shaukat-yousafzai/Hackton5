import Image from 'next/image';
import FourGrid from './FourGrid';
import Container from './Container';
import KingPara from './KingPara';
import Heding from './Heding';


const ImageArray = [
  { src: "/images/fourgrid1.svg", alt: "This is the first image", width: 305, height: 328 },
  { src: "/images/fourgrid2.svg", alt: "This is the second image", width: 305, height: 328 },
  { src: "/images/fourgrid3.svg", alt: "This is the third image", width: 305, height: 328 }, 
   { src: "/images/fourgrid4.svg", alt: "This is the third image", width: 305, height: 328 },
];

export default function HomethirdHero () {
  return (
    <Container className='flex flex-col items-center mt-20'>
      <KingPara text=' Food Category'/>
      <Heding ptext='Ch' text='oose Food Items'/>
         <FourGrid>
      {ImageArray.map((image, index) => (
        <div key={index} className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="rounded-md object-cover"
          />
        </div>
      ))}
    </FourGrid>
    </Container>
   
  );
}
