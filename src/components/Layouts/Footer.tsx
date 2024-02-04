import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-auto bg-white lg:px-5">
            <div className="lg:mr-10">
                <hr className="border-[#7780A7] mb-9" />
                <div className="container">
                    <div className="flex flex-wrap-reverse md:justify-center gap-x-10 lg:gap-0 lg:justify-between gap-y-10 py-9">
                        <div>
                            <ul className="font-extrabold text-[#464646] text-xl font-Lato">
                                <li className="mb-8">
                                    <div className="relative flex flex-wrap gap-6">
                                        <img src="/assets/images/footer_frame.svg" alt="frame" className="h-[96px]" />
                                        <img src="/assets/images/footer_frame2.svg" alt="frame2" className="h-[96px]" />
                                    </div>
                                </li>
                                <li>
                                    <Link to="/faq" className="inline-block transition hover:scale-110 hover:text-defaultLime">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/career" className="inline-block transition hover:scale-110 hover:text-defaultLime">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy" className="inline-block transition hover:scale-110 hover:text-defaultLime">
                                        Legal & privacy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-conditions" className="inline-block transition hover:scale-110 hover:text-defaultLime">
                                        Terms & conditions
                                    </Link>
                                </li>
                                <li className="font-extrabold text-lg flex gap-1 mt-[70px]">
                                    ©
                                    <Link to="/" className="text-[11px] font-medium">
                                        {new Date().getFullYear() + ' '} copyright scrapbag
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-5 font-HindMysuru">
                            <div className="font-extrabold text-[#464646] text-[23.9px]">Download the Scrapbag App</div>
                            <div className='flex flex-col sm:items-center'>
                                <a href="https://play.google.com/store/games?hl=en&gl=US" target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="h-[75px] w-48" src="/assets/images/google-play-badge.png" alt="Google" />
                                </a>

                                <a href="https://www.apple.com/in/app-store/" target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="h-[75px] w-44 pl-2 md:pl-0" src="/assets/images/apple-store.svg" alt="Google" />
                                </a>
                            </div>
                            <div className="mt-5 sm:text-center">
                                <div className="text-[#464646] text-2xl font-normal">Follow us on</div>
                                <ul className="mt-2 flex flex-wrap items-center sm:justify-center gap-6">
                                    <li>
                                        <Link to="#">
                                            <svg width="33" height="32" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.7158 9.50089C13.6374 9.50089 9.54112 13.9652 9.54112 19.5C9.54112 25.0348 13.6374 29.4991 18.7158 29.4991C23.7942 29.4991 27.8905 25.0348 27.8905 19.5C27.8905 13.9652 23.7942 9.50089 18.7158 9.50089ZM18.7158 26.0007C15.434 26.0007 12.7511 23.0854 12.7511 19.5C12.7511 15.9146 15.426 12.9993 18.7158 12.9993C22.0056 12.9993 24.6805 15.9146 24.6805 19.5C24.6805 23.0854 21.9976 26.0007 18.7158 26.0007ZM30.4057 9.09188C30.4057 10.3885 29.4475 11.4241 28.2658 11.4241C27.076 11.4241 26.1258 10.3798 26.1258 9.09188C26.1258 7.80392 27.084 6.75962 28.2658 6.75962C29.4475 6.75962 30.4057 7.80392 30.4057 9.09188ZM36.4823 11.4589C36.3465 8.33477 35.6918 5.56739 33.5917 3.28735C31.4997 1.00731 28.9605 0.293707 26.0939 0.137063C23.1395 -0.0456878 14.2842 -0.0456878 11.3297 0.137063C8.47114 0.285005 5.93194 0.998605 3.8319 3.27865C1.73187 5.55869 1.08509 8.32606 0.94136 11.4502C0.773677 14.6701 0.773677 24.3212 0.94136 27.5411C1.0771 30.6652 1.73187 33.4326 3.8319 35.7127C5.93194 37.9927 8.46316 38.7063 11.3297 38.8629C14.2842 39.0457 23.1395 39.0457 26.0939 38.8629C28.9605 38.715 31.4997 38.0014 33.5917 35.7127C35.6838 33.4326 36.3385 30.6652 36.4823 27.5411C36.6499 24.3212 36.6499 14.6788 36.4823 11.4589ZM32.6655 30.9959C32.0426 32.7016 30.8369 34.0157 29.2639 34.7032C26.9083 35.7214 21.3189 35.4864 18.7158 35.4864C16.1127 35.4864 10.5153 35.7127 8.16772 34.7032C6.60267 34.0244 5.39695 32.7103 4.76614 30.9959C3.8319 28.4287 4.0475 22.337 4.0475 19.5C4.0475 16.663 3.83989 10.5626 4.76614 8.00407C5.38896 6.29839 6.59469 4.98432 8.16772 4.29683C10.5233 3.27865 16.1127 3.51361 18.7158 3.51361C21.3189 3.51361 26.9163 3.28735 29.2639 4.29683C30.8289 4.97562 32.0347 6.28969 32.6655 8.00407C33.5997 10.5713 33.3841 16.663 33.3841 19.5C33.3841 22.337 33.5997 28.4374 32.6655 30.9959Z" fill="#464646" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <svg width="33" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M34.7433 0H3.24851C1.80537 0 0.632828 1.26228 0.632828 2.81183V36.1882C0.632828 37.7377 1.80537 39 3.24851 39H34.7433C36.1864 39 37.3672 37.7377 37.3672 36.1882V2.81183C37.3672 1.26228 36.1864 0 34.7433 0ZM11.7351 33.4286H6.29057V14.8165H11.7433V33.4286H11.7351ZM9.01285 12.2746C7.26633 12.2746 5.85599 10.7685 5.85599 8.92299C5.85599 7.07746 7.26633 5.57143 9.01285 5.57143C10.7512 5.57143 12.1697 7.07746 12.1697 8.92299C12.1697 10.7772 10.7594 12.2746 9.01285 12.2746ZM32.144 33.4286H26.6994V24.375C26.6994 22.2161 26.6584 19.4391 23.8706 19.4391C21.0335 19.4391 20.5989 21.7895 20.5989 24.2183V33.4286H15.1544V14.8165H20.3775V17.3585H20.4513C21.1811 15.896 22.9604 14.3551 25.6089 14.3551C31.119 14.3551 32.144 18.2116 32.144 23.2259V33.4286Z" fill="#464646" />
                                            </svg>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <svg width="33" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M33.2486 0H4.38588C3.34203 0 2.34094 0.440241 1.60283 1.22388C0.864724 2.00751 0.450058 3.07035 0.450058 4.17857L0.450058 34.8214C0.450058 35.9297 0.864724 36.9925 1.60283 37.7761C2.34094 38.5598 3.34203 39 4.38588 39H15.6399V25.7409H10.4741V19.5H15.6399V14.7434C15.6399 9.33301 18.6737 6.34446 23.3205 6.34446C25.5458 6.34446 27.8729 6.7658 27.8729 6.7658V12.0761H25.3089C22.7826 12.0761 21.9946 13.7405 21.9946 15.4477V19.5H27.6343L26.7323 25.7409H21.9946V39H33.2486C34.2924 39 35.2935 38.5598 36.0316 37.7761C36.7697 36.9925 37.1844 35.9297 37.1844 34.8214V4.17857C37.1844 3.07035 36.7697 2.00751 36.0316 1.22388C35.2935 0.440241 34.2924 0 33.2486 0Z" fill="#464646" />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col font-Lato  max-w-[310px]">
                            <div>
                                <img className="w-[290px]" src="/assets/images/footer_logo.svg" alt="logo" />
                            </div>
                            <div className="text-left text-[#464646] mt-7">
                                <div className="font-medium text-[19px]">
                                    <span className="font-bold">Office Address</span>: Bhamashah Techno Hub, Sansthan Path, Jhalana Dungri, Malviya Nagar, Jaipur, Rajasthan - 302017
                                </div>
                                <div className="font-medium text-lg mt-7">
                                    <div className="font-bold">Contact Us</div>
                                    +91 9351974856 <br />support@scrapbag.in
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
