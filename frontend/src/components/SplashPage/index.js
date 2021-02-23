// import { useSelector } from "react-redux";
import "./SplashPage.css";

function SplashPage() {
    // const sessionUser = useSelector((state) => state.session.user);

    return (
        <div className="splash-div">
            {/* <div className="scotty-image" alt=""></div> */}
            <div className="css-7fboy">
                <video autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline preload="auto" className="css-1xan04q" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__327bf4cc768a323497d5aaa7416319c2.mp4" type="video/mp4">
                    <source src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__327bf4cc768a323497d5aaa7416319c2.mp4" type="video/mp4" />
                    <img className="css-1eazbjj" draggable="false" role="presentation" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__36a396f664677ed80a2459d1dca75f00.png" srcSet="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__36a396f664677ed80a2459d1dca75f00.png, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__c7dcadbbb72fc298e85e94844f68342c.png 2x, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__7c5da6ba049983f3558423906f16f0af.png 3x" />
                </video>
                <div className="css-176v4y5">
                    <img className="css-1eazbjj" draggable="false" role="presentation" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__284c8d0c799d3c9649ca021c00228275.png" srcSet="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__284c8d0c799d3c9649ca021c00228275.png, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__ff9c36e27d7018cf707b95d8675793a3.png 2x, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__45f00d7b296cb52968f1bca4ef766fc1.png 3x" />
                </div>
            </div>
        </div>
    )
};

export default SplashPage;