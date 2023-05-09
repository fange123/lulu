import "./index.scss";
import catBg from "../../../../assets/home_cat.png";

const index = () => {
  return (
    <div id='home'>
      <div className='content'>
        <div className='title'>
          <h3>Proudly Launch on Arbitrurn</h3>
          <h2>Co-Built By Al Creatures And Our Community</h2>
        </div>
        <img src={catBg} alt='' />
        <div className='wrap'>
          <h3>You Can Claim LULU Now!</h3>
          <p>No Taxes, No Bullshit. It’s that simple.</p>
          <p>
            93.1% of the tokens were sent to the liquidity pool, LP tokens were
            burnt,
          </p>
          <p>
            and contract is renounced. The remaining 6.9% of the supply is being
          </p>
          <p>
            held in a multi-sig wallet only to be used as tokens for future
            centralized
          </p>
          <p>
            exchange listings, bridges, and liquidity pools. This wallet is
            easily trackable
          </p>
          <p>with the ENS name “luluwallet.eth”</p>
          <div className='btn_wrap'>
            <button>CLSM AIRD OP</button>
            <button>CLSM AIRD OP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
