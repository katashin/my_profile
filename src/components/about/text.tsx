import Image from 'next/image';
import type { FC } from 'react';

type MyAbout = {
  subtitle: string;
  src: string;
  alt: string;
};

export const MyAbout: FC<MyAbout> = (props) => {
  const { subtitle, src, alt } = props;
  console.log(props);
  return (
    <div>
      <div className='pt-5 lg:mx-8'>
        <Image src={src} alt={alt} width={190} height={160} />
        <h1 className='mt-5 text-2xl font-bold text-font-green'>{subtitle}</h1>
        <p className='mt-5 text-left'>{props.children}</p>
      </div>
    </div>
  );
};
