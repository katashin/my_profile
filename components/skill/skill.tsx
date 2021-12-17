import { SkillTitle } from "../MyTitileList";
import Image from "next/image";

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
    <div className="bg-skill bg-100% px-10 -m-2">
      <div className='pt-10 md:flex justify-center text-center md:pt-32 md:px-64'>
        <Image src='/skill.png' width={1200} height={700} alt="スキル画像"/>
        <div className="md:ml-32 pl-0">
          <SkillTitle/>
          <div className="pt-4 text-left">
            { comment }
          </div>

          <div className="py-4 px-10 mt-4 rounded-xl bg-white">
            {/* skill1 */}
            <div className="text-left">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className='text-font-green uppercase text-xl'>
                    { skill1.title }
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-font-green text-lg">
                    { `${skill1.percent}%` }
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-skill-bar1">
                  <div style={{ width: `${skill1.skilbarnumber}` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-skill-bar2"></div>
                </div>
              </div>
            </div>
            {/* skill2 */}
            <div className="text-left">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className='text-font-green uppercase text-xl'>
                    { skill2.title }
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-font-green text-lg">
                    { `${skill2.percent}%` }
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-skill-bar1">
                  <div style={{ width: `${skill2.skilbarnumber}` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-skill-bar2"></div>
                </div>
              </div>
            </div>
          {/* skill3 */}
          <div className="text-left">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className='text-font-green uppercase text-xl'>
                    { skill3.title }
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-font-green text-lg">
                    { `${skill3.percent}%` }
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-skill-bar1">
                  <div style={{ width: `${skill3.skilbarnumber}` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-skill-bar2"></div>
                </div>
              </div>
          </div>
          {/* skill4 */}
          <div className="text-left">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className='text-font-green uppercase text-xl'>
                    { skill4.title }
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-font-green text-lg">
                    { `${skill4.percent}%` }
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-skill-bar1">
                  <div style={{ width: `${skill4.skilbarnumber}` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-skill-bar2"></div>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
