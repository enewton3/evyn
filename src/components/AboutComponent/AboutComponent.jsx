import evynFace from "../../images/evynface.jpg";
import "./AboutComponent.css";

export default function AboutComponent() {
  return (
    <div className="about-container">
      <section className="flex flex-row justify-center items-center p-10 bg-gray-200 h-full">
        <img
          src={evynFace}
          alt="Evyn's Face"
          className="rounded-full h-96 border-4 border-gray-500 border-opacity-50"
        />
        <div className="flex flex-col p-20">
          <div className="text-5xl">About Me</div>
          <div className="text-3xl">EVYN IS ME</div>
        </div>
      </section>
    </div>
  );
}
