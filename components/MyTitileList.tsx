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
    <div className='flex justify-center pt-10'>
      <p className='font-bold text-3xl mr-6'>{MyTitle.AboutJpTitle}</p>
      <p className='text-font-green my-auto text-2xl'>{MyTitle.AboutEgTitle}</p>
    </div>
  );
};

export const SkillTitle = () => {
  return (
    <div className='flex justify-center pt-10'>
      <p className='font-bold text-3xl mr-6'>{MyTitle.SkillJpTitle}</p>
      <p className='text-font-green my-auto text-2xl'>{MyTitle.SkillEgTitle}</p>
    </div>
  );
};

export const ValueTitle = () => {
  return (
    <div className='flex justify-center pt-10'>
      <p className='font-bold text-3xl mr-6'>{MyTitle.ValueJpTitle}</p>
      <p className='text-font-green my-auto text-2xl'>{MyTitle.ValueEgTitle}</p>
    </div>
  );
};

export const FutureTitle = () => {
  return (
    <div className='flex justify-center pt-10'>
      <p className='font-bold text-3xl mr-6'>{MyTitle.FutureJpTitle}</p>
      <p className='text-font-green my-auto text-2xl'>{MyTitle.FutureEgTitle}</p>
    </div>
  );
};
