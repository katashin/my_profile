import Image from "next/image";
import { MainTitle } from "../MyTitileList";
import { SkillBar } from './skillbar'

interface SkillType {
  title: string;
  skilbarnumber: string;
  percent: number;
}

const skill1: SkillType = {
  title: 'skillskill',
  skilbarnumber: '50%',
  percent: 50
}

const skill2: SkillType = {
  title: 'skillskill',
  skilbarnumber: '60%',
  percent: 60
}

const skill3: SkillType = {
  title: 'skillskill',
  skilbarnumber: '40%',
  percent: 40
}

const skill4: SkillType = {
  title: 'skillskill',
  skilbarnumber: '30%',
  percent: 30
}

const comment: string = `テキストテキストテキストテキストテキストテキストテキストテキスト
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
テキストテキストテキストテキストテキストテキストテキスト`

export const Skill = () => {
  return (
    <div className="bg-sp-skill bg-100% pt-10 pb-20 bg-no-repeat md:bg-skill md:px-3 md:-mt-20 md:static md:bg-no-repeat md:pb-96">
      <div className='px-3 md:pt-10 md:pb-10 md:px-64'>
        <div className="text-center md:flex justify-center md:pt-10 md:pl-44">
          <MainTitle JaTitle="スキル" EgTitle="skills"/>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="pt-4 px-2 md:pr-10">
            <Image src='/skill.png' width={1000} height={700} alt="スキル画像"/>
          </div>
          <div className="py-4 text-left">
            { comment }
            <div className="rounded-xl bg-white mt-4">
              <SkillBar skillTitle="skillskill" barNum="50%" percent={50}/>
              <SkillBar skillTitle="skillskill" barNum="40%" percent={40}/>
              <SkillBar skillTitle="skillskill" barNum="30%" percent={30}/>
              <SkillBar skillTitle="skillskill" barNum="20%" percent={20}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
