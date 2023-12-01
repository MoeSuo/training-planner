import { Event, EventTypes } from "./definitions";

class Api {
  events: Event[] = [
    {
      id: 1,
      type: EventTypes.training,
      date: "2023-11-01T21:12:07.610Z",
      place: "Ratina stadium",
      title: "Running",
      description: "",
      attachments: [],
    },
    {
      id: 2,
      type: EventTypes.game,
      date: "2023-11-23T21:12:07.610Z",
      place: "Ratina stadium",
      title: "November competition first round",
      description: "",
      attachments: [],
    },
    {
      id: 3,
      type: EventTypes.game,
      date: "2023-11-30T21:12:07.610Z",
      place: "Ratina stadium",
      title: "November competition second round",
      description: "",
      attachments: [],
    },
    {
      id: 5,
      type: EventTypes.training,
      date: "2023-10-05T21:12:07.610Z",
      place: "Ratina stadium",
      title: "HIIT",
      description: "",
      attachments: [],
    },
    {
      id: 4,
      type: EventTypes.game,
      date: "2023-10-10T21:12:07.610Z",
      place: "Ratina stadium",
      title: "October competition first round",
      description: "",
      attachments: [],
    },
    {
      id: 6,
      type: EventTypes.game,
      date: "2023-10-10T21:12:07.610Z",
      place: "Ratina stadium",
      title: "October competition second round",
      description: "",
      attachments: [],
    },
  ];

  getEvents(): Event[] {
    return this.events;
  }

  createEvent(event: Event): Event {
    this.events.push(event);
    console.warn("Event added", this.events);
    return event;
  }
}

const api = new Api();

export default api;
