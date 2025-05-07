"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { useTheme } from "next-themes";

interface ChartProps {
  data: {
    name: string;
    data: number;
  }[];
  title?: string;
}

export function DashboardChart({ data, title = "月別トレンド" }: ChartProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">
                <stop 
                  offset="5%" 
                  stopColor="hsl(var(--chart-1))" 
                  stopOpacity={0.8} 
                />
                <stop 
                  offset="95%" 
                  stopColor="hsl(var(--chart-1))" 
                  stopOpacity={0} 
                />
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={isDark ? "hsl(var(--muted))" : "#EAEAEA"} 
              vertical={false}
            />
            <XAxis 
              dataKey="name" 
              stroke={isDark ? "hsl(var(--muted-foreground))" : "#888888"}
              tickMargin={10}
              tickLine={false}
              axisLine={{ stroke: isDark ? "hsl(var(--border))" : "#EAEAEA" }}
            />
            <YAxis 
              stroke={isDark ? "hsl(var(--muted-foreground))" : "#888888"} 
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDark ? "hsl(var(--card))" : "white",
                borderColor: isDark ? "hsl(var(--border))" : "#EAEAEA",
                borderRadius: 8,
                color: isDark ? "hsl(var(--card-foreground))" : "black"
              }}
            />
            <Area
              type="monotone"
              dataKey="data"
              stroke="hsl(var(--chart-1))"
              fillOpacity={1}
              fill="url(#colorData)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}