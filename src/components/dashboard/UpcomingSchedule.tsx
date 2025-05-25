import { upcomingAppointments } from '@/data/appointments';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

export function UpcomingSchedule() {
  // Dynamically get icon from Lucide based on string name
  const getIcon = (iconName: string): LucideIcons.LucideIcon => {
    return (LucideIcons as unknown as Record<string,  LucideIcons.LucideIcon>)[
      iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())
    ];
  };

  return (
    <div className="bg-white rounded-2xl p-4 border">
      <h2 className="text-lg font-semibold mb-4">The Upcoming Schedule</h2>
      
      <div className="space-y-6">
        {upcomingAppointments.map((group) => (
          <div key={group.day}>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">
              On {group.day}
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {group.appointments.map((appointment) => {
                const Icon = getIcon(appointment.icon);
                
                return (
                  <div 
                    key={appointment.id}
                    className="bg-blue-50 rounded-xl p-4 flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-medium text-sm">{appointment.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{appointment.time}</p>
                    </div>
                    
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                      <Icon className={cn(
                        "h-4 w-4",
                        appointment.id === 'checkup' ? "text-emerald-500" :
                        appointment.id === 'eye' ? "text-blue-500" :
                        appointment.id === 'heart' ? "text-red-500" :
                        "text-purple-500"
                      )} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}