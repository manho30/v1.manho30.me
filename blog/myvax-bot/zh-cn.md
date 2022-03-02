# MyVaxBot 机器人
 ![img](https://raw.githubusercontent.com/manho30/manho30.github.io/main/assets/vax_bot.png)

一个推送马来西亚🇲🇾 

 - **疫苗接种数据**
 - **每日确诊病例**

的电报机器人

 使用`JavaScript`构建, 在`谷歌应用脚​​本`上工作。

 ## 功能
 - 学校疫苗接种
 - 历史记录查询
 - 每日疫苗接种数据

   - 青少年(12-18岁) 
   - 儿童(5-11岁）
   - 成人(18岁以上)

 ### 版本
 - v1（_旧版本_）
   - 每日疫苗接种信息
   - 疫苗接种进度条
   - 每日新增接种疫苗百分比

 - v2
   - 与第一版本功能大同小异
   - 预计疫苗达到 80% 覆盖率还需的时间
   - 树形格式的数据，一目了然
   - 青少年、儿童每日新增疫苗接种百分比

 频道：[@myvaccinecount](https://t.me/myvaccinecount)<br>
 机器人：[@myvaccinecountbot](https://t.me/myvaccinecountbot)

 ## 应用的平台
 - 谷歌应用脚​​本（基于 JS 语法）
 - 电报机器人 API

 ## 初步开发

 这是一个简单的解释。 也许它对初学者不时那么的友好。

 ### 安装

打开电脑终端并输入
 ```bash
 $ git clone https://github.com/manho30/MyVaxCountBot
 $ cd function/src/
 $ npm install @google/clasp -g
 ```

 然后选择你喜欢的版本

 ### 编辑 Const.js

 - 改变你自己的`bot_token`。
 - 将“Const.myId”更改为您的个人 ID。

 ### 将代码推送到谷歌

 手动推送代码

 打开 [此链接](https://script.google.com/home/)
 - 创建一个应用脚本项目
 - 把所有的代码复制到上面
 - 保存(save) 和部署(deploy) 


 ### 网络钩子(webhook) 
 这是在 Google 应用脚本上操作
 - 打开`const.js`
 - 单击发布按钮并复制 URL。
    - 使用 URL 更改 `Const.gasLink`。
    - 保存
    - 打开 `webhook.gs`，运行 `fetchingWebhook` 函数。

 更多 Telegram Bot API 请访问 [这里](https://core.telegram.org/bots/api) 
