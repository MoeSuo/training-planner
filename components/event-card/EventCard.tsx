import { Event } from "@/lib/definitions";
import Image from "next/image";
import trainingImg from "@/app/images/21049.jpg";
import Link from "next/link";
import IconButton from "../icon-btn/IconButton";
import { DeleteIcon, EditIcon } from "../icons/Icons";

type EvenetCardProps = Event & {
  onDelete: (id: string)=>void;
  onEdit: (id: string)=>void;
} ;

export default function EventCard(props: EvenetCardProps) {
  const date = new Date(props.date);
  return (
    <div className="relative flex flex-row p-6 text-slate-500 border-b-2 border-zinc-300 bg-zinc-100 hover:bg-orange-300/80 hover:border-transperent">
      <div className="relative overflow-hidden shrink-0">
        <Image
          src={trainingImg}
          alt="card image"
          width={200}
          height={100}
          className="pr-4 object-fill"
        />
      </div>
      <div className="flex flex-col gap-2">
      <Link href={'/events/'+ props.id} className="text-xl">
        <h2 className="bold text-2xl">{date.toLocaleString()}</h2>
        <h2 className="">{props.title}</h2>
        
        <span className="text-s">{props.place}</span>

        </Link>
        <div className="flex gap-4">
        <IconButton
            onClick={() => props.onDelete(props.id as string)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => props.onEdit(props.id as string)}>
            <EditIcon 
            />
          </IconButton>
        </div>
      </div>
     
    </div>
  );
}
