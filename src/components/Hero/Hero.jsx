import Slider from "react-slick";
import React from "react";

import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";

const HeroSlide = [
  {
    id: 1,
    name: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    description: "Experience high-quality sound and comfort with our selection of headphones, perfect for music lovers, gamers, and anyone who values superior audio",
  },
  {
    id: 2,
    name: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    description: "Lorem",
  },
  {
    id: 3,
    name: Image3,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Laptop",
    description: "Discover a diverse range of laptops that suit all your needs, whether you're a student, a professional, or a hobbyist.",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container  pb-8 sm:pb-0"> 
        <Slider {...settings}>
          {HeroSlide.map((data) => (
            <div key={data.id} className="grid grid-cols-1 sm:grid-cols-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                <div className="flex flex-col justify-center  gap-4 sm:pl-3 pt-12 sm:pt-0 text-center">
                  <h2 className="text-2xl font-semibold mb-2">{data.subtitle}</h2>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                  <h1 className="text-5xl  uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold ">{data.title2}</h1>
                  <p className="text-lg mb-4">{data.description}</p>
                 <div>
                    <button text="Shop By Category " bgColor="bg-primary" textColor="text-white">
                    {/* Shop Now */}
                  </button>
                  </div>  
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src={data.name}
                    alt={data.subtitle}
                    className="w-full sm:w-[300px] sm:h-[450px] object-contain mx-auto drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
