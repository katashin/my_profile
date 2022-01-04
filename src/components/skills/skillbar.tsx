type Skill = {
  skillTitle: string;
  barNum: string;
  percent: number;
};

export const SkillBar = (props: Skill) => {
  const { skillTitle, barNum, percent } = props;
  return (
    <div className='mt-4 bg-white rounded-lg'>
      <div className='text-left'>
        <div className='relative py-1 px-3'>
          <div className='flex justify-between items-center mb-2'>
            <div>
              <span className='text-font-green uppercase md:text-xl'>{skillTitle}</span>
            </div>
            <div className='text-right'>
              <span className='text-font-green md:text-lg'>{`${barNum}`}</span>
            </div>
          </div>
          <div className='flex overflow-hidden mb-4 h-4 text-xs bg-skill-bar1 rounded'>
            <div
              style={{ width: `${percent}%` }}
              className='flex flex-col justify-center text-center text-white whitespace-nowrap bg-skill-bar2 shadow-none'
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
