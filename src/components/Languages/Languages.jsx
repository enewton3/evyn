import SectionLine from "../SectionLine/SectionLine";
import "./Languages.css";

export default function Languages() {
  return (
    <div>
      <div className="languages-head">Languages and Frameworks</div>
      <SectionLine />
      <div className="languages-container">
        <div className="language-div">
          <i className="language-icon devicon-javascript-plain colored" />
          JavaScript
        </div>
        <div className="language-div">
          <i className="language-icon devicon-css3-plain colored" />
          CSS
        </div>
        <div className="language-div">
          <i className="language-icon devicon-sass-original colored" />
          Sass
        </div>
        <div className="language-div">
          <i className="language-icon devicon-html5-plain colored" />
          HTML
        </div>
        <div className="language-div">
          <i className="language-icon devicon-react-original colored" />
          React
        </div>
        <div className="language-div">
          <i className="" />
          NextJS
        </div>
        <div className="language-div">
          <i className="language-icon devicon-electron-original colored" />
          Electron
        </div>
        <div className="language-div">
          <i className="language-icon devicon-python-plain colored" />
          Python
        </div>
        <div className="language-div">
          <i className="language-icon devicon-ruby-plain colored" />
          Ruby
        </div>
        <div className="language-div">
          <i className="language-icon devicon-rails-plain colored" />
          Rails
        </div>
        <div className="language-div">
          <i className="language-icon devicon-postgresql-plain colored" />
          PostgreSQL
        </div>
        <div className="language-div">
          <i className="language-icon devicon-express-original colored" />
          Express
        </div>
        <div className="language-div">
          <i className="language-icon devicon-mongodb-plain colored" />
          MongoDB
        </div>
      </div>
    </div>
  );
}
