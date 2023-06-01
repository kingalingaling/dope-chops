import { useState } from "react";
import data from "../data/index.json";
import { chefDetails } from "../../types";

const AboutDetails = () => {
  const [chef, setChef] = useState(0);

  const chefs: chefDetails[] = data.chefs;
  return (
    <div className="flex w-full flex-col text-white justify-center bg-black/50 p-4 md:p-0 md:px-4 md:pt-4">
      <div className="flex flex-col justify-center lg:justify-between items-center w-full">
        <h1 className="text-orange-600 font-bold text-3xl text-center lg:text-4xl lg:text-left">
          About Dope Chops
        </h1>
        <p className="text-justify font-bold pt-4">
          Dope chops was founded by Komi David as a home business during the
          COVID-19 lockdown era. It served as an avenue to deliver home-made
          snacks and chops, directly to your home. Post lockdown, Dope Chops has
          moved from selling on WhatsApp and Facebook to having her own trusted
          and secure site. Karen is joined by her sister, Sheva as well as
          friends at Dope Chops to help deliver delicious meals. We have
          fulfilled over 200 orders and we aren't letting up one bit!
        </p>
      </div>

      {/* Team */}
      <div className="flex flex-col items-center py-4 md:py-0 md:pt-4 md:items-start md:mt-16">
        <h1 className="text-orange-600 pt-4 font-bold text-3xl text-center lg:text-4xl lg:text-left">
          Meet Our Chefs
        </h1>
        <div className="flex flex-col items-center justify-center md:flex-col-reverse lg:flex-row-reverse">
          <div className="flex w-4/5 flex-col items-center justify-center pt-8">
            <img className="h-full w-auto" src={chefs[chef].image} alt="" />
            <hr className="h-[0.5px] w-full border-gray-500 md:hidden" />
          </div>
          <div className="flex w-5/6 flex-col md:flex-col-reverse lg:items-start">
            <div className="flex items-center justify-center py-8 lg:py-0 lg:pt-8">
              {chefs.map((i) => (
                <div
                  className={
                    chef == i.id
                      ? "mx-2 h-[10px] w-[10px] cursor-pointer rounded-full bg-white"
                      : "mx-2 h-[10px] w-[10px] cursor-pointer rounded-full hover:scale-105 hover:bg-slate-400/60 duration-300 bg-gray-600/70"
                  }
                  onClick={() => setChef(i.id)}
                ></div>
              ))}
            </div>
            <div className="text-center lg:text-left">
              <div className="font-bellefair uppercase">
                <h3 className="py-3 lg:py-0 lg:pt-3 text-2xl text-gray-400">
                  {chefs[chef].role}
                </h3>
                <p className="text-5xl capitalize mb-2">{chefs[chef].name}</p>
              </div>
              <p className="text-lg tracking-slimmer text-justify">{chefs[chef].about}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row-reverse justify-between w-full">
                <img src="" alt="" className="w-1/2"/>
                <p className="w-1/2">This is a good restaurant with fine food</p>
            </div> */}
    </div>
  );
};

export default AboutDetails;
