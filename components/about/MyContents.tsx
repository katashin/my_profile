import Image from 'next/image';
import type { FC } from 'react';

type Myabout = {
  subtitle: string;
  src: string;
  alt: string;
}

export const MyAboutContens: FC<Myabout> = props => {
  const {subtitle, src, alt} = props;
  console.log(props);
  return (
    <div>
      <div className='pt-5 lg:mx-8'>
        <Image src={src} alt={alt} width={190} height={160} />
        <h1 className='text-font-green font-bold text-2xl mt-5'>{props.subtitle}</h1>
        <p className='mt-5 text-left'>{props.children}</p>
      </div>
    </div>
  );
};
