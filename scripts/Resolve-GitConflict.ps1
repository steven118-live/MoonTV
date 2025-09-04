# 檢查是否有 rebase 衝突
$conflicts = git diff --name-only --diff-filter=U

if ($conflicts) {
    Write-Host "`n⚠️ 檢測到 Git 衝突：" -ForegroundColor Yellow
    $conflicts | ForEach-Object { Write-Host " - $_" }

    Write-Host "`n請選擇要保留的版本：" -ForegroundColor Cyan
    Write-Host "1. 保留本地版本 (--ours)"
    Write-Host "2. 保留遠端版本 (--theirs)"
    Write-Host "3. 手動處理"

    $choice = Read-Host "輸入選項 (1/2/3)"

    switch ($choice) {
        '1' {
            foreach ($file in $conflicts) {
                git checkout --ours $file
                git add $file
            }
            git rebase --continue
            Write-Host "`n✅ 已保留本地版本並繼續 rebase。" -ForegroundColor Green
        }
        '2' {
            foreach ($file in $conflicts) {
                git checkout --theirs $file
                git add $file
            }
            git rebase --continue
            Write-Host "`n✅ 已保留遠端版本並繼續 rebase。" -ForegroundColor Green
        }
        '3' {
            Write-Host "`n📝 請手動編輯衝突檔案後執行：`n  git add <file> && git rebase --continue" -ForegroundColor Yellow
        }
        default {
            Write-Host "`n❌ 無效選項，請重新執行腳本。" -ForegroundColor Red
        }
    }
} else {
    Write-Host "`n✅ 沒有偵測到衝突，Git 狀態正常。" -ForegroundColor Green
}