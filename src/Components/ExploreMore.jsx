import Image from "next/image";
import Link from "next/link";
import TitleBadge from "./TitleBadge";
import Headingbadge from "./Headingbadge";
import exploreMoreData from "@/Data/exploreMoreData";

export default function ExploreMore() {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center border border-black">
      <TitleBadge title="Explore More" />
      <br />
      <Headingbadge heading="Navigate through our Pages" />
      <br />
      <p className="mx-auto md:w-2/3 w-full font-semibold text-gray-700 mb-8">
        Your gateway to discovering a wealth of valuable information about our
        kindergarten school. Feel free to explore and learn more about the
        enriching experiences that await your child at our kindergarten school.
      </p>
      <br />

      <div className="max-w-7xl mx-auto md:p-8 p-1  grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
        {exploreMoreData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 border border-black rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300 w-full mx-auto text-center"
            style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}
          >
            <h3 className="text-2xl font-bold text-gray-10 mb-4">
              {card.title}
            </h3>
            <Image
              src="/explore more/hr line.svg"
              alt="hr-line"
              height={10}
              width={430}
              className="mx-auto my-4"
            />
            <p className="text-gray-30 text-md my-6 w-full h-[200px] md:h-[130px] ">
              {card.description}
            </p>
            <Link
              href={card.link}
              className="bg-orange-90 w-full font-semibold px-6 py-2 rounded-lg flex items-center justify-center mx-auto border border-black shadow-md hover:shadow-lg transition duration-300"
              style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}
            >
              <span>Learn More</span>
              <Image
                src="/explore more/butto arrow.svg"
                alt="arrow"
                height={20}
                width={20}
                className="ml-2"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
