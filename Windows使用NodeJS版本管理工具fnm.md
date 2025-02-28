### Windows 使用 NodeJS 版本管理工具 fnm

#### 一、fnm 安装

打开 Powershell 控制台安装，使用 winget

```powershell
winget install Schniz.fnm
```

目前 fnm 的最新版本是 v1.37.2，github 下载地址如下。

```url
https://github.com/Schniz/fnm/releases
```

安装好 fnm 之后，打开控制台（Powershell），查看版本

```
fnm -V
# 或者
fnm --version

// fnm 1.37.2
```

#### 二、fnm 环境变量配置

此时运行命令`fnm use`你会发现报错了

```
error: We can't find the necessary environment variables to replace the Node version.
You should setup your shell profile to evaluate `fnm env`, see https://github.com/Schniz/fnm#shell-setup on how to do this
Check out our documentation for more information: https://fnm.vercel.app
```

大概意思就是无法找到所需的环境变量去替换 node 版本，解决方案如下：

##### Powershell 设置

1、在下面的目录新建`profile.ps1`文件

```bash
%USERPROFILE%\Documents\WindowsPowerShell\profile.ps1
```

> 提示：
>
> `%USERPROFILE%`: 表示用户目录，直接在文件管理的地址栏输入 `%USERPROFILE%`，然后回车
>
> WindowsPowerShell 为新建的目录, 如果安装 node 后命令仍然无法识别，将文件夹名称改为 PowerShell

2、将下面的代码写入到上面的配置文件里面

```bash
fnm env --use-on-cd | Out-String | Invoke-Expression
```

##### CMD 配置

1. win+s 搜索 cmd
2. 打开文件所在位置
3. 对 “命令提示符” 右键，点击属性
4. 修改 `目标` 输入框内值为下面的值

```
%windir%\system32\cmd.exe /k %USERPROFILE%\bashrc.cmd
```

5. 再次进入用户目录 `%USERPROFILE%`，添加文件 `bashrc.cmd`
6. 将下面的代码写入到上面的配置文件里面

```bash
@echo off
FOR /f "tokens=*" %%z IN ('fnm env --use-on-cd') DO CALL %%z
```

##### Git Bash 配置

进入用户目录 `%USERPROFILE%`，在 git bash 的配置文件 `.bash_profile` 添加下面的代码：

```bash
eval $(fnm env | sed 1d)
export PATH=$(cygpath $FNM_MULTISHELL_PATH):$PATH

if [[ -f .node-version || -f .nvmrc ]]; then
   fnm use
fi
```

##### VSCode 终端配置

在配置文件 settings.json 里面添加如下代码：

```json
"terminal.integrated.defaultProfile.windows": "Default Cmd",
"terminal.integrated.profiles.windows": {
  "Default Cmd":{
    "path": "C:\\Windows\\System32\\cmd.exe",
    "args": ["/k", "%USERPROFILE%\\bashrc.cmd"]
  }
}
```

> 提示：VSCode 设置更改后需重启方可生效

##### 项目 Git Hook 配置

如果在提交 git 时提示不能识别 node，可以在 `.husky` 文件夹下的 `commit-msg` 、`pre-commit` 文件内添加以下命令：

```bash
eval "$(fnm env)"
```

#### 三、fnm 使用（常用命令）

```powershell
fnm list-remote      			# 从列出所有远程Node.js版本 [aliases: ls-remote]
fnm list             			# 列出所有本地安装的Node.js版本 [aliases: ls]
fnm install <version>  			# 安装一个新的Node.js版本
fnm use <version>|<alias>       # 更改Node.js版本
fnm env             			# 打印并设置fnm所需的环境变量
fnm completions     			# 将shell完成打印到stdout
fnm alias <version> <alias>     # 设置node版本别名
fnm unalias <alias>         	# 删除别名定义
fnm default <version>   		# 将某个版本设置为默认版本
fnm current          			# 打印当前Node.js版本
fnm exec             			# 在fnm上下文中运行命令
fnm uninstall <version>  		# 卸载Node.js版本
fnm help             			# 帮助 [aliases: -h]
fnm -V							# 查看fnm版本[aliases: --version]
```

> 提示：打印当前 node 版本 `node -v`
