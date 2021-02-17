import evynFace from "../../images/evynface.jpg";
import Layout from "../../components/shared/Layout";
import SectionLine from "../../components/SectionLine/SectionLine";
import Languages from "../../components/Languages/Languages";
import "./About.css";

export default function About() {
  return (
    <Layout>
      <div className="about-page-container" id="about">
        <div className="about-page-header">
          <div className="about-page-head">About Me</div>
          <SectionLine />
        </div>
        <div className="about-page-details">
          <img src={evynFace} alt="Evyn's Face" className="about-page-face" />
          <div className="about-page-blurb">
            Hi there, I'm Evyn. a detail-oriented theater technician turned
            software developer accustomed to keeping a cool head while working
            in high-paced environments. Continually looking to learn and grow
            both personally and professionally, I diligently approach tasks to
            efficiently find the best solution. I am excited to apply the same
            collaborative and problem-solving attitude, that I learned while
            working in the theater, to software development.
            <br />
            <br />I am a Boston, MA based software developer and theatrical
            lighting designer. I am a transit, infrastructure, and music nerd.
            In addition to learning different programming languages, I am also
            currently learning the cello.
            <a
              className="resume-button"
              href="https://drive.google.com/file/d/1GAGGA9hIx-HFnbSYfJgjvOapqcglb6Se/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>

          <Languages />
        </div>
      </div>
    </Layout>
  );
}
