"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { X, ChevronDown } from "lucide-react";

interface SearchConditionEditorProps {
  type: "engineer" | "company";
}

interface JobType {
  id: number;
  name: string;
}

interface SearchCondition {
  id: number;
  name: string;
  weight: number;
  enabled: boolean;
  selectedJobs: string[];
}

const engineerJobTypes: JobType[] = [
  { id: 1, name: "フロントエンドエンジニア" },
  { id: 2, name: "バックエンドエンジニア" },
  { id: 3, name: "インフラエンジニア" },
  { id: 4, name: "あり_29%以下" },
  { id: 5, name: "あり_30%" },
  { id: 6, name: "あり_31%以上" },
  { id: 7, name: "なし" },
  { id: 8, name: "紹介不可" }
];

const companyJobTypes: JobType[] = [
  { id: 1, name: "一般保育士" },
  { id: 2, name: "主任" },
  { id: 3, name: "園長" },
  { id: 4, name: "管理栄養士" },
  { id: 5, name: "委託募集" },
  { id: 6, name: "栄_パート" },
  { id: 7, name: "管栄_パート" },
  { id: 8, name: "副主任" },
  { id: 9, name: "副園長" },
  { id: 10, name: "保_パート" },
  { id: 11, name: "派遣保育士" },
  { id: 12, name: "看_パート" },
  { id: 13, name: "栄養士" },
  { id: 14, name: "調理師" },
  { id: 15, name: "看護師" }
];

export function SearchConditionEditor({ type }: SearchConditionEditorProps) {
  const [conditions, setConditions] = useState<SearchCondition[]>(type === "engineer" ? [
    { id: 1, name: "職種マッチ", weight: 7, enabled: true, selectedJobs: [] },
    { id: 2, name: "スキルマッチ", weight: 4, enabled: true, selectedJobs: [] },
    { id: 3, name: "経験要件", weight: 2, enabled: true, selectedJobs: [] }
  ] : [
    { id: 1, name: "募集職種", weight: 7, enabled: true, selectedJobs: [] },
    { id: 2, name: "勤務地域", weight: 4, enabled: true, selectedJobs: [] },
    { id: 3, name: "給与条件", weight: 2, enabled: true, selectedJobs: [] }
  ]);

  const [openDropdowns, setOpenDropdowns] = useState<{ [key: number]: boolean }>({});

  const jobTypes = type === "engineer" ? engineerJobTypes : companyJobTypes;

  const getAvailableJobs = (conditionId: number) => {
    const currentCondition = conditions.find(c => c.id === conditionId);
    return jobTypes.filter(job => !currentCondition?.selectedJobs.includes(job.name));
  };

  const handleWeightChange = (id: number, values: number[]) => {
    setConditions(prev => prev.map(condition =>
      condition.id === id ? { ...condition, weight: values[0] } : condition
    ));
  };

  const toggleDropdown = (id: number) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleJobSelect = (id: number, job: JobType) => {
    setConditions(prev => prev.map(condition =>
      condition.id === id
        ? { ...condition, selectedJobs: [...condition.selectedJobs, job.name] }
        : condition
    ));
  };

  const handleJobRemove = (id: number, jobName: string) => {
    setConditions(prev => prev.map(condition =>
      condition.id === id
        ? {
            ...condition,
            selectedJobs: condition.selectedJobs.filter(job => job !== jobName)
          }
        : condition
    ));
  };

  const handleToggle = (id: number) => {
    setConditions(prev => prev.map(condition =>
      condition.id === id ? { ...condition, enabled: !condition.enabled } : condition
    ));
  };

  const handleSave = () => {
    // 保存処理を実装
    console.log('保存された条件:', conditions);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>検索条件のカスタマイズ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conditions.map(condition => (
              <div key={condition.id} className="space-y-4 p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <Label className="text-lg font-medium">{condition.name}</Label>
                  <Switch
                    checked={condition.enabled}
                    onCheckedChange={() => handleToggle(condition.id)}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 min-h-[40px] p-2 border rounded-md">
                    {condition.selectedJobs.map((job) => (
                      <Badge
                        key={job}
                        variant="secondary"
                        className="px-2 py-1 flex items-center gap-1 bg-green-50 text-green-700 hover:bg-green-100"
                      >
                        {job}
                        <X
                          className="h-3 w-3 cursor-pointer hover:text-red-500"
                          onClick={() => handleJobRemove(condition.id, job)}
                        />
                      </Badge>
                    ))}
                  </div>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(condition.id)}
                      className="flex h-10 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={!condition.enabled}
                    >
                      <span>項目を選択してください</span>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </button>
                    {openDropdowns[condition.id] && (
                      <div className="absolute z-10 w-full mt-2 rounded-md border bg-popover text-popover-foreground shadow-md">
                        <div className="p-1">
                          {getAvailableJobs(condition.id).map((job) => (
                            <button
                              key={job.id}
                              className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                              onClick={() => {
                                handleJobSelect(condition.id, job);
                                toggleDropdown(condition.id);
                              }}
                            >
                              {job.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <Button 
              className="w-full mt-6" 
              onClick={handleSave}
            >
              設定を保存
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}