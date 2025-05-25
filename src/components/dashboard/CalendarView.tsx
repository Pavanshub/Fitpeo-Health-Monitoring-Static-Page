import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { calendarDays, featuredAppointments } from "@/data/appointments";
import { cn } from "@/lib/utils";

export function CalendarView() {
  return (
    <div className="bg-white rounded-2xl mt-2 -mb-3 p-4 border">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              className="appearance-none border bg-muted/30 text-sm font-medium rounded-md pl-3 pr-8 py-1 focus:outline-none"
              defaultValue="this-week"
            >
              <option value="this-week">This Week</option>
              <option value="next-week">Next Week</option>
              <option value="this-month">This Month</option>
            </select>
            <ChevronLeftIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>
        <h2 className="text-base font-semibold">October 2021</h2>
        <div className="flex gap-1">
          <button className="p-1 rounded-md bg-white hover:bg-muted/30">
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button className="p-1 rounded-md bg-white hover:bg-muted/30">
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-5">
        {calendarDays.map((day) => (
          <div key={day.dayNum} className="text-center">
            <p className="text-xs font-medium text-muted-foreground mb-2">
              {day.dayName}
            </p>
            <div
              className={cn(
                "rounded-full w-8 h-8 flex items-center justify-center mx-auto text-sm font-medium",
                day.dayNum === 28 ? "bg-blue-700 text-white" : ""
              )}
            >
              {day.dayNum}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mb-5">
        {calendarDays.map((day) => (
          <div key={`slots-${day.dayNum}`} className="flex flex-col gap-2">
            {day.slots.map((slot, index) => (
              <div
                key={`${day.dayNum}-${index}`}
                className={cn(
                  "text-xs font-medium py-1 px-2 rounded text-center",
                  day.dayNum === 28 && slot.time === "10:00"
                    ? "bg-blue-100 text-blue-800"
                    : day.dayNum === 28 && slot.time === "11:00"
                    ? "bg-blue-100 text-blue-800"
                    : day.dayNum === 26 && slot.time === "09:00"
                    ? "bg-blue-700 text-white"
                    : day.dayNum === 30 && slot.time === "12:00"
                    ? "bg-purple-100 text-purple-800"
                    : day.dayNum === 30 && slot.time === "14:00"
                    ? "bg-purple-100 text-purple-800"
                    : day.dayNum === 31 && slot.time === "09:00"
                    ? "bg-blue-100 text-blue-800"
                    : ""
                )}
              >
                {slot.time}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {featuredAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className={cn(
              "p-4 rounded-xl",
              appointment.id === "dentist" ? "bg-blue-700" : "bg-purple-100"
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <h3
                className={cn(
                  "font-medium",
                  appointment.id === "dentist"
                    ? "text-white"
                    : "text-purple-900"
                )}
              >
                {appointment.title}
              </h3>
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  appointment.id === "dentist" ? "bg-white/20" : "bg-white"
                )}
              >
                {appointment.id === "dentist" ? (
                  <div className="h-4 w-4 text-blue-500">
                    <img src="/public/images/Teeth.png" alt="Teeth Image" />
                  </div>
                ) : (
                  <div className="h-5 w-5 text-blue-500">
                    <img src="/public/images/Physio.png" alt="Teeth Image" />
                  </div>
                )}
              </div>
            </div>
            <p
              className={cn(
                "text-sm",
                appointment.id === "dentist"
                  ? "text-white/80"
                  : "text-purple-700"
              )}
            >
              {appointment.time}
            </p>
            <p
              className={cn(
                "text-sm font-medium mt-1",
                appointment.id === "dentist" ? "text-white" : "text-purple-900"
              )}
            >
              {appointment.doctor}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
