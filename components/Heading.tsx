import React from 'react'
interface props {
    main0?:string;
    main1?:string;
    main2?:string;
    sub0?:string;
    sub1?:string;
    sub2?:string;
}
const Heading = ({main0,main1,main2,sub0,sub1,sub2}:props) => {
  return (
          <div className="text-center pb-12  scroll-mt-24">
                <h1 className='text-2xl md:text-4xl font-bold '>
                      <span className='text-blue-500'>
                       {main0}{" "}
                    </span>
                    {main1}{" "}
                    <span className='text-blue-500'>
                       {main2}
                    </span>
                </h1>
                <p className='mt-4 md:text-xl text-sm text-slate-600'>
                     <span className='text-blue-500'>
                    {sub0}{" "}
                    </span>
                    {sub1}{" "}
                    <span className='text-blue-500'>
                        {sub2}
                    </span>
                </p>
            </div>
  )
}

export default Heading