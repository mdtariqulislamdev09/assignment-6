import React from 'react';
import footerLogo from '@/assets/logo.png'
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className='bg-[#090A0D] p-7'>
            <div className='container mx-auto items-center footer flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <Image src={footerLogo}
                        alt='nav logo'
                        width={40}
                        height={40}
                    />
                    <span className='font-bold text-2xl'>FITLOG</span>
                </div>

                <p className='text-[#6B7280] font-medium text-[11px] text-center'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    );
};

export default Footer;