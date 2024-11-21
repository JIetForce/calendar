import { eventIconColors } from "@/constants/calendar";
import { format } from "date-fns";
import { createRef } from "react";
import { Event, EventRefs } from "@/types/types";

type EventsListProps = {
  day: Date;
  dayEvents: Event[];
  selectedEventTypes: string[];
  handleEventClick: (event: Event, ref: EventRefs) => void;
  eventRefs: any;
};
const EventsList = ({
  day,
  dayEvents,
  selectedEventTypes,
  handleEventClick,
  eventRefs,
}: EventsListProps) => {
  return (
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
              onClick={() => handleEventClick(event, eventRefs.current[refKey])}
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
  );
};

export default EventsList;
