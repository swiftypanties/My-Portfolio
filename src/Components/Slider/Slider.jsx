import React,{useRef, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Slider.css";
import KEEPER from "../../assets/KeeperApp.png";
import DRUMS from "../../assets/DrumSet.png";



const data = [
    {
        img: KEEPER,
        title: "Notes-Keeper",
        description: "hello world hello world hello world hello world hello world hello world hello world hello world hello world"
    },
     {
        img: DRUMS,
        title: "Drums",
        description: "hello world"
    },
    {
        img: KEEPER,
        title: "Notes-Keeper",
        description: "hello world hello world hello world hello world hello world hello world hello world hello world hello world"
    },
    {
        img: DRUMS,
        title: "Drums",
        description: "hello world"
    },
    {
        img: KEEPER,
        title: "Notes-Keeper",
        description: "hello world hello world hello world hello world hello world hello world hello world hello world hello world"
    }
]

function Slider(){

    const swiperWrappedRef = useRef(null)

    function adjustMargin(){
        const screenWidth = window.innerWidth;
        if (swiperWrappedRef.current){
            swiperWrappedRef.current.style.marginLeft =
            screenWidth <= 520
            ?"0px"
            : screenWidth <= 650
            ?"-50px"
            :screenWidth <= 800
            ?"-100px"
            :"-150px"
        }
    }
    useEffect(()=>{
        adjustMargin();
        window.addEventListener("resize", adjustMargin);
        return () => window.removeEventListener("resize", adjustMargin);
    }, []);


    return(
        <main className="swiper-main">
            <div className="container">
                <Swiper className= "swiper"
                modules = {[Pagination]}
                grabCursor
                initialSlide={2}
                centeredSlides
                slidesPerView="auto"
                speed={800}
                slideToClickedSlide={true}
                pagination={{clickable: true}}
                breakpoints={{
                    320: {spaceBetween: 40},
                    650: {spaceBetween: 30},
                    1000: {spaceBetween: 20}
                }}
                onSwiper={(swiper)=>{
                    swiperWrappedRef.current = swiper.wrapperEl;
                }}
                >
                    <div className="swiper-container">
                        {data.map((slide, index)=>(
                        <SwiperSlide className="swiper-slide" key ={index}>
                            <img className= "slide-img" src={slide.img} alt={slide.title} />
                            <div className="slide-content">
                                <div className="slide-title"><h1>{slide.title}</h1></div>
                                <div className="slide-description"><p>{slide.description}</p></div>
                            </div>
                            
                        </SwiperSlide>
                    ))}
                    </div>
                    
                </Swiper>
            </div>
        </main>
    )
}

export default Slider