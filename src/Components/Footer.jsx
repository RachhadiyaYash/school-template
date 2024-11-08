import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer
        className="bg-absoluteWhite border border-black  md:max-w-7xl  md:mx-auto  p-8 md:m-0 m-3 rounded-lg"
        style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}
      >
        <div className="flex flex-col lg:flex-row justify-between  items-start space-y-8 lg:space-y-0 lg:space-x-4">
          <div className=" w-full lg:w-3/5    flex flex-col items-center lg:items-start">
            <div className="flex justify-center md:justify-start items-center space-x-2 ">
              <Image
                src="/footer/footer logo.svg"
                width={36}
                height={36}
                alt="Logo"
              />
              <h3 className="text-lg font-semibold">Little Learners</h3>
            </div>
            <p className="text-md font-semibold my-6 w-[90%] lg:w-[380px] text-center lg:text-left">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>

            <ul className="md:my-5 my-2 md:space-y-3 space-y-2 ">
              <li className="flex items-center space-x-2 p-2 pl-0  justify-start">
                <Image
                  src="/footer/call.svg"
                  width={30}
                  height={30}
                  alt="call-icon"
                />
                <p className="text-gray-15">+91 91813 23 2309</p>
              </li>
              <li className="flex items-center space-x-2 p-2 pl-0  justify-start">
                <Image
                  src="/footer/location.svg"
                  width={30}
                  height={30}
                  alt="location-icon"
                />
                <p className="text-gray-15">Somewhere in the World</p>
              </li>
              <li className="flex items-center space-x-2 p-2 pl-0  justify-start">
                <Image
                  src="/footer/massage.svg"
                  width={30}
                  height={30}
                  alt="massage-icon"
                />
                <p className="text-gray-15">hello@littlelearners.com</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-between w-full lg:w-4/5 space-y-8 lg:space-y-0">
            <div className="w-1/2 lg:w-1/5">
              <h3 className="font-semibold mb-4 text-gray-15">Home</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="" className="text-gray-20 font-semibold">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-gray-20 font-semibold">
                    Our Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-gray-20 font-semibold">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 lg:w-1/5">
              <h3 className="text-lg font-semibold mb-4 text-gray-15">
                Academics
              </h3>
              <ul className="space-y-2 font-semibold text-gray-20">
                <li>
                  <Link href="">Special Features</Link>
                </li>
                <li>
                  <Link href="">Gallery</Link>
                </li>
              </ul>
            </div>

            <div className="w-1/2 lg:w-1/5">
              <h3 className="text-lg font-semibold mb-4 text-gray-15">
                Contact Us
              </h3>
              <ul className="space-y-2 font-semibold text-gray-20">
                <li>
                  <Link href="">Information</Link>
                </li>
                <li>
                  <Link href="">Map & Direction</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 lg:w-auto">
              <h3 className="font-semibold mb-4 text-gray-15">About Us</h3>
              <ul className="space-y-2 font-semibold text-gray-20">
                <li>
                  <Link href="">Our Mission</Link>
                </li>
                <li>
                  <Link href="">Our Vision</Link>
                </li>
                <li>
                  <Link href="">Awards & Recognitions</Link>
                </li>
                <li>
                  <Link href="">History</Link>
                </li>
                <li>
                  <Link href="">Teachers</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-b border-black py-4  my-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-7 md:space-y-0">
            <div className="flex flex-row space-x-2 text-gray-20 text-sm md:text-md font-semibold">
              <Link href="">Terms of Service</Link>
              <p>|</p>
              <Link href="">Privacy Policy</Link>
              <p>|</p>
              <Link href="">Cookie Policy</Link>
            </div>

            <div className="flex space-x-3 md:space-x-4">
              <Image
                src="/footer/fb.svg"
                width={30}
                height={30}
                alt="facebook"
              />
              <Image
                src="/footer/twitter.svg"
                width={30}
                height={30}
                alt="twitter"
              />
              <Image
                src="/footer/linkin.svg"
                width={30}
                height={30}
                alt="LinkedIn"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-gray-40 text-center">
            Copyright © {new Date().getFullYear()} Little Learners Academy. All
            rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
