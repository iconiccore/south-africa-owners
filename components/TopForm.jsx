'use client'

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const schema = z.object({
    name: z.string().min(2, { message: 'Name is required!' }),
    phone: z.string().min(10, { message: 'Mobile Number is required!' }),
    email: z.string().email({ message: "Must be a valid email" })
});

const TopForm = () => {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const formMethods = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            phone: ""
        },
    });

    const { register, handleSubmit, setValue: setFormValue, reset, formState: { errors } } = formMethods;

    const submitForm = async (data) => {
        setIsLoading(true);

        try {
            const res = await fetch('/api/create-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                toast({
                    variant: "destructive",
                    description: "Something went wrong.",
                });
                throw new Error('Something went wrong.');
            }

            await res.json();

            toast({
                title: "Thanks for contacting us!",
                description: "We will get back to you shortly."
            });

            reset();

        } catch (e) {
            console.error(e);
            toast({
                variant: "destructive",
                description: "Something went wrong.",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(submitForm)} className='space-y-8'>
                <div className='w-full'>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name")}
                        className={`text-black flex h-10 w-full border-b border-black px-3 py-2 rounded-md ring-offset-background placeholder:text-muted-foreground focus:ring-black focus-visible:ring-2 focus-visible:ring-transparent focus-visible:outline-none ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div className='w-full'>
                    <input
                        type="text"
                        placeholder="Email"
                        {...register("email")}
                        className={`text-black flex h-10 w-full border-b border-black px-3 py-2 rounded-md ring-offset-background placeholder:text-muted-foreground focus:ring-black focus-visible:ring-2 focus-visible:ring-transparent focus-visible:outline-none ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className='w-full'>
                    <PhoneInput
                        country={'ae'}
                        value={value}
                        onChange={(phone) => {
                            setValue(phone);
                            setFormValue('phone', phone);
                        }}
                        enableSearch={true}
                        containerStyle={{
                            color: 'black',
                            width: '100%',
                            height: '2.5rem',
                        }}
                        inputStyle={{
                            borderRadius: '0.375rem',
                            width: '100%',
                            height: '2.5rem',
                        }}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
                <div className="flex items-center justify-end !mt-10">
                    <button type="submit" className='inline-flex items-center justify-center gap-2 bg-primary rounded-xl px-4 py-2 text-white font-normal'>
                        <span>{isLoading ? 'Sending...' : 'Send Inquiry'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
            </form>
        </FormProvider>
    );
}
export default TopForm
