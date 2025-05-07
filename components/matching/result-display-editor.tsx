"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface ResultDisplayEditorProps {
  type: "engineer" | "company";
}

export function ResultDisplayEditor({ type }: ResultDisplayEditorProps) {
  const engineerItems = [
    { id: 1, name: "プロフィール画像", enabled: true },
    { id: 2, name: "スキル一覧", enabled: true },
    { id: 3, name: "経験年数", enabled: true },
    { id: 4, name: "希望単価", enabled: true },
    { id: 5, name: "稼働可能時期", enabled: true },
  ];

  const companyItems = [
    { id: 1, name: "企業ロゴ", enabled: true },
    { id: 2, name: "企業概要", enabled: true },
    { id: 3, name: "募集職種", enabled: true },
    { id: 4, name: "給与範囲", enabled: true },
    { id: 5, name: "勤務地", enabled: true },
  ];

  const [displayItems, setDisplayItems] = useState(
    type === "engineer" ? engineerItems : companyItems
  );

  const handleToggle = (id: number) => {
    setDisplayItems(items => items.map(item =>
      item.id === id ? { ...item, enabled: !item.enabled } : item
    ));
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>表示項目の設定</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {displayItems.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <Label htmlFor={`display-${item.id}`}>{item.name}</Label>
                <Switch
                  id={`display-${item.id}`}
                  checked={item.enabled}
                  onCheckedChange={() => handleToggle(item.id)}
                />
              </div>
            ))}
            <Button className="w-full mt-4">保存</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}