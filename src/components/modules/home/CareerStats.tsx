import SectionHeader from "@/components/common/SectionHeader"
import { Card, CardContent } from "@/components/ui/card"
import { ChartLine, Cpu, FileBadge, FolderOpenDot, Ribbon } from "lucide-react"

const CareerStats = () => {

    const statsData = [
        {
            id: 1,
            title: 2,
            subtitle: "Years",
            description: "Experiences",
            icon: <Ribbon size={40} />
        },
        {
            id: 2,
            title: 5,
            description: "Certificates",
            icon: <FileBadge size={40} />
        },
        {
            id: 3,
            title: 2,
            description: "Technologies",
            icon: <Cpu size={40} />
        },
        {
            id: 4,
            title: 2,
            description: "Projects",
            icon: <FolderOpenDot size={40} />
        },
    ]

    return (
        <section>
            <Card>
                <SectionHeader icon={<ChartLine />} title="Career Stats" />
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        statsData?.map(({ title, subtitle, description, icon }, idx) => <div key={idx} className="group space-y-4 text-muted-foreground hover:text-white bg-muted/50 hover:bg-primary p-6 rounded-md duration-500 ">
                            <div className="flex items-end gap-2">
                                <div className="flex items-center gap-4">
                                    <div className="">
                                        {icon}
                                    </div>
                                    <h1 className="text-4xl font-semibold text-black group-hover:text-white duration-500">{title} </h1>
                                </div>
                                {subtitle && <h2 className="text-md font-semibold">{subtitle}</h2>}
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