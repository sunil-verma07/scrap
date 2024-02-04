import { lazy } from 'react';
import ImpactCalculator from '../pages/ImpactCalculator';
const Index = lazy(() => import('../pages/Index'));
const Services = lazy(() => import('../pages/Services'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Career = lazy(() => import('../pages/Career'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
const TermsCondition = lazy(() => import('../pages/TermsConditions'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const FAQs = lazy(() => import('../pages/Faq'));
const Error404 = lazy(() => import('../pages/404'));
const Application = lazy(() => import('../pages/Application'));
const ScrapRates = lazy(() => import('../pages/ScrapRates'));

const routes = [
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/services',
        element: <Services />,
    },
    {
        path: '/about-us',
        element: <AboutUs />,
    },
    {
        path: '/career',
        element: <Career />,
    },
    {
        path: '/contact-us',
        element: <ContactUs />,
    },
    {
        path: '/terms-conditions',
        element: <TermsCondition />,
    },
    {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
    },
    {
        path: '/faq',
        element: <FAQs />,
    },
    {
        path: '/application',
        element: <Application />,
    },
    {
        path: '/scrap-rates',
        element: <ScrapRates />,
    },
    {
        path: '/impact-calculator',
        element: <ImpactCalculator />
    },
    {
        path: '*',
        element: <Error404 />,
    },
];

export { routes };
