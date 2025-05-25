import { healthStatuses } from "@/data/healthData";
import { cn } from "@/lib/utils";

export function HealthStatusCards() {
  const getStatusIcon = (id: string) => {
    switch (id) {
      case "lungs":
        return (
          <div className="h-6 w-6 text-blue-500">
            <img src="/images/lungs.png" alt="Lungs Image" />
          </div>
        );
      case "teeth":
        return (
          <div className="h-6 w-6 text-blue-500">
            <img src="/images/Teeth.png" alt="Teeth Image" />
          </div>
        );
      case "bone":
        return (
          <div className="h-6 w-6 text-blue-500">
            <img src="/images/Bone.png" alt="Bone Image" />
          </div>
        );
      default:
        return null;
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-emerald-500";
      case "warning":
        return "bg-yellow-200";
      case "critical":
        return "bg-red-500";
      default:
        return "bg-gray-200";
    }
  };

  const getProgressValue = (status: string) => {
    switch (status) {
      case "good":
        return "90%";
      case "warning":
        return "60%";
      case "critical":
        return "30%";
      default:
        return "50%";
    }
  };

  // Filter only the health statuses we want to display as cards
  const filteredStatuses = healthStatuses.filter((status) =>
    ["lungs", "teeth", "bone"].includes(status.id)
  );

  return (
    <div className="space-y-4">
      {filteredStatuses.map((status) => (
        <div
          key={status.id}
          className="bg-white border text-gray-800 rounded-xl p-4 flex items-center gap-4"
        >
          <div className="flex-shrink-0">{getStatusIcon(status.id)}</div>

          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-medium">{status.name}</h3>
            </div>
              <span className="text-xs text-muted-foreground">
                Date: {status.date}
              </span>

            <div className="h-2 w-full bg-gray-700/25 border rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full",
                  getProgressColor(status.status)
                )}
                style={{ width: getProgressValue(status.status) }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
