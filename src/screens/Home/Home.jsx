import Layout from "../../components/shared/Layout";
import HomeImg from "../../images/home.jpg";

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
        <div className="me m-auto bg-gray-500 bg-opacity-90 md:p-10 p-5 rounded">
          <div className="name md:text-7xl text-4xl text-gray-200">
            Evyn Newton
          </div>
          <div className="blurb md:text-5xl text-2xl text-gray-300">
            Software Developer and Theatrical Lighting Designer
          </div>
        </div>
      </div>
    </Layout>
  );
}
