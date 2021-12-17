import Image from "next/image";
import { AboutTitle } from "../MyTitileList";
import { MyAboutContens } from "./MyContents";
import { Skill } from "../skill/skill";

export const About = () => {
  return (
    <div className="bg-about bg-100%">
      <AboutTitle />
      <MyAboutContens />
      <Skill />
    </div>
  )
}