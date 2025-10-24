import Image from "next/image"

const Banner = () => {
    return (
        <div className="shadow rounded-md h-full overflow-hidden ">
            <Image
                src="/cover.jpg"
                alt="Banner" width={1920} height={1080} className="rounded-md h-full md:h-[450px] object-cover " />
        </div>
    )
}
export default Banner