import { Event } from "@/lib/definitions"
import Image from "next/image"
import trainingImg from "@/app/images/5639394.jpg"

export default function EventCard(props: Event){
    const date = new Date(props.date)
    return(
        <div className="relative flex flex-row items-center p-6 text-slate-500 border-b-2 border-zinc-300 bg-zinc-100 hover:bg-orange-300/80 hover:border-transperent">
            <div><Image src={trainingImg} alt="card image"width={100} height={100} className="pr-4"/></div>
            <div className="flex flex-col">
            <h2 className="bold text-2xl">{date.toLocaleString()}</h2>
            <span className="text-xl">{props.title}</span>
            <span className="text-s">{props.place}</span>

            </div>
        </div>
    )
}