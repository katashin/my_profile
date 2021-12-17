import Image from "next/image";
import { AboutTitle } from "../MyTitileList";
import { MyAboutContens } from "./MyContents";

export const About = () => {
  return (
    <div id='about' className="bg-about bg-100%">
      <AboutTitle />
      <MyAboutContens />
    </div>
  )
}