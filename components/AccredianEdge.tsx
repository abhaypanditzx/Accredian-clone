import React from "react";
import accredianEdge from "@/public/accredian-edge-usp-v3.svg";
import Image from "next/image";
import { Container } from "./Container";
import Heading from "./Heading";

import joinImage from "@/public/images/imagehuman.png"
import {users} from "@/app/data/users"
import {courses} from "@/app/data/courses"
import { domains } from "@/app/data/domains";

const AccredianEdge = () => {
    return (
        <section
            id="accredian-edge"
            className="bg-white py-16 "
        >
            <Container>
                <Heading
                    main1="The"
                    main2="Accredian Edge"
                    sub1="Key Aspects of"
                    sub2="Our Strategic Training"
                />

                <Image
                    src={accredianEdge}
                    alt="Accredian Edge"
                    className="mx-auto w-[90%] max-w-6xl "
                />
            </Container>

            <Container className="mt-20">
                <Heading
                    main1="Our"
                    main2="Domain Expertise"
                    sub1="Specialized Programs"
                    sub2="Designed to Fuel Innovation"
                />

                <div className=" grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {domains.map(({ title, icon: Icon }, index) => (
                        <div
                            key={title}
                            className={`rounded-xl border border-slate-200 bg-white p-6  shadow-md ${index === domains.length - 1
                                ? "sm:col-span-2 lg:col-span-3 lg:mx-auto lg:max-w-sm"
                                : ""
                                }`}
                        >
                            <Icon
                                className="mx-auto text-blue-500"
                                size={36}
                            />

                            <h3 className="mt-4 text-center font-semibold text-slate-800">
                                {title}
                            </h3>
                        </div>
                    ))}
                </div>


            </Container>
            <Container className="mt-20">
                <Heading
                    main1="Tailored"
                    main2=" Course Segmentation"
                    sub1="Explore Custom-fit Courses"
                    sub2="Designed to Address Every Professional Focus"
                />

                <div className=" max-w-220 mx-auto items-center  grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {courses.map((course) => (
                        <div
                            key={course.title}
                            className="w-full max-w-72.5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-lg"
                        >
                            <Image
                                src={course.image}
                                alt={course.title}
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-center text-2xl font-bold text-blue-500">
                                    {course.title}
                                </h3>

                                <p className="mt-4 text-center text-sm font-semibold leading-7 text-slate-600">
                                    {course.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

      <div className="mt-20 mx-auto w-full max-w-340 md:px-4 sm:px-6 lg:px-8">

  <div className="overflow-hidden  md:rounded-3xl bg-blue-500  px-5 md:px-10 md:py-0 py-10 text-white">
    <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      
      {/* Left */}
      <div className="flex flex-col">
        <h3 className=" text-xl md:mt-4 md:text-2xl font-semibold  ">
          Who Should Join?
        </h3>

        <h2 className="mt-4 md:text-5xl text-3xl text-start font-bold leading-tight">
          Strategic Skill
          <br />
          Enhancement
        </h2>

        <Image
          src={joinImage}
          alt="Who Should Join"
          className=" w-full justify-self-end md:block hidden max-w-sm"
        />
      </div>

      {/* Right */}
      <div className="grid gap-10 sm:grid-cols-2">
        {users.map(({ title, description, icon: Icon }) => (
          <div key={title}  className="flex items-center gap-4">
            <Icon size={84} strokeWidth={2}  />

         <div>
               <h3 className="mt-4 text-lg md:text-2xl font-bold">
              {title}
            </h3>

            <p className=" text-sm md:text-lg text-blue-100">
              {description}
            </p>
         </div>
          </div>
        ))}
      </div>
    </div>
  </div>
      </div>

        </section>
    );
};

export default AccredianEdge;