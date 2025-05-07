"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Info, AlertTriangle } from "lucide-react";

const notifications = [
  {
    id: "1",
    title: "システムメンテナンスのお知らせ",
    content: "2024年4月1日 2:00-5:00にシステムメンテナンスを実施します。この間サービスはご利用いただけません。",
    date: "2024/03/25 10:00",
    type: "info",
    isNew: true
  },
  {
    id: "2",
    title: "新機能リリースのお知らせ",
    content: "ダッシュボードに新しい分析機能が追加されました。詳細はヘルプセンターをご確認ください。",
    date: "2024/03/20 15:30",
    type: "success",
    isNew: true
  },
  {
    id: "3",
    title: "セキュリティアップデートのお願い",
    content: "お客様の安全なサービスご利用のため、パスワードの定期的な変更をお願いいたします。",
    date: "2024/03/15 09:00",
    type: "warning",
    isNew: false
  },
  {
    id: "4",
    title: "利用規約改定のお知らせ",
    content: "2024年5月1日付けで利用規約を改定いたします。主な変更点については通知をご確認ください。",
    date: "2024/03/10 11:00",
    type: "info",
    isNew: false
  }
];

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">お知らせ</h2>
          <p className="text-muted-foreground">システムからの重要なお知らせ</p>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">
                  <div className="flex items-center gap-2">
                    {notification.type === "info" && <Info className="h-5 w-5 text-blue-500" />}
                    {notification.type === "success" && <Bell className="h-5 w-5 text-green-500" />}
                    {notification.type === "warning" && <AlertTriangle className="h-5 w-5 text-amber-500" />}
                    {notification.title}
                    {notification.isNew && (
                      <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                        New
                      </Badge>
                    )}
                  </div>
                </CardTitle>
                <span className="text-sm text-muted-foreground">
                  {notification.date}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {notification.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}