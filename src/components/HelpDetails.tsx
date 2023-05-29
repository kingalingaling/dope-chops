import {
  BsFillDice1Fill,
  BsFillDice2Fill,
  BsFillDice3Fill,
  BsFillDice4Fill,
  BsFillDice5Fill,
} from "react-icons/Bs";
import data from "../data/index.json";

const helpData = data.help;
const faq = data.faq;

const HelpDetails = () => {
  const tags = [
    <BsFillDice1Fill size={100} />,
    <BsFillDice2Fill size={100} />,
    <BsFillDice3Fill size={100} />,
    <BsFillDice4Fill size={100} />,
    <BsFillDice5Fill size={100} />,
  ];
  return (
    <div className="flex flex-col p-4 text-white bg-black/80">
      <h2 className="text-orange-600 font-bold text-3xl text-center lg:text-4xl lg:text-left">
        Need Help Ordering?
      </h2>
      <p className="font-bold text-lg text-center uppercase">
        Follow these Steps
      </p>

      {/* Ordering Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {helpData.map((i) => (
          <div
            key={i.id}
            className="border-none text-white text-center shadow-sm rounded-lg"
          >
            <div className="flex justify-center">{tags[i.id]}</div>
            <div className="flex items-center justify-between px-2 py-3">
              <p className="font-bold">{i.instruction}</p>
            </div>
          </div>
        ))}
      </div>
      {/* {helpData.map((i) => (
        <div
          className={
            i.id % 2 === 0
              ? "text-orange-600 items-center flex justify-between"
              : "flex flex-row-reverse items-center text-orange-600 justify-between"
          }
        >
          <div className="">{tags[i.id]}</div>
          <p className="flex font-bold text-white text-justify items-center w-2/3 py-12">
            {i.instruction}
          </p>
        </div>
      ))} */}

      <div>
        <h2 className="text-orange-600 py-5 font-bold text-2xl text-center lg:text-3xl lg:text-left">
          Frequently Asked Questions (FAQ)
        </h2>
        {faq.map((i) => (
          <div className=" border-b-2">
            <p className="font-bold py-4 text-lg">{i.question}</p>
            <p className="text-lg">{i.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpDetails;
