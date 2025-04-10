'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import ReveiwCard from './ReveiwCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Reveiw = () => {
    return (
        <div className='pt-16 pb-16 '>


            <div className='mt-20 w-[95%] mx-auto'>
                <Carousel arrows={false} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive} showDots>
                    <ReveiwCard
                        image="/a3.jpg"
                        altText="Sample Alt Text"
                        name="Jessy Doe"
                        jobtitle="Software Engineer"
                        carouselDescription=" With powerful analytics tools that put you in control 
            and are fully customizable, you can effortlessly track performance metrics, 
            gain deep insights into user behavior, optimize decision-making processes, 
            streamline operations with precision, enhance data visualization, integrate 
            seamlessly with various platforms, tailor reports to meet specific business needs,
             automate workflows for efficiency, leverage predictive analytics to anticipate trends, 
             and ultimately drive unparalleled growth and success in an ever-evolving digital landscape."
                    />
                    <ReveiwCard
                        image="/a4.jpg"
                        altText="Sample Alt Text"
                        name="Jessy Doe"
                        jobtitle="Product Manager"
                        carouselDescription=" With powerful analytics tools that put you in control 
            and are fully customizable, you can effortlessly track performance metrics, 
            gain deep insights into user behavior, optimize decision-making processes, 
            streamline operations with precision, enhance data visualization, integrate 
            seamlessly with various platforms, tailor reports to meet specific business needs,
             automate workflows for efficiency, leverage predictive analytics to anticipate trends, 
             and ultimately drive unparalleled growth and success in an ever-evolving digital landscape."
                    />

                    <ReveiwCard
                        image="/a5.jpg"
                        altText="Sample Alt Text"
                        name="Jessy Doe"
                        jobtitle="Software Engineer"
                        carouselDescription=" With powerful analytics tools that put you in control 
            and are fully customizable, you can effortlessly track performance metrics, 
            gain deep insights into user behavior, optimize decision-making processes, 
            streamline operations with precision, enhance data visualization, integrate 
            seamlessly with various platforms, tailor reports to meet specific business needs,
             automate workflows for efficiency, leverage predictive analytics to anticipate trends, 
             and ultimately drive unparalleled growth and success in an ever-evolving digital landscape."
                    />
                    <ReveiwCard
                        image="/a6.jpg"
                        altText="Sample Alt Text"
                        name="Jessy Doe"
                        jobtitle="Product Manager"
                        carouselDescription=" With **powerful analytics tools that put you in control 
            and are fully customizable**, you can effortlessly track performance metrics, 
            gain deep insights into user behavior, optimize decision-making processes, 
            streamline operations with precision, enhance data visualization, integrate 
            seamlessly with various platforms, tailor reports to meet specific business needs,
             automate workflows for efficiency, leverage predictive analytics to anticipate trends, 
             and ultimately drive unparalleled growth and success in an ever-evolving digital landscape."
                    />
                </Carousel>
            </div>
        </div>
    )
}

export default Reveiw
