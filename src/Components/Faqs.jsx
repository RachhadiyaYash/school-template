import Image from "next/image";
import { useState } from "react";
import TitleBadge from "./TitleBadge";
import Headingbadge from "./Headingbadge";
import { faqData } from "@/Data/faqData";

export default function Faqs() {
  const [openFaq, setOpenFaq] = useState(faqData[0].id); // Set the default open FAQ

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const firstPart = faqData.slice(0, Math.ceil(faqData.length / 2));
  const secondPart = faqData.slice(Math.ceil(faqData.length / 2));

  return (
    <div className="max-w-7xl mx-auto p-8 text-center border border-black">
      <TitleBadge title="Solutions For The Doubts" />
      <br />
      <Headingbadge heading="Frequently Asked Questions" />
      <br />
      <p className="mx-auto md:w-2/3 w-full font-semibold text-gray-700 mb-8">
        Find all the essential information you need in our FAQ section, designed
        to address the most frequently asked questions and help you make
        informed decisions for your child's education.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6 text-left w-full">
          {firstPart.map((faq) => (
            <div
              key={faq.id}
              className={`cursor-pointer p-4 border border-black rounded-md transition-all duration-300 ease-in-out transform ${
                openFaq === faq.id ? "bg-absoluteWhite" : "bg-orange-95"
              } hover:shadow-lg hover:border-gray-400`}
            >
              <div
                className="flex justify-between items-center"
                onClick={() => toggleFaq(faq.id)}
              >
                <h4 className="text-md font-semibold text-gray-800">
                  {faq.question}
                </h4>
                <span className="text-2xl">
                  {openFaq === faq.id ? (
                    <Image
                      src="/faq/close.svg"
                      alt="open"
                      height={25}
                      width={25}
                    />
                  ) : (
                    <Image
                      src="/faq/open.svg"
                      alt="close"
                      height={25}
                      width={25}
                    />
                  )}
                </span>
              </div>

              {openFaq === faq.id && (
                <div className="mt-3 text-gray-20">
                  <hr className="border-t border-black mb-4" />
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-6 text-left w-full">
          {secondPart.map((faq) => (
            <div
              key={faq.id}
              className={`cursor-pointer p-4 border border-black rounded-md transition-all duration-300 ease-in-out transform ${
                openFaq === faq.id ? "bg-absoluteWhite" : "bg-orange-95"
              } hover:shadow-lg hover:border-gray-400`}
            >
              <div
                className="flex justify-between items-center"
                onClick={() => toggleFaq(faq.id)}
              >
                <h4 className="text-md font-semibold text-gray-800">
                  {faq.question}
                </h4>
                <span className="text-2xl">
                  {openFaq === faq.id ? (
                    <Image
                      src="/faq/close.svg"
                      alt="open"
                      height={25}
                      width={25}
                    />
                  ) : (
                    <Image
                      src="/faq/open.svg"
                      alt="close"
                      height={25}
                      width={25}
                    />
                  )}
                </span>
              </div>

              {openFaq === faq.id && (
                <div className="mt-3 text-gray-20">
                  <hr className="border-t border-black mb-4" />
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
