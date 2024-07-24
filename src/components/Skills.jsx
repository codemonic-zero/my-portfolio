import { Skill } from './Skill';
import img from "../assets/logo.png"

export function Skills() {
  return (
    <>
      <Skill
        imageSrc={img}
        imageAlt="Noteworthy technology acquisitions 2021"
        title="Noteworthy technology acquisitions 2021"
        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      />
      <Skill
        imageSrc={img}
        imageAlt="Noteworthy technology acquisitions 2021"
        title="Noteworthy technology acquisitions 2021"
        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      />
    </>
  );
}
