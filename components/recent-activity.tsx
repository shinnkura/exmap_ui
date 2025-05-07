import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ActivityItem {
  id: string;
  title: string;
  date: string;
  type: string;
}

interface RecentActivityProps {
  activities: ActivityItem[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const getTypeStyle = (type: string): string => {
    switch (type) {
      case "update":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
      case "new":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
      case "delete":
        return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>最近のアクティビティ</CardTitle>
        <CardDescription>プロジェクトの最新の動き</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-4">
                <Badge variant="outline" className={getTypeStyle(activity.type)}>
                  {activity.type === "update" && "更新"}
                  {activity.type === "new" && "新規"}
                  {activity.type === "delete" && "削除"}
                </Badge>
                <div>
                  <p className="text-sm font-medium">{activity.title}</p>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">{activity.date}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}