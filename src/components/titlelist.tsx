import { FC } from 'react';

type Title = {
  JaTitle: string;
  EgTitle: string;
};

export const MainTitle = (props: Title) => {
  const { JaTitle, EgTitle } = props;
  return (
    <div id={EgTitle} className='justify-center pt-10 text-center md:flex'>
      <p className='text-2xl font-bold md:mr-6 md:text-3xl'>{JaTitle}</p>
      <p className='my-auto text-font-green uppercase md:text-2xl'>{EgTitle}</p>
    </div>
  );
};