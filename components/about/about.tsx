import Image from "next/image";
import { AboutTitle } from "../MyTitileList";
import { MyAboutContens } from "./MyContents";

export const About = () => {
  return (
    <div className="bg-about bg-100% pb-32">
      <AboutTitle />
      <MyAboutContens />
    </div>
  )
}