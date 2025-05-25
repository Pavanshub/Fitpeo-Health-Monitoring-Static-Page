import { MoveRight } from 'lucide-react';
import { AnatomySection } from './AnatomySection';
import { HealthStatusCards } from './HealthStatusCards';
import { CalendarView } from './CalendarView';
import { UpcomingSchedule } from './UpcomingSchedule';
import { ActivityFeed } from './ActivityFeed';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
        <div className="col-span-1 md:col-span-5 xl:col-span-6">
          <div className="grid grid-cols-2 gap-2 sm:gap-6 m-2 ">
            <div className="">
              <AnatomySection />
            </div>
            <div>
              <HealthStatusCards />

              <div className="flex justify-end p-1 cursor-pointer text-blue-700 text-sm items-center">
                <h2 className="font-semibold p-2">Details </h2>
                <MoveRight className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:gap-6 m-2">
            <ActivityFeed />
          </div>
        </div>

        <div className="col-span-1 md:col-span-7 xl:col-span-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
}
