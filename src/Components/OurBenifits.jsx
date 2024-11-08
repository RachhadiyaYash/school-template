import Image from "next/image";
import Headingbadge from "./Headingbadge";
import TitleBadge from "./TitleBadge";
import { benefitsData } from "@/Data/benefitsData";

export default function OurBenefits() {
  return (
    <div className=" max-w-7xl mx-auto p-8 text-center border border-black">
      <TitleBadge title="Children Deserve Bright Future" />
      <br />
      <Headingbadge heading="Our Benefits" />
      <br />

      <p className="mx-auto md:w-2/3 w-full font-semibold text-gray-20 mb-8">
        With a dedicated team of experienced educators, state-of-the-art
        facilities, and a comprehensive curriculum, we aim to lay a strong
        foundation for your child's future.
      </p>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {benefitsData.map((benefit) => (
          <div
            key={benefit.id}
            className="relative bg-absoluteWhite border border-black p-8 rounded-lg shadow-md"
            style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}
          >
            <Image
              src={benefit.iconSrc}
              alt="card image"
              height={45}
              width={45}
              className="absolute top-[-20px] left-[19px] object-cover"
            />
            <h3 className="font-semibold text-lg mb-2 text-gray-10 text-start">
              {benefit.title}
            </h3>
            <p className="text-gray-30 text-start">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
