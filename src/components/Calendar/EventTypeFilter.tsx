import { eventTypeColors, filters } from "@/constants/calendar";

type EventTypeFilterProps = {
  selectedTypes: string[];
  onSelectType: (type: string) => void;
};

const EventTypeFilter = ({
  selectedTypes,
  onSelectType,
}: EventTypeFilterProps) => (
  <div className="flex flex-wrap gap-2">
    {filters.map((type) => (
      <button
        key={type}
        className={`px-4 h-7 rounded-full text-sm font-medium ${
          selectedTypes?.includes(type)
            ? `${eventTypeColors[type].selectedBg} ${eventTypeColors[type].selectedColor}`
            : `${eventTypeColors[type].background} ${eventTypeColors[type].color}`
        }`}
        onClick={() => onSelectType(type)}
      >
        {type}
      </button>
    ))}
  </div>
);

export default EventTypeFilter;
