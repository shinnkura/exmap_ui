"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "EXMAPとは何ですか？",
    answer: "EXMAPは、効率的なプロジェクト管理と分析を可能にする統合管理システムです。ダッシュボード、分析ツール、ユーザー管理など、ビジネスに必要な機能を提供します。"
  },
  {
    question: "新しいユーザーを追加するにはどうすればよいですか？",
    answer: "ユーザー管理ページから「新規ユーザー追加」ボタンをクリックし、必要な情報を入力してください。ユーザーの役割と権限も設定できます。"
  },
  {
    question: "データの分析方法を教えてください",
    answer: "分析ページでは、様々なグラフやチャートを通じてデータを視覚化できます。期間やデータタイプを選択して、必要な情報を確認できます。"
  },
  {
    question: "パスワードを変更するにはどうすればよいですか？",
    answer: "設定ページから「セキュリティ設定」を選択し、パスワード変更フォームに現在のパスワードと新しいパスワードを入力してください。"
  },
  {
    question: "システムの不具合を報告するには？",
    answer: "サポートチームへの連絡フォームから不具合の詳細を報告してください。できるだけ具体的な状況と発生時の操作を記載してください。"
  }
];

export default function HelpPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">ヘルプセンター</h2>
          <p className="text-muted-foreground">サポートとガイダンス</p>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                メールサポート
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                24時間以内に返信いたします
              </p>
              <Button className="w-full">
                メールを送信
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                電話サポート
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                平日 9:00-18:00
              </p>
              <Button variant="outline" className="w-full">
                0120-XXX-XXX
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                チャットサポート
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                リアルタイムでご案内
              </p>
              <Button variant="secondary" className="w-full">
                チャットを開始
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>よくある質問</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}