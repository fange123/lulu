import "./index.scss";
import lulu from "@/assets/about_lulu.png";

export default function About() {
  return (
    <div id='about'>
      <div className='content'>
        <div className='left'>
          <img src={lulu} alt='' />
        </div>
        <div className='right'>
          <h2>What Is LULU?</h2>
          <p>
            LULU is a deflatlonary token, lt will be used by AiSHiB ecosystem
            applications, The total supply is210.000.000.000.000.000 tokons,
            LULU bolongs to eyoryone in the Arbitrum comtmunity and is also
            3necessary key to unlock the future chapters of the LULU story.
          </p>
          <button className='btn'>BUY NOW</button>
        </div>
      </div>
    </div>
  );
}
