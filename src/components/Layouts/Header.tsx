import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { toggleTheme, toggleDirection } from '../../store/themeConfigSlice';

const Header = (props: any) => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    const location = useLocation();

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            setShowMenu(!showMenu);
        } else {
            setShowMenu(false);
        }
    };

    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const [isHovered, setIsHovered] = useState(false);
    const text = isHovered ? 'COMING SOON' : 'IMPACT CALCULATOR'

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const containerStyle = {
        transition: '0.3s ease', // Adjust the transition duration and easing function as needed
        // backgroundColor: isHovered ? '#71BF44' : 'transparent',
    };

    return (
        <header className={`sticky sticky-header top-0 z-50 bg-white transition duration-300 font-BalooChettan2 ${props.className}`}>
            <div className="xl:px-36 px-4">
                <div className="flex items-center justify-between py-5 lg:py-0">
                    <Link to="/">
                        <img src="/assets/images/Frame.svg" alt="logo" />
                    </Link>
                    <div className="flex items-center">
                        <div onClick={() => toggleMenu()} className={`overlay fixed inset-0 z-[51] bg-black/60 lg:hidden ${showMenu ? '' : 'hidden'}`}></div>

                        <div className={`menus ${showMenu ? 'overflow-y-auto !right-0 text-center' : ''} `}>

                            <div className="border-b border-gray/10 text-right lg:hidden">
                                <button onClick={() => toggleMenu()} type="button" className="p-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6 text-black dark:text-white"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <ul onClick={() => toggleMenu()}>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about-us">About us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services">Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact-us" className={location.pathname === '/portfolio-detail' ? 'active' : ''}>
                                        Contact us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/scrap-rates" className={location.pathname === '/services-detail' ? 'active' : ''}>
                                        <div className="absolute mb-6">
                                            <div className="blink text-red-500 text-xs font-bold">Live</div>
                                        </div>
                                        Scrap Rates
                                    </NavLink>
                                </li>
                                <li >
                                    {/* px-[27px] py-2.5  */}
                                    <div className={` text-center py-2.5 rounded-[14px] border border-[#49971C] justify-center items-center text-defaultLime w-[205.4px] h-[45.6px] `}
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHover}
                                        style={containerStyle}

                                    >
                                        <NavLink to="/impact-calculator">IMPACT CALCULATOR</NavLink>
                                    </div>
                                </li>
                                <li >
                                    <div className="px-[27px] py-2.5 bg-defaultLime rounded-[14px] justify-center items-center text-white">
                                        <NavLink to="/contact-us">SELL SCRAP</NavLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-defaultLime lg:hidden"
                            onClick={() => toggleMenu()}
                        >
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <path
                                    d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
