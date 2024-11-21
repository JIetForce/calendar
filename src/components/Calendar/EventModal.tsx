import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { Event } from "@/types/types";
import { eventTypeColors } from "@/constants/calendar";

type EventModalProps = {
  selectedEvent: Event;
  setSelectedEvent: (event: Event | null) => void;
  popupPosition: {
    top: number;
    left: number;
  };
};

const EventModal = ({
  selectedEvent,
  setSelectedEvent,
  popupPosition,
}: EventModalProps) => (
  <Dialog.Root
    open={!!selectedEvent}
    onOpenChange={() => setSelectedEvent(null)}
  >
    <Dialog.Portal>
      <Dialog.Content
        style={{
          top: popupPosition.top,
          left: popupPosition.left,
          boxShadow: "0px 4px 16px 0px #00000066",
        }}
        className="p-6 rounded-lg border-none outline-none bg-[#131315] w-[360px] h-[300px] absolute"
      >
        <Dialog.Title className="text-[32px] leading-8 font-extralight border-b border-red-secondary pb-4">
          Event
        </Dialog.Title>
        <Dialog.Title className="text-xl leading-8 font-medium pt-4">
          {selectedEvent.type}
        </Dialog.Title>
        <Dialog.Description className="mt-2 text-sm font-extralight max-h-16 h-16 overflow-scroll">
          {selectedEvent.description}
        </Dialog.Description>
        <p className="mt-4 text-gray-primary">
          {selectedEvent.location || "Unknown location"}
        </p>
        <div className="flex items-center mt-4 text-sm justify-between">
          <p
            className={`font-light ${
              eventTypeColors[selectedEvent.type]?.color
            }`}
          >
            {format(selectedEvent.date, "dd MMM, HH:mm")}
          </p>
          <p
            className={`px-4 h-7 rounded-full flex items-center text-sm font-medium ${
              eventTypeColors[selectedEvent.type]?.background
            } ${eventTypeColors[selectedEvent.type]?.color}`}
          >
            {selectedEvent.type}
          </p>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default EventModal;
