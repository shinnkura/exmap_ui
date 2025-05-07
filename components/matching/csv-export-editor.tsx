"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface CsvExportEditorProps {
  type: "engineer" | "company";
}

export function CsvExportEditor({ type }: CsvExportEditorProps) {
  const engineerFields = [
    { id: 1, name: "基本情報", enabled: true },
    { id: 2, name: "スキル詳細", enabled: true },
    { id: 3, name: "案件履歴", enabled: true },
    { id: 4, name: "評価情報", enabled: true },
  ];

  const companyFields = [
    { id: 1, name: "企業情報", enabled: true },
    { id: 2, name: "募集要件", enabled: true },
    { id: 3, name: "福利厚生", enabled: true },
    { id: 4, name: "選考プロセス", enabled: true },
  ];

  const [exportFields, setExportFields] = useState(
    type === "engineer" ? engineerFields : companyFields
  );

  const handleToggle = (id: number) => {
    setExportFields(fields => fields.map(field =>
      field.id === id ? { ...field, enabled: !field.enabled } : field
    ));
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>CSV出力項目の設定</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {exportFields.map(field => (
              <div key={field.id} className="flex items-center justify-between">
                <Label htmlFor={`export-${field.id}`}>{field.name}</Label>
                <Switch
                  id={`export-${field.id}`}
                  checked={field.enabled}
                  onCheckedChange={() => handleToggle(field.id)}
                />
              </div>
            ))}
            <Button className="w-full mt-4">CSV出力</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}