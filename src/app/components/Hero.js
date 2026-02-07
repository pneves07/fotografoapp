import Lanyard from "./Lanyard";
import TrueFocus from './TrueFocus';

export default function Hero(){
    
    return (
    <div className="relative">
      
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}>

        <Lanyard 
            position={[10, 0, 20]} 
            gravity={[0, -40, 0]} 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
        />
         
        
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
            <TrueFocus 
                sentence="SnowDev"
                manualMode={false}
                blurAmount={5}
                borderColor="red"
                animationDuration={2}
                pauseBetweenAnimations={1}
            />
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    );

}