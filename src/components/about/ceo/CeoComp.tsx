import Ceo from "../../../assets/ceo.jpeg";
import Ceo2 from "../../../assets/ceo2.jpeg";
import Ceo3 from "../../../assets/ceo3.jpeg";
import Ceo4 from "../../../assets/ceo4.jpeg";
import Ceo5 from "../../../assets/ceo5.jpeg";

const CeoComp = () => {
  return (
    <section className="md:h-screen bg-[#101720] ">
      <div className="flex flex-col items-center h-full justify-center space-y-10 md:flex-row md:space-y-0 md:space-x-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center w-full">
          <img src={Ceo} className="h-80 w-auto object-contain" />
        </div>
        <div className="space-y-12 md:space-y-24 w-full">
          <div className="space-y-4">
            <p className="font-medium font-inter text-sm tracking-wider text-white md:text-base">
              “Every great dream begins with a freamer. Always remember, you
              have within you the strength, the patience, and the passion to
              reach for the stars to chance the world”
            </p>
            <p className="text-white font-inter tracking-wider text-sm">
              --- Harriet Tubman
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ">
              <img
                src={Ceo2}
                alt="ceo-4"
                className="rounded-full w-8 h-8 object-cover md:h-10 md:w-10"
              />
              <img
                src={Ceo3}
                alt="ceo-4"
                className="rounded-full w-8 h-8 object-cover -translate-x-2.5 md:h-10 md:w-10"
              />
              <img
                src={Ceo4}
                alt="ceo-4"
                className="rounded-full w-8 h-8 object-cover -translate-x-5 md:h-10 md:w-10"
              />
              <img
                src={Ceo5}
                alt="ceo-5"
                className="rounded-full w-8 h-8 object-cover -translate-x-[1.85rem] md:h-10 md:w-10"
              />
            </div>
            <p className="font-inter text-xs text-white font-medium tracking-wide md:text-sm">
              10m+ Trusted Global Customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoComp;