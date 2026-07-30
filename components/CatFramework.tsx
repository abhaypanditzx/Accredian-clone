import React from 'react'
import Heading from './Heading'
import CatFrameworkImage from "@/public/images/catV2.svg"
import Image from 'next/image'
import { Container } from './Container'
const CatFramework = () => {
    return (
        <section id='CAT' className='w-full mt-12 sm:mt-24 py-4 flex flex-col items-center'>
            <Container>

                <Heading
                    main1='The '
                    main2='CAT Framework'
                    sub1='Our Proven Approach to'
                    sub2='Learning Excellence'
                />
                <div className="w-full flex justify-center  md:mt-16">
                <Image src={CatFrameworkImage} alt='cat-framework-image' className='w-[90%] sm:w-[70%] h-auto rounded-lg' />
                </div>
            </Container>
        </section>
    )
}

export default CatFramework