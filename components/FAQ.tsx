"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "./Container";
import Heading from "./Heading";
import { Button } from "./Button";
import { faqData } from "../app/data/faqs";

type Category = keyof typeof faqData;

export default function FAQ() {
  const categories = Object.keys(faqData) as Category[];

  const [selectedCategory, setSelectedCategory] =
    useState<Category>("About the Course");

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="scroll-mt-24 py-16">
      <Container>
        <Heading
          main1="Frequently Asked"
          main2="Questions"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[320px_1fr]">
          {/* Left */}

          <div className="space-y-6 p-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setOpenIndex(0);
                }}
                className={`w-full rounded-xl border px-2 py-5 text-xl font-semibold transition
                  ${
                    selectedCategory === category
                      ? "border-transparent bg-white text-blue-600 shadow-lg"
                      : "border-slate-300 text-slate-600 hover:border-blue-300"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right */}

          <div>
            {faqData[selectedCategory].map((faq, index) => (
              <div key={faq.question} className="border-b py-8">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3
                    className={`text-2xl font-semibold transition ${
                      openIndex === index
                        ? "text-blue-600"
                        : "text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}

            <div className="mt-12 flex justify-center">
              <Button>Enquire Now</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}