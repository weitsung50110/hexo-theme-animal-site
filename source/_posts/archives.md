---
title: 關於archives的設定
date: 2024-08-09 07:22:11
tags:
---
## 錯誤
這邊很妙 當title設為archives的時候

儘管layout設定archives，但總會連到index.ejs上面

應該是/archives路徑已經預設被指到index.ejs了

所以歸檔的部分，我決定換名字 改為archives_N

## 正確
命名的時候輸入archive.ejs會自動導入archive.ejs裡面

如果title設為archives.ejs的時候，當然會沒有反應

導致變成連到index.ejs上面

### tag.ejs
tag.ejs才抓的到
如果打tags.ejs會抓不到

#### 參考
https://github.com/henryhuang/hexo-theme-aloha/tree/master/layout