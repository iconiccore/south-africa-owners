'use client';

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Step1Image from "@/public/images/step1.png"
import Step2Image from "@/public/images/step2.png"
import Step3Image from "@/public/images/step3.png"
import LineUpImage from "@/public/images/line-up.png"
import LineDownImage from "@/public/images/line-down.png"
import Image from "next/image";

const HowItsWorkSteps = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls1.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
            controls2.start({ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } });
            controls3.start({ opacity: 1, y: 0, transition: { delay: 1, duration: 0.5 } });
        }
    }, [inView, controls1, controls2, controls3]);

    return <>
        <div className='mb-24 mt-32 hidden sm:block'>
            <div className="grid grid-cols-3 gap-14 relative">
                <div className='text-center flex flex-col items-center justify-start relative'>
                    <div className="flex items-center justify-center bg-[#E9E9E9] w-[90px] h-[90px] rounded-full p-8 mb-10">
                        <Image src={Step1Image} alt='Step 1'/>
                    </div>
                    <div className='absolute h-full w-[80%] left-[75%] -top-[10%] md:w-[90%] md:left-[62%] md:-top-[50%]'>
                        <Image src={LineUpImage} alt='Line Up'/>
                    </div>
                </div>

                <div className='text-center flex flex-col items-center justify-start relative'>
                    <div className="flex items-center justify-center bg-[#F25353] w-[90px] h-[90px] rounded-full p-8 mb-10">
                        <Image src={Step2Image} alt='Step 2'/>
                    </div>

                    <div className='absolute h-full w-[80%] left-[75%] -bottom-[60%] md:w-[90%] md:left-[62%] md:-bottom-[50%]'>
                        <Image src={LineDownImage} alt='Line down'/>
                    </div>
                </div>

                <div className='text-center flex flex-col items-center justify-start'>
                    <div className="flex items-center justify-center bg-[#E9E9E9] w-[90px] h-[90px] rounded-full p-6 mb-10">
                        <Image src={Step3Image} alt='Step 3'/>
                    </div>
                </div>
            </div>
        </div>

        <div ref={ref}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-8 md:gap-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls1}
                    className='text-center flex flex-col items-center justify-start'
                >
                    <div className="flex sm:hidden items-center justify-center bg-[#E9E9E9] w-[90px] h-[90px] rounded-full p-8 mb-6">
                        <Image src={Step1Image} alt='Step 1'/>
                    </div>
                    <h3 className='font-bold text-lg mb-4'>List Your Property</h3>
                    <p className='text-[#0A0A0A] font-light'>Property owners fill out an online form to list their property. This includes providing a description, photos, and contact details.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls2}
                    className='text-center flex flex-col items-center justify-start'
                >
                    <div className="flex sm:hidden items-center justify-center bg-[#F25353] w-[90px] h-[90px] rounded-full p-8 mb-10">
                        <Image src={Step2Image} alt='Step 2'/>
                    </div>
                    <h3 className='font-bold text-lg mb-4'>Evaluation and Approval</h3>
                    <p className='text-[#0A0A0A] font-light'>Our team reviews your property and contacts you for evaluation and approval. This stage involves a property visit and verification of details.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls3}
                    className='text-center flex flex-col items-center justify-start'
                >
                    <div className="flex sm:hidden items-center justify-center bg-[#E9E9E9] w-[90px] h-[90px] rounded-full p-8 mb-6">
                        <Image src={Step3Image} alt='Step 3'/>
                    </div>
                    <h3 className='font-bold text-lg mb-4'>Promotion and Rental</h3>
                    <p className='text-[#0A0A0A] font-light'>Once approved, your property is advertised on our platform and showcased to potential tenants. We handle all aspects of the rental process, including contracts and payments.</p>
                </motion.div>
            </div>
        </div>
    </>
}
export default HowItsWorkSteps
