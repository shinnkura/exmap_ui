import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon, BarChart3, Users, CreditCard, ActivityIcon, DivideIcon as LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: string;
  className?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  users: <Users className="h-5 w-5" />,
  revenue: <CreditCard className="h-5 w-5" />,
  activity: <ActivityIcon className="h-5 w-5" />,
  chart: <BarChart3 className="h-5 w-5" />,
};

export function StatsCard({ 
  title, 
  value, 
  change, 
  icon = "chart",
  className 
}: StatsCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
          {iconMap[icon] || iconMap.chart}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {typeof change !== 'undefined' && (
          <div className="flex items-center pt-1 text-xs">
            {change > 0 ? (
              <ArrowUpIcon className="mr-1 h-3 w-3 text-green-600" />
            ) : (
              <ArrowDownIcon className="mr-1 h-3 w-3 text-red-600" />
            )}
            <span className={change > 0 ? "text-green-600" : "text-red-600"}>
              {Math.abs(change)}%
            </span>
            <span className="text-muted-foreground ml-1">先月比</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}