Git:
 git --version    查看安装的版本
 git init         初始化
 git config --global user.name 'chenyue'
 git config --global user.email '285653184@qq.com'

 git status	  获取队列状态
 git add . 	  添加所有文件到队列
 git add *.html   添加所有html文件到队列
 git add index.html 添加到队列 
 git rm --cached index.html 移除队列中的

 git commit	  提交队列中的文件到 仓库
 	写完备注后，按esc  冒号  wq 退出
     或者两步同时进行  git commit -m 'app.js changed'
 分支中的所有操作都不会影响到主线
 git branch login  创建分支
 git checkout login  跳转到某个分支
 git merge login    合并某个分支

git reset --hard HEAD~1  
//回滚到上一版本


 忽略一些文件或者文件夹
 创建.gitignore文件，并在里面写入要忽略的文件名
 
远程仓库github
  git remote add origin https://github.com/RiseUpCY/GitLearn.git
  git push -u origin master

 git remote  查看当前的远程仓库链接情况
 git push  origin 本地分支:远程分支  放入资源到仓库中
 git pull  orgin 远程分支:本地分支  拉取远程资源
 
 git clone https://github.com/RiseUpCY/GitLearn.git 下载到本地，终端路径所在位置

 创建本地分支与远程分支的关联 
 git branch --set-upstream-to  origin master/origin
 关联并推送远程分支
 git push --set-upstream origin cy
 清除本地修改
 git reset --hard
CMD:
 type nul>index.html  创建一个文件
 或echo "# GitLearn" >> README.md
## 分支管理
    git branch 查看本地
    -a 全部,包括远程
    -v 根治版本信息
    --d 删除
    --merged 合并了的
    --no-merged
## 场景: 分支管理: 
    1. 切换到新的分支开始工作
        git checkout -b branchname  
    2. 当有紧急问题来了,需要提交/回到主干/切换到新的分支
        git add/commit
        git checkout master
        git branch -b hotbranch
    3. 当修复完紧急事件可以提前提交
        git add/commit
        git checkout master
        git merge hotbranch
        git branch -d hotbranch
        git push
    4. 继续回到之前的分支继续
        git checkout branchname
    5. 完成之前的事情之后,提交合并
        git add/commit
        git checkout master
        git merge branchname
    6. 解决冲突之后上传代码 
<!-- sort -->