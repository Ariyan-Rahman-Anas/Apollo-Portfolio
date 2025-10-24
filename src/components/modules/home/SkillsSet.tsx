import SectionHeader from "@/components/common/SectionHeader"
import { Card } from "@/components/ui/card"
import { Bone } from "lucide-react"

const SkillsSet = () => {
    return (
        <section>
            <Card>
                <SectionHeader icon={<Bone />} title="Strength" />
            </Card>
        </section>
    )
}

export default SkillsSet