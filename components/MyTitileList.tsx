export {};

const MyTitle: {
  AboutJpTitle: string;
  AboutEgTitle: string;
  SkillJpTitle: string;
  SkillEgTitle: string;
  ValueJpTitle: string;
  ValueEgTitle: string;
  FutureJpTitle: string;
  FutureEgTitle: string;
} = {
  AboutJpTitle: '私について',
  AboutEgTitle: 'about',
  SkillJpTitle: 'スキル',
  SkillEgTitle: 'skills',
  ValueJpTitle: '価値観',
  ValueEgTitle: 'values',
  FutureJpTitle: '３年後にやりたいこと',
  FutureEgTitle: 'future',
};

export const AboutTitle = () => {
  return (
    <div id="about" className='text-center md:flex justify-center pt-10'>
      <p className='text-2xl font-bold md:text-3xl md:mr-6'>{MyTitle.AboutJpTitle}</p>
      <p className='text-font-green my-auto md:text-2xl uppercase'>{MyTitle.AboutEgTitle}</p>
    </div>
  );
};

export const SkillTitle = () => {
  return (
    <div id='skills' className='md:flex justify-center md:pt-10 md:pl-44'>
      <p className='text-2xl font-bold md:text-3xl md:mr-6'>{MyTitle.SkillJpTitle}</p>
      <p className='text-font-green my-auto md:text-2xl uppercase'>{MyTitle.SkillEgTitle}</p>
    </div>
  );
};

export const ValueTitle = () => {
  return (
    <div id='values' className='text-center md:flex justify-center pt-10'>
      <p className='text-2xl font-bold md:text-3xl md:mr-6'>{MyTitle.ValueJpTitle}</p>
      <p className='text-font-green my-auto md:text-2xl uppercase'>{MyTitle.ValueEgTitle}</p>
    </div>
  );
};

export const FutureTitle = () => {
  return (
    <div id='future' className='text-center md:flex justify-start pt-10'>
      <p className='text-2xl font-bold md:text-3xl md:mr-6'>{MyTitle.FutureJpTitle}</p>
      <p className='text-font-green my-auto md:text-2xl uppercase'>{MyTitle.FutureEgTitle}</p>
    </div>
  );
};
