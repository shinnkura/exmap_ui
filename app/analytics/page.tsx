"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Cell
} from "recharts";
import { useTheme } from "next-themes";

const analyticsData = {
  monthly: [
    { name: "1月", ビジター: 4000, ページビュー: 2400 },
    { name: "2月", ビジター: 3000, ページビュー: 1398 },
    { name: "3月", ビジター: 2000, ページビュー: 9800 },
    { name: "4月", ビジター: 2780, ページビュー: 3908 },
    { name: "5月", ビジター: 1890, ページビュー: 4800 },
    { name: "6月", ビジター: 2390, ページビュー: 3800 },
    { name: "7月", ビジター: 3490, ページビュー: 4300 },
    { name: "8月", ビジター: 3490, ページビュー: 4300 },
    { name: "9月", ビジター: 3490, ページビュー: 4300 },
    { name: "10月", ビジター: 3490, ページビュー: 4300 },
    { name: "11月", ビジター: 3490, ページビュー: 4300 },
    { name: "12月", ビジター: 3490, ページビュー: 4300 },
  ],
  weekly: [
    { name: "月", ビジター: 2400, ページビュー: 1400 },
    { name: "火", ビジター: 1398, ページビュー: 2210 },
    { name: "水", ビジター: 9800, ページビュー: 2290 },
    { name: "木", ビジター: 3908, ページビュー: 2000 },
    { name: "金", ビジター: 4800, ページビュー: 2181 },
    { name: "土", ビジター: 3800, ページビュー: 2500 },
    { name: "日", ビジター: 4300, ページビュー: 2100 },
  ],
  pieData: [
    { name: "デスクトップ", value: 400 },
    { name: "モバイル", value: 300 },
    { name: "タブレット", value: 200 },
    { name: "その他", value: 100 },
  ],
  deviceData: [
    { name: "デスクトップ", Mac: 4000, Windows: 2400, Linux: 2400 },
    { name: "モバイル", Android: 3000, iOS: 1398 },
    { name: "タブレット", iPad: 2000, Android: 9800 },
  ],
  countryData: [
    { name: "日本", value: 40 },
    { name: "アメリカ", value: 30 },
    { name: "中国", value: 15 },
    { name: "韓国", value: 10 },
    { name: "その他", value: 5 },
  ],
};

const COLORS = ["#22c55e", "#3b82f6", "#6366f1", "#ec4899", "#f97316"];

export default function AnalyticsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const axisColor = isDark ? "#888888" : "#888888";
  const gridColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">分析</h2>
          <p className="text-muted-foreground">サイトトラフィックとユーザー分析</p>
        </div>
        
        <Tabs defaultValue="monthly" className="space-y-4">
          <TabsList>
            <TabsTrigger value="monthly">月間データ</TabsTrigger>
            <TabsTrigger value="weekly">週間データ</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>月間トラフィック</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={analyticsData.monthly}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis dataKey="name" stroke={axisColor} />
                    <YAxis stroke={axisColor} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDark ? "#222" : "#fff",
                        borderColor: isDark ? "#444" : "#ccc",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="ビジター"
                      stroke="hsl(var(--chart-1))"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="ページビュー"
                      stroke="hsl(var(--chart-2))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="weekly" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>週間トラフィック</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={analyticsData.weekly}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis dataKey="name" stroke={axisColor} />
                    <YAxis stroke={axisColor} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDark ? "#222" : "#fff",
                        borderColor: isDark ? "#444" : "#ccc",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="ビジター" fill="hsl(var(--chart-1))" />
                    <Bar dataKey="ページビュー" fill="hsl(var(--chart-2))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>デバイス分布</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analyticsData.pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {analyticsData.pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? "#222" : "#fff",
                      borderColor: isDark ? "#444" : "#ccc",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>地域分布</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={analyticsData.monthly.slice(0, 7)}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis dataKey="name" stroke={axisColor} />
                  <YAxis stroke={axisColor} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? "#222" : "#fff",
                      borderColor: isDark ? "#444" : "#ccc",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="ビジター"
                    stackId="1"
                    stroke="hsl(var(--chart-3))"
                    fill="hsl(var(--chart-3))"
                  />
                  <Area
                    type="monotone"
                    dataKey="ページビュー"
                    stackId="1"
                    stroke="hsl(var(--chart-4))"
                    fill="hsl(var(--chart-4))"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}