import React, { useMemo } from "react";
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
import { mockEvents } from "@/mocks/mockEvents";
import { DAYS } from "@/constants/calendar";
import EventsList from "./EventsList";

type Props = {
  month: Date;
  selectedEventTypes: string[];
};

const MonthGrid = ({ month, selectedEventTypes }: Props) => {
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);
  const startDate = subDays(monthStart, monthStart.getDay());
  const endDate = addDays(monthEnd, 6 - monthEnd.getDay());

  const daysToDisplay = useMemo(
    () => eachDayOfInterval({ start: startDate, end: endDate }),
    [startDate, endDate]
  );

  const getEventsForDay = (date: Date) => {
    return mockEvents.filter((event) => isSameDay(event.date, date));
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

                {isCurrentMonth && (
                  <EventsList
                    day={day}
                    dayEvents={getEventsForDay(day)}
                    selectedEventTypes={selectedEventTypes}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MonthGrid;
