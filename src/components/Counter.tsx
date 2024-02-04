import CountUp from 'react-countup';

const Counter = (props: any) => {
    return (
        <div className="mt-36">
            <div className="heading text-center">
                <h6>{props.title}</h6>
                <h4>We work with best partners</h4>
            </div>
            <div className="grid gap-[30px] grid-cols-2 md:grid-cols-4 lg:grid-cols-8">

                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="group flex justify-center cursor-pointer items-center rounded-3xl border border-white bg-white py-6 transition duration-500 hover:border-defaultLime hover:bg-defaultLime/10">
                        <div>
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_228_15674)">
                                    <mask id="mask0_228_15674" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="36">
                                        <circle cx="17.5613" cy="17.8158" r="17.403" fill="#C4C4C4" />
                                    </mask>
                                    <g mask="url(#mask0_228_15674)">
                                        <circle cx="9.28212" cy="-2.67517" r="14.4385" transform="rotate(-22 9.28212 -2.67517)" fill="#47BDFF" />
                                        <circle cx="25.8422" cy="38.3094" r="14.4385" transform="rotate(-22 25.8422 38.3094)" fill="#47BDFF" />
                                        <circle cx="-2.9312" cy="26.0972" r="14.4385" transform="rotate(-22 -2.9312 26.0972)" fill="#B476E5" />
                                        <circle cx="37.6756" cy="8.59753" r="14.4385" transform="rotate(-22 37.6756 8.59753)" fill="#B476E5" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_228_15674">
                                        <rect width="34.8059" height="34.8059" fill="white" transform="translate(0.158325 0.412842)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className="pl-4">
                            {/* <h4 className="pb-2.5 text-4xl font-black leading-none transition dark:text-white dark:group-hover:text-black">
                                <CountUp start={0} end={10} duration={4} suffix="+"></CountUp>
                            </h4> */}

                            <span className="font-bold text-black transition dark:text-gray dark:group-hover:text-black">Camera</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="group flex justify-center cursor-pointer items-center rounded-3xl border border-white bg-white py-6 transition duration-500 hover:border-defaultLime hover:bg-defaultLime/10">
                        <div>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.78989 13.1705C2.78989 6.6769 8.05395 1.41284 14.5475 1.41284V17.6545C14.5475 24.1481 9.28344 29.4121 2.78989 29.4121V13.1705Z" fill="#FFBD11" />
                                <path d="M16.2531 7.80183C16.2531 4.27329 19.1136 1.41284 22.6421 1.41284C26.1707 1.41284 29.0311 4.27329 29.0311 7.80183V8.1707C29.0311 11.6992 26.1707 14.5597 22.6421 14.5597C19.1136 14.5597 16.2531 11.6992 16.2531 8.1707V7.80183Z" fill="#47BDFF" />
                                <path d="M16.2531 22.6556C16.2531 19.1271 19.1136 16.2666 22.6421 16.2666C26.1707 16.2666 29.0311 19.1271 29.0311 22.6556V23.0245C29.0311 26.553 26.1707 29.4135 22.6421 29.4135C19.1136 29.4135 16.2531 26.553 16.2531 23.0245V22.6556Z" fill="#B476E5" />
                            </svg>
                        </div>
                        <div className="pl-4">
                            {/* <h4 className="pb-2.5 text-4xl font-black leading-none transition dark:text-white dark:group-hover:text-black">
                                <CountUp start={0} end={10} duration={4} suffix="+"></CountUp>
                            </h4> */}

                            <span className="font-bold text-black transition dark:text-gray dark:group-hover:text-black">Startup</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="group flex justify-center cursor-pointer items-center rounded-3xl border border-white bg-white py-6 px-6 transition duration-500 hover:border-defaultLime hover:bg-defaultLime/10">
                        <div>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_228_15693)">
                                    <rect x="5.85561" y="5.96753" width="18.8889" height="18.8889" rx="8" fill="#47BDFF" />
                                    <rect x="9.72292" y="0.412842" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                    <rect x="13.859" y="0.412842" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                    <rect x="17.9961" y="0.412842" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                    <rect x="0.300064" y="20.989" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 0.300064 20.989)" fill="#B476E5" />
                                    <rect x="0.300064" y="16.8519" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 0.300064 16.8519)" fill="#B476E5" />
                                    <rect x="0.300064" y="12.7168" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 0.300064 12.7168)" fill="#B476E5" />
                                    <rect x="25.8559" y="20.989" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 25.8559 20.989)" fill="#B476E5" />
                                    <rect x="25.8559" y="16.8519" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 25.8559 16.8519)" fill="#B476E5" />
                                    <rect x="25.8559" y="12.7168" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 25.8559 12.7168)" fill="#B476E5" />
                                    <rect x="9.72292" y="25.9675" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                    <rect x="13.859" y="25.9675" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                    <rect x="17.9961" y="25.9675" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_228_15693">
                                        <rect width="34.8059" height="34.8059" fill="white" transform="translate(0.300064 0.412842)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className="ltr:pl-4 rtl:pr-4">
                            <span className="font-bold text-black transition dark:text-gray dark:group-hover:text-black">Software</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="group flex justify-center cursor-pointer items-center rounded-3xl border border-white bg-white py-6 px-6 transition duration-500 hover:border-defaultLime hover:bg-defaultLime/10">
                        <div>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9837 5.66097C16.9837 3.86435 19.1686 2.97887 20.4194 4.26859L29.3598 13.4872C29.7217 13.8604 29.9241 14.3598 29.9241 14.8796V25.4778C29.9241 27.2744 27.7391 28.1599 26.4884 26.8702L17.548 17.6516C17.1861 17.2784 16.9837 16.779 16.9837 16.2592V5.66097Z" fill="#47BDFF" />
                                <path d="M8.96412 5.34786C8.96412 3.55124 11.149 2.66576 12.3998 3.95548L21.3402 13.1741C21.7021 13.5473 21.9045 14.0467 21.9045 14.5665V25.1647C21.9045 26.9613 19.7196 27.8468 18.4688 26.5571L9.52841 17.3385C9.16651 16.9653 8.96412 16.4659 8.96412 15.9461V5.34786Z" fill="#FFBD11" />
                                <path d="M1.2132 5.66097C1.2132 3.86435 3.39812 2.97887 4.64892 4.26859L13.5893 13.4872C13.9512 13.8604 14.1536 14.3598 14.1536 14.8796V25.4778C14.1536 27.2744 11.9687 28.1599 10.7179 26.8702L1.77749 17.6516C1.41559 17.2784 1.2132 16.779 1.2132 16.2592V5.66097Z" fill="#B476E5" />
                            </svg>

                        </div>
                        <div className="ltr:pl-4 rtl:pr-4">
                            <span className="font-bold text-black transition dark:text-gray dark:group-hover:text-black">Techlify</span>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="group flex justify-center cursor-pointer items-center rounded-3xl border border-white bg-white py-6 px-6 transition duration-500 hover:border-defaultLime hover:bg-defaultLime/10">
                        <div>
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_228_15732)">
                                    <path d="M14.8082 31.0076C14.6055 31.0076 14.3926 30.9873 14.1797 30.9265C12.7909 30.5819 11.9394 29.1728 12.284 27.7839L17.4744 7.02257C17.8292 5.63375 19.2383 4.79235 20.6271 5.12689C22.0159 5.48169 22.8573 6.89079 22.5127 8.27961L17.3223 29.041C17.0283 30.2169 15.974 31.0076 14.8082 31.0076Z" fill="#47BDFF" />
                                    <path d="M27.0161 25.8188C26.347 25.8188 25.6881 25.5654 25.1812 25.0585C24.1675 24.0448 24.1675 22.4025 25.1812 21.3888L28.5367 18.0333L25.1812 14.6778C24.1675 13.6641 24.1675 12.0218 25.1812 11.0081C26.195 9.99437 27.8372 9.99437 28.851 11.0081L34.0413 16.1984C35.055 17.2122 35.055 18.8544 34.0413 19.8682L28.851 25.0585C28.3441 25.5654 27.6852 25.8188 27.0161 25.8188Z" fill="#B476E5" />
                                    <path d="M7.78117 25.8188C7.11211 25.8188 6.45318 25.5654 5.94631 25.0585L0.75597 19.8682C-0.257768 18.8544 -0.257768 17.2122 0.75597 16.1984L5.94631 11.0081C6.96005 9.99437 8.6023 9.99437 9.61604 11.0081C10.6298 12.0218 10.6298 13.6641 9.61604 14.6778L6.26056 18.0333L9.61604 21.3888C10.6298 22.4025 10.6298 24.0448 9.61604 25.0585C9.10917 25.5654 8.45024 25.8188 7.78117 25.8188Z" fill="#B476E5" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_228_15732">
                                        <rect width="34.8059" height="34.8059" fill="white" transform="translate(-0.0043335 0.412842)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className="ltr:pl-4 rtl:pr-4">
                            <span className="font-bold text-black transition dark:text-gray dark:group-hover:text-black">Codelify</span>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="group flex justify-center cursor-pointer items-center rounded-3xl border border-white bg-white py-6 px-6 transition duration-500 hover:border-defaultLime hover:bg-defaultLime/10">
                        <div>
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_228_15723)">
                                    <mask id="mask0_228_15723" maskUnits="userSpaceOnUse" x="1" y="0" width="33" height="36">
                                        <path d="M14.1923 1.21972C16.0557 0.143883 18.3515 0.143881 20.2149 1.21972L30.0706 6.90988C31.934 7.98572 33.0819 9.97396 33.0819 12.1256V23.506C33.0819 25.6576 31.934 27.6459 30.0706 28.7217L20.2149 34.4119C18.3515 35.4877 16.0557 35.4877 14.1923 34.4119L4.33665 28.7217C2.47324 27.6459 1.32533 25.6576 1.32533 23.506V12.1256C1.32533 9.97396 2.47324 7.98572 4.33665 6.90989L14.1923 1.21972Z" fill="#C4C4C4" />
                                    </mask>
                                    <g mask="url(#mask0_228_15723)">
                                        <rect width="20.0974" height="20.0974" transform="matrix(0.866025 0.5 -0.866025 0.5 17.2039 -0.817139)" fill="#B476E5" />
                                        <rect width="18.4924" height="18.4924" transform="matrix(0.866025 0.5 -2.20305e-08 1 1.18839 9.37671)" fill="#47BDFF" />
                                        <rect width="18.4924" height="18.4924" transform="matrix(0.866025 -0.5 2.20305e-08 1 17.2039 18.6248)" fill="#FFBD11" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_228_15723">
                                        <rect width="34.8059" height="34.8059" fill="white" transform="translate(0.165131 0.412842)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="ltr:pl-4 rtl:pr-4">
                            <span className="font-bold text-black transition dark:text-gray dark:group-hover:text-black">Blockly</span>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="group flex justify-center cursor-pointer items-center rounded-3xl border border-white bg-white py-6 px-6 transition duration-500 hover:border-defaultLime hover:bg-defaultLime/10">
                        <div>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_228_15740)">
                                    <rect x="0.666077" y="3.89343" width="33.1617" height="28.7665" rx="2" fill="#47BDFF" />
                                    <path d="M33.472 13.0066H18.8641C17.7595 13.0066 16.8641 13.902 16.8641 15.0066V21.5458C16.8641 22.6503 17.7595 23.5458 18.8641 23.5458H33.472C34.5766 23.5458 35.472 22.6503 35.472 21.5458V15.0066C35.472 13.902 34.5766 13.0066 33.472 13.0066Z" fill="#B476E5" />
                                    <circle cx="21.9567" cy="18.2764" r="2.6348" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_228_15740">
                                        <rect width="34.8059" height="34.8059" fill="white" transform="translate(0.666077 0.412842)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className="ltr:pl-4 rtl:pr-4">
                            <span className="font-bold text-black transition dark:text-gray dark:group-hover:text-black">Financely</span>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="group flex justify-center cursor-pointer items-center rounded-3xl border border-white bg-white py-6 px-6 transition duration-500 hover:border-defaultLime hover:bg-defaultLime/10">
                        <div>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2219 7.80912C17.2219 5.00472 15.4048 2.73328 13.1613 2.73328C10.9203 2.73328 9.10059 5.00472 9.10059 7.80912C9.10059 10.611 10.9203 12.885 13.1613 12.885C15.4048 12.885 17.2219 10.611 17.2219 7.80912Z" fill="#B476E5" />
                                <path d="M9.77828 15.2537C9.77828 12.4493 7.96112 10.1779 5.7176 10.1779C3.47407 10.1779 1.65692 12.4493 1.65692 15.2537C1.65692 18.0581 3.47407 20.3296 5.7176 20.3296C7.96112 20.3296 9.77828 18.0581 9.77828 15.2537Z" fill="#B476E5" />
                                <path d="M34.1424 15.2537C34.1424 12.4493 32.3253 10.1779 30.0817 10.1779C27.8382 10.1779 26.0211 12.4493 26.0211 15.2537C26.0211 18.0581 27.8382 20.3296 30.0817 20.3296C32.3253 20.3296 34.1424 18.0581 34.1424 15.2537Z" fill="#B476E5" />
                                <path d="M26.6987 7.80912C26.6987 5.00472 24.8791 2.73328 22.6381 2.73328C20.3945 2.73328 18.5774 5.00472 18.5774 7.80912C18.5774 10.611 20.3945 12.885 22.6381 12.885C24.8791 12.885 26.6987 10.611 26.6987 7.80912Z" fill="#B476E5" />
                                <path d="M29.3634 27.1367C29.2187 25.8018 28.7898 24.5125 28.1046 23.3577C27.7924 22.8476 27.4955 22.3426 27.2011 21.8528C24.7774 17.7667 22.6861 14.2365 17.8996 14.2365C13.1131 14.2365 11.032 17.7667 8.60824 21.8528C8.31638 22.3451 8.0169 22.8476 7.70474 23.3603C7.0195 24.5125 6.58805 25.8018 6.44593 27.1367C6.24797 28.8295 6.78347 30.5274 7.91792 31.8014C9.09044 33.1135 10.768 33.8648 12.5293 33.8622H23.28C25.0413 33.8648 26.7189 33.1135 27.8914 31.8014C29.0233 30.5274 29.5588 28.8295 29.3634 27.1367Z" fill="#47BDFF" />
                            </svg>
                        </div>
                        <div className="ltr:pl-4 rtl:pr-4">
                            <span className="font-bold text-black transition dark:text-gray dark:group-hover:text-black">Veterinary</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
