import evynFace from "../../images/evynface.jpg";
import SectionLine from "../SectionLine/SectionLine";
import "./AboutComponent.css";

export default function AboutComponent() {
  return (
    <div className="about-container" id="about">
      <div className="about-header">
        <div className="text-5xl">About Me</div>
        <SectionLine />
      </div>
      <div className="about-details">
        <img src={evynFace} alt="Evyn's Face" className="face" />
        <div className="about-blurb">
          Hi there, I'm Evyn. a detail-oriented theater technician turned
          software developer accustomed to keeping a cool head while working in
          high-paced environments. Continually looking to learn and grow both
          personally and professionally, I diligently approach tasks to
          efficiently find the best solution. I am excited to apply the same
          collaborative and problem-solving attitude, that I learned while
          working in the theater, to software development.{" "}
        </div>
      </div>
    </div>
  );
}
