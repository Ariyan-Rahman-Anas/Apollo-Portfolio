"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Bone } from "lucide-react"
import Image from 'next/image';
import SectionHeader from '@/components/common/SectionHeader';
import { MarqueeSkillI } from '@/types/home.types';
import { marqueeSkills } from '@/constants';

const SkillsSet = () => {
    const SkillCard = ({ skill }: { skill: MarqueeSkillI}) => (
        <div className="flex flex-col items-center gap-1.5 px-4 py-2 min-w-fit">
            <div className='w-10 h-10 relative'>
                <Image src={skill.icon} alt={skill.name} width={40} height={40} className="object-contain" />
            </div>
            <span className="font-medium whitespace-nowrap text-sm">{skill.name}</span>
        </div>
    );

    return (
        <section>
            <Card>
                <SectionHeader icon={<Bone />} title="My Strength" />

                <CardContent>
                    <div className="flex flex-col items-center justify-center gap-8">
                        {/* Left to Right */}
                        <div className="relative overflow-hidden w-full">
                            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

                            <div className="flex gap-4 animate-marquee-right">
                                {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                                    <SkillCard key={`left-${index}`} skill={skill} />
                                ))}
                            </div>
                        </div>

                        {/* Right to Left */}
                        <div className="relative w-full" style={{ overflow: 'hidden' }}>
                            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

                            <div className="flex gap-4 animate-marquee-left">
                                {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                                    <SkillCard key={`right-${index}`} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>

            </Card>

            <style jsx>{`
                @keyframes marquee-left {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }

                @keyframes marquee-right {
                    from {
                        transform: translateX(-50%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                .animate-marquee-left {
                    animation: marquee-left 40s linear infinite;
                    width: max-content;
                }

                .animate-marquee-right {
                    animation: marquee-right 40s linear infinite;
                    width: max-content;
                }

                .animate-marquee-left:hover,
                .animate-marquee-right:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}
export default SkillsSet