"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch"; 
import { X, ChevronDown } from "lucide-react";
import Select from "react-select";

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
  
  const selectStyles = {
    control: (base: any) => ({
      ...base,
      minHeight: '42px',
      backgroundColor: 'hsl(var(--background))',
      borderColor: 'hsl(var(--border))',
      borderRadius: 'var(--radius)',
      '&:hover': {
        borderColor: 'hsl(var(--ring))'
      }
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: 'hsl(var(--background))',
      border: '1px solid hsl(var(--border))',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 50
    }),
    option: (base: any, state: { isSelected: boolean; isFocused: boolean }) => ({
      ...base,
      padding: '8px 12px',
      backgroundColor: state.isSelected 
        ? 'hsl(var(--primary))' 
        : state.isFocused 
          ? 'hsl(var(--accent) / 0.1)' 
          : 'transparent',
      color: state.isSelected 
        ? 'hsl(var(--primary-foreground))' 
        : 'hsl(var(--foreground))',
      cursor: 'pointer',
      ':active': {
        backgroundColor: 'hsl(var(--accent) / 0.2)'
      }
    }),
    multiValue: (base: any) => ({
      ...base,
      backgroundColor: 'hsl(var(--primary) / 0.1)',
      borderRadius: 'var(--radius)',
    }),
    multiValueLabel: (base: any) => ({
      ...base,
      color: 'hsl(var(--primary))',
      padding: '2px 6px',
    }),
    multiValueRemove: (base: any) => ({
      ...base,
      color: 'hsl(var(--primary))',
      ':hover': {
        backgroundColor: 'hsl(var(--destructive) / 0.1)',
        color: 'hsl(var(--destructive))',
      },
    }),
  };

  const getAvailableJobs = (conditionId: number) => {
    const currentCondition = conditions.find(c => c.id === conditionId); 
    return jobTypes
      .filter(job => !currentCondition?.selectedJobs.includes(job.name))
      .map(job => ({
        value: job.name,
        label: job.name
      }));
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
                  <div className="relative">
                    <Select
                      isDisabled={!condition.enabled}
                      options={getAvailableJobs(condition.id)}
                      placeholder="項目を選択してください"
                      styles={selectStyles}
                      value={condition.selectedJobs.map(job => ({
                        value: job,
                        label: job
                      }))}
                      isMulti
                      onChange={(option) => {
                        const selectedValues = Array.isArray(option)
                          ? option.map(opt => opt.value)
                          : [];
                        setConditions(prev => prev.map(cond =>
                          cond.id === condition.id
                            ? { ...cond, selectedJobs: selectedValues }
                            : cond
                        ));
                      }}
                      isSearchable
                      isClearable
                     closeMenuOnSelect={false}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      components={{
                        DropdownIndicator: () => (
                          <ChevronDown className="h-4 w-4 opacity-50 mr-2" />
                        )
                      }}
                    />
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