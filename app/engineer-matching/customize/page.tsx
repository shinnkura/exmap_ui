"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataEditor } from "@/components/matching/data-editor";
import { SearchConditionEditor } from "@/components/matching/search-condition-editor";
import { ResultDisplayEditor } from "@/components/matching/result-display-editor";
import { CsvExportEditor } from "@/components/matching/csv-export-editor";
import { Users } from "lucide-react";

export default function CustomizePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <Users className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">エンジニアマッチング設定</h2>
            <p className="text-muted-foreground">エンジニアマッチングシステムの詳細設定</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>カスタマイズ</CardTitle>
            <CardDescription>各種設定を変更できます</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="data" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="data">データ編集</TabsTrigger>
                <TabsTrigger value="search">検索条件</TabsTrigger>
                <TabsTrigger value="display">表示項目</TabsTrigger>
                <TabsTrigger value="export">CSV出力</TabsTrigger>
              </TabsList>

              <TabsContent value="data">
                <DataEditor type="engineer" />
              </TabsContent>

              <TabsContent value="search">
                <SearchConditionEditor type="engineer" />
              </TabsContent>

              <TabsContent value="display">
                <ResultDisplayEditor type="engineer" />
              </TabsContent>

              <TabsContent value="export">
                <CsvExportEditor type="engineer" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}