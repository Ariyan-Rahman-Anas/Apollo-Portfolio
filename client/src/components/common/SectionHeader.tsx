import { SectionHeaderPropsI } from "@/types/common.types"
import { CardHeader } from "../ui/card"

const SectionHeader = ({ icon, title }: SectionHeaderPropsI) => {
    return (
        <CardHeader className="flex items-center gap-2">
            {icon}
            <h1 className="font-semibold text-xl">{title}</h1>
        </CardHeader>
    )
}
export default SectionHeader