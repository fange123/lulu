import { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Roadmap from "./Roadmap";
import Footer from "./Footer";
import "./index.scss";

export default function Page() {
  useEffect(() => {
    function resize() {
      let width =
        document.documentElement.clientWidth || document.body.clientWidth;
      let dom = document.getElementsByTagName("html");
      dom[0].style.fontSize = (width / 1920) * 16 + "px";
    }
    resize();
    window.onresize = resize;
  }, []);

  return (
    <div className='page_wrap'>
      <Header />
      <Home />
      <About />
      <Roadmap />
      <Footer />
    </div>
  );
}
