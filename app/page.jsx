import Header from "@/components/Header";
import {TypewriterEffect} from "@/components/ui/typewriter-effect";
import Image from "next/image";
import ServicesImage from '@/public/images/services.png'
import Interior from '@/public/images/icons/interior.svg'
import Clean from '@/public/images/icons/clean.svg'
import Revenue from '@/public/images/icons/revenue.svg'
import Listing from '@/public/images/icons/listing.svg'
import Support from '@/public/images/icons/support.svg'
import ContactImage from '@/public/images/contact.png'
import LocationImage from '@/public/images/location.png'
import CallImage from '@/public/images/call.png'
import MailImage from '@/public/images/mail.png'
import HowItsWorkSteps from "@/components/HowItsWorkSteps";
import Link from "next/link";
import TopForm from "@/components/TopForm";

const HomePage = () => {
    const words = [
        { text: "Top", className: 'text-3xl sm:text-4xl md:text-5xl text-white custom-shadow leading-[3rem] md:leading-[4rem]'},
        { text: "short-term", className: 'text-3xl sm:text-4xl md:text-5xl text-white custom-shadow leading-[3rem] md:leading-[4rem]'},
        { text: "property ", className: 'text-3xl sm:text-4xl md:text-5xl text-white custom-shadow leading-[3rem] md:leading-[4rem]'},
        { text: "management", className: 'text-3xl sm:text-4xl md:text-5xl text-white custom-shadow leading-[3rem] md:leading-[4rem]'},
    ];

    return <>
        <div className="fixed right-10 bottom-10 z-10 w-16 h-16">
            <a href='https://wa.me/+27739552708' className='drop-shadow-lg' target='_blank'>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g id="WhatsApp"><circle id="back" cx="256" cy="256" r="256" fill="#25d366"/><g id="whatsApp-2" data-name="whatsApp"><path d="M112.64,400.05l20.25-74a142.49,142.49,0,0,1-19.06-71.37c0-78.71,64.07-142.75,142.76-142.75A142.79,142.79,0,0,1,399.36,254.82c0,78.71-64.08,142.76-142.76,142.76h-.06a142.61,142.61,0,0,1-68.22-17.38Zm79.18-45.7,4.34,2.57a118.49,118.49,0,0,0,60.39,16.54h.05c65.4,0,118.63-53.23,118.66-118.66a118.66,118.66,0,1,0-219.18,63.05l2.82,4.49-12,43.79Z" fill="#fff"/><path d="M328.52,288.76c-.89-1.49-3.27-2.38-6.84-4.17S300.58,274.18,297.31,273s-5.65-1.79-8,1.79-9.21,11.61-11.29,14-4.16,2.68-7.73.89-15.06-5.55-28.68-17.71c-10.61-9.46-17.77-21.14-19.84-24.71s-.22-5.5,1.56-7.28c1.61-1.6,3.57-4.17,5.35-6.25a24.49,24.49,0,0,0,3.57-6,6.58,6.58,0,0,0-.3-6.25c-.89-1.79-8-19.34-11-26.48-2.89-7-5.84-6-8-6.13s-4.46-.12-6.84-.12a13.11,13.11,0,0,0-9.51,4.46c-3.27,3.57-12.48,12.2-12.48,29.76s12.78,34.52,14.57,36.9,25.15,38.41,60.94,53.86a204.73,204.73,0,0,0,20.34,7.52,48.89,48.89,0,0,0,22.46,1.41c6.86-1,21.11-8.63,24.08-17S329.41,290.25,328.52,288.76Z" fill="#fff" fillRule="evenodd"/></g></g></svg>
            </a>
        </div>

        <Header />

        <div className="w-full h-full md:h-screen bg-hero bg-center bg-no-repeat bg-cover sm:px-0">
            <div className="container mx-auto">
                <div className="w-full h-screen flex items-center justify-center">
                    <div className="flex items-center justify-between flex-col md:flex-row">
                        <div className='mb-6 md:mb-0 w-full md:w-2/4'>
                            <TypewriterEffect words={words} className='text-center md:text-left mb-8'/>
                            <p className='text-white text-2xl font-light leading-9 custom-shadow w-3/4 text-center mx-auto md:mx-0 md:text-left'>More than 80% of our landlords work with us more than 5 years</p>
                        </div>

                        <div className='flex items-center justify-end'>
                            <div className='w-full sm:w-[400px] bg-black/50 rounded-3xl px-6 py-10 text-white'>
                                <p className='text-lg mb-6'>Share your contacts with us to get a free consultation and rent yield estimate of your object</p>
                                <TopForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Services */}
        <div className="w-full mt-20 px-0" id='services'>
            <div className="container mx-auto">
                <h2 className='text-xl sm:text-3xl text-center mt-20 mb-10 md:mb-20 font-semibold'>Vacation Rental Management</h2>

                <div className="flex items-start justify-between flex-col md:flex-row">
                    <div className='w-full md:w-3/4 pr-0 sm:pr-10 mb-10 md:mb-0'>
                        <p className='text-base sm:text-lg leading-8 text-[#0A0A0A] text-center md:text-left'>Frank Porter takes the hassle out of your host management through listing on Airbnb and other short-term rental platforms. We tailor our services to your needs, offering everything from in-house interior design and staging to cleaning and maintenance between stays. Read on for a full overview of each of our services.</p>
                    </div>
                    <div className='pr-0 sm:pr-4 mx-auto md:mx-0'>
                        <Image src={ServicesImage} />
                    </div>
                </div>

                <div className='mt-10 md:-mt-20'>
                    <div className='bg-[#F4F2F1] rounded-xl p-8'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-10'>
                            <div>
                                <div className="flex items-center gap-4 mb-4 flex-col sm:flex-row">
                                    <Image src={Support}/>
                                    <h3 className='text-lg sm:text-2xl font-semibold'>Management Support</h3>
                                </div>
                                <p className='font-light text-[#0A0A0A] text-justify text-sm'>Our guest management team is on-hand to provide 24/7 support, addressing any issues as they arise. Our accounting team deals with payments, platform fees, taxes and insurance; while our admin support team ensures compliance with the Dubai government. Our client support team is also available via our app or by email for any queries.</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-4 mb-4 flex-col sm:flex-row">
                                    <Image src={Listing}/>
                                    <h3 className='text-lg sm:text-2xl font-semibold'>Listing Management</h3>
                                </div>
                                <p className='font-light text-[#0A0A0A] text-justify text-sm'>Our in-house writing team and professional photography team will create the perfect profile to appeal to guests. Using our market knowledge, we can highlight your property’s top features to help it attract utmost attention.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            <div>
                                <div className="flex items-center gap-4 mb-4 flex-col sm:flex-row">
                                    <Image src={Clean}/>
                                    <h3 className='text-lg sm:text-2xl font-semibold'>Cleaning & Maintenance</h3>
                                </div>
                                <p className='font-light text-[#0A0A0A] text-justify text-sm'>Our guest management team is on-hand to provide 24/7 support, addressing any issues as they arise. Our accounting team deals with payments, platform fees, taxes and insurance; while our admin support team ensures compliance with the Dubai government. Our client support team is also available via our app or by email for any queries.</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-4 mb-4 flex-col sm:flex-row">
                                    <Image src={Interior}/>
                                    <h3 className='text-lg sm:text-2xl font-semibold'>Interior Design</h3>
                                </div>
                                <p className='font-light text-[#0A0A0A] text-justify text-sm'>If your property needs furnishing, we offer bespoke interior design services with a rapid turnaround time. From utilities and furniture to art and accessories, we can finish your home to a premium standard so that it looks first-rate and attracts guests all year round.</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-4 mb-4 flex-col sm:flex-row">
                                    <Image src={Revenue}/>
                                    <h3 className='text-lg sm:text-2xl font-semibold'>Estimate Revenuw</h3>
                                </div>
                                <p className='font-light text-[#0A0A0A] text-justify text-sm'>Once you’ve reached out to us, the pricing team will send you a revenue projection based on your property’s size, location and features. While figures can vary, we’ll manage your property so that positive ratings and bookings keep on coming — ensuring that you receive maximum revenue for stays in your home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* How its work */}
        <div className="w-full mt-28 px-4 sm:px-0" id={'process'}>
            <div className="container mx-auto">
                <h2 className='text-xl sm:text-3xl text-center mt-20 mb-4 font-semibold'>See How it Works</h2>
                <p className='w-full sm:w-3/4 text-center mx-auto text-[#0A0A0A] font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur esse facilis inventore nam numquam pariatur perferendis rem! Ab aperiam aut commodi sit. Accusamus amet atque odit officiis ratione repellat sit.</p>

                <div className='mt-14'>
                    <HowItsWorkSteps/>
                </div>
            </div>
        </div>

        {/* Contact */}
        <div className="w-full mt-20 px-4 sm:px-0" id="request">
            <div className="container mx-auto">
                <h2 className='text-xl sm:text-3xl text-center mt-20 mb-4 font-semibold'>Fill The Form Below</h2>
                <p className='w-full sm:w-3/4 text-center mx-auto text-[#0A0A0A] font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur esse facilis inventore nam numquam pariatur perferendis rem! Ab aperiam aut commodi sit. Accusamus amet atque odit officiis ratione repellat sit.</p>

                <div className='mt-20'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className='w-3/4 mx-auto'>
                            <TopForm/>
                        </div>

                        <div>
                            <Image src={ContactImage} alt='contact us'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Contact Details */}
        <div className="w-full mt-20 px-4 sm:px-0">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className='mb-10 md:mb-0'>
                        <h2 className='text-3xl mb-4 font-semibold text-center sm:text-left'>Get in Touch</h2>
                        <p className='text-[#0A0A0A] text-lg font-light text-center sm:text-left w-full sm:w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim.</p>
                    </div>

                    <div>
                        <ul className='space-y-10 sm:space-y-6'>
                            <li className='flex items-center gap-4 flex-col sm:flex-row'>
                                <div className="flex w-10 h-10">
                                    <Image src={LocationImage} alt='Location icon'/>
                                </div>
                                <p>Lorem ipsum dolor sit amet</p>
                            </li>
                            <li className='flex items-center gap-4 flex-col sm:flex-row'>
                                <div className="flex w-10 h-10">
                                    <Image src={CallImage} alt='Location icon'/>
                                </div>
                                <a href="tel:+971507752797">+971 50 775 2797</a>
                            </li>
                            <li className='flex items-center gap-4 flex-col sm:flex-row'>
                                <div className="flex w-10 h-10">
                                    <Image src={MailImage} alt='Location icon'/>
                                </div>
                                <a href="mailto:info@iconiccore.com">info@iconiccore.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <div className="container mx-auto">
                <div className="flex items-center justify-between border-t border-gray-400 my-20 pt-6 flex-col sm:flex-row">
                    <p className='mb-8'>Copyright 2024 All Right Reserved</p>
                    <ul className='flex items-center justify-center gap-4 flex-col sm:flex-row'>
                        <li>
                            <Link href='/#services'>
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link href='/#process'>
                                Process
                            </Link>
                        </li>
                        <li>
                            <Link href='/#request'>
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    </>
}
export default HomePage
