import React from "react";

const Featured = () => {
  const featuredImage = [
    {
      img: "https://www.aeb.am/media/2022/08/8112.png",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1024px-Mastercard_2019_logo.svg.png",
    },
    {
      img: "https://imgsrv2.voi.id/AB0I4tQ4k2K9kZR9Uj5Ya-OE7Gny2KI3ZuHo3Pd_lFk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xODY1NTYvMjAyMjA3MDUxMTQyLW1haW4uY3JvcHBlZF8xNjU2OTk2MTUxLmpwZWc.jpg",
    },
    {
      img: "https://developer.microsoft.com/_devcom/images/logo-ms-social.png",
    },
    {
      img: "https://mma.prnewswire.com/media/467598/Oracle_Logo.jpg?p=facebook",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
    },
    {
      img: "https://i.pcmag.com/imagery/reviews/043TM0E2Yv1RsXGE7oOxHLl-75.fit_lim.size_1200x630.v1699457813.jpg",
    },
  ];
  return (
    <>

      <div className="flex gap-5 mb-10 overflow-auto ">
        {featuredImage.map((item) => (
          <div className="h-20 w-40  bg-white p-3 flex-shrink-0 md:flex-shrink">
            <img src={item.img} alt="" className="grayscale w-full h-full" />
          </div>
        ))}
      </div>

      <hr className="h-1 border-gray-300 border-t-2 w-full py-10" />
    </>
  );
};

export default Featured;
