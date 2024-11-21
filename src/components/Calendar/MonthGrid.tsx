import React, { useState, useRef } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  addDays,
  subDays,
  isSameDay,
} from "date-fns";

import EventModal from "./EventModal";
import { Event, EventRefs } from "../../types/types";
import { mockEvents } from "@/mocks/mockEvents";
import { DAYS } from "@/constants/calendar";
import EventsList from "./EventsList";

type Props = {
  month: Date;
  selectedEventTypes: string[];
};

const MonthGrid = ({ month, selectedEventTypes }: Props) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);
  const startDate = subDays(monthStart, monthStart.getDay());
  const endDate = addDays(monthEnd, 6 - monthEnd.getDay());
  const daysToDisplay = eachDayOfInterval({ start: startDate, end: endDate });

  const getEventsForDay = (date: Date) => {
    return mockEvents.filter((event) => isSameDay(event.date, date));
  };

  const eventRefs = useRef<EventRefs>({});

  const handleEventClick = (event: Event, ref: any) => {
    setSelectedEvent(event);

    if (ref?.current) {
      const rect = ref.current.getBoundingClientRect();
      const popupHeight = 300;
      const popupWidth = 360;
      const padding = 5;

      let newTop = rect.bottom + window.scrollY + padding;
      let newLeft = rect.left + window.scrollX;

      const spaceBelow =
        window.innerHeight - (rect.bottom + popupHeight + padding);
      const spaceAbove = rect.top - popupHeight - padding;

      if (spaceBelow < 0 && spaceAbove > 0) {
        newTop = rect.top + window.scrollY - popupHeight - padding;
      }

      const spaceRight = window.innerWidth - (newLeft + popupWidth);
      const spaceLeft = newLeft;

      if (spaceRight < 0) {
        newLeft = Math.max(window.innerWidth - popupWidth - padding, padding);
      } else if (spaceLeft < 0) {
        newLeft = padding;
      }

      setPopupPosition({ top: newTop, left: newLeft });
    }
  };

  return (
    <>
      <div className="p-1 rounded-lg max-w-[360px] max-h-[376px] h-full w-full">
        <h2 className="text-[32px] leading-8 font-extralight mb-6">
          {format(month, "MMMM")}
        </h2>
        <div className="grid grid-cols-7 gap-1">
          {DAYS.map((day) => (
            <div
              key={day}
              className="text-center font-light h-8 text-gray-primary"
            >
              {day}
            </div>
          ))}
          {daysToDisplay.map((day) => {
            const isCurrentMonth = isSameMonth(day, month);

            return (
              <div
                key={format(day, "yyyy-MM-dd")}
                className={`gray-primary flex flex-col items-center justify-start h-10 relative ${
                  isCurrentMonth ? "text-white-primary" : "text-gray-primary"
                }`}
              >
                <span className="text-sm">{format(day, "d")}</span>
                <EventsList
                  day={day}
                  dayEvents={getEventsForDay(day)}
                  selectedEventTypes={selectedEventTypes}
                  handleEventClick={handleEventClick}
                  eventRefs={eventRefs}
                />
              </div>
            );
          })}
        </div>
      </div>

      {selectedEvent && (
        <EventModal
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          popupPosition={popupPosition}
        />
      )}
    </>
  );
};

export default MonthGrid;
