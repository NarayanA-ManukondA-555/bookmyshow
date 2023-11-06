const settings = {
  infinite: false,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
      slidesToShow: 4,
      slidesToScroll: 3,
    }
  },
    {
      breakpoint: 1024,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
    }
  },
    {
      breakpoint: 768,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
    {
      breakpoint: 601,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
 ]
};

export default settings;
