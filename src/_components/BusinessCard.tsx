import Link from "next/link"
interface BusinessCardProps {
    title: string;
    id: string;
}
export const BusinessCard = ({title, id}: BusinessCardProps) => {
    return(
        <div className="bg-white w-96 h-96 rounded-2xl p-4 box-border">
            <h2 className="text-black font-bold text-3xlgi">The best deals on labubus and much more.</h2>
            <h1 className="text-red-500 text-xl">{title}</h1>
            <Link href={`/business/${id}`} className="text-red-500 hover:text-white hover:bg-red-500">Explore Business</Link>
        </div>
    )
}