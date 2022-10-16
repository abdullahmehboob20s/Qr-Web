import React from "react";

function Hero() {
  return (
    <div>
      <div className="container relative">
        <img
          src="images/qr-code.png"
          className="w-[54%] max-w-[700px] absolute top-[54%] -right-20 -translate-y-1/2"
          alt=""
        />

        <div className="w-[50%]">
          <h1 className="text-7xl text-gradient w-fit font-extrabold mb-6">
            <span>Evolution</span>
            <span className="font-arial-black">QR</span>
          </h1>

          <p className="text-base font-semibold text-Blue leading-1_9 mb-10">
            EvolutionQR is a tech services solution that specializes in creating
            organic growth using customer relationship management for projects
            and businesses alike. We incentivise holders and customers to
            promote through word of mouth marketing while gaining rewards using
            unique QR codes.
          </p>

          <button className="button py-4 px-20 text-white text-sm font-semibold">
            Launch App
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
