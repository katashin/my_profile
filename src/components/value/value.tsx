import { MyValueContens } from "./valuecontent";
import { MainTitle} from "../MyTitileList";

export const Value = () => {
  return (
    <div className='px-3 -mb-80 xl:-mt-20 xl:-mb-0'>
      <MainTitle JaTitle="価値観" EgTitle="values" />
      <MyValueContens />
    </div>
  )
}