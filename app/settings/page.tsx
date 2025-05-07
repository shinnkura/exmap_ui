"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Lock, User, Globe, Palette } from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">設定</h2>
          <p className="text-muted-foreground">アカウントと環境設定の管理</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              プロフィール
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              通知
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              セキュリティ
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              表示設定
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>プロフィール設定</CardTitle>
                <CardDescription>
                  個人情報とプロフィールの設定を管理します
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">名前</Label>
                    <Input id="name" placeholder="山田 太郎" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input id="email" type="email" placeholder="yamada@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">役職</Label>
                    <Input id="title" placeholder="マネージャー" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">部署</Label>
                    <Input id="department" placeholder="営業部" />
                  </div>
                </div>
                <Button>変更を保存</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>通知設定</CardTitle>
                <CardDescription>
                  通知の受信設定を管理します
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>メール通知</Label>
                      <p className="text-sm text-muted-foreground">
                        重要な更新をメールで受け取ります
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>プッシュ通知</Label>
                      <p className="text-sm text-muted-foreground">
                        ブラウザのプッシュ通知を受け取ります
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>マーケティング通知</Label>
                      <p className="text-sm text-muted-foreground">
                        新機能や更新情報を受け取ります
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
                <Button>設定を保存</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>セキュリティ設定</CardTitle>
                <CardDescription>
                  アカウントのセキュリティ設定を管理します
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">現在のパスワード</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">新しいパスワード</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">パスワードの確認</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>二段階認証</Label>
                      <p className="text-sm text-muted-foreground">
                        追加のセキュリティ層を有効にします
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
                <Button>変更を保存</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>表示設定</CardTitle>
                <CardDescription>
                  インターフェースの表示設定を管理します
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>コンパクトビュー</Label>
                      <p className="text-sm text-muted-foreground">
                        より密度の高いレイアウトを使用します
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>アニメーション</Label>
                      <p className="text-sm text-muted-foreground">
                        インターフェースのアニメーションを有効にします
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
                <Button>設定を保存</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}