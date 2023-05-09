import "./index.scss";
import { useState } from "react";
import logo from "../../../../assets/lulu.png";
import close from "../../../../assets/close.png";
import menu from "../../../../assets/menu.png";

const index = () => {
  const [active, setActive] = useState(false);

  const handleClose = () => {
    setActive(false);
  };

  const handleOpenMenu = () => {
    setActive(true);
  };

  return (
    <div className='header'>
      <div className={`top-nav ${active ? "active" : ""}`}>
        <img className='logo' src={logo} alt='' />
        <div className='m-d' onClick={handleClose} />
        <div className='right'>
          <img src={close} className='close' onClick={handleClose} />
          <div className='nav-list'>
            <a className='nav-item' href='#home'>
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
          <img src={menu} alt='' onClick={handleOpenMenu} />
        </div>
      </div>
    </div>
  );
};

export default index;
