import React from 'react'
import Heading from './Heading'
import { ChartNoAxesColumnIncreasing, MonitorPlay, Presentation } from 'lucide-react';

 
const steps = [
  {
    id: 1,
    title: "Skill Gap Analysis",
    description:
      "Assess team skill gaps and developmental needs.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    id: 2,
    title: "Customized Training Plan",
    description:
      "Create a tailored roadmap addressing organizational goals.",
    icon: Presentation,
  },
  {
    id: 3,
    title: "Flexible Program Delivery",
    description:
      "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: MonitorPlay,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works"
    className='w-full mt-12 sm:mt-24 py-4 flex flex-col items-center'
    >
        <Heading
        main0='How We'
        main1=' Deliver Results'
        main2=' That Matter?'
        sub1='A Structured Three-Step Approach to'
        sub2='Skill Development'
        />

        <div className="mt-12 flex flex-wrap justify-center gap-8">
  {steps.map(({ id, title, description, icon: Icon }) => (
    <div
      key={id}
      className="relative h-[260px] w-[300px] rounded-2xl border border-blue-200 bg-blue-50 shadow-sm"
    >
      {/* Number */}
      <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-300 bg-white text-xl font-bold">
        {id}
      </div>

      {/* Blue Side Bars */}
      <div className="absolute -left-[8px] top-1/2 h-24 w-3 -translate-y-1/2 rounded-full bg-blue-500" />
      <div className="absolute -right-[8px] top-1/2 h-24 w-3 -translate-y-1/2 rounded-full bg-blue-500" />

      <div className="flex h-full flex-col items-center justify-center px-8 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 shadow-lg">
          <Icon size={25} className="text-white" />
        </div>

        <h3 className="mt-8 md:text-lg text-base font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 font-semibold text-sm  text-slate-600">
          {description}
        </p>
      </div>
    </div>
  ))}
</div>
    </section>
  )
}

export default HowItWorks