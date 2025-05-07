@@ .. @@
            <CardHeader className="pb-2">
              <CardTitle>総ユーザー数</CardTitle>
              <CardDescription>登録済みユーザー数</CardDescription>
            </CardHeader>
            <CardContent>
-              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
+              <div className="text-3xl font-bold text-green-600">
                {users.length}
              </div>
            </CardContent>
@@ .. @@
            <CardHeader className="pb-2">
              <CardTitle>アクティブユーザー</CardTitle>
              <CardDescription>現在アクティブなユーザー</CardDescription>
            </CardHeader>
            <CardContent>
-              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
+              <div className="text-3xl font-bold text-green-600">
                {users.filter(user => user.status === "active").length}
              </div>
            </CardContent>
@@ .. @@
            <CardHeader className="pb-2">
              <CardTitle>非アクティブユーザー</CardTitle>
              <CardDescription>一定期間操作のないユーザー</CardDescription>
            </CardHeader>
            <CardContent>
-              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
+              <div className="text-3xl font-bold text-amber-600">
                {users.filter(user => user.status === "inactive").length}
              </div>
            </CardContent>
@@ .. @@
                     <TableCell>
                       <Badge variant={user.status === "active" ? "outline" : "secondary"} className={
                         user.status === "active" 
-                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800"
-                          : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
+                          ? "bg-green-100 text-green-700 border-green-200"
+                          : "bg-gray-100 text-gray-700"
                       }>
                         {user.status === "active" ? "アクティブ" : "非アクティブ"}
                       </Badge>