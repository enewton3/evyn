import Layout from "../../components/shared/Layout";
import HomeImg from "../../images/home.jpg";
// const HomeImg = require("../../assets/home.jpg");

export default function Home() {
  return (
    <Layout>
      <div
        className="w-full h-screen flex justify-center"
        style={{
          backgroundImage: `url(${HomeImg})`,
          backgroundPosition: "left",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="m-auto bg-gray-500 bg-opacity-90 p-10 rounded">
          <div className="text-7xl text-gray-200">Evyn Newton</div>
          <div className="text-5xl text-gray-300">
            Software Developer and Theatrical Lighting Designer
          </div>
        </div>
      </div>
    </Layout>
  );
}
