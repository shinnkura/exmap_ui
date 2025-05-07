import { DashboardData } from "@/types";

export const dashboardData: DashboardData = {
  stats: [
    {
      label: "総ユーザー数",
      value: 2458,
      change: 12.5,
      icon: "users"
    },
    {
      label: "今月の売上",
      value: 45980,
      change: 8.2,
      icon: "revenue"
    },
    {
      label: "アクティブプロジェクト",
      value: 12,
      change: -2.5,
      icon: "activity"
    },
    {
      label: "完了タスク",
      value: 325,
      change: 18.2,
      icon: "chart"
    }
  ],
  recentActivity: [
    {
      id: "1",
      title: "新規プロジェクト「エコシステムアップデート」が作成されました",
      date: "10分前",
      type: "new"
    },
    {
      id: "2",
      title: "ダッシュボードコンポーネントが更新されました",
      date: "2時間前",
      type: "update"
    },
    {
      id: "3",
      title: "佐藤さんがチームに参加しました",
      date: "5時間前",
      type: "new"
    },
    {
      id: "4",
      title: "古いレポートデータが削除されました",
      date: "昨日",
      type: "delete"
    },
    {
      id: "5",
      title: "セキュリティポリシーが更新されました",
      date: "3日前",
      type: "update"
    }
  ],
  chartData: [
    {
      name: "1月",
      data: 20
    },
    {
      name: "2月",
      data: 30
    },
    {
      name: "3月",
      data: 35
    },
    {
      name: "4月",
      data: 40
    },
    {
      name: "5月",
      data: 30
    },
    {
      name: "6月",
      data: 45
    },
    {
      name: "7月",
      data: 50
    },
    {
      name: "8月",
      data: 55
    },
    {
      name: "9月",
      data: 60
    },
    {
      name: "10月",
      data: 65
    },
    {
      name: "11月",
      data: 70
    },
    {
      name: "12月",
      data: 80
    }
  ]
};