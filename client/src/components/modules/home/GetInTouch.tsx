import SectionHeader from "@/components/common/SectionHeader"
import { Card, CardContent } from "@/components/ui/card"
import { getInTouchLinks } from "@/constants"
import { SmartphoneNfc } from "lucide-react"
import Link from "next/link"

const GetInTouch = () => {

    return (
        <section>
            <Card className="space-y-4">
                <SectionHeader icon={<SmartphoneNfc />} title="Get in touch" />

                <CardContent className="space-y-5">
                    <div className="flex items-center justify-center gap-4">
                        {getInTouchLinks.map(({ color, icon, url }, idx) => <Link
                            key={idx}
                            href={url}
                            target="_blank"
                            className={`h-14 w-14 rounded-full bg-muted-foreground/10 ${color} text-black hover:text-white flex items-center justify-center transition-colors duration-200`}
                        >
                            <span>{icon}</span>
                        </Link>
 )}
                    </div>

                    <p className="text-muted-foreground">
                        Let’s create something impactful together. Feel free to reach out on any of the platforms above. I’m excited to connect and collaborate.
                    </p>
                </CardContent>
            </Card>
        </section>
    )
}
export default GetInTouch