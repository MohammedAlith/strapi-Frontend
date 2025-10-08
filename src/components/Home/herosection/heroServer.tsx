import SliderClient from "./heroClient";

type Slide = {
  title: string;
  desc: string;
  button: string;
};

type Hero = {
  url1: string;
  url2: string;
  url3: string;
  videourl: string;
  slides: {
    slide1: Slide;
    slide2: Slide;
    slide3: Slide;
  };
};

export default async function HeroServer() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";

  const res = await fetch(`${strapiUrl}/api/home-page?populate[hero][populate]=*`, 
  //   {
  //   next: { revalidate: 60 }, // fetch fresh data
  // }
);
  const data = await res.json();
  const hero: Hero = data.data.hero;

  return <SliderClient hero={hero} />;
}
