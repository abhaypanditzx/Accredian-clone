import React from 'react';
import img1 from "@/public/images/brands/adp.svg";
import img2 from "@/public/images/brands/bayer.svg";
import img3 from "@/public/images/brands/crif.png"
import img4 from "@/public/images/brands/hcl.png";
import img5 from "@/public/images/brands/ibm.png";
import img6 from "@/public/images/brands/rel.png";
import Image from 'next/image';
import Heading from './Heading';
import { Container } from './Container';
const Brands = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
];
const Clients = () => {
    return (
        <section id='clients' className="py-16 bg-white scroll-mt-24">
            <Container>
                <Heading
                    main1={"Our Proven"}
                    main2={"Partnerships"}
                    sub1={"Successful Collaborations With the"}
                    sub2={"Industry’s Best"} />
         

                <div
                    className='flex   justify-around items-center px-12'>
                    {
                        Brands.map((brand, i) => {
                            return (
                                <div key={i} className='w-[100px]'>
                                    <Image alt='brand-image' src={brand.image} className='object-cover' />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

export default Clients