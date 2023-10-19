const Slider = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px] mb-5">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/HGPbB5N/photo-1600191763005-8caf3a2dabd9.jpg"
            className="w-full"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <div>
              <div className="hero h-[500px] rounded-md">
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-gray-300 font-mono">
                      Hello Our happy clients{" "}
                    </h1>
                    <p className="mb-5 text-xl font-serif">
                      We are providing the{" "}
                      <span className="text-3xl text-red-600"> 10% off </span>{" "}
                      in Toyota Brand . so Hurry up{" "}
                    </p>
                    <button className="btn btn-primary"> Get offer!</button>
                  </div>
                </div>
              </div>
            </div>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/ZTJ4Yzp/download-11.jpg"
            className="w-full "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>

            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/HNfQ64S/pngtree-car-season-car-poster-buy-car-advertising-background-image-140237.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>

             

            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
