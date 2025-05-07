"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  Building2,
  LayoutDashboard, 
  Users,
  User as UserIcon,
  Mail,
  Bell,
  Settings, 
  HelpCircle
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const userInfo = {
  companyName: "株式会社EXMAP",
  name: "山田 太郎",
  email: "yamada@exmap.co.jp"
};

const menuItems = [
  {
    title: "ダッシュボード",
    icon: <LayoutDashboard className="h-5 w-5" />,
    href: "/",
    variant: "default",
  },
  {
    title: "ユーザー",
    icon: <Users className="h-5 w-5" />,
    href: "/users",
    variant: "ghost",
  },
  {
    title: "お知らせ",
    icon: <Bell className="h-5 w-5" />,
    href: "/notifications",
    variant: "ghost",
  },
  {
    title: "設定",
    icon: <Settings className="h-5 w-5" />,
    href: "/settings",
    variant: "ghost",
  },
  {
    title: "ヘルプ",
    icon: <HelpCircle className="h-5 w-5" />,
    href: "/help",
    variant: "ghost",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className="fixed left-0 top-16 z-20 flex h-[calc(100vh-4rem)] w-[240px] flex-col border-r bg-background">
      <div className="flex h-full flex-col py-4">
        <div className="px-4 mb-6">
          <Card className="border-green-100">
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-green-600" />
                <div className="text-sm font-medium text-green-700">{userInfo.companyName}</div>
              </div>
              <div className="flex items-center gap-3">
                <UserIcon className="h-5 w-5 text-green-600" />
                <div>
                  <div className="text-sm font-medium">{userInfo.name}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-600" />
                <div>
                  <div className="text-sm text-muted-foreground">{userInfo.email}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn("flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-green-100",
                pathname === item.href
                  ? "bg-green-100 text-green-700"
                  : "text-muted-foreground"
              )}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}