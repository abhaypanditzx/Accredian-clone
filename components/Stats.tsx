import { Container } from "./Container";
import Heading from "./Heading";

const stats = [
    {
        value: "10K+",
        title: "Professionals Trained For Exceptional Career Success",
    },
    {
        value: "200+",
        title: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
        value: "5K+",
        title: "Active Learners Engaged In Dynamic Courses",
    },
];

export function Stats() {
    return (
        
        <section id="stats" className="bg-white py-16 scroll-mt-24">
            <Container>
                      <Heading
                    main1="Our"
                    main2="Track Record"
                    sub1="The Numbers Behind"
                    sub2="Our Success"/>

                <div className=" grid gap-10 md:grid-cols-3 p-3 pb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.value}
                            className={` flex flex-row md:flex-col items-center     ${index !== stats.length - 1
                                ? "md:border-r max-md:border-b border-slate-200"
                                : ""
                                }`}
                        >
                            <div className=" rounded-full text-center bg-blue-100  px-4 py-2 h-fit w-fit md:px-8 md:pt-3">
                                <span className="md:text-2xl text-base font-bold text-blue-600">
                                    {stat.value}
                                </span>
                            </div> 

                            <p className="mx-auto md:mt-8 max-w-xs font-semibold text-base p-4 md:p-0 md:text-xl text-start md:text-center leading-relaxed text-black">
                                {stat.title}
                            </p>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
}