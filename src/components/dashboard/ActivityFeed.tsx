import { activityData } from '@/data/appointments';
import { cn } from '@/lib/utils';

export function ActivityFeed() {
  const maxHeight = 100; // Maximum height for the tallest bar
  
  const getBarHeight = (appointments: number) => {
    const maxAppointments = Math.max(...activityData.map(d => d.appointments));
    return (appointments / maxAppointments) * maxHeight;
  };
  
  const getBarColor = (day: string, appointments: number) => {
    if (day === 'Wed') return 'bg-blue-500';
    if (appointments === 3) return 'bg-blue-500';
    if (appointments === 2) return 'bg-cyan-500';
    return 'bg-cyan-300';
  };

  return (
    <div className="bg-white rounded-2xl border p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Activity</h2>
        <span className="text-sm text-muted-foreground">3 appointments on this week</span>
      </div>
      
      <div className="flex h-[150px] items-end justify-between">
        {activityData.map((data, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div 
              className={cn(
                "w-4 rounded-full transition-all duration-300",
                getBarColor(data.day, data.appointments)
              )}
              style={{ height: `${getBarHeight(data.appointments)}px` }}
            ></div>
            <span className="text-xs font-medium text-muted-foreground">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}