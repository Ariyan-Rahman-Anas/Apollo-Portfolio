import SectionHeader from "@/components/common/SectionHeader"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { expertiseData } from "@/constants"
import { Medal } from "lucide-react"
import Image from "next/image"

const Expertise = () => {

    return (
        <section>
            <Card>
                <SectionHeader icon={<Medal />} title="Expertise" />

                <CardContent>
                    <Accordion type="single" collapsible className="w-full" defaultValue="0">
                        {expertiseData.map(({ icon, title, description }, idx) => (
                            <AccordionItem key={idx} value={idx.toString()}>
                                <AccordionTrigger className="flex items-center justify-start">
                                    <div className="w-11">
                                        <Image src={icon} alt={title} />
                                    </div>
                                    <h1 className="text-lg">{title}</h1>
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p className="text-base">{description}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>

            </Card>
        </section>
    )
}
export default Expertise