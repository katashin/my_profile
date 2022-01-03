import Image from 'next/image';
import { MainTitle } from '../MyTitileList';
import { SkillBar } from './skillbar';

interface SkillType {
  title: string;
  skilbarnumber: string;
  percent: number;
}

const skill1: SkillType = {
  title: 'skillskill',
  skilbarnumber: '50%',
  percent: 50,
};

const skill2: SkillType = {
  title: 'skillskill',
  skilbarnumber: '60%',
  percent: 60,
};

const skill3: SkillType = {
  title: 'skillskill',
  skilbarnumber: '40%',
  percent: 40,
};

const skill4: SkillType = {
  title: 'skillskill',
  skilbarnumber: '30%',
  percent: 30,
};

const comment: string = `テキストテキストテキストテキストテキストテキストテキストテキスト
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
テキストテキストテキストテキストテキストテキストテキスト`;

export const Skill = () => {
  return (
    <div className='pt-10 pb-20 bg-no-repeat bg-100% bg-sp-skill xl:static xl:px-3 xl:pb-96 xl:-mt-20 xl:bg-no-repeat xl:bg-skill'>
      <div className='px-3 md:px-64 xl:px-64 xl:pt-10 xl:pb-10'>
        <div className='text-center xl:pt-10 xl:pl-44'>
          <MainTitle JaTitle='スキル' EgTitle='skills' />
        </div>
        <div className='grid xl:grid-cols-2'>
          <div className='px-2 pt-4 xl:pr-10'>
            <Image src='/skill.png' width={1000} height={700} alt='スキル画像' />
          </div>
          <div className='py-4 text-left'>
            {comment}
            <div className='mt-4 bg-white rounded-xl'>
              <SkillBar skillTitle='skillskill' barNum='50%' percent={50} />
              <SkillBar skillTitle='skillskill' barNum='40%' percent={40} />
              <SkillBar skillTitle='skillskill' barNum='30%' percent={30} />
              <SkillBar skillTitle='skillskill' barNum='20%' percent={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
