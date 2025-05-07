export interface MenuItem {
  id: string;
  title: string;
  icon: string;
  link: string;
}

export interface DashboardData {
  stats: {
    label: string;
    value: number;
    change: number;
    icon: string;
  }[];
  recentActivity: {
    id: string;
    title: string;
    date: string;
    type: string;
  }[];
  chartData: {
    name: string;
    data: number;
  }[];
}