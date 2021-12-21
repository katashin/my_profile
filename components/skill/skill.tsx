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
    <div className="bg-sp-skill bg-100% pt-10 pb-20 bg-no-repeat md:bg-skill md:px-3 md:-mt-20 md:static md:bg-no-repeat md:pb-96">
      <div className='px-3 md:pt-10 md:pb-10 md:px-64'>
        <div className="text-center">
          <SkillTitle/>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="pt-4 px-2 md:pr-10">
            <Image src='/skill.png' width={1000} height={700} alt="スキル画像"/>
          </div>
          <div className="py-4 text-left">
            { comment }
            <div className="rounded-xl bg-white mt-4">
              {/* skill1 */}
              <div className="text-left">
                <div className="relative py-1 px-3">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className='text-font-green uppercase md:text-xl'>
                      { skill1.title }
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-font-green md:text-lg">
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
                <div className="relative py-1 px-3">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className='text-font-green uppercase md:text-xl'>
                      { skill2.title }
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-font-green md:text-lg">
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
                <div className="relative py-1 px-3">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className='text-font-green uppercase md:text-xl'>
                      { skill3.title }
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-font-green md:text-lg">
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
                <div className="relative py-1 px-3">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className='text-font-green uppercase md:text-xl'>
                      { skill4.title }
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-font-green md:text-lg">
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
        {/* <div className="bg-cover pb-96 pt-96">
          <img src="/bg-skills-sp.png" alt="skill" />
        </div> */}
      </div>
    </div>
  );
}
