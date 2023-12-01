"use client";

import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Event } from "@/lib/definitions";
import { differenceInCalendarDays } from "date-fns";
import EventCard from "@/components/event-card/EventCard";
import api from "@/lib/api";
import SectionTitle from "@/components/section-title/SectionTitle";
import LinkButton from "@/components/button-link/LinkButton";

function isSameDay(a: number | Date, b: number | Date) {
  return differenceInCalendarDays(a, b) === 0;
}

const headingFont = localFont({
  src: "../../public/fonts/UNI North.otf",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type CalendarProps = {
  view: string;
  date: any;
};

function tileContent({ date, view }: CalendarProps) {
  // Add class to tiles in month view only
  if (view === "month") {
    // console.log(view, date);
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (
      api.events.find((dDate) => {
        const sameDay = isSameDay(new Date(dDate.date), date);
        // console.log(sameDay, dDate.date, date);
        return sameDay;
      })
    ) {
      // return (<div className="w-[5px] h-[5px] rounded-full bg-cyan-500 absolute bottom-2px left-1/2 translate-x-[-50%]"></div>);
      return (
        <>
          <div className="bg-cyan-500 absolute inset-0 opacity-20"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-cyan-500 absolute bottom-2px left-1/2 translate-x-[-50%]"></div>
        </>
      );
    }
  }
}

const EventsPage = () => {
  const { userId } = useAuth();
  const { user } = useUser();
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  return (
    <main className="relative min-h-screen p-8 ">
      <div className="pt-16">
      <SectionTitle>Tapahtumakalenteri</SectionTitle>
   <div className="relative pt-4 pb-8">
        <LinkButton href={'/sessions'}>Luo uusi tapahtuma</LinkButton>

   </div>

      <div className=" w-full flex flex-row gap-4">
        <div className="w-1/2">
        <Calendar
          locale="en-EN"
          onChange={setSelectedDate}
          value={selectedDate}
          tileContent={tileContent}
          />

        </div>
        <div className={cn(
          "day-events flex flex-col gap-4 w-full",
          textFont.className
          )}>
          {
            api.events
            .filter((event:Event)=>isSameDay(new Date(event.date), selectedDate as Date))
            .map((event:Event) => (
              <EventCard key={event.id} {...event}></EventCard>
              ))}
        </div>
      </div>
              </div>
    </main>
  );
};

export default EventsPage;
