import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto p-8 flex items-center justify-center text-center border border-black">
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-shrink-0 w-full md:w-1/2 relative h-64 md:h-auto">
          <Image
            src="/herosection/hero img.png"
            alt="hero_img"
            height={765}
            width={765}
            // layout="fill"
            // objectFit="cover"
            // className="rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-800  border space-y-4 p-4">
          <p className="border-b border-gray-500 inline-block text-start">
            Welcome to Little Learners Academy
          </p>
          <p className="text-4xl font-bold text-start">
            Where Young Minds Blossom and{" "}
            <span className="text-orange-500">Dreams Take Flight.</span>
          </p>
          <p className="text-md leading-relaxed font-semibold text-start w-[99%]">
            Our kindergarten school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
        </div>
      </div>
    </div>
  );
}
