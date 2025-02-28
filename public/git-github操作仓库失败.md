# 【git】 ssh: connect to host github.com port 22: Connection timed out 的解决方法

1. ##### 首先，尝试使用以下命令从 GitHub 克隆仓库：

   ```
   git clone git@github.com:xxxxx/xxxx.git
   ```

   如果出现以下错误信息：

   ```
   Cloning into 'xxx'...
   ssh: connect to host github.com port 22: Connection timed out
   fatal: Could not read from remote repository.
   ```

   这说明不能通过 22 端口连接到 GitHub

2. ##### 尝试使用以下命令测试 SSH连接

   ```
   ssh -T git@github.com
   ```

   如果再次出现连接超时的错误信息：

   ```
   ssh: connect to host github.com port 22: Connection timed out
   fatal: Could not read from remote repository.
   
   Please make sure you have the correct access rights
   and the repository exists.
   ```

   这意味着无法通过 22 端口进行 SSH 连接

3. 尝试使用以下命令，将 SSH 连接的端口更改为 443

   

   ```
   ssh -T -p 443 git@ssh.github.com
   ```

   如果显示以下信息：

   ```
   Hi xxxx! You've successfully authenticated, but GitHub does not provide shell access.
   ```

   这意味着通过 443 端口成功进行了身份验证，但 GitHub 不提供 shell 访问权限。

4. 现在，我们需要在 `~/.ssh/config` 文件中覆盖 SSH 设置。使用以下命令编辑该文件

   ```
   vim ~/.ssh/config
   ```

   进入文件后，按键盘`i`进入插入模式, 粘贴以下内容:

   ```
   Host github.com
     Hostname ssh.github.com
     Port 443
   ```

   然后按键盘`Esc`→`:wq`, 保存并关闭文件
   按键盘`:q!`：不保存退出

5. 最后，再次尝试使用以下命令进行 SSH 连接

   ```
   ssh -T git@github.com
   ```

   如果显示以下信息:

   ```
   Hi xxxxx! You've successfully authenticated, but GitHub does not provide shell access.
   ```

6. 现在，您可以尝试再次克隆仓库

   ```
   git clone git@github.com:xxxxxx/xxxxx.git
   ```

   如果显示以下信息：

   ```
   Cloning into 'my-awesome-proj'...
   remote: Enumerating objects: 15, done.
   remote: Counting objects: 100% (15/15), done.
   remote: Compressing objects: 100% (14/14), done.
   remote: Total 15 (delta 0), reused 15 (delta 0), pack-reused 0
   Receiving objects: 100% (15/15), 22.90 KiB | 4.58 MiB/s, done.
   ```

   这意味着成功克隆了 GitHub 上的仓库。

