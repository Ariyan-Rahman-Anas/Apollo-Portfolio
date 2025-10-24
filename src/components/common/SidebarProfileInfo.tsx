import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import { LucideFileDown } from 'lucide-react';

const SidebarProfileInfo = ({ expanded }: { expanded: boolean }) => {
  return (
    <div className='space-y-1'>
      <div className={`rounded-full overflow-hidden ${expanded ? "w-28 overflow-hidden" : ""} `}>
        <Image src="/avatar.jpg" alt="User" width={1920} height={1080} />
      </div>
      {expanded && (
        <div>
          <h1 className="text-2xl font-bold text-primary ">Ariyan Rahman Anas</h1>
          <p className='text-muted-foreground mb-4'>A Full Web Stack Developer</p>
          <PrimaryButton title='Check My Resume' type='button' icon={<LucideFileDown />} className='w-full cursor-pointer ' />
        </div>
      )}
    </div>
  );
};
export default SidebarProfileInfo;