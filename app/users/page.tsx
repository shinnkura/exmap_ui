'use client';

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout"; 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil } from "lucide-react";

const initialUsers = [
  {
    id: "1",
    name: "田中 太郎",
    email: "tanaka@example.com",
    role: "管理者",
    status: "active",
    lastActive: "5分前",
  },
  {
    id: "2",
    name: "佐藤 次郎",
    email: "sato@example.com",
    role: "ユーザー",
    status: "inactive",
    lastActive: "3日前",
  },
  {
    id: "3",
    name: "鈴木 花子",
    email: "suzuki@example.com",
    role: "編集者",
    status: "active",
    lastActive: "1時間前",
  },
  {
    id: "4",
    name: "高橋 健太",
    email: "takahashi@example.com",
    role: "閲覧者",
    status: "active",
    lastActive: "オンライン",
  },
  {
    id: "5",
    name: "伊藤 めぐみ",
    email: "ito@example.com",
    role: "ユーザー",
    status: "active",
    lastActive: "10分前",
  },
  {
    id: "6",
    name: "渡辺 秀樹",
    email: "watanabe@example.com",
    role: "編集者",
    status: "inactive",
    lastActive: "1週間前",
  },
  {
    id: "7",
    name: "山本 あおい",
    email: "yamamoto@example.com",
    role: "ユーザー",
    status: "active",
    lastActive: "2時間前",
  },
  {
    id: "8",
    name: "中村 大輔",
    email: "nakamura@example.com",
    role: "閲覧者",
    status: "active",
    lastActive: "30分前",
  },
];

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleEdit = (user: typeof users[0]) => {
    setEditingId(user.id);
    setEditForm({
      name: user.name,
      email: user.email,
      role: user.role
    });
  };

  const handleSave = (id: string) => {
    setUsers(users.map(user => 
      user.id === id 
        ? { ...user, ...editForm }
        : user
    ));
    setEditingId(null);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">ユーザー管理</h2>
          <p className="text-muted-foreground">システムに登録されているユーザーの一覧と管理</p>
        </div>
        
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>総ユーザー数</CardTitle>
              <CardDescription>登録済みユーザー数</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {users.length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>アクティブユーザー</CardTitle>
              <CardDescription>現在アクティブなユーザー</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {users.filter(user => user.status === "active").length}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>ユーザー一覧</CardTitle>
            <CardDescription>システムに登録されている全ユーザー</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">名前</TableHead>
                  <TableHead>メールアドレス</TableHead>
                  <TableHead>役割</TableHead>
                  <TableHead className="w-[100px]">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      {editingId === user.id ? (
                        <Input
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        />
                      ) : (
                        user.name
                      )}
                    </TableCell>
                    <TableCell>
                      {editingId === user.id ? (
                        <Input
                          value={editForm.email}
                          onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        />
                      ) : (
                        user.email
                      )}
                    </TableCell>
                    <TableCell>
                      {editingId === user.id ? (
                        <Select
                          value={editForm.role}
                          onValueChange={(value) => setEditForm({ ...editForm, role: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="役割を選択" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="管理者">管理者</SelectItem>
                            <SelectItem value="ユーザー">ユーザー</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        user.role
                      )}
                    </TableCell>
                    <TableCell>
                      {editingId === user.id ? (
                        <Button
                          size="sm"
                          onClick={() => handleSave(user.id)}
                          className="w-full"
                        >
                          保存
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEdit(user)}
                          className="w-full"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}