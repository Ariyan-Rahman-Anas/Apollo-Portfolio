import SectionHeader from "@/components/common/SectionHeader"
import { Card, CardContent } from "@/components/ui/card"
import { statsData } from "@/constants"
import { ChartLine } from "lucide-react"
import Image from "next/image"

const CareerStats = () => {
    return (
        <section>
            <Card>
                <SectionHeader icon={<ChartLine />} title="Career Stats" />
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        statsData?.map(({ title, subtitle, description, icon }, idx) => <div key={idx} className="group space-y-4 text-muted-foreground bg-muted/50 hover:bg-primary/20 p-6 rounded-md duration-500 ">
                            <div className="flex items-end gap-2">
                                <div className="flex items-center gap-4">
                                    <div className="w-14">
                                        <Image src={icon} alt="icon" />
                                    </div>
                                    <h1 className="text-5xl font-semibold text-black duration-500">{title} </h1>
                                </div>
                                {subtitle && <h2 className="text-md font-semibold mb-1">{subtitle}</h2>}
                            </div>
                            <p className="text-lg font-semibold">{description} </p>
                        </div>)
                    }

                </CardContent>
            </Card>
        </section>
    )
}
export default CareerStats