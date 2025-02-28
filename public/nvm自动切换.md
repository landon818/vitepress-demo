## PowerShell

### 1. 确定 `PowerShell` 的配置文件路径

首先，我们需要找到 `PowerShell` 的配置文件路径。在 `PowerShell` 中，配置文件路径通常存储在 `$PROFILE` 环境变量中。

这是一个 `PowerShell` 自动变量，包含当前用户的 `PowerShell` 配置文件的完整路径。它的路径根据 `PowerShell` 的版本和配置不同而有所不同。

在 PowerShell 7 中运行以下命令来检查 `$PROFILE` 路径：

```powershell
$PROFILE
```

输出类似于：

```plaintext
C:\Users\YourName\Documents\PowerShell\Microsoft.PowerShell_profile.ps1
```

> 实际上这一步没啥必要，直接进行下一步就行！

### 2. 创建或编辑 `$PROFILE` 文件

运行以下命令：

```powershell
notepad $PROFILE
```

如果运行命令后提示——“系统找不到指定路径”，可能是因为配置文件或其所在目录尚未创建。我们可以手动创建该文件，然后编辑。

#### 2.1 创建配置文件目录（如果尚未创建）

```powershell
$profileDir = Split-Path -Parent $PROFILE
if (-not (Test-Path -Path $profileDir)) {
    New-Item -ItemType Directory -Path $profileDir
}

New-Item -ItemType File -Path $PROFILE -Force
notepad $PROFILE
```

直接复制粘贴到命令窗口就好。

解释一下这些命令：

```plaintext
# 获取配置文件目录路径
$profileDir = Split-Path -Parent $PROFILE

# 检查并创建配置文件目录
if (-not (Test-Path -Path $profileDir)) {
    New-Item -ItemType Directory -Path $profileDir
}

# 创建 PowerShell 配置文件
New-Item -ItemType File -Path $PROFILE -Force

# 打开 PowerShell 配置文件
notepad $PROFILE
```

#### 2.2 编辑配置文件

运行 `notepad $PROFILE` 命令在记事本中打开的文件中，添加以下代码来自定义提示符：

```powershell
# 获取当前目录下的 .nvmrc 文件
# 获取在用户目录下的 .nvmrc文件
$currentNvmrcPath = Join-Path -Path (Get-Location) -ChildPath ".nvmrc"
$userNvmrcPath = Join-Path -Path $HOME -ChildPath ".nvmrc"

if (Test-Path $currentNvmrcPath) {
    $nodeVersion = Get-Content $currentNvmrcPath
    nvm use $nodeVersion
} elseif (Test-Path $userNvmrcPath) {
    $nodeVersion = Get-Content $userNvmrcPath
    nvm use $nodeVersion
}else {
    # 获取当前安装的 Node.js 版本
     nvm use 20.18.0
}
```

### 3. 保存并应用更改

保存文件并关闭记事本。运行以下命令立即应用更改：

```powershell
. $PROFILE
```

## 4. fnm配置

```shell
#powershell
fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression

#bash
eval "$(fnm env --use-on-cd --shell bash)"

#vscode
fnm env --use-on-cd | Out-String | Invoke-Expression
notepad $profile
#在打开文件中设置
fnm env --use-on-cd | Out-String | Invoke-Expression


```

