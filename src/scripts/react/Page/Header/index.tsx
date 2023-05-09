import "./index.scss";
import { useEffect } from "react";
import $ from "jquery";
import logo from "../../../../assets/lulu.png";
import close from "../../../../assets/close.png";
import menu from "../../../../assets/menu.png";

export default function Header() {
  useEffect(() => {
    $(".menu-btn").click(function () {
      $(".top-nav").addClass("active");
    });

    $("#header .m-d, #header .close").click(() => {
      $(".top-nav").removeClass("active");
    });
  }, []);

  return (
    <div className='header'>
      <div className='top-nav'>
        <img className='logo' src={logo} alt='' />
        <div className='m-d' />
        <div className='right'>
          <img src={close} className='close' />
          <div className='nav-list'>
            <a className='nav-item' href=''>
              HOME
            </a>
            <a className='nav-item' href='#about'>
              ABOUT
            </a>
            <a className='nav-item' href='#roadmap'>
              ROADMAP
            </a>
          </div>
        </div>
        <div className='menu-btn'>
          <img src={menu} alt='' />
        </div>
      </div>
    </div>
  );
}
