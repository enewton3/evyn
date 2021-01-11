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
        <img
          src={evynFace}
          alt="Evyn's Face"
          className="rounded-full h-96 border-4 border-gray-500 border-opacity-50"
        />
        <div className="flex flex-col p-20">
          <div className="text-3xl">EVYN IS ME</div>
        </div>
      </div>
    </div>
  );
}
