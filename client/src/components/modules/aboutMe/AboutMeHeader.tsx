import PrimaryButton from '@/components/common/PrimaryButton';
import { CheckCircle2Icon } from 'lucide-react';
import Image from 'next/image';
import nexulyzeLogo from "./../../../../public/nexulyze-logo.png"
import cpiLogo from "./../../../../public/cpi-logo.jpg"


const AboutMeHeader = () => {

    return (
        <div className="bg-white rounded-lg shadow-sm">
            <div className='h-80 relative'>
                <div className='h-80 overflow-hidden '>
                    <Image src="/cover.jpg" alt="Cover  Image" height={1080} width={1920} className='h-80 object-cover rounded-t-lg ' />
                </div>
                <div className='w-48 rounded-full border-4 border-white absolute -bottom-12 left-10'>
                    <Image src="/avatar.jpg" alt='Ariyan Rahman Anas' height={1080} width={1920} className='rounded-full' />
                </div>
            </div>

            <div className='mt-12 p-5 flex flex-col md:flex-row items-end justify-between'>
                <div>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-4xl font-semibold'>Ariyan Rahman Anas</h1>
                        <CheckCircle2Icon className='mt-2.5 text-white bg-primary rounded-full' />
                    </div>
                    <p className='text-xl mt-1' >Hafez-e-Quran | Web Engineer | Full Stack Developer | Software Developer ✨</p>
                    <p className='text-lg mb-3'>Chattogram, Bangladesh</p>
                    <PrimaryButton type='button' title='Message' variant='outline' className='border-2 border-primary hover:border-black text-lg text-primary min-w-36' />
                </div>

                <div className='flex items-center gap-3'>
                    <ul className='flex items-center flex-col gap-y-2'>
                        <li className='w-7'>
                            <Image src={nexulyzeLogo} alt="Nexulyze" height={1080} width={1920} />
                        </li>
                        <li className='w-12'>
                            <Image src={cpiLogo} alt="CPI" height={1080} width={1920} />
                        </li>
                    </ul>

                    <ul className='space-y-5'>
                        <li className='text-lg font-semibold'>
                            Nexulyze
                        </li>
                        <li className='text-lg font-semibold'>
                            Chattogram Polytechnic Institute
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default AboutMeHeader