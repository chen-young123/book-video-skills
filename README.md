# Book Video Skills

一个面向 Codex 的图书短视频制作 Skill，帮助使用者把模糊选题推进为可审核的文案、画面方案和成片交付。

它解决的不是某一条视频怎么照搬，而是怎样稳定完成一次制作：确认选题、核验信息、形成原创表达、组织音画、设置决策节点，并在交付前完成质量检查。

## 来源与个性化改造

本项目的工作流思路受 [Endless1936/book-video](https://github.com/Endless1936/book-video) 启发，并在 Apache-2.0 许可下由 `chen-young123` 进行个性化改造。

本仓库的改造包括：

- 将端到端图书视频工作流提炼为可独立安装的 Codex Skill；
- 重组为选题、核验、文案、音画、质检和复盘的通用决策流程；
- 增加文案、字幕、画面和失败恢复的检查方法；
- 增加用于维护本仓库结构的验证脚本与使用文档。

本项目与上游作者不存在隶属、合作或背书关系。上游版权与本项目的改造声明见 [NOTICE](NOTICE)。

## 能做什么

- 根据受众、主题、平台和时长收敛选题。
- 核验书名、作者、版本和关键事实。
- 生成并迭代原创口播文案与画面方案。
- 协调旁白、字幕、画面、节奏和渲染顺序。
- 用少量明确的用户决策节点推进制作。
- 在交付前检查事实、版权、音画一致性和成片质量。

## 安装

克隆仓库后，将 `skills/book-video-workflow/` 复制到你的 Codex Skills 目录：

```text
~/.codex/skills/book-video-workflow/
```

重新打开 Codex 后，可以直接描述任务，例如：

```text
帮我为一本关于孤独与成长的书策划一条 60 秒内的竖屏短视频。
```

```text
检查这份图书短视频文案，并给出画面、旁白和字幕的制作方案。
```

## 工作流

```text
需求澄清 → 选题与核验 → 原创文案 → 画面与声音方案
        → 本地制作 → 自动检查 → 用户确认 → 交付与复盘
```

选题、文案、成片和发布是主要决策节点。确定性的整理、校验和制作步骤可由 Codex 连续执行；遇到事实不清、素材授权不明或明显质量取舍时，再交给使用者决定。

## 仓库结构

- [`skills/book-video-workflow/SKILL.md`](skills/book-video-workflow/SKILL.md)：Skill 的入口、适用场景和核心流程。
- [`skills/book-video-workflow/references/production-method.md`](skills/book-video-workflow/references/production-method.md)：完整制作方法、决策节点和质检标准。
- [`skills/book-video-workflow/agents/openai.yaml`](skills/book-video-workflow/agents/openai.yaml)：Skill 在 Codex 中的显示信息。
- [`scripts/check-public-tree.mjs`](scripts/check-public-tree.mjs)：维护者提交前使用的仓库结构检查。

## 开发检查

```bash
npm test
```

该命令检查 Skill 仓库的结构与提交内容，不会操作使用者的视频制作目录。

## 使用与致谢

直接复制、修改或再分发本仓库的代码、Skill 或文档时，请遵守 Apache-2.0：保留 [LICENSE](LICENSE)、[NOTICE](NOTICE) 和适用的版权声明，并在修改过的文件中说明改动。

如果你只学习这里的方法并独立完成内容，不要求在视频或作品中署名；如果本项目直接帮助了你的工具或工作流，欢迎在项目说明中注明：

```text
基于 book-video-skills 的工作流方法改造：
https://github.com/chen-young123/book-video-skills
```

请勿暗示上游作者或 `chen-young123` 为你的作品、产品或发布提供背书。

## 使用原则

- 研究材料用于核验与理解，不直接拼接成长摘录或现成评论。
- 创作者始终负责最终观点、文案批准、素材授权和发布决定。
- 音乐、字体、模型和素材遵循各自许可证与平台规则。
- 自动检查用于发现问题，不能代替事实核验、版权判断和人工审美。

## 许可

本仓库以 Apache-2.0 许可证发布。上游版权和本项目的改造归属见 [NOTICE](NOTICE)。第三方工具、模型、字体、书籍内容与用户自行提供的媒体仍分别适用其原有条款。
