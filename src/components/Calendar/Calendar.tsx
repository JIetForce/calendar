"use client";

import React, { useState } from "react";
import { startOfMonth, addMonths, format } from "date-fns";
import MonthGrid from "./MonthGrid";
import EventTypeFilter from "./EventTypeFilter";

const Calendar = () => {
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([]);

  const months = Array.from({ length: 6 }, (_, i) =>
    addMonths(startOfMonth(new Date()), i)
  );

  const handleEventTypeChange = (type: string): void => {
    setSelectedEventTypes(
      selectedEventTypes.includes(type)
        ? selectedEventTypes.filter((t) => t !== type)
        : [...selectedEventTypes, type]
    );
  };

  return (
    <div>
      <h1 className="text-[40px] leading-10 font-extralight mb-4">Calendar</h1>
      <EventTypeFilter
        selectedTypes={selectedEventTypes}
        onSelectType={handleEventTypeChange}
      />
      <div className="calendar-grid mt-8">
        {months.map((month, index) => (
          <div key={index} className="calendar-grid__item flex justify-center">
            <MonthGrid month={month} selectedEventTypes={selectedEventTypes} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
