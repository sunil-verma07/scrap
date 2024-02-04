import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const Testimonial = ({
    showTitle = true,
    type = 'common',
    feedbacks = [
        {
            id: 1,
            name: 'Allan Branch',
            role: 'CEO of Lifted',
            thumbnail: '/assets/images/testimonial.png',
            message:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
            id: 2,
            name: 'Allan Branch',
            role: 'CEO of Lifted',
            thumbnail: '/assets/images/testimonial.png',
            message:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
    ],
    className = '',
}) => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <section className={`relative bg-[#464646] mt-24 py-14 dark:bg-transparent lg:py-[90px] ${className}`}>
            <div className='container  xl:px-52'>

                <div className={`heading text-center lg:text-left px-16`}>
                    <h6>Testimonial</h6>
                    <h4 className="!text-white">Feedback from our clients</h4>
                </div>

                <Swiper
                    loop={true}
                    slidesPerView="auto"
                    spaceBetween={30}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next2',
                        prevEl: '.swiper-button-prev2',
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1000: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 2,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                >
                    {feedbacks.map((feedback: any) => {
                        return (
                            <SwiperSlide key={feedback.id}>
                                <div className="flex gap-7 pb-3 sm:pb-[30px]  xl:gap-12 items-center justify-center">
                                    <div className="w-full  lg:mt-[70px]">
                                        <div className="rounded-3xl bg-white p-6"
                                            style={{ boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px" }}
                                        >
                                            <div className="pb-8">
                                                <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M86.2864 2.84744C87.0637 1.5558 88.9363 1.5558 89.7136 2.84744L90.1964 3.64962C90.4756 4.11365 90.9311 4.44459 91.4587 4.56678L92.3708 4.77803C93.8395 5.11816 94.4181 6.8991 93.4299 8.03752L92.8162 8.74454C92.4612 9.15352 92.2872 9.68898 92.334 10.2285L92.4149 11.1613C92.5453 12.6631 91.0303 13.7638 89.6423 13.1757L88.7802 12.8105C88.2815 12.5993 87.7185 12.5993 87.2198 12.8105L86.3577 13.1757C84.9697 13.7638 83.4547 12.6631 83.5851 11.1613L83.666 10.2285C83.7128 9.68899 83.5388 9.15352 83.1838 8.74454L82.5701 8.03752C81.5819 6.89911 82.1605 5.11816 83.6292 4.77803L84.5413 4.56678C85.0689 4.44459 85.5244 4.11365 85.8036 3.64962L86.2864 2.84744Z"
                                                        fill="#7780A1"
                                                    />
                                                    <path
                                                        d="M66.2864 2.84744C67.0637 1.5558 68.9363 1.5558 69.7136 2.84744L70.1964 3.64962C70.4756 4.11365 70.9311 4.44459 71.4587 4.56678L72.3708 4.77803C73.8395 5.11816 74.4181 6.8991 73.4299 8.03752L72.8162 8.74454C72.4612 9.15352 72.2872 9.68898 72.334 10.2285L72.4149 11.1613C72.5453 12.6631 71.0303 13.7638 69.6423 13.1757L68.7802 12.8105C68.2815 12.5993 67.7185 12.5993 67.2198 12.8105L66.3577 13.1757C64.9697 13.7638 63.4547 12.6631 63.5851 11.1613L63.666 10.2285C63.7128 9.68899 63.5388 9.15352 63.1838 8.74454L62.5701 8.03752C61.5819 6.89911 62.1605 5.11816 63.6292 4.77803L64.5413 4.56678C65.0689 4.44459 65.5244 4.11365 65.8036 3.64962L66.2864 2.84744Z"
                                                        fill="#FFBD11"
                                                    />
                                                    <path
                                                        d="M46.2864 2.84744C47.0637 1.5558 48.9363 1.5558 49.7136 2.84744L50.1964 3.64962C50.4756 4.11365 50.9311 4.44459 51.4587 4.56678L52.3708 4.77803C53.8395 5.11816 54.4181 6.8991 53.4299 8.03752L52.8162 8.74454C52.4612 9.15352 52.2872 9.68898 52.334 10.2285L52.4149 11.1613C52.5453 12.6631 51.0303 13.7638 49.6423 13.1757L48.7802 12.8105C48.2815 12.5993 47.7185 12.5993 47.2198 12.8105L46.3577 13.1757C44.9697 13.7638 43.4547 12.6631 43.5851 11.1613L43.666 10.2285C43.7128 9.68899 43.5388 9.15352 43.1838 8.74454L42.5701 8.03752C41.5819 6.89911 42.1605 5.11816 43.6292 4.77803L44.5413 4.56678C45.0689 4.44459 45.5244 4.11365 45.8036 3.64962L46.2864 2.84744Z"
                                                        fill="#FFBD11"
                                                    />
                                                    <path
                                                        d="M26.2864 2.84744C27.0637 1.5558 28.9363 1.5558 29.7136 2.84744L30.1964 3.64962C30.4756 4.11365 30.9311 4.44459 31.4587 4.56678L32.3708 4.77803C33.8395 5.11816 34.4181 6.8991 33.4299 8.03752L32.8162 8.74454C32.4612 9.15352 32.2872 9.68898 32.334 10.2285L32.4149 11.1613C32.5453 12.6631 31.0303 13.7638 29.6423 13.1757L28.7802 12.8105C28.2815 12.5993 27.7185 12.5993 27.2198 12.8105L26.3577 13.1757C24.9697 13.7638 23.4547 12.6631 23.5851 11.1613L23.666 10.2285C23.7128 9.68899 23.5388 9.15352 23.1838 8.74454L22.5701 8.03752C21.5819 6.89911 22.1605 5.11816 23.6292 4.77803L24.5413 4.56678C25.0689 4.44459 25.5244 4.11365 25.8036 3.64962L26.2864 2.84744Z"
                                                        fill="#FFBD11"
                                                    />
                                                    <path
                                                        d="M6.28638 2.84744C7.0637 1.5558 8.9363 1.5558 9.71362 2.84744L10.1964 3.64962C10.4756 4.11365 10.9311 4.44459 11.4587 4.56678L12.3708 4.77803C13.8395 5.11816 14.4181 6.8991 13.4299 8.03752L12.8162 8.74454C12.4612 9.15352 12.2872 9.68898 12.334 10.2285L12.4149 11.1613C12.5453 12.6631 11.0303 13.7638 9.64225 13.1757L8.78018 12.8105C8.28151 12.5993 7.71849 12.5993 7.21982 12.8105L6.35775 13.1757C4.96968 13.7638 3.45472 12.6631 3.58506 11.1613L3.66601 10.2285C3.71283 9.68899 3.53885 9.15352 3.18383 8.74454L2.57009 8.03752C1.58187 6.89911 2.16054 5.11816 3.62916 4.77803L4.54126 4.56678C5.06887 4.44459 5.52437 4.11365 5.80362 3.64962L6.28638 2.84744Z"
                                                        fill="#FFBD11"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="font-medium italic text-[#464646]">{feedback.message}</p>
                                            <div className="relative mt-12">
                                                <h5 className="font-extrabold text-primary">{feedback.name}</h5>
                                                <h6 className="text-sm font-bold italic">{feedback.role}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

            </div>

        </section>
    );
};

export default Testimonial;
