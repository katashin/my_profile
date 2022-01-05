import { MainTitle } from '../titlelist';
import { MyValueContens } from './valuecontent';

export const Value = () => {
  return (
    <div className='mx-auto -mb-80 max-w-[90%] xl:-mt-20 xl:-mb-0 xl:max-w-[80%]'>
      <MainTitle JaTitle='価値観' EgTitle='values' />
      <MyValueContens />
    </div>
  );
};
