import Image from 'next/image';
import type { FC } from 'react';

interface about {
  subtitle: string;
  src: string;
  alt: string;
}

export const MyAbout: FC<about> = (props) => {
  const { subtitle, src, alt } = props;
  return (
    <div>
      <div className='pt-5 lg:mx-8'>
        <Image src={src} alt={alt} width={184} height={157} />
        <h1 className='mt-5 text-2xl font-bold text-font-green'>{subtitle}</h1>
        <p className='px-10 mt-5 text-left md:px-10 xl:px-0'>{props.children}</p>
      </div>
    </div>
  );
};
