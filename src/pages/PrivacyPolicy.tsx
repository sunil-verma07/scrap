import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const Privacypolicy = () => {
    document.title = 'Privacy Policy | Scrapbag';
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="bg-white">
            <div className="md:-mx-[300px] font-Lato">
                <div className="bg-defaultLime w-full h-full top-0 left-0 pt-[82px] md:pt-[60px] md:rounded-custom" >
                    <div className="relative">
                        <div className="container">
                            <div className="items-center justify-center md:flex md:h-[500px] md:py-0 lg:gap-64">
                                <div className="heading mb-0 lg:text-left text-center">
                                    <div className='!text-white font-semibold text-base'>Privacy Policy</div>
                                    <div className="text-white text-2xl lg:text-[40px] font-bold mt-5">Privacy Policy</div>
                                </div>
                                <div className="relative mt-5 md:mt-0" data-aos='fade-left' data-aos-duration="1000">
                                    <img className="h-[17rem]" src="/assets/images/illustration_terms&conditions.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-14 md:py-[100px] xl:px-[300px] px-8 font-Lato">
                <div className="container">
                    <div className="pb-12 ">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Privacy Policy</h4>
                        <p>This privacy notice for Emerging Climate Innovations Private Limited (doing business as Scrapbag) ('we', 'us', or 'our'), describes how and why we might collect, store, use, and/or share ('process' ) your information when you use our services ( 'Services'), such as when you:
                            Visit our website at https://www.scrapbag.in , or any website of ours that links to this privacy notice
                            Download and use our mobile application (Scrapbag) , or any other application of ours that links to this privacy notice
                            Engage with us in other related ways, including any sales, marketing, or events
                            Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at support@scrapbag.in.</p>
                    </div>

                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>SUMMARY OF KEY POINTS</div>
                        <p>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.

                            What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.

                            Do we process any sensitive personal information? We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about sensitive information we process.

                            Do we receive any information from third parties? We do not receive any information from third parties.

                            How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.

                            In what situations and with which types of parties do we share personal information? We may share information in specific situations and with specific categories of third parties. Learn more about when and with whom we share your personal information.

                            How do we keep your information safe? We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.

                            What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.

                            How do you exercise your rights? The easiest way to exercise your rights is by visiting __________ , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.

                            Want to learn more about what we do with any information we collect? Review the privacy notice in full.
                        </p>
                    </div>

                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>TABLE OF CONTENTS</div>
                        <ul>
                            <li>1. WHAT INFORMATION DO WE COLLECT?</li>
                            <li>2. HOW DO WE PROCESS YOUR INFORMATION?</li>
                            <li>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
                            <li>4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                            </li>

                            <li>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
                            <li>6. HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                            <li>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                            <li>8. DO WE COLLECT INFORMATION FROM MINORS?</li>
                            <li>9. WHAT ARE YOUR PRIVACY RIGHTS?</li>
                            <li>10. CONTROLS FOR DO-NOT-TRACK FEATURES</li>

                            <li>11. DO WE MAKE UPDATES TO THIS NOTICE?</li>
                            <li>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                            <li>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                            </li>

                        </ul>
                    </div>


                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>1. WHAT INFORMATION DO WE COLLECT?</div>
                        <p>Personal information you disclose to us

                            In Short: We collect personal information that you provide to us.

                            We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.

                            Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                            names
                            phone numbers
                            email addresses
                            mailing addresses
                            contact preferences
                            contact or authentication data
                            billing addresses
                            debit/credit card numbers
                            passwords
                            Sensitive Information. When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:
                            financial data
                            Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called 'HOW DO WE HANDLE YOUR SOCIAL LOGINS? ' below.

                            Application Data. If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
                            Geolocation Information. We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.
                            Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device's camera, microphone, contacts, sms messages, storage, and other features. If you wish to change our access or permissions, you may do so in your device's settings.
                            Mobile Device Data. We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.
                            Push Notifications. We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.
                            This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.

                            All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.

                            Information automatically collected

                            In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.

                            We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.

                            The information we collect includes:
                            Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).
                            Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</p>
                    </div>

                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>2. HOW DO WE PROCESS YOUR INFORMATION?</div>
                        <p>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.

                            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                            To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.
                            To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.
                            To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                            To send administrative information to you. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                            To fulfil and manage your orders. We may process your information to fulfil and manage your orders, payments, returns, and exchanges made through the Services.



                            To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.

                            To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see 'WHAT ARE YOUR PRIVACY RIGHTS? ' below.
                            To deliver targeted advertising to you. We may process your information to develop and display personalised content and advertising tailored to your interests, location, and more.
                            To post testimonials. We post testimonials on our Services that may contain personal information.
                            To protect our Services. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
                            To evaluate and improve our Services, products, marketing, and your experience. We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.
                            To identify usage trends. We may process information about how you use our Services to better understand how they are being used so we can improve them.
                            To determine the effectiveness of our marketing and promotional campaigns. We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.
                            To comply with our legal obligations. We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.</p>
                    </div>

                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</div>
                        <p>In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.

                            Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents ( 'third parties') who perform services for us or on our behalf and require access to such information to do that work. The categories of third parties we may share personal information with are as follows:
                            Ad Networks
                            Affiliate Marketing Programs
                            Cloud Computing Services
                            Communication & Collaboration Tools
                            Data Analytics Services
                            Data Storage Service Providers
                            Finance & Accounting Tools
                            Order Fulfilment Service Providers
                            Payment Processors
                            Performance Monitoring Tools
                            Retargeting Platforms
                            Sales & Marketing Tools
                            Social Networks
                            Testing Tools
                            Website Hosting Service Providers
                            User Account Registration & Authentication Services

                            We also may need to share your personal information in the following situations:
                            Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                            Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honour this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
                            Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions.
                            Offer Wall. Our application(s) may display a third-party hosted 'offer wall'. Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our application(s) and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our application(s). A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward.</p>
                    </div>

                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</div>
                        <p>In Short: We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.

                            The Services , including our offer wall, may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.</p>
                    </div>


                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</div>
                        <p>In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.

                            Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.

                            We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>
                    </div>


                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>6. HOW LONG DO WE KEEP YOUR INFORMATION?</div>
                        <p>In Short: We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.

                            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us .

                            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                    </div>


                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</div>
                        <p>In Short: We aim to protect your personal information through a system of organisational and technical security measures.

                            We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
                    </div>


                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>8. DO WE COLLECT INFORMATION FROM MINORS?</div>
                        <p>In Short: We do not knowingly collect data from or market to children under 18 years of age.

                            We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at support@scrapbag.in .</p>
                    </div>

                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>9. WHAT ARE YOUR PRIVACY RIGHTS?</div>
                        <p>In Short: You may review, change, or terminate your account at any time.

                            Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section ' HOW CAN YOU CONTACT US ABOUT THIS NOTICE? ' below.

                            However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.

                            Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying 'STOP' or 'UNSUBSCRIBE' to the SMS messages that we send, or by contacting us using the details provided in the section ' HOW CAN YOU CONTACT US ABOUT THIS NOTICE? ' below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>
                    </div>


                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>10. CONTROLS FOR DO-NOT-TRACK FEATURES</div>
                        <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT' ) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>
                    </div>



                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>11. DO WE MAKE UPDATES TO THIS NOTICE?</div>
                        <p>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.

                            We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
                    </div>


                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</div>
                        <p>If you have questions or comments about this notice, you may email us at support@scrapbag.in or contact us by post at: <br />

                            Emerging Climate Innovations Private Limited <br />
                            89 A, Premnagar I <br />
                            Gurjar ki thadi <br />
                            Jaipur , Rajasthan 302019 <br />
                            India
                        </p>
                    </div>


                    <div className="pb-12">
                        <div className='text-lg font-bold pb-2'>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</div>
                        <p>You have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please visit: __________ .</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Privacypolicy;
