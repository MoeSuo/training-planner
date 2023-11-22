import { Event } from "@/lib/definitions"

export default function EventCard(props: Event){
    return(
        <div className="relative flex flex-col p-6 border-b-2 border-zinc-300 bg-zinc-100 hover:bg-orange-100 hover:border-transperent">
            <h2 className="bold text-2xl">{props.date}</h2>
            <span className="text-xl">{props.name}</span>
            <span className="text-s">{props.place}</span>
        </div>
    )
}