import "./index.scss";
import cat1 from "@/assets/cat1.png";
import cat2 from "@/assets/cat2.png";
import cat3 from "@/assets/cat3.png";
import cat4 from "@/assets/cat4.png";
import cat5 from "@/assets/cat5.png";
import cat6 from "@/assets/cat6.png";

const index = () => {
  return (
    <div id='roadmap'>
      <div className='wrap'>
        <div>
          <div className='img'>
            <div className='mask'>
              <h3>LULU</h3>
            </div>
            <img src={cat4} alt='' className='img' />
          </div>
          <h3>LULU</h3>
        </div>
        <div>
          <div className='img'>
            <div className='mask'>
              <h3>LULU</h3>
            </div>
            <img src={cat2} alt='' className='img' />
          </div>
          <h3>LULU</h3>
        </div>
        <div>
          <div className='img'>
            <div className='mask'>
              <h3>LULU</h3>
            </div>
            <img src={cat3} alt='' className='img' />
          </div>
          <h3>LULU</h3>
        </div>
        <div>
          <div className='img'>
            <div className='mask'>
              <h3>LULU</h3>
            </div>
            <img src={cat5} alt='' className='img' />
          </div>
          <h3>LULU</h3>
        </div>
        <div>
          <div className='img'>
            <div className='mask'>
              <h3>LULU</h3>
            </div>
            <img src={cat1} alt='' className='img' />
          </div>
          <h3>LULU</h3>
        </div>
        <div>
          <div className='img'>
            <div className='mask'>
              <h3>LULU</h3>
            </div>
            <img src={cat6} alt='' className='img' />
          </div>
          <h3>LULU</h3>
        </div>
      </div>
    </div>
  );
};

export default index;
