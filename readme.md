# 简介

本软件主要对游戏`“东方夜雀食堂”`提供菜单和饮料查询的辅助软件，**仅用于Android**，**免费使用！**

支持自定义角色数据，编辑角色推荐菜品与饮料，便捷查询角色的菜谱与饮料。

使用`HBuilderX`开发，`uniapp`+`Vue3`+`uv-ui`

# 使用方式

安装即用，软件会内置游戏数据，所以不需要导入配置文件，配置文件主要进行自定义修改。

![info](./info.png)

# 软件设置

1.   **重置缓存**

     该操作会将软件数据初始化，恢复到初次使用的数据。*一般不需要使用该操作*。

2.   ### 导入配置文件 *

     该操作是读取本地文件，将文件中的 `json` 格式的数据读取到软件中，共有8种类型的数据，**项目文件夹`datas`下有数据文件**。按照下列格式编辑，即可导入相关数据。*(可选)文件编辑完成后，可以找个在线解析`JSON`的网站查询一下格式是否合格，同时注意不要有特殊符号*。

     文件名格式为 **`npc_xxxx.txt`**，例如：`npc_20240601.txt`。

     *   `npc`为8种固定类型名称，**不可更改**。

     *   `_xxxx`可以随意编辑，可出现多个下划线，时间表示截止到这个时间的最新数据，做个标记。

     *   文件后缀统一为`txt`，主要方便手机直接编辑，文件内容大部分为`JSON`格式。`JSON`格式前后需用`[]`包裹，并且最后一条数据`}`后面没有`,`，例如：`[{},{},{}]`。**请全部使用英文`,`**，后面空格随意。

     *   如果不会编辑，可以下载项目文件夹`datas`下文件，进行二次编辑。

     *   数据中使用的图片名称如果重名，请以项目`datas`文件夹下文件里图片名称为准。

     *   文档中不要加`//`的注释，防止导入失败。

     *   文档中换行使用`\n`。

         

     1.   `npcRecommend_xxxx.txt`

          这个文件**主要**针对角色的推荐菜品与饮料进行更新，下一个文件太大了，而且基本不会修改。*（角色的其他字段也可以使用，也会更新到角色信息上）*

          该文件为增量更新，只会更新文件中出现的角色，其他角色不会更新。*可以只更新一个角色，也可以更新多个角色。*
     
          ```json
          [
              {
                  // 角色名称，固定，不可更改
                  "chinese": "莉格露",
                  // 角色推荐料理，加料使用*间隔，多个使用+间隔，或者使用/间隔
                  "recommendCooks": "香炸蝉蜕*鸡蛋/蜂蜜/猪肉, 猩红恶魔蛋糕",
                  // 角色推荐饮料
                  "recommendDrinks": "果味High Ball, 果味SOUR, 淇"
              }
          ]
          ```

     2.   `npc_xxxx.txt`

          记载游戏中角色的数据，包括名称，金钱，地点，符卡，tag，羁绊等等。
     
          <details>
              <summary>点击这里展开</summary>
              <pre><code class="language-cpp">[
          	{
          		// 使用的图片名称，有重名时，与项目文件里保持一致
          		"name": "sbzhy",
          		// 角色名称
          		"chinese": "上白泽慧音",
          		// 角色介绍，暂时没用上
          		"info": "",
          		// 角色喜好tag
          		"tag": "中华, 素, 家常, 文化底蕴, 清淡, 和风, 流行喜爱",
          		// 角色厌恶tag
          		"noTag": "重油, 大份, 咸, 流行厌恶",
          		// 角色喜好饮料tag
          		"drinks": "烧酒, 清酒, 利口酒",
          		// 角色持有金钱
          		"money": "400 - 800",
          		// 角色推荐料理，加料使用*间隔，多个使用+间隔，或者使用/间隔
          		"recommendCooks": "豆腐味噌*银杏+海带/糯米, 汤圆*银杏",
          		// 角色推荐饮料
          		"recommendDrinks": "雀酒, 日月星, 水獭祭, 梅酒, 神之麦",
          		// 角色奖励符卡
          		"rewardCard": {
          			// 角色奖励符卡名称
          			"name": "国符「三种神器」",
          			// 角色奖励符卡具体介绍，换行使用\n
          			"effect": "三种神器·剑\n随机获得两种蔬菜。\n三种神器·镜\n接下来的15s内, 料理不会消耗任何材料。\n三种神器·玉\n打开心灵之锁, 随机解锁一名未完全解锁全部喜好的稀客的一个信息。\n三种神器·乡\n对你的店大加好评的慧音老师使用特报宣传你的店铺, 吸引了大量居民前来就餐。\n--三种神器有四件不是常识吗？"
          		},
          		// 角色惩罚符卡
          		"punishCard": {
          			// 角色惩罚符卡名称
          			"name": "国符「秘笈·头槌」",
          			// 角色惩罚符卡具体介绍，换行使用\n
          			"effect": "吃我头槌哒！被慧音老师的头槌击中将会眩晕20秒。上下左右乱打可以快速恢复。"
          		},
          		// 角色羁绊
          		"friendship": [{
						// 角色羁绊提升至当前等级
						"name": "2",
						// 角色羁绊提升前置条件
						"condition": "无",
						// 角色羁绊提升任务
						"task": "在营业中请上白泽慧音品尝一下「油豆腐」"
					}, {
						"name": "3",
						"condition": "无",
						"task": "在营业中请上白泽慧音品尝一下「诗礼银杏」"
					}, {
						"name": "4",
						"condition": "交付1份河豚\n交付1份南瓜",
						"task": "在营业中请上白泽慧音品尝一下「白雪」"
					}, {
						"name": "5",
						"condition": "",
						"task": "中华风校服"
					}],
                  // 角色出没地点
                  "location": "人间之里, 魔法森林, 命莲寺"
              },
              {
                  "name": "bbttdsyj",
                  "chinese": "蹦蹦跳跳的三妖精",
                  "info": "",
                  "tag": "梦幻, 甜, 菌类, 小巧, 家常, 凉爽, 流行喜爱",
                  "noTag": "生, 灼热, 猎奇, 流行厌恶",
                  "drinks": "苦, 甘, 水果, 无酒精",
                  "money": "300 - 400",
                  "recommendCooks": "毛玉三色冰激凌*土豆",
                  "recommendDrinks": "",
                  "rewardCard": {},
                  "punishCard": {},
                  "friendship": [],
                  "location": "妖怪兽道, 人间之里, 博丽神社, 红魔馆, 迷途竹林, 妖怪之山"
              }
          ]</code></pre>
          </details>
     
     3.   `cook_xxxx.txt`
     
          游戏中食谱数据，一般不会修改。
     
          `cook1`:煮锅，`cook2`:烤架，`cook3`:炒锅，`cook4`:蒸锅，`cook5`:料理台。
     
          ```json
          [
              {
                  "name": "cdf",
                  "chinese": "臭豆腐",
                  // 厨具图片名称
                  "cooker": "cook3",
                  "tag": "素, 中华, 猎奇, 辣",
                  "withNo": "甜, 果味",
                  "material": "豆腐, 辣椒",
                  "level": "1",
                  "money": "24"
              },
          ]
          
     4.   `cookTag_xxxx.txt`
     
          料理的tag，一般不会修改。格式为字符串数组。

          ```
          昂贵, 实惠, 大份, 肉, 水产, 素, 家常, 高级, 传说, 重油, 清淡, 下酒, 饱腹, 山珍, 海味, 和风, 西式, 中华, 咸, 鲜, 甜, 生, 招牌, 适合拍照, 凉爽, 灼热, 力量涌现, 猎奇, 文化底蕴, 菌类, 不可思议, 小巧, 梦幻, 特产, 酸, 果味, 汤羹, 烧烤, 辣, 燃起来了
		```
     
     5.   `drinks_xxxx.txt`
     
          游戏中饮料数据，一般不会修改。
     
          ```json
          [
              // 数据中使用的图片名称如果重名，请以项目`datas`文件夹下文件里图片名称为准。
              {"name":"yzgl", "chinese":"杨枝甘露", "tag": "无酒精,可加冰,水果", "level":"2", "money": "50"},
              {"name":"lrz", "chinese":"伶人醉", "tag": "低酒精,直饮,水果,古典,甘", "level":"3", "money": "100"}
          ]
          ```
     
     6.   `drinksTag_xxxx.txt`
     
          饮料的tag，一般不会修改。格式为字符串数组。
     
          ```
          无酒精, 低酒精, 中酒精, 高酒精, 可加冰, 可加热, 烧酒, 清酒, 鸡尾酒, 西洋酒, 利口酒, 啤酒, 直饮, 水果, 甘, 辛, 苦, 气泡, 古典, 现代, 提神
          ```
     
     7.   `material_xxxx.txt`
     
          游戏中料理原材料数据，一般不会修改。
     
          ```json
          [
              // 数据中使用的图片名称如果重名，请以项目`datas`文件夹下文件里图片名称为准。
              {"name":"haitai", "chinese":"海苔", "tag": "鲜,素", "level":"1", "money": "3"},
              {"name":"bmm", "chinese":"八目鳗", "tag": "水产,招牌,鲜", "level":"2", "money": "14"}
          ]
          ```
     
     8.   `location_xxxx.txt`
     
          游戏中地图数据，一般不会修改。格式为字符串数组。
     
          ```
          妖怪兽道, 人间之里, 博丽神社, 红魔馆, 迷途竹林, 魔法森林, 妖怪之山, 旧地狱, 地灵殿, 命莲寺, 神灵庙, 太阳花田, 辉针城, 月之都, 魔界
          ```
     
          