
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import './testimonial.css'


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";


const Swiperr = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        // mousewheel={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}

        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="card">
          <img src={require('../../images/amit1.jpg')} alt="" />
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>I am using this app, it's really helpful to improve your English and correct your errors same time. Recommended to everyone who is interested to improve their English, thanks</p>
          <h4>Amit</h4>
          <span>Student</span>
        </SwiperSlide>

        <SwiperSlide className="card">
          <img src={require('../../images/abhinandan.jpg')} alt="" />
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>I am using this app, it's really helpful to improve your English and correct your errors same time. Recommended to everyone who is interested to improve their English, thanks</p>
          <h4>Abhinandan</h4>
          <span>Student</span>
        </SwiperSlide>

        <SwiperSlide className="card">
          <img src={require('../../images/shahla.jpg')} alt="" />
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>Great learning application for every person. <br /> thanks, Ninjastudy
          <br /></p>
          <br />     
<br />

          <br />
          <h4>Shahla Noor</h4>
          <span>Student</span>
        </SwiperSlide>

        <SwiperSlide className="card">
          <img src={require('../../images/ruhi1.jpg')} alt="" />
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>Really good platform to learn English and implement that out. features are also Amazing.
 <br /> thanks, Ninjastudy
          <br /></p>
          <br />     
<br />

          <h4>Ruhi Tomar</h4>
          <span>Student</span>
        </SwiperSlide>

        <SwiperSlide className="card">
          <img src={require('../../images/harsh.jpg')} alt="" />
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>it's really helpful to improve your English and correct your errors same time. Recommended to everyone who is interested to improve their English, thanks</p>
          <h4>Harsh</h4>
          <span>Student</span>
        </SwiperSlide>

        
      </Swiper>
    </>
  );
}

export default Swiperr


