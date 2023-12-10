"use client";
import Form from "@/components/form/Form";
import api from "@/lib/api";
import { Event } from "@/lib/definitions";
// import SectionTitle from "@/components/section-title/SectionTitle";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function EditEventPage({
  params,
}: {
  params: { event: string };
}) {
  const id = params.event;
  const router = useRouter();
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

  const editEventHandler = (event: Event) => {
    if (!event) return;
    api.updateEvent(event);

    setEventData(event);
  };

  return (
    <main className={cn("relative min-h-screen p-8", textFont.className)}>
      <div>
        {/* <SectionTitle>Create Your Event</SectionTitle> */}

        <Form 
        onSubmit={editEventHandler} 
        initialFields = {eventData as Event} 
        onSuccess={()=>router.push('/events/' + eventData?.id )}
        />
      </div>
    </main>
  );
}
