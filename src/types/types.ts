export type EventType =
  | "Meeting with an expert"
  | "Question-answer"
  | "Conference"
  | "Webinar";

export type Event = {
  date: Date;
  type: EventType;
  title: string;
  description: string;
  time: string;
  location: string;
};

export type EventRefs = {
  [key: string]: React.RefObject<any>;
};
