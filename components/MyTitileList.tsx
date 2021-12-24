import { FC } from "react";

type Title = {
  JaTitle: string;
  EgTitle: string;
}

export const MainTitle = (props: Title) => {
  const { JaTitle, EgTitle } = props
  return (
    <div id={EgTitle} className='text-center md:flex justify-center pt-10'>
      <p className='text-2xl font-bold md:text-3xl md:mr-6'>{JaTitle}</p>
      <p className='text-font-green my-auto md:text-2xl uppercase'>{EgTitle}</p>
    </div>
  )
}