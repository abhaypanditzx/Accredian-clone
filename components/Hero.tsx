import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";
import corporateBanner from "@/public/images/corporate-big-hero-v4.webp";
import { CircleCheck } from "lucide-react";
import Heading from "./Heading";

export function Hero() {
  return (
    <section id='hero' >

      <Container>
        <div className="overflow-hidden rounded-3xl bg-[#EEF5FF] px-8 py-10 shadow-sm md:px-14 md:py-14">
          <div className="flex items-center  gap-10 flex-col-reverse md:flex-row">
            {/* Left */}
            <div>
              <h1 className="text-center sm:text-left  text-2xl sm:text-4xl lg:text-6xl 2xl:text-[5.2vw] 3xl:text-[5.0rem] font-bold max-w-full sm:max-w-[350px] lg:max-w-[700px] pt-2 capitalize px-8 sm:px-0 ">
                Next-Gen
                <span className="text-blue-500">
                  Expertise
                </span> for Your
                <span className="text-blue-500"> Enterprise</span></h1>
              <p className="mt-8 max-w-xl text-2xl leading-relaxed text-slate-700">
                Cultivate high-performance teams through expert learning.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  "Tailored Solutions",
                  "Industry Insights",
                  "Expert Guidance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CircleCheck
                      className="text-green-600"
                      size={22}
                      strokeWidth={2.5}
                    />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-10 rounded-xl bg-blue-500 px-10 py-3 text-lg hover:bg-blue-600">
                Enquire Now
              </Button>
            </div>

            {/* Right */}
            <div className="flex justify-center">
              <Image
                src={corporateBanner}
                alt="Enterprise"
                priority
                className="h-auto w-full max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>

  );
}