import SectionHeader from "@/components/common/SectionHeader"
import { Card } from "@/components/ui/card"
import { Pin } from "lucide-react"

const Featured = () => {
    return (
        <section>
            <Card>
                <SectionHeader icon={<Pin />} title="Featured" />
            </Card>
        </section>
    )
}
export default Featured