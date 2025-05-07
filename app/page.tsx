"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, Settings } from "lucide-react";

const isAdmin = true; // 実際の環境では認証システムから取得

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">ようこそ！</h2>
          <p className="text-muted-foreground">マッチングサービスをご利用ください。</p>
        </div>
        
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <Card className="relative overflow-hidden">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">エンジニアマッチング</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full" onClick={() => window.location.href = "/engineer-matching"}>
                  サービスを利用する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              {isAdmin && (
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full" onClick={() => window.location.href = "/engineer-matching/customize"}>
                    <Settings className="mr-2 h-4 w-4" />
                    マッチング設定
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">企業マッチング</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full" variant="secondary" onClick={() => window.location.href = "/company-matching"}>
                  サービスを利用する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              {isAdmin && (
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full" onClick={() => window.location.href = "/company-matching/customize"}>
                    <Settings className="mr-2 h-4 w-4" />
                    マッチング設定
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}