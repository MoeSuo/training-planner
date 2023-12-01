const eventTypes = ["Training", "Game"];

export type Event = {
  id: number | string;
  type: EventTypes;
  title: string;
  date: string | Date;
  place: string;
  description: string;
  attachments: Media[];
};
// export type FormFields = {
//   id: string;
//   type: EventTypes;
//   name: string,
//   date: string | Date;
//   place: string;
//   description: string,
// };

export type Media = {
  secure_url: string;
  thumbnail_url: string;
  resource_type: string;
  id: string;
};

export enum EventTypes {
  training = "Training",
  game = "Game",
}
