import React, { useState, createRef, useRef } from "react";
import { eventIconColors } from "@/constants/calendar";
import { format } from "date-fns";
import { Event, EventRefs } from "@/types/types";
import EventModal from "./EventModal";

type EventsListProps = {
  day: Date;
  dayEvents: Event[];
  selectedEventTypes: string[];
};

const EventsList = ({
  day,
  dayEvents,
  selectedEventTypes,
}: EventsListProps) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [isCalculatingPosition, setIsCalculatingPosition] = useState(false);
  const eventRefs = useRef<EventRefs>({});
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleEventClick = (event: Event, ref: any) => {
    setSelectedEvent(event);
    setIsCalculatingPosition(true);

    if (ref?.current) {
      const rect = ref.current.getBoundingClientRect();
      const popupWidth = 360;
      const padding = 5;

      setTimeout(() => {
        const popupHeight = popupRef.current?.offsetHeight || 0;

        let newTop = rect.bottom + window.scrollY + padding;
        let newLeft = rect.left + window.scrollX;

        const spaceBelow =
          window.innerHeight - (rect.bottom + popupHeight + padding);
        const spaceAbove = rect.top - popupHeight - padding;

        if (spaceBelow < 0 && spaceAbove > 0) {
          newTop = rect.top + window.scrollY - popupHeight - padding - 30;
        }

        const spaceRight = window.innerWidth - (newLeft + popupWidth);
        const spaceLeft = newLeft;

        if (spaceRight < 0) {
          newLeft = Math.max(window.innerWidth - popupWidth - padding, padding);
        } else if (spaceLeft < 0) {
          newLeft = padding;
        }

        setPopupPosition({ top: newTop, left: newLeft });
        setIsCalculatingPosition(false);
      }, 0);
    }
  };

  return (
    <>
      <div className="flex mt-1 gap-1">
        {dayEvents.slice(0, 4).map((event, index) => {
          const refKey = `${format(day, "yyyy-MM-dd")}-${index}`;
          if (!eventRefs.current[refKey]) {
            eventRefs.current[refKey] = createRef();
          }
          if (
            !selectedEventTypes.length ||
            selectedEventTypes.includes(event.type)
          ) {
            return (
              <button
                ref={eventRefs.current[refKey]}
                onClick={() =>
                  handleEventClick(event, eventRefs.current[refKey])
                }
                key={refKey}
                className={`w-[6px] h-[6px] rounded-full ${
                  eventIconColors[event.type]
                }`}
              ></button>
            );
          }
          return null;
        })}
        {dayEvents.length > 4 && (
          <span className="text-xs">+{dayEvents.length - 4}</span>
        )}
      </div>

      {selectedEvent && (
        <EventModal
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          popupPosition={popupPosition}
          popupRef={popupRef}
          isHidden={isCalculatingPosition}
        />
      )}
    </>
  );
};

export default EventsList;
