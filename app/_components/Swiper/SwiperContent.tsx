"use client";
import Image from "next/image";
import Slider from "react-slick";
const SwiperContent = ({
  ref,
}: {
  ref: React.MutableRefObject<{
    slickNext: () => void;
    slickPrev: () => void;
  } | null>;
}) => {
  const slides = [
    {
      companyImage: "/images/feedback/davidcomp.png",
      user: "David Oshodi",
      title: "Manager",
      image: "/images/feedback/david.png",
      feedback:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    },
    {
      companyImage: "/images/feedback/hellencomp.png",
      user: "Hellen Jummy",
      title: "Team Lead",
      image: "/images/feedback/hellen.png",
      feedback:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    },
    {
      companyImage: "/images/feedback/hellenacomp.png",
      user: "hellena John",
      title: "Co-founder",
      image: "/images/feedback/hellena.png",
      feedback:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    },
    {
      companyImage: "/images/feedback/davidcomp.png",
      user: "David Oshodi",
      title: "Manager",
      image: "/images/feedback/david.png",
      feedback:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    },
    {
      companyImage: "/images/feedback/hellenacomp.png",
      user: "Aria Bern",
      title: "Team Lead",
      image: "/images/feedback/aria.png",
      feedback:
        "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    },
  ];

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider
      ref={(slider) => {
        if (ref && slider) {
          ref.current = slider;
        }
      }}
      arrows={false}
      {...settings}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="!h-[300px] min-w-[320px] select-none space-y-2 rounded-[20px] border bg-white p-6 shadow-lg desktop:!h-auto desktop:max-h-[430px] desktop:min-h-[430px] desktop:min-w-[384px] desktop:space-x-6 desktop:space-y-4 desktop:p-8"
        >
          <div className="max-h-[64px]">
            <Image
              src={slide.companyImage}
              alt="company"
              width={1000}
              height={1000}
              className="h-auto w-auto"
            />
          </div>

          <p className="text-md desktop:text-xxl">{slide.feedback}</p>
          <div className="flex items-center gap-4 pt-4">
            <Image
              src={slide.image}
              alt="user"
              width={100}
              height={100}
              className="h-16 max-h-16 w-16 max-w-16 rounded-full"
            />
            <div>
              <p className="text-lg">{slide.user}</p>
              <p className="text-md text-gray">{slide.title}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SwiperContent;
