"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import SectionTitle from "@/components/section-title/SectionTitle";
import { Event } from "@/lib/definitions";
import { DeleteIcon, EditIcon } from "@/components/icons/Icons";
import IconButton from "@/components/icon-btn/IconButton";
import { useRouter } from "next/navigation";


export default function Event({ params }: { params: { event: string } }) {
  const id = params.event;
  const router = useRouter();
  console.log("Event ID:", id);
  const [eventData, setEventData] = useState<Event | null>(null);

  useEffect(() => {
    if (!id) return;
    const event = api.getEvent(id);
    console.log("Event Data", event);
    if (event) {
      setEventData(event);
    } else {
      console.error("Event data is null");
    }
  }, [id]);

  const deleteEventHandler = (id: string) => {
    api.deleteEvent(id);
    router.push("/events");
    console.log("element deleted", id);
  };

  const editFormRedirect = (id: string) => {
    router.push("/events/" + id + "/edit");
  };

  return (
    <main className="relative min-h-screen p-8 ">
      <div>
        <div className="border-b-8 w-4/6 border-orange-500 flex flex-col gap-2 mb-4">
          <SectionTitle>{eventData?.title}</SectionTitle>
          <h2 className="text-3xl text-slate-500">{eventData?.place}</h2>
          <span>{eventData?.date.toLocaleString()}</span>
        </div>
        <div className="mb-4">
          <IconButton
            onClick={() => deleteEventHandler(eventData?.id as string)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => editFormRedirect(eventData?.id as string)}>
            <EditIcon />
          </IconButton>
        </div>
      </div>
      <p>{eventData?.description}</p>
    </main>
  );
}
