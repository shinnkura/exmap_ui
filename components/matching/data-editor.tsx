"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";

interface DataEditorProps {
  type: "engineer" | "company";
}

interface SearchFilters {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: string | null;
  experience: string | null;
  hourlyRate: string | null;
  exactMatch: boolean;
}

interface SearchModalProps {
  filters: SearchFilters;
  onFilterChange: (field: keyof SearchFilters) => (value: string) => void;
  onExactMatchChange: (checked: boolean) => void;
  onSearch: () => void;
  onClear: () => void;
}

const generateOptions = (start: number, end: number, step: number = 1) => {
  return Array.from({ length: Math.floor((end - start) / step) + 1 }, (_, i) => ({
    value: String(start + i * step),
    label: String(start + i * step)
  }));
};

const ageOptions = generateOptions(18, 70);
const experienceOptions = generateOptions(0, 50);
const hourlyRateOptions = generateOptions(3000, 15000, 1000).map(option => ({
  value: option.value,
  label: `${parseInt(option.value).toLocaleString()}円`
}));

function SearchModal({ filters, onFilterChange, onExactMatchChange, onSearch, onClear }: SearchModalProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Switch
          id="exact-match"
          checked={filters.exactMatch}
          onCheckedChange={onExactMatchChange}
        />
        <Label htmlFor="exact-match">完全一致で検索</Label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="search-id">ID (数値)</Label>
          <Select
            value={filters.id}
            onValueChange={onFilterChange("id")}
          >
            <SelectTrigger>
              <SelectValue placeholder="IDを選択" />
            </SelectTrigger>
            <SelectContent>
              {generateOptions(1, 200).map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="search-name">名前 (文字列)</Label>
          <Select
            value={filters.name}
            onValueChange={onFilterChange("name")}
          >
            <SelectTrigger>
              <SelectValue placeholder="名前を選択" />
            </SelectTrigger>
            <SelectContent>
              {data.map(item => (
                <SelectItem key={item.id} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="search-email">メール (文字列)</Label>
          <Select
            value={filters.email}
            onValueChange={onFilterChange("email")}
          >
            <SelectTrigger>
              <SelectValue placeholder="メールを選択" />
            </SelectTrigger>
            <SelectContent>
              {data.map(item => (
                <SelectItem key={item.id} value={item.email}>
                  {item.email}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="search-phone">電話番号 (文字列)</Label>
          <Select
            value={filters.phone}
            onValueChange={onFilterChange("phone")}
          >
            <SelectTrigger>
              <SelectValue placeholder="電話番号を選択" />
            </SelectTrigger>
            <SelectContent>
              {data.map(item => (
                <SelectItem key={item.id} value={item.phone}>
                  {item.phone}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="search-age">年齢 (数値)</Label>
          <Select
            value={filters.age}
            onValueChange={onFilterChange("age")}
          >
            <SelectTrigger>
              <SelectValue placeholder="年齢を選択" />
            </SelectTrigger>
            <SelectContent>
              {ageOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}歳
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="search-experience">経験年数 (数値)</Label>
          <Select
            value={filters.experience}
            onValueChange={onFilterChange("experience")}
          >
            <SelectTrigger>
              <SelectValue placeholder="経験年数を選択" />
            </SelectTrigger>
            <SelectContent>
              {experienceOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}年
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="search-hourlyRate">時給 (数値)</Label>
          <Select
            value={filters.hourlyRate}
            onValueChange={onFilterChange("hourlyRate")}
          >
            <SelectTrigger>
              <SelectValue placeholder="時給を選択" />
            </SelectTrigger>
            <SelectContent>
              {hourlyRateOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onClear}>
          クリア
        </Button>
        <Button onClick={onSearch}>
          <Search className="h-4 w-4 mr-2" />
          検索
        </Button>
      </div>
    </div>
  );
}

interface DataItem {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  experience: number;
  skills: string[];
  hourlyRate: number;
}

const generateDummyData = (type: "engineer" | "company"): DataItem[] => {
  return Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: type === "engineer" 
      ? `エンジニア${i + 1}`
      : `企業${i + 1}`,
    email: `example${i + 1}@test.com`,
    phone: `090-${String(1000 + i).padStart(4, '0')}-${String(1000 + i).padStart(4, '0')}`,
    age: 20 + Math.floor(Math.random() * 40),
    experience: Math.floor(Math.random() * 20),
    skills: ['JavaScript', 'React', 'TypeScript'],
    hourlyRate: Math.floor(Math.random() * 5000) + 3000
  }));
};

export function DataEditor({ type }: DataEditorProps) {
  const [data, setData] = useState<DataItem[]>([]);
  const [displayData, setDisplayData] = useState<DataItem[]>([]);
  const [displayCount, setDisplayCount] = useState(50);
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    id: "",
    name: "",
    email: "",
    phone: "",
    age: null,
    experience: null,
    hourlyRate: null,
    exactMatch: false
  });

  useEffect(() => {
    const initialData = generateDummyData(type);
    setData(initialData);
    setDisplayData(initialData.slice(0, displayCount));
  }, [type]);

  useEffect(() => {
    const filteredData = data.filter(item => {
      const matchValue = (value: string | number, filter: string | null, isNumber: boolean = false) => {
        if (!filter) return true;
        const stringValue = value.toString();
        const stringFilter = filter.toLowerCase();
        
        if (filters.exactMatch) {
          if (isNumber) {
            return stringValue === stringFilter;
          }
          return stringValue.toLowerCase() === stringFilter;
        }
        
        return stringValue.toLowerCase().includes(stringFilter);
      };

      return (
        matchValue(item.id, filters.id, true) &&
        matchValue(item.name, filters.name) &&
        matchValue(item.email, filters.email) &&
        matchValue(item.phone, filters.phone) &&
        matchValue(item.age, filters.age, true) &&
        matchValue(item.experience, filters.experience, true) &&
        matchValue(item.hourlyRate, filters.hourlyRate, true)
      );
    });
    setDisplayData(filteredData.slice(0, displayCount));
  }, [filters, displayCount, data]);

  const handleToggle = (id: number) => {
    setData(data.map(item =>
      item.id === id ? { ...item, enabled: !item.enabled } : item
    ));
  };

  const loadMore = () => {
    setDisplayCount(prev => prev + 50);
  };

  const handleSearch = () => {
    setIsOpen(false);
  };

  const handleClear = () => {
    setFilters({
      id: "",
      name: "",
      email: "",
      phone: "",
      age: null,
      experience: null,
      hourlyRate: null,
      exactMatch: false
    });
  };

  const handleFilterChange = (field: keyof SearchFilters) => (value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleExactMatchChange = (checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      exactMatch: checked
    }));
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>データ一覧</span>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Search className="h-4 w-4" />
                  検索
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>詳細検索</DialogTitle>
                </DialogHeader>
                <SearchModal
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onExactMatchChange={handleExactMatchChange}
                  onSearch={handleSearch}
                  onClear={handleClear}
                />
              </DialogContent>
            </Dialog>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID (数値)</TableHead>
                  <TableHead>名前 (文字列)</TableHead>
                  <TableHead>メール (文字列)</TableHead>
                  <TableHead>電話番号 (文字列)</TableHead>
                  <TableHead>年齢 (数値)</TableHead>
                  <TableHead>経験年数 (数値)</TableHead>
                  <TableHead>時給 (数値)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {displayData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.age}</TableCell>
                    <TableCell>{item.experience}</TableCell>
                    <TableCell>{item.hourlyRate.toLocaleString()}円</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {displayCount < data.length && (
              <Button 
                className="w-full mt-4" 
                variant="outline"
                onClick={loadMore}
              >
                さらに表示
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}