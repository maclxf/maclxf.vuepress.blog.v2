---
title: Git commit 的规范
icon: git
star: true
date: 2022-08-30
sticky: true
category:
  - 收集
tag:
  - 收集
# home: true
# footer: start footer
---
|--------|------------------|-----------------------------------------|
| code | 英文 | 中文|
| feat |     A new feature |新增功能|
|--------|------------------|-----------------------------------------|
| fix |      A bug fix |修复 bug
| docs |     Documentation only changes |文档变更|
|--------|------------------|-----------------------------------------|
| style |    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |代码格式（不影响功能，例如空格、分号等格式修正）|
|--------|------------------|-----------------------------------------|
| refactor | A code change that neither fixes a bug nor adds a feature |代码重构（不包括 bug 修复、功能新增）|
|--------|------------------|-----------------------------------------|
| perf |     A code change that improves performance |性能优化|
|--------|------------------|-----------------------------------------|
| test |     Adding missing tests or correcting existing tests|
|--------|------------------|-----------------------------------------|
| build |    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)||
|--------|------------------|-----------------------------------------|
| ci |       Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)||
|--------|------------------|-----------------------------------------|
| chore |    Other changes that don't modify src or test files |其他修改, 比如构建流程, 依赖管理、版本好修正|
|--------|------------------|-----------------------------------------|
| revert |   Reverts a previous commit||
|--------|------------------|-----------------------------------------|
