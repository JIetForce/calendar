import { EventTypeColors } from "./types";

export const eventTypeColors: EventTypeColors = {
  "Meeting with an expert": {
    background: "bg-red-secondary",
    color: "text-red-primary",
    selectedBg: "bg-red-primary",
    selectedColor: "text-black",
  },
  "Question-answer": {
    background: "bg-green-secondary",
    color: "text-green-primary",
    selectedBg: "bg-green-primary",
    selectedColor: "text-black",
  },
  Conference: {
    background: "bg-yellow-secondary",
    color: "text-yellow-primary",
    selectedBg: "bg-yellow-primary",
    selectedColor: "text-black",
  },
  Webinar: {
    background: "bg-blue-secondary",
    color: "text-blue-primary",
    selectedBg: "bg-blue-primary",
    selectedColor: "text-black",
  },
};

export const filters = [
  "Meeting with an expert",
  "Question-answer",
  "Conference",
  "Webinar",
];

export const eventIconColors = {
  "Meeting with an expert": "bg-red-primary",
  "Question-answer": "bg-green-primary",
  Conference: "bg-yellow-primary",
  Webinar: "bg-blue-primary",
};

export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
