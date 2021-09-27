---
title: odoo @profile 性能测试
date: 2020-04-08 17:25:25  # 建立日期
updated: 2020-04-08 17:25:25  # 更新日期
tags: [odoo]
categories: Python

comments: true  # 开启文章的评论功能
copyright : ture  # 授权问题显示
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
# keys:  # 阅读密码
#  - '123456'
# publish: false  # 文章是否发布
# sticky: 100  # 文章置顶
---

使用 @profile 性能测试
<!-- more -->

## odoo rst 文档
> Another profiler can be used to log statistics on a method:

```python
from odoo.tools.profiler import profile
[...]
@profile
@api.model
def mymethod(...):
```
> The statistics will be displayed into the logs once the method to be analysed is completely reviewed.
```bash
2018-03-28 06:18:23,196 22878 INFO openerp odoo.tools.profiler:
calls     queries   ms
project.task ------------------------ /home/odoo/src/odoo/addons/project/models/project.py, 638

1         0         0.02          @profile
                                    @api.model
                                    def create(self, vals):
                                        # context: no_log, because subtype already handle this
1         0         0.01              context = dict(self.env.context, mail_create_nolog=True)

                                        # for default stage
1         0         0.01              if vals.get('project_id') and not context.get('default_project_id'):
                                            context['default_project_id'] = vals.get('project_id')
                                        # user_id change: update date_assign
1         0         0.01              if vals.get('user_id'):
                                            vals['date_assign'] = fields.Datetime.now()
                                        # Stage change: Update date_end if folded stage
1         0         0.0               if vals.get('stage_id'):
                                            vals.update(self.update_date_end(vals['stage_id']))
1         108       631.8             task = super(Task, self.with_context(context)).create(vals)
1         0         0.01              return task

Total:
1         108       631.85
```

## @profile 用法
```py
# 引入 profile
from odoo.tools.profiler import profile
...
# 添加装饰器
@api.model_create_multi
@profile
def create(self, vals_list):
    ...
```

```sh
<!-- 输出结果 -->
2020-10-30 14:41:29,185 6884 INFO 1029 odoo.tools.profiler:
calls     queries   ms
res.users --------------------------- /opt/odoo/./core/odoo/addons/base/models/res_users.py, 474

1         0         0.02          @api.model_create_multi
                                  @profile
                                  def create(self, vals_list):
1         56        313.6             users = super(Users, self).create(vals_list)
3         0         0.04              for user in users:
1         2         9.17                  user.partner_id.write({'company_id': user.company_id.id, 'active': user.active})
1         0         0.0               return users

Total:
1         58        322.84
```
