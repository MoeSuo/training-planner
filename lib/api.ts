
import { Event, EventTypes } from "./definitions";

class Api {
  events: Event[] = [
    {
      id: 1,
      type: EventTypes.training,
      date: "2023-11-01T21:12:07",
      place: "Ratina stadium",
      title: "Running",
      description: "",
      attachments: [],
    },
    {
      id: 24546,
      type: EventTypes.game,
      date: "2023-11-23T21:12:07",
      place: "Ratina stadium",
      title: "November competition first round",
      description: "I'm baby pabst cray irony DIY yuccie cardigan art party cred freegan enamel pin. Flannel organic tilde +1. Bushwick cold-pressed normcore, crucifix venmo edison bulb cred organic church-key jianbing blackbird spyplane tattooed health goth distillery tacos. Viral cloud bread snackwave lomo skateboard cronut craft beer tumeric heirloom put a bird on it bushwick. Cornhole roof party vibecession trust fund banjo, farm-to-table thundercats.",
      attachments: [],
    },
    {
      id: 3,
      type: EventTypes.game,
      date: "2023-11-30T21:12:07",
      place: "Ratina stadium",
      title: "November competition second round",
      description: "",
      attachments: [],
    },
    {
      id: 5,
      type: EventTypes.training,
      date: "2023-10-05T21:12:07",
      place: "Ratina stadium",
      title: "HIIT",
      description: "",
      attachments: [],
    },
    {
      id: 4,
      type: EventTypes.game,
      date: "2023-10-10T21:12:07",
      place: "Ratina stadium",
      title: "October competition first round",
      description: "",
      attachments: [],
    },
    {
      id: 6,
      type: EventTypes.game,
      date: "2023-10-10T21:12:07",
      place: "Ratina stadium",
      title: "October competition second round",
      description: "",
      attachments: [],
    },
  ];

  getEvents(): Promise<Event[]> {
    return new Promise((resolve, reject) => {
      resolve(this.events);
    })
      
  }

  getEvent(id:string): Event {
    return this.events.filter((event: Event)=>event.id == id)[0]
  }

  deleteEvent(id: string): Event {
    const deletedEvent = this.getEvent(id);
    const  undeletedEvents = this.events.filter((event:Event)=>event.id !== id)
    console.log('new events', undeletedEvents);
    this.events = undeletedEvents;
    
    return deletedEvent;
  }

  updateEvent(event: Event): Event{

    let eventIndex = this.events.findIndex((e)=>e.id== event.id);
    this.events[eventIndex] = {...this.events[eventIndex], ...event};
    console.warn('events: ', this.events);

    return this.events[eventIndex];
  }

  createEvent(event: Event): Event {
    const lastId = this.events.sort((a, b)=>Number(b.id) - Number(a.id))[0].id;
    console.log('Last Id',lastId)
    const newEvent = {
      ...event,
      id: Number(lastId) + 1,
    }
    this.events.push(newEvent);
    console.warn("Event added", this.events);
    return event;
  }
  
}

const api = new Api();

export default api;
