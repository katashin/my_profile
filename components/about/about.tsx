import Image from "next/image";
import { AboutTitle } from "../MyTitileList";
import { MyAboutContens } from "./MyContents";

export const About = () => {
  return (
    <div className="pb-10 px-3 md:bg-about md:bg-100% md:pb-32">
      <AboutTitle />
      <MyAboutContens />
    </div>
  )
}