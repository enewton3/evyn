import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div className="layout">
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
