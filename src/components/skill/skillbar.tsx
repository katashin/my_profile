type Skill = {
  skillTitle: string;
  barNum: string;
  percent: number;
}

export const SkillBar = (props: Skill) => {
  const {skillTitle, barNum, percent} = props
  return (
    <div className="bg-white rounded-lg mt-4">
      <div className="text-left">
        <div className="relative py-1 px-3">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className='text-font-green uppercase md:text-xl'>
              {skillTitle}
              </span>
            </div>
            <div className="text-right">
              <span className="text-font-green md:text-lg">
              { `${barNum}` }
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-skill-bar1">
            <div style={{ width: `${percent}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-skill-bar2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}