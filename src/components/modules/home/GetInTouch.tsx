import SectionHeader from "@/components/common/SectionHeader"
import { Card } from "@/components/ui/card"
import { SmartphoneNfc } from "lucide-react"

const GetInTouch = () => {
    return (
        <section>
            <Card>
                <SectionHeader icon={<SmartphoneNfc />} title="Get in touch" />
            </Card>
        </section>
    )
}
export default GetInTouch