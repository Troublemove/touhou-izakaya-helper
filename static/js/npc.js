// 角色配置
// Excel 函数 =CONCATENATE("{'name':'', 'chinese':'",B2,"', 'info': '','tag': ['",C2,"'], 'noTag': ['",D2,"'], 'drinks': ['",E2,"'], 'location': '",A2,"''money': '', 'recommendCooks': '', 'recommendDrinks': '', 'rewardCard': {'name':'', 'effect': ''}, 'punishCard': {'name':'', 'effect': ''}, 'friendship': [{'name':'', 'condition':'', 'task': ''}]},")

export const npcData = () => {
	return [{
			"name": "lgl",
			"chinese": "莉格露",
			"info": "",
			"tag": "甜, 生, 肉, 猎奇",
			"noTag": "素, 清淡, 凉爽",
			"drinks": "低酒精, 可加冰",
			"money": "200 - 400",
			"recommendCooks": "香炸蝉蜕*鸡蛋2222, 猩红恶魔蛋糕*蝉蜕",
			"recommendDrinks": "果味High Ball, 果味SOUR, 淇",
			"rewardCard": {
				"name": "灯符「荧光现象」",
				"effect": "喷出大量萤火虫, 让店内气氛更加美妙, 客人刷新时间减少30%, 持续60秒。"
			},
			"punishCard": {
				"name": "蠢符「夜虫龙卷」",
				"effect": "赶走当前所有上座的客人且不付钱。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付1份露水",
					"task": "在营业中请莉格露品尝一下「露水煮蛋」"
				},
				{
					"name": "3",
					"condition": "无",
					"task": "在营业中请莉格露品尝一下「香炸蝉蜕」"
				},
				{
					"name": "4",
					"condition": "交付1份幻昙华",
					"task": "在营业中请莉格露品尝一下「幻昙花糕」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "妖怪兽道采集"
				}
			],
			"location": "妖怪兽道, 魔法森林, 太阳花田, 辉针城"
		},
		{
			"name": "lmy",
			"chinese": "露米娅",
			"info": "",
			"tag": "饱腹, 招牌, 肉, 猎奇, 生, 流行喜爱",
			"noTag": "下酒, 昂贵, 流行厌恶",
			"drinks": "苦, 气泡",
			"money": "150 - 350",
			"recommendCooks": "香炸蝉蜕*鸡蛋, 豚骨拉面*蝉蜕",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "月符「月光射线」",
				"effect": "随机获得图鉴中记录的三种肉类食材(如图鉴记录的肉类食材只有两种, 则获得两种)。为什么月光会产生肉,为什么最爱吃肉的露米娅会把肉送给你, 考虑这些会变笨。"
			},
			"punishCard": {
				"name": "暗符「境界线」",
				"effect": "在厨房里放出黑雾, 让你无法辨识哪些是厨具, 哪些是食柜, 持续20秒消失。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付1份豆腐",
					"task": "在营业中请露米娅品尝一下「臭豆腐」"
				},
				{
					"name": "3",
					"condition": "无",
					"task": "在营业中请露米娅品尝一下「炸八目鳗」"
				},
				{
					"name": "4",
					"condition": "交付1份黑毛猪肉\n交付1份竹笋",
					"task": "在营业中请露米娅品尝一下「赛熊掌」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "黑色套装"
				}
			],
			"location": "妖怪兽道, 魔法森林"
		},
		{
			"name": "c",
			"chinese": "橙",
			"info": "",
			"tag": "重油, 水产, 烧烤, 肉, 流行喜爱, 甜",
			"noTag": "猎奇, 灼热, 素, 流行厌恶",
			"drinks": "水果, 辛",
			"money": "400 - 600",
			"recommendCooks": "烤八目鳗*蜂蜜, 蜜汁叉烧",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "仙符「凤凰卵」",
				"effect": "随机自动获得三种鱼类食材, 偶然会出现高级货。为什么会产生鱼, 为什么最爱吃鱼的橙会把鱼送给你, 考虑这些会让人变得纠结。"
			},
			"punishCard": {
				"name": "方符「奇门遁甲」",
				"effect": "让顾客开始脑内撸猫, 变的平和。减少了客人的出现率。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请橙品尝一下「秘制小鱼干」"
				},
				{
					"name": "3",
					"condition": "交付1+1份猪肉\n交付1+1份鳟鱼",
					"task": "在营业中请橙品尝一下「猪肉鳟鱼熏」"
				},
				{
					"name": "4",
					"condition": "交付1+1份海苔\n交付1份野猪肉",
					"task": "在营业中请橙品尝一下「力量汤」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "招财猫：使店内的小费率额外增加15%。"
				}
			],
			"location": "妖怪兽道"
		},
		{
			"name": "btaq",
			"chinese": "稗田阿求",
			"info": "",
			"tag": "和风, 清淡, 高级, 文化底蕴, 汤羹, 甜, 流行喜爱",
			"noTag": "灼热, 流行厌恶, 重油, 咸",
			"drinks": "清酒, 可加热",
			"money": "500 - 800",
			"recommendCooks": "豆腐味噌*蜂蜜, 白雪*蜂蜜",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "撰书「这也全都是妖怪干的吗」",
				"effect": "获得一张名小说家的签名色纸, 可以用来换些特别的东西!"
			},
			"punishCard": {
				"name": "口授「黑心店家的黑心历史」",
				"effect": "被阿求曝光一件经营上的糗事, 导致店内气氛一下掉落到冰点。店里的客人听到这个也会降低心情。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请稗田阿求品尝一下「豆腐味增」"
				},
				{
					"name": "3",
					"condition": "交付1份土豆\n交付1份南瓜",
					"task": "在营业中请稗田阿求品尝一下「蔬菜专辑」"
				},
				{
					"name": "4",
					"condition": "无",
					"task": "在营业中请稗田阿求品尝一下「樱落雪」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "人间之里采集"
				}
			],
			"location": "人间之里, 命莲寺"
		},
		{
			"name": "sbzhy",
			"chinese": "上白泽慧音",
			"info": "",
			"tag": "中华, 素, 家常, 文化底蕴, 清淡, 和风, 流行喜爱",
			"noTag": "重油, 大份, 咸, 流行厌恶",
			"drinks": "烧酒, 清酒, 利口酒",
			"money": "400 - 800",
			"recommendCooks": "豆腐味噌, 汤圆, 白雪",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "国符「三种神器」",
				"effect": "三种神器·剑\n随机获得两种蔬菜。\n三种神器·镜\n接下来的15s内, 料理不会消耗任何材料。\n三种神器·玉\n打开心灵之锁, 随机解锁一名未完全解锁全部喜好的稀客的一个信息。\n三种神器·乡\n对你的店大加好评的慧音老师使用特报宣传你的店铺, 吸引了大量居民前来就餐。\n--三种神器有四件不是常识吗？"
			},
			"punishCard": {
				"name": "国符「秘笈·头槌」",
				"effect": "吃我头槌哒！被慧音老师的头槌击中将会眩晕20秒。上下左右乱打可以快速恢复。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请上白泽慧音品尝一下「油豆腐」"
				},
				{
					"name": "3",
					"condition": "无",
					"task": "在营业中请上白泽慧音品尝一下「诗礼银杏」"
				},
				{
					"name": "4",
					"condition": "交付1份河豚\n交付1份南瓜",
					"task": "在营业中请上白泽慧音品尝一下「白雪」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "中华风校服"
				}
			],
			"location": "人间之里, 魔法森林, 命莲寺"
		},
		{
			"name": "cmhs",
			"chinese": "茨木华扇",
			"info": "",
			"tag": "家常, 文化底蕴, 和风, 下酒",
			"noTag": "实惠, 生, 辣",
			"drinks": "中酒精, 古典, 直饮",
			"money": "400 - 600",
			"recommendCooks": "豆腐味噌*土豆, 白雪*萝卜",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「猛兽的艺术用法」",
				"effect": "因为华扇很满意你的料理,于是让自己驯养的老虎表演节目助兴,结果你却得到了打赏…！每隔一定时间, 在场排队和就座的客人, 每人随机打赏1-30元。"
			},
			"punishCard": {
				"name": "「断恶修善的禁欲考验」",
				"effect": "客人们被仙人强行带去修行, 没有了世俗的欲望, 在30秒内, 只会点最便宜的食物和绿茶。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请茨木华扇品尝一下「豆腐锅」"
				},
				{
					"name": "3",
					"condition": "交付1份牛肉",
					"task": "在营业中请茨木华扇品尝一下「牛肉盖浇饭」"
				},
				{
					"name": "4",
					"condition": "交付1份南瓜",
					"task": "在营业中请茨木华扇品尝一下「野味加农」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "富贵牡丹：客人对料理的评价若至少为普通, 则心情额外增加15。"
				}
			],
			"location": "人间之里, 旧地狱, 神灵庙"
		},
		{
			"name": "sjlzz",
			"chinese": "森近霖之助",
			"info": "",
			"tag": "家常, 饱腹, 鲜, 流行喜爱",
			"noTag": "重油, 猎奇, 下酒, 流行厌恶",
			"drinks": "啤酒, 烧酒",
			"money": "250 - 400",
			"recommendCooks": "豚骨拉面, 猪肉盖浇饭*海苔",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「香霖堂购物节」",
				"effect": "获得一张香霖堂购物7折的打折卡,仅限次日使用,过期作废。"
			},
			"punishCard": {
				"name": "「虚构的情报」",
				"effect": "已经解锁的稀客喜好信息,会随机被隐藏…"
			},
			"friendship": [{
					"name": "2",
					"condition": "",
					"task": ""
				},
				{
					"name": "",
					"condition": "",
					"task": ""
				},
				{
					"name": "",
					"condition": "",
					"task": ""
				},
				{
					"name": "",
					"condition": "",
					"task": ""
				}
			],
			"location": "人间之里, 辉针城"
		},
		{
			"name": "bllm",
			"chinese": "博丽灵梦",
			"info": "",
			"tag": "不可思议, 饱腹, 高级, 实惠, 甜, 流行喜爱",
			"noTag": "流行厌恶, 昂贵, 下酒",
			"drinks": "低酒精, 无酒精, 可加热",
			"money": "150 - 300",
			"recommendCooks": "炙猪肉饭团*幻县华, 饭团*幻县华",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "梦符「二重结界」",
				"effect": "发动一次保护结界, 可以完全防御下一个稀客的惩罚符卡。"
			},
			"punishCard": {
				"name": "灵符「梦想封印」",
				"effect": "发动三色爆炸气团攻击你, 封印你菜单上的三个料理, 在接下来的30秒内, 无法制作。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付5份洋葱",
					"task": "在营业中请博丽灵梦品尝一下「温暖饭团」"
				},
				{
					"name": "3",
					"condition": "无",
					"task": "在营业中请博丽灵梦品尝一下「杂炊」"
				},
				{
					"name": "4",
					"condition": "交付1份黑毛猪肉\n交付1份和牛\n交付1份河豚",
					"task": "在营业中请博丽灵梦品尝一下「大奢宴」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "褪色的巫女服"
				}
			],
			"location": "妖怪兽道, 人间之里, 博丽神社, 魔法森林, 妖怪之山"
		},
		{
			"name": "yccx",
			"chinese": "伊吹萃香",
			"info": "",
			"tag": "肉, 下酒, 力量涌现, 小巧, 和风, 流行喜爱",
			"noTag": "重油, 流行厌恶",
			"drinks": "高酒精, 直饮",
			"money": "600 - 800",
			"recommendCooks": "白雪*萝卜, 提神布丁, 拟尻子玉*萝卜",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "酒吞奥义「鬼进酒」",
				"effect": "出现一只可爱的豆萃香赠送一种酒水给你, 偶然会出现超高级货 。为什么萃香会把自己最爱的酒送给你?因为酒要一起喝更快落。"
			},
			"punishCard": {
				"name": "「百万鬼夜行」",
				"effect": "出现三只可爱的豆萃香,从你的酒柜里偷走三瓶最高级的酒。明明那么可爱,为什么做些可恨的事情呢!!?"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付3份猪肉",
					"task": "在营业中请伊吹萃香品尝一下「炸猪肉排」"
				},
				{
					"name": "3",
					"condition": "无",
					"task": "在营业中请伊吹萃香品尝一下「能量串」"
				},
				{
					"name": "4",
					"condition": "交付1份黑毛猪肉\n交付1份野猪肉",
					"task": "在营业中请伊吹萃香品尝一下「二天一流」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "博丽神社采集"
				}
			],
			"location": "博丽神社, 妖怪之山, 太阳花田"
		},
		{
			"name": "bnmjtz",
			"chinese": "比那名居天子",
			"info": "",
			"tag": "适合拍照, 素, 清淡, 甜, 果味, 传说, 流行厌恶, 昂贵",
			"noTag": "家常, 肉, 重油, 流行喜爱",
			"drinks": "鸡尾酒, 高酒精",
			"money": "2000 - 3000",
			"recommendCooks": "毛玉三色冰激凌*葡萄, 大江户船祭",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「全人类的绯想天」",
				"effect": "源自天界的天人释放的强大能量, 能使全部正在就餐的顾客的心情暴涨至85%。"
			},
			"punishCard": {
				"name": "「天罚的石柱」",
				"effect": "从天而降的要石破坏桌椅, 吓走桌面上的客人, 该桌椅在60s内需要修理, 期间无法再使用, 所以也无法再接待新的客人。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付5份萝卜",
					"task": "在营业中请比那名居天子品尝一下「凉菜雕花」"
				},
				{
					"name": "3",
					"condition": "无",
					"task": "在营业中请比那名居天子品尝一下「桃花羹」"
				},
				{
					"name": "4",
					"condition": "交付3份桃子",
					"task": "在营业中请比那名居天子品尝一下「北极甜虾蜜桃色拉」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "强运桃子：客人对料理的评价若至少为普通, 则有15%的概率提高评价至完美。"
				}
			],
			"location": "博丽神社, 妖怪之山, 旧地狱, 神灵庙, 太阳花田, 辉针城"
		},
		{
			"name": "hml",
			"chinese": "红美铃",
			"info": "",
			"tag": "力量涌现, 中华, 饱腹, 肉, 流行喜爱",
			"noTag": "西式, 猎奇, 果味, 流行厌恶",
			"drinks": "可加热, 提神, 古典",
			"money": "200 - 400",
			"recommendCooks": "力量汤, 华光玉煎包, 巨人玉子烧",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "华符「芳华绚烂」",
				"effect": "吃HIGH了的美铃开始表演杂耍,接下来的30秒内, 每2秒提升1点店内气氛, 且期间稀有客人完成订单后获得的好感度提高!"
			},
			"punishCard": {
				"name": "「NOver say no to pOnday」",
				"effect": "召唤出暴力熊猫,随机摧毁一张桌子,如果桌子上有客人会恐惧跑路,降低10点店内气氛值,而且在90秒内该桌由于修理而无法接待客人。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付2份烤八目鳗",
					"task": "在营业中请红美铃品尝一下「红烧鳗鱼」"
				},
				{
					"name": "3",
					"condition": "无",
					"task": "在营业中请红美铃品尝一下「白果萝卜排骨汤」"
				},
				{
					"name": "4",
					"condition": "交付3份黑毛猪肉",
					"task": "在营业中请红美铃品尝一下「华光玉煎包」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "胖滚君：店内所有的客人梅15秒会进行1-20的打赏。"
				}
			],
			"location": "红魔馆"
		},
		{
			"name": "qln",
			"chinese": "琪露诺",
			"info": "",
			"tag": "甜, 猎奇, 凉爽, 流行厌恶, 适合拍照",
			"noTag": "下酒, 昂贵, 流行喜爱, 文化底蕴",
			"drinks": "可加冰, 甘, 水果",
			"money": "100 - 200",
			"recommendCooks": "凉菜雕花*蝉蜕, 毛玉三色冰激凌*蝉蜕, 麻薯*蝉蜕",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「甜美的冰霜小妖精」",
				"effect": "随机获得三种带有“可加冰”标签的平价酒水,并且获得2-5枚冰块。"
			},
			"punishCard": {
				"name": "冻符「完美冻结」",
				"effect": "随机冻住3只厨具,如果厨具中有正在制作或完成但还未拿走的料理,则会直接被冻碎,持续30秒。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付3份三文鱼",
					"task": "在营业中请琪露诺品尝一下「真·海鲜味增汤」"
				},
				{
					"name": "3",
					"condition": "无",
					"task": "在营业中请琪露诺品尝一下「刺身拼盘」"
				},
				{
					"name": "4",
					"condition": "交付2份猪肉盖浇饭",
					"task": "在营业中请琪露诺品尝一下「猪鹿蝶」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "红魔馆采集"
				}
			],
			"location": "红魔馆, 妖怪之山"
		},
		{
			"name": "pql",
			"chinese": "帕秋莉",
			"info": "",
			"tag": "西式, 甜, 适合拍照, 梦幻, 高级",
			"noTag": "生, 灼热, 猎奇, 咸",
			"drinks": "利口酒, 鸡尾酒, 气泡",
			"money": "600 - 1000",
			"recommendCooks": "无意识妖怪慕斯, 毛玉三色冰激凌",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "知识的奇妙冒险「文化之风」",
				"effect": "接下来的30秒内,给客人上含有“文化底蕴”标签的料理, 必然获得最高等级的评价 。"
			},
			"punishCard": {
				"name": "金水符「水银之毒」",
				"effect": "接下来制作的料理,有50%概率会变成黑暗料理, 持续30秒。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请帕秋莉品尝一下「班尼迪克蛋」"
				},
				{
					"name": "3",
					"condition": "交付1份烤蘑菇",
					"task": "在营业中请帕秋莉品尝一下「意式烩饭」"
				},
				{
					"name": "4",
					"condition": "交付1个包含「高级」属性的料理",
					"task": "在营业中请帕秋莉品尝一下「惠灵顿牛排」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "睡衣"
				}
			],
			"location": "魔法森林, 红魔馆, 地灵殿"
		},
		{
			"name": "lmly",
			"chinese": "蕾米莉亚",
			"info": "",
			"tag": "西式, 甜, 生, 高级, 传说, 流行喜爱",
			"noTag": "酸, 辣, 咸, 实惠",
			"drinks": "甘, 西洋酒, 古典, 水果, 高酒精",
			"money": "4950 - 5000",
			"recommendCooks": "大江户船祭, 猩红恶魔蛋糕",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「」",
				"effect": ""
			},
			"punishCard": {
				"name": "「」",
				"effect": ""
			},
			"friendship": [{
					"name": "",
					"condition": "",
					"task": ""
				},
				{
					"name": "",
					"condition": "",
					"task": ""
				},
				{
					"name": "",
					"condition": "",
					"task": ""
				},
				{
					"name": "",
					"condition": "",
					"task": ""
				}
			],
			"location": "博丽神社, 红魔馆"
		},
		{
			"name": "tymh",
			"chinese": "藤原妹红",
			"info": "",
			"tag": "辣, 灼热, 燃起来了, 果味",
			"noTag": "昂贵, 高级, 不可思议",
			"drinks": "烧酒, 辛, 苦",
			"money": "300 - 600",
			"recommendCooks": "力量汤*葡萄 辣椒, 水煮鱼",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "不死「火鸟 凤翼天翔」",
				"effect": "妹红释放的火焰增加了厨具的功率,20秒内所有厨具的料理速度加快50%。"
			},
			"punishCard": {
				"name": "藤原「灭罪寺院伤」",
				"effect": "接下来的30秒,无论提供多好的料理,最高只能获得客人普通的评价。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付3份辣椒",
					"task": "在营业中请藤原妹红品尝一下「麻婆豆腐」"
				},
				{
					"name": "3",
					"condition": "无",
					"task": "在营业中请藤原妹红品尝一下「水煮鱼」"
				},
				{
					"name": "4",
					"condition": "交付1个包含「燃起来了」属性的料理\n交付1个包含「传说」属性的料理",
					"task": "在营业中请藤原妹红品尝一下「岩浆」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "迷途竹林采集"
				}
			],
			"location": "妖怪兽道, 迷途竹林"
		},
		{
			"name": "plshy",
			"chinese": "蓬莱山辉夜",
			"info": "",
			"tag": "文化底蕴, 传说, 和风, 不可思议, 流行喜爱",
			"noTag": "大份, 招牌, 猎奇, 流行厌恶",
			"drinks": "古典, 清酒, 现代",
			"money": "1000 - 1500",
			"recommendCooks": "白雪*幻昙华, 月光团子",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「永夜归返 世间开明」",
				"effect": "增加相当于现实时间30秒的营业时间。"
			},
			"punishCard": {
				"name": "神宝「蓬莱的玉枝 梦色之乡」",
				"effect": "减少相当于现实时间30秒的营业时间,到时间时会强行终止营业。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请蓬莱山辉夜品尝一下「竹筒蒸蛋」"
				},
				{
					"name": "3",
					"condition": "交付5份不死鸟",
					"task": "在营业中请蓬莱山辉夜品尝一下「月之恋人」"
				},
				{
					"name": "4",
					"condition": "交付1个包含「传说, 文化底蕴」属性的料理",
					"task": "在营业中请蓬莱山辉夜品尝一下「蓬莱玉枝」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "访问着和服"
				}
			],
			"location": "迷途竹林, 太阳花田"
		},
		{
			"name": "yfd",
			"chinese": "因幡帝",
			"info": "",
			"tag": "甜, 凉爽, 流行喜爱, 梦幻, 传说, 小巧",
			"noTag": "猎奇, 重油, 山珍, 流行厌恶",
			"drinks": "甘, 水果, 无酒精",
			"money": "200 - 400",
			"recommendCooks": "秘制小鱼干*幻昙华, 毛玉三色冰激凌*幻昙华, 提神布丁*幻昙华",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「」",
				"effect": ""
			},
			"punishCard": {
				"name": "「」",
				"effect": ""
			},
			"friendship": [{
					"name": "2",
					"condition": "交付1个包含「特产」属性的料理",
					"task": "在营业中请因幡帝品尝一下「麻薯」"
				},
				{
					"name": "3",
					"condition": "交付1个包含「不可思议」属性的料理",
					"task": "在营业中请因幡帝品尝一下「白桃生八桥」"
				},
				{
					"name": "4",
					"condition": "交付1个包含「甜」属性的料理\n交付1个包含「小巧」属性的料理",
					"task": "在营业中请因幡帝品尝一下「月光团子」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "幸运的素兔：制作料理时有15%的概率不会减少食材。"
				}
			],
			"location": "博丽神社, 魔法森林, 红魔馆, 迷途竹林, 妖怪之山, 旧地狱, 地灵殿, 命莲寺, 神灵庙"
		},
		{
			"name": "als",
			"chinese": "爱丽丝",
			"info": "",
			"tag": "家常, 甜, 文化底蕴, 高级, 西式",
			"noTag": "肉, 重油, 饱腹, 猎奇",
			"drinks": "西洋酒, 现代, 低酒精",
			"money": "500 - 800",
			"recommendCooks": "无意识妖怪慕斯, 毛玉三色冰激凌*奶油+月光草",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「和人偶一起玩的孩子」",
				"effect": "爱丽丝的人偶幻化为客人, 填充剩余的全部座位。"
			},
			"punishCard": {
				"name": "魔符「狡猾的献祭」",
				"effect": "向厨房丢出一枚魔法瓶, 炸飞一个厨具, 持续60秒。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请爱丽丝品尝一下「奶香蘑菇汤」"
				},
				{
					"name": "3",
					"condition": "交付10份葡萄",
					"task": "在营业中请爱丽丝品尝一下「普通小蛋糕」"
				},
				{
					"name": "4",
					"condition": "交付1个包含「幻昙华」食材的料理",
					"task": "在营业中请爱丽丝品尝一下「七色羊羹」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "魔法森林采集"
				}
			],
			"location": "魔法森林, 太阳花田, 辉针城"
		},
		{
			"name": "wymls",
			"chinese": "雾雨魔理沙",
			"info": "",
			"tag": "重油, 菌类, 和风, 灼热, 流行喜爱, 传说",
			"noTag": "流行厌恶, 猎奇",
			"drinks": "可加冰, 低酒精",
			"money": "3000 - 5000",
			"recommendCooks": "大江户船祭, 白雪*松露+黄油",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "流星「超级英仙座」",
				"effect": "随机获得三种菌类食材, 偶尔会出现高级货。"
			},
			"punishCard": {
				"name": "魔符「拿来吧你」",
				"effect": "随机偷走2样东西, 可能是食材、料理或酒水。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付3份猪肉",
					"task": "在营业中请雾雨魔理沙品尝一下「蘑菇肉片」"
				},
				{
					"name": "3",
					"condition": "交付2份松露\n交付2份蘑菇",
					"task": "在营业中请雾雨魔理沙品尝一下「秘制鲜菌煲」"
				},
				{
					"name": "4",
					"condition": "交付1个包含「传说」属性的料理\n交付1个包含「灼热」属性的料理",
					"task": "在营业中请雾雨魔理沙品尝一下「蘑女的舞踏烩」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "魔女服"
				}
			],
			"location": "妖怪兽道, 人间之里, 博丽神社, 魔法森林, 红魔馆, 迷途竹林, 妖怪之山, 旧地狱, 地灵殿, 命莲寺, 神灵庙, 太阳花田, 辉针城"
		},
		{
			"name": "stscm",
			"chinese": "矢田寺成美",
			"info": "",
			"tag": "山珍, 文化底蕴, 特产, 清淡, 和风",
			"noTag": "饱腹, 重油",
			"drinks": "古典, 直饮, 中酒精, 低酒精, 可加冰",
			"money": "300 - 600",
			"recommendCooks": "豆腐味噌, 幻想佛跳墙, 白雪",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "魔符「即席菩提」",
				"effect": "接下来的60秒内, 客人在结账时, 额外会支付50%的小费作为化缘。"
			},
			"punishCard": {
				"name": "地藏「业火教济」",
				"effect": "业火烧掉随机的三个Buff纸张, 其带来的效果也会随之失效。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请矢田寺成美品尝一下「手握寿司」"
				},
				{
					"name": "3",
					"condition": "交付1个包含「特产」属性的料理\n交付1个包含「文化底蕴」属性的料理",
					"task": "在营业中请矢田寺成美品尝一下「南瓜虾盅」"
				},
				{
					"name": "4",
					"condition": "交付1个包含「西式」属性的料理\n交付1个包含「中华」属性的料理",
					"task": "在营业中请矢田寺成美品尝一下「幻想佛跳墙」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "地藏人偶：成美给的礼物, 可以放置在家门口, 每天参拜会得到很棒的贡品。"
				}
			],
			"location": "魔法森林, 命莲寺"
		},
		{
			"name": "dfgzm",
			"chinese": "东风谷早苗",
			"info": "",
			"tag": "梦幻, 甜, 适合拍照, 流行喜爱, 家常, 和风",
			"noTag": "猎奇, 生, 重油, 灼热, 流行厌恶",
			"drinks": "水果, 苦, 低酒精, 直饮, 现代, 气泡, 甘, 清酒, 无酒精",
			"money": "400 - 600",
			"recommendCooks": "无意识妖怪慕斯, 豆腐味噌",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "神德「五谷丰穰米之浴」",
				"effect": "引发奇迹之力, 生成三个酒水和三个食材。"
			},
			"punishCard": {
				"name": "奇迹「白昼新星」",
				"effect": "早苗释放五芒星, 使你陷入封印状态, 接下来的30秒内无法获得buff。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请东风谷早苗品尝一下「大阪烧」"
				},
				{
					"name": "3",
					"condition": "交付1份章鱼",
					"task": "在营业中请东风谷早苗品尝一下「章鱼烧」"
				},
				{
					"name": "4",
					"condition": "交付1份海胆",
					"task": "在营业中请东风谷早苗品尝一下「海胆刺身」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "冬季水手服"
				}
			],
			"location": "魔法森林, 妖怪之山, 命莲寺, 神灵庙"
		},
		{
			"name": "hchq",
			"chinese": "河城荷取",
			"info": "",
			"tag": "下酒, 咸, 水产, 高级, 猎奇, 下酒, 咸",
			"noTag": "素, 山珍, 文化底蕴",
			"drinks": "直饮, 高酒精, 中酒精, 清酒",
			"money": "400 - 500",
			"recommendCooks": "樱落雪*蝉蜕, 狮子头*蝉蜕, 拟尻子玉*黑盐",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "河童「延展手臂」",
				"effect": "接下来的120秒内, 伙伴都可以通过“延展手臂”远程上菜上酒。"
			},
			"punishCard": {
				"name": "水符「山洪暴发」",
				"effect": "引发水患, 招来洪水, 巨大的波浪将会冲走随机3一5名顾客。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付5份黄瓜",
					"task": "在营业中请河城荷取品尝一下「腌黄瓜」"
				},
				{
					"name": "3",
					"condition": "无",
					"task": "在营业中请河城荷取品尝一下「奶油焗蟹」"
				},
				{
					"name": "4",
					"condition": "交付1份香炸蝉蜕",
					"task": "在营业中请河城荷取品尝一下「拟尻子玉」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "河童重工电话机：幻想乡流行起来的远程通话装置！使用它不用到达朋友的面前也可以通话啦！"
				}
			],
			"location": "妖怪之山"
		},
		{
			"name": "qzh",
			"chinese": "犬走椛",
			"info": "",
			"tag": "肉, 山珍, 下酒, 重油, 大份",
			"noTag": "素, 清淡, 猎奇",
			"drinks": "中酒精, 高酒精, 直饮",
			"money": "300 - 400",
			"recommendCooks": "狮子头*黄油, 力量汤*黄油, 全肉盛宴*黄油",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「天狗例行小酌」",
				"effect": "接下来的120秒内, 将会有大量白狼天狗客人上门。"
			},
			"punishCard": {
				"name": "「戒严令」",
				"effect": "封锁前往食堂的道路, 禁止任何客人前来, 持续30秒。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请犬走椛品尝一下「炸虾天妇罗」"
				},
				{
					"name": "3",
					"condition": "交付3份蜂蜜",
					"task": "在营业中请犬走椛品尝一下「黄金酥鱼饼」"
				},
				{
					"name": "4",
					"condition": "交付1个包含「肉」属性的料理",
					"task": "在营业中请犬走椛品尝一下「全肉盛宴」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "妖怪之山采集"
				}
			],
			"location": "妖怪之山"
		},
		{
			"name": "hgsn",
			"chinese": "黑谷山女",
			"info": "",
			"tag": "甜, 鲜, 生, 猎奇, 适合拍照, 流行喜爱",
			"noTag": "重油, 咸, 灼热",
			"drinks": "低酒精, 中酒精, 啤酒, 甘",
			"money": "250 - 400",
			"recommendCooks": "猩红恶魔蛋糕*鸡蛋, 樱落雪*海苔",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「地下偶像狂欢夜」",
				"effect": "接下来的30秒内,排队客人会被偶像吸引,即使本日营业结束也不会离去。"
			},
			"punishCard": {
				"name": "细索「犍陀多绳索」",
				"effect": "被山女的蛛网缠住了!移动速度将会下降80%,持续30秒。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付2份豚骨拉面",
					"task": "在营业中请黑谷山女品尝一下「脆旋风」"
				},
				{
					"name": "3",
					"condition": "无",
					"task": "在营业中请黑谷山女品尝一下「仰望天花板派」"
				},
				{
					"name": "4",
					"condition": "交付2个包含「力量涌现」属性的料理",
					"task": "在营业中请黑谷山女品尝一下「兜甲蒸糕, 」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "旧地狱采集"
				}
			],
			"location": "妖怪兽道, 魔法森林, 红魔馆, 妖怪之山, 旧地狱"
		},
		{
			"name": "sqplx",
			"chinese": "水桥帕露西",
			"info": "",
			"tag": "肉, 酸, 辣, 咸, 鲜, 果味, 流行厌恶",
			"noTag": "甜, 流行喜爱",
			"drinks": "无酒精, 可加热, 直饮, 苦, 辛",
			"money": "300 - 400",
			"recommendCooks": "阴郁水果派, 提神布丁*辣椒",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「嫉妒与透支」",
				"effect": "帕露西爆动所有在座客人的嫉妒心,捋所有在座的客人的预算拉到与在座最富客人同等的水准。"
			},
			"punishCard": {
				"name": "恨符「丑时参拜」",
				"effect": "符卡一旦发动,伙伴内心会对你赚钱却不分给她们强烈的嫉妒, 当夜结算时收取翻倍佣金。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请水桥帕露西品尝一下「丧气芝士条」"
				},
				{
					"name": "3",
					"condition": "交付2个包含「桃子」食材的料理\n交付2份葡萄",
					"task": "在营业中请水桥帕露西品尝一下「阴郁水果派」"
				},
				{
					"name": "4",
					"condition": "交付20份辣椒",
					"task": "在营业中请水桥帕露西品尝一下「绝叫关东煮」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "仇返人形：可以抵挡一次中断Combo的失误。"
				}
			],
			"location": "旧地狱"
		},
		{
			"name": "xxyy",
			"chinese": "星熊勇仪",
			"info": "",
			"tag": "招牌, 下酒, 大份, 传说, 力量涌现, 燃起来了, 和风, 流行喜爱",
			"noTag": "素, 小巧, 猎奇",
			"drinks": "高酒精, 啤酒, 清酒, 古典",
			"money": "600 - 1000",
			"recommendCooks": "黄金酥鱼饼, 水煮鱼, 大江户船祭",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「接着奏乐接着舞」",
				"effect": "使用星熊杯将一定数量的酒水升级成更高一级的酒水。\n100%升级3杯1级酒水；\n75%升级2杯2级酒水；\n50%升级1杯3级酒水。"
			},
			"punishCard": {
				"name": "四天王奥义「三步必杀」",
				"effect": "勇仪生成三重警戒圈,限制你的移动,持续60秒。\n三步必杀·第一重:安全范围;\n三步必杀·第二重·罪人之枷:移动速度下降50%,直到离开范围;\n三步必杀·第三重·怪力乱神:进入该范围将被立即击量30秒。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付2个包含「下酒」属性的料理\n交付2个包含「高酒精」属性的酒水",
					"task": "在营业中请星熊勇仪品尝一下「狮子头」"
				},
				{
					"name": "3",
					"condition": "交付1份萝卜\n交付1份南瓜\n交付1份鳟鱼\n交付1份黑毛猪肉",
					"task": "在营业中请星熊勇仪品尝一下「巨人玉子烧」"
				},
				{
					"name": "4",
					"condition": "交付1个包含「传说」属性的料理\n交付1个包含「不可思议」属性的料理\n交付1个包含「梦幻」属性的料理\n交付1个包含「力量涌现」属性的料理\n交付1个包含「高级」属性的料理",
					"task": "在营业中请星熊勇仪品尝一下「大江户船祭」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "花魁浴衣"
				}
			],
			"location": "博丽神社, 妖怪之山, 旧地狱, 地灵殿"
		},
		{
			"name": "gmdj",
			"chinese": "古明地觉",
			"info": "",
			"tag": "家常, 小巧, 甜, 梦幻, 力量涌现, 特产",
			"noTag": "肉, 大份, 山珍, 猎奇, 灼热",
			"drinks": "无酒精, 气泡, 提神, 苦",
			"money": "500 - 600",
			"recommendCooks": "燃尽布丁, 樱花布丁",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "想起「高兴的事情」",
				"effect": "随机发动一名已解锁稀客(不包括觉自己)的奖励符卡。"
			},
			"punishCard": {
				"name": "想起「不高兴的事情」",
				"effect": "随机发动一名已解锁稀客(不包括觉自己)的惩罚符卡。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付5个包含「提神」属性的酒水",
					"task": "在营业中请古明地觉品尝一下「樱花布丁」"
				},
				{
					"name": "3",
					"condition": "交付2个包含「力量涌现」属性的料理",
					"task": "在营业中请古明地觉品尝一下「提神布丁」"
				},
				{
					"name": "4",
					"condition": "交付5份提神布丁",
					"task": "在营业中请古明地觉品尝一下「燃尽布丁」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "觉之眼：是觉妖怪读心眼的复制品, 装饰在店里的话, 可以看到每个客人的预算额度。"
				}
			],
			"location": "人间之里, 博丽神社, 魔法森林, 红魔馆, 迷途竹林, 地灵殿"
		},
		{
			"name": "hyml",
			"chinese": "火焰猫燐",
			"info": "",
			"tag": "甜, 鲜, 水产, 海味, 梦幻, 猎奇, 流行喜爱",
			"noTag": "生, 灼热",
			"drinks": "低酒精, 清酒, 水果",
			"money": "500 - 700",
			"recommendCooks": "猩红恶魔蛋糕, 秘制小鱼干*极上金枪鱼",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "猫符「猫醉步」",
				"effect": "接下来的30秒内,给客人上合有“中酒精”标签的酒水, 必然获得最高等级的评价。"
			},
			"punishCard": {
				"name": "「死灰复燃」",
				"effect": "阿燐在离去时,将会在原先的座位上留下一只地底怨灵,继续以阿燐的兴趣爱好点单,地底怨灵无法被主动驱赶,也不会付款,只有按照正常流程进行满足才会消失"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付1份牛肉盖浇饭",
					"task": "在营业中请火焰猫燐品尝一下「猫饭」"
				},
				{
					"name": "3",
					"condition": "交付1份樱花布丁",
					"task": "在营业中请火焰猫燐品尝一下「三文鱼天妇罗」"
				},
				{
					"name": "4",
					"condition": "交付1份诗礼银杏",
					"task": "在营业中请火焰猫燐品尝一下「鱼跃龙门」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "地灵殿采集"
				}
			],
			"location": "人间之里, 博丽神社, 妖怪之山, 旧地狱, 地灵殿, 命莲寺, 神灵庙"
		},
		{
			"name": "lwlk",
			"chinese": "灵乌路空",
			"info": "",
			"tag": "肉, 重油, 辣, 灼热, 力量涌现, 咸",
			"noTag": "清淡, 菌类",
			"drinks": "中酒精, 可加热, 鸡尾酒",
			"money": "500 - 800",
			"recommendCooks": "力量汤*黑盐+辣椒, 全肉盛宴*黑盐+辣椒",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「地狱的托卡马克装置」",
				"effect": "接下来的60秒内,煮锅与蒸锅核功率过载,能瞬间完成料理。"
			},
			"punishCard": {
				"name": "狱光「扩散地狱火」",
				"effect": "下一次没有成功完美演唱的料理,会使该厨具发生核燃炸毁, 当晚无法使用,排队的一部分客人也会被吓得抱头鼠窜。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请灵乌路空品尝一下「芝士蛋」"
				},
				{
					"name": "3",
					"condition": "交付2个包含「灼热」属性的料理\n交付3份野猪肉\n交付3份鹿肉\n交付10份洋葱",
					"task": "在营业中请灵乌路空品尝一下「一击☆必杀」"
				},
				{
					"name": "4",
					"condition": "交付3个包含「灼热」属性的料理",
					"task": "在营业中请灵乌路空品尝一下「地狱激辛警告!」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "星尘披风套装"
				}
			],
			"location": "妖怪之山, 地灵殿"
		},
		{
			"name": "gmdl",
			"chinese": "古明地恋",
			"info": "",
			"tag": "甜, 咸, 生, 梦幻, 猎奇, 不可思议, 流行厌恶",
			"noTag": "",
			"drinks": "高酒精, 烧酒, 气泡, 苦",
			"money": "800 - 1200",
			"recommendCooks": "毛玉三色冰激凌*蝉蜕, 拟尻子玉",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「」",
				"effect": ""
			},
			"punishCard": {
				"name": "「」",
				"effect": ""
			},
			"friendship": [{
					"name": "2",
					"condition": "",
					"task": ""
				},
				{
					"name": "3",
					"condition": "",
					"task": ""
				},
				{
					"name": "4",
					"condition": "",
					"task": ""
				},
				{
					"name": "5",
					"condition": "",
					"task": ""
				}
			],
			"location": "妖怪兽道, 人间之里, 博丽神社, 魔法森林, 红魔馆, 迷途竹林, 妖怪之山, 旧地狱, 地灵殿, 命莲寺, 神灵庙, 太阳花田, 辉针城"
		},
		{
			"name": "ddlxs",
			"chinese": "多多良小伞",
			"info": "",
			"tag": "家常, 饱腹, 甜, 猎奇, 不可思议, 力量涌现, 适合拍照, 流行喜爱",
			"noTag": "辣, 灼热, 汤羹",
			"drinks": "中酒精, 可加冰, 古典, 水果",
			"money": "150 - 300",
			"recommendCooks": "力量汤*黑盐+辣椒, 全肉盛宴*黑盐+辣椒",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "雨符「雨夜怪谈」",
				"effect": "接下来30秒内,带有“猎奇”标签的食物制作速度提高30%且额外提供30%续单率。"
			},
			"punishCard": {
				"name": "「超极巨幻影唐伞」",
				"effect": "小伞让伞妖变大出现在排队区惊吓排队人员, 所有排队中的普通客人被吓跑。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请多多良小伞品尝一下「烤地瓜」"
				},
				{
					"name": "3",
					"condition": "交付1份月光团子\n交付1份麻薯",
					"task": "在营业中请多多良小伞品尝一下「瘦马团子」"
				},
				{
					"name": "4",
					"condition": "交付5个包含「不可思议」属性的料理",
					"task": "在营业中请多多良小伞品尝一下「惊吓!大冒险」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "命莲寺采集"
				}
			],
			"location": "命莲寺, 辉针城, 太阳花田"
		},
		{
			"name": "cssm",
			"chinese": "村纱水密",
			"info": "",
			"tag": "肉, 饱腹, 高级, 力量涌现, 咸, 鲜, 特产",
			"noTag": "素, 小巧, 酸, 猎奇",
			"drinks": "高酒精, 可加冰, 西洋酒, 辛",
			"money": "400 - 600",
			"recommendCooks": "豚骨拉面*黑盐, 狮子头*黑盐",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「船灵流连不散」",
				"effect": "获得「船幽灵附身」状态,持续15秒,拥有此状态时所获得的其他奖励符卡(不包括此符卡),都将延长有效时间,延长的长度等于获得新符卡时、本符卡的剩余时间。"
			},
			"punishCard": {
				"name": "溺符「深海漩涡」",
				"effect": "脚底引发漩涡潮旋,造成昏厥, 5秒无法行动(可通过上下左右摇杆减少时间),之后的20秒间,上下左右移动方向相反。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请村纱水密品尝一下「比斯开湾饼干」"
				},
				{
					"name": "3",
					"condition": "交付3个包含「高级」属性的料理",
					"task": "在营业中请村纱水密品尝一下「海盗熏肉」"
				},
				{
					"name": "4",
					"condition": "交付5个包含「素, 不可思议」属性的料理",
					"task": "在营业中请村纱水密品尝一下「罗汉上素」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "海盗服"
				}
			],
			"location": "命莲寺"
		},
		{
			"name": "fsy",
			"chinese": "封兽鵺",
			"info": "",
			"tag": "招牌, 肉, 鲜, 生, 猎奇, 不可思议, 适合拍照, 特产, 流行厌恶",
			"noTag": "酸, 西式, 流行喜爱",
			"drinks": "可加热, 烧酒, 古典, 直饮",
			"money": "300 - 500",
			"recommendCooks": "豚骨拉面*黑盐, 狮子头*黑盐",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "开心「东方红绿蓝」",
				"effect": "开动飞碟转盘,必然中奖,结果为以下四种情况的一个:\n红红红:接下来的15秒,无论上什么菜都必然获得最高等级的评价;\n绿绿绿:接下来的15秒,食材和酒水不会被消耗;\n蓝蓝蓝:接下来的15秒,收入提高100%;\n红绿蓝:同时获得以上三种Buff。"
			},
			"punishCard": {
				"name": "恶心「东方红红蓝」",
				"effect": "开动飞碟转盘, 必然Miss,结果为以下四种情况的一个:\n红红绿:接下来的15秒,无论上什么菜都必然获得极度不满的评价;\n绿绿O:接下来的15秒,食材与酒水消耗量提高到3倍;\n蓝蓝O:接下来的15秒,收入减少66%;\n红红蓝:同时获得以上三种Buff。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付10份桃子",
					"task": "在营业中请封兽鵺品尝一下「云山棉花糖」"
				},
				{
					"name": "3",
					"condition": "交付1个包含「梦幻」属性的料理",
					"task": "在营业中请封兽鵺品尝一下「圣白莲子糕」"
				},
				{
					"name": "4",
					"condition": "交付5个包含「梦幻」属性的料理",
					"task": "在营业中请封兽鵺品尝一下「幻想星莲船」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "飞碟老虎机：有几率获得意外奖励"
				}
			],
			"location": "命莲寺, 太阳花田"
		},
		{
			"name": "eytz",
			"chinese": "二岩猯藏",
			"info": "",
			"tag": "家常, 肉, 水产, 下酒, 传说, 果味, 和风, 流行喜爱",
			"noTag": "辣, 灼热",
			"drinks": "高酒精, 可加热, 烧酒, 古典",
			"money": "1000 - 1200",
			"recommendCooks": "白雪, 华光玉煎包, 大江户船祭",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「」",
				"effect": ""
			},
			"punishCard": {
				"name": "「」",
				"effect": ""
			},
			"friendship": [{
					"name": "2",
					"condition": "",
					"task": ""
				},
				{
					"name": "3",
					"condition": "",
					"task": ""
				},
				{
					"name": "4",
					"condition": "",
					"task": ""
				},
				{
					"name": "5",
					"condition": "",
					"task": ""
				}
			],
			"location": "妖怪兽道, 人间之里, 博丽神社, 命莲寺, 神灵庙"
		},
		{
			"name": "wbbd",
			"chinese": "物部布都",
			"info": "",
			"tag": "清淡, 高级, 传说, 山珍, 燃起来了, 和风, 流行喜爱",
			"noTag": "生, 西式, 流行厌恶",
			"drinks": "中酒精, 可加热, 气泡, 直饮",
			"money": "601 - 900",
			"recommendCooks": "二天一流*松露 露水, 白雪*松露 露水",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "圣童女「太阳神的贡品」",
				"effect": "符卡触发后的10秒内,根据客人评价获得酒水奖励:\n「普通」评价获得1级酒水;\n「满意」评价获得2级酒水;\n「完美」评价获得3级酒水。"
			},
			"punishCard": {
				"name": "传薪「浴火捏盘」",
				"effect": "本符卡发动的30秒内,只能使用1个托盘进行服务。被禁用托盘内的还未拿走的物品会被焚毁。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付1个包含「力量涌现」属性的料理",
					"task": "在营业中请物部布都品尝一下「松子糕」"
				},
				{
					"name": "3",
					"condition": "交付1个包含「鹿肉」食材的料理",
					"task": "在营业中请物部布都品尝一下「白鹿贞松」"
				},
				{
					"name": "4",
					"condition": "交付2个包含「和风, 特产」属性的料理",
					"task": "在营业中请物部布都品尝一下「太极八卦鱼肚」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "厨具：紫薇天火"
				}
			],
			"location": "神灵庙"
		},
		{
			"name": "hqe",
			"chinese": "霍青娥",
			"info": "",
			"tag": "素, 小巧, 传说, 甜, 不可思议, 特产, 中华, 流行喜爱",
			"noTag": "饱腹, 重油",
			"drinks": "低酒精, 清酒, 现代, 水果",
			"money": "400 - 900",
			"recommendCooks": "樱花布丁, 毛玉熔岩豆腐",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "邪术「天下无墙」",
				"effect": "30秒内伙伴在食堂区域移动时可以穿过客人或障碍物。"
			},
			"punishCard": {
				"name": "入魔「走火入魔」",
				"effect": "接下来30秒,稀客进入走火入魔状态,每次结账, 无论评价高低,都有30%概率放一次惩罚符卡。如果本来就放惩罚符卡的情况,则多放一次。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付2份板栗\n交付2份蜂蜜",
					"task": "在营业中请霍青娥品尝一下「蜜饯栗子」"
				},
				{
					"name": "3",
					"condition": "交付2份蜜饯栗子",
					"task": "在营业中请霍青娥品尝一下「天师板栗焖菇」"
				},
				{
					"name": "4",
					"condition": "交付5个包含「文化底蕴」属性的料理",
					"task": "在营业中请霍青娥品尝一下「荷花鱼米盏」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "仙女服"
				}
			],
			"location": "神灵庙"
		},
		{
			"name": "swtzg",
			"chinese": "苏我屠自古",
			"info": "",
			"tag": "招牌, 家常, 饱腹, 重油, 力量涌现, 烧烤, 和风",
			"noTag": "甜, 凉爽",
			"drinks": "高酒精, 啤酒, 烧酒, 苦",
			"money": "500 - 600",
			"recommendCooks": "一击☆必杀*八目鳗, 豆腐味噌*八目鳗",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "雷影「电光石火」",
				"effect": "借助电光的加持,30秒内自己和伙伴的移动速度提升30%!"
			},
			"punishCard": {
				"name": "天罚「天雷暴击」",
				"effect": "下一次没有成功完美演唱的料理,将会引来天雷,击晕一个伙伴30秒。"
			},
			"friendship": [{
					"name": "2",
					"condition": "交付5份地瓜",
					"task": "在营业中请苏我屠自古品尝一下「拔丝地瓜」"
				},
				{
					"name": "3",
					"condition": "交付5个包含「蘑菇」食材的料理",
					"task": "在营业中请苏我屠自古品尝一下「香煎双菇肉卷」"
				},
				{
					"name": "4",
					"condition": "交付1份炸猪肉排\n交付1份土豆可乐饼\n交付1份热松饼",
					"task": "在营业中请苏我屠自古品尝一下「什锦天妇罗」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "神灵庙采集"
				}
			],
			"location": "神灵庙"
		},
		{
			"name": "smww",
			"chinese": "射命丸文",
			"info": "",
			"tag": "招牌, 家常, 肉, 下酒, 适合拍照, 和风, 流行喜爱",
			"noTag": "西式, 流行厌恶",
			"drinks": "高酒精, 可加冰, 烧酒, 提神",
			"money": "500 - 600",
			"recommendCooks": "狮子头, 竹笋炒肉",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「八衢潮流风靡幻想」",
				"effect": "使用报纸大肆宣传店铺,明天开始店铺变为“明星店”,3天后恢复正常。\n“明星店”:提高10%客人预算与5%客流量,“招牌”标签成为流行标签。\n若店铺已是明星店或当晚已宣传,则此符卡转化为「食堂风起厨神无双」成品带有“招牌”标签的今日菜单上的料理将成为明星料理。\n制作明星料理时若料理时间小于5秒则瞬间完成;\n在舆论的裹挟下, 追捧“流行•喜爱”标签的客人食用明星料理后额外提高30%续单率,返还当单酒水消耗的预算, 并100%增加1次续单上限(增加续单上限效果每桌客人只触发一次),持续30秒。"
			},
			"punishCard": {
				"name": "「笔枪纸弹禁制之道」",
				"effect": "引发猛烈的暴风席卷食堂,接下来30秒内无法进行投掷上菜。\n同时在报纸上对黑心店铺进行抨击,使明星店加成明天起消失。"
			},
			"friendship": [{
					"name": "2",
					"condition": "无",
					"task": "在营业中请射命丸文品尝一下「梅子茶泡饭」"
				},
				{
					"name": "3",
					"condition": "前往辉针城调查碗之后的宝物",
					"task": "在营业中请射命丸文品尝一下「海胆蒸蛋」"
				},
				{
					"name": "4",
					"condition": "交付5个包含「肉」属性的料理",
					"task": "在营业中请射命丸文品尝一下「幻想风靡」"
				},
				{
					"name": "5",
					"condition": "",
					"task": "厨具：冯风渡御"
				}
			],
			"location": "妖怪兽道, 人间之里, 博丽神社, 魔法森林, 红魔馆, 迷途竹林, 妖怪之山, 旧地狱, 地灵殿, 命莲寺, 神灵庙, 太阳花田"
		},
		{
			"name": "fjyx",
			"chinese": "风见幽香",
			"info": "",
			"tag": "清淡, 高级, 传说, 梦幻, 不可思议, 特产, 西式, 流行•喜爱",
			"noTag": "饱腹, 咸, 灼热, 和风",
			"drinks": "利口酒, 西洋酒, 鸡尾酒, 现代",
			"money": "1200 - 1800",
			"recommendCooks": "华光玉煎包*并蒂莲, 毛玉三色冰激凌*并蒂莲",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「花鸟风月群芳沐」",
				"effect": "在场上种下一朵鲜花并利用能力使其生长,满心情时额外种下一朵,每朵生长的鲜花每24s生产25小费。\n幽香以外的稀客释放奖励符卡时,随机一朵生长的鲜花将吸收符卡之力而盛放,吸引当地出没的稀有客人造访食堂,被鲜花吸引来的稀有客人会摘走这朵鲜花。鲜花盛放期间客人用餐结束后额外提高15心情,15秒后鲜花凋谢,获得1层「落英缀裳」:可以抵挡一次中断Combo的失误。"
			},
			"punishCard": {
				"name": "「决斗Spark!!!!」",
				"effect": "用微笑的表情走到自己所在座位那一排的最上方,然后一发魔炮将这排所有的桌子轰飞,当夜不可修复,并吓跑所有在这些位置用餐的客人。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "太阳花田"
		},
		{
			"name": "mdx",
			"chinese": "梅蒂欣",
			"info": "",
			"tag": "招牌, 小巧, 甜, 毒, 凉爽, 梦幻, 适合拍照, 菌类",
			"noTag": "文化底蕴",
			"drinks": "无酒精, 水果, 甘, 苦",
			"money": "200 - 400",
			"recommendCooks": "毛玉三色冰激凌, 樱花布丁",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "分解「剧毒中和」",
				"effect": "移除「凋雪花园」状态;\n梅蒂欣操纵料理中可能存在的有害元素,使料理时的标签不再产生冲突,持续30秒,并立即获得带有“中酒精”标签的酒水1瓶。"
			},
			"punishCard": {
				"name": "铃兰「凋零花园」",
				"effect": "移除「剧毒中和」状态:\n制作料理时铃铃会额外为料理追加特殊的“忧郁之毒”标签,食用带有该标签的食物的客人不会续单,持续30秒。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "太阳花田"
		},
		{
			"name": "smzmw",
			"chinese": "少名针妙丸",
			"info": "",
			"tag": "小巧, 传说, 甜, 燃起来了, 和风, 流行•喜爱, 适合拍照, 文化底蕴",
			"noTag": "大份, 西式",
			"drinks": "低酒精, 可加热, 古典, 气泡",
			"money": "600 - 1200",
			"recommendCooks": "海胆刺身, 二天一流",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "宝槌「通货膨胀危机」",
				"effect": "使用万宝槌敲击收银台,叠加1层「万宝槌之力」。万宝槌充盈的魔力将在营业结束时使营业额膨胀,第1层「万宝槌之力」使收入提高7%,之后每层使收入提高2%。"
			},
			"punishCard": {
				"name": "小槌「你给我变大吧」",
				"effect": "在万宝槌释放的魔力的影响下,身体将会被放大到原先的三倍,持续30秒。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "辉针城"
		},
		{
			"name": "grzx",
			"chinese": "鬼人正邪",
			"info": "",
			"tag": "下酒, 重油, 猎奇, 灼热, 不可思议, 力量涌现, 燃起来了, 流行•厌恶",
			"noTag": "高级, 流行•喜爱",
			"drinks": "中酒精, 烧酒, 直饮, 辛",
			"money": "300 - 600",
			"recommendCooks": "拟尻子玉*黄油, 黄金酥鱼饼",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "欺符「超限效应」",
				"effect": "发动令事物翻转程度的能力,颠倒客人的喜好,令全场自身以外客人的厌恶标签反转为喜好标签,持续30秒。\n当场上包括排队客人在内的普通客人数量之和不少于7时,此符卡转化为逆弓\n「天壤梦弓的诏敕」\n使场上包括排队客人在内的普通客人额外获得1次续单上限与25%预算,每位普通客人最多可以受到此效果影响3次。"
			},
			"punishCard": {
				"name": "逆转「颠倒世界」",
				"effect": "下克上的阶级反转时间!将自身的预算与全场最高预算水平的客人预算翻转,并在接下来的15秒内持续将自己以外的全场所有客人的预算降低到全场最低预算客人水平。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "辉针城"
		},
		{
			"name": "jqyl",
			"chinese": "今泉影狼",
			"info": "",
			"tag": "家常, 肉, 山珍, 凉爽, 适合拍照, 和风, 流行•喜爱",
			"noTag": "灼热",
			"drinks": "中酒精, 可加冰, 清酒, 直饮",
			"money": "300 - 600",
			"recommendCooks": "白雪*冰块 竹子, 炙猪肉饭团*冰块 竹子",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "狼魂「野性觉醒」",
				"effect": "唤醒客人内心深处原始的野性,使他们在接下来30秒内爱上“肉”与“山珍”标签,在对料理评分时作为自身的喜好进行评价,原本喜好这些标签的客人食用相关料理时必然触发最高评价。"
			},
			"punishCard": {
				"name": "饿狼「暴食的月下舞踏」",
				"effect": "接下来的30秒内,所有客人的料理如果没有添加“饱腹”标签,会触发最差评价,同时原本厌恶“饱腹”标签的客人,则必然触发最差评价。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "迷途竹林, 辉针城"
		},
		{
			"name": "lx",
			"chinese": "铃仙",
			"info": "",
			"tag": "小巧, 中华, 家常, 特产, 甜, 海味, 山珍",
			"noTag": "昂贵, 不可思议",
			"drinks": "烧酒, 啤酒, 高酒精, 可加热, 苦",
			"money": "200 - 350",
			"recommendCooks": "樱花布丁, 樱落雪",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「月免的篝火盛宴」",
				"effect": "召开一场盛大的篝火盛宴,场上每只存在的兔子生成1个随机食材或1瓶随机酒水,接下来30秒内出现新的兔子时会同样生成食材或酒水。生成食材的概率为80%,生成酒水的概率为20%。"
			},
			"punishCard": {
				"name": "「酒醉迷乱」",
				"effect": "铃仙向场上打出一颗狂气之弹,持续影响场上的客人,狂气持续30秒。受到狂气影响的客人食用高酒精以外的饮料必定给出最低评价。\n批注:狂气与狂气之间会发生干涉...是什么意思?"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "月都"
		},
		{
			"name": "myfj",
			"chinese": "绵月丰姬",
			"info": "",
			"tag": "甜, 果味, 文化底蕴, 高级, 和风, 凉爽, 素",
			"noTag": "力量涌现, 山珍, 咸",
			"drinks": "古典, 高酒精, 清酒, 可加冰, 水果",
			"money": "1200 - 1500",
			"recommendCooks": "白雪, 樱花布丁",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "方圆「山海千重」",
				"effect": "丰姬连接海与山,链接幻想乡的一个地点,使该区域的普通客人与稀有客人可以穿越“面”前来。\n通过丰姬的能力链接的地区刷新效果分别独立,刷新速率为原先的33%。"
			},
			"punishCard": {
				"name": "晦朔「天地未形」",
				"effect": "丰姬从当地出没稀客以及当晚邀请稀客中随机选择3个还未出现的角色,使她们“神隐”今晚无法前来夜雀食堂。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "月都"
		},
		{
			"name": "myyj",
			"chinese": "绵月依姬",
			"info": "",
			"tag": "文化底蕴, 灼热, 高级, 传说, 清淡, 小巧, 中华, 力量涌现",
			"noTag": "菌类, 山珍",
			"drinks": "可加热, 辛, 烧酒, 直饮, 提神",
			"money": "1000 - 1200",
			"recommendCooks": "白雪, 提神布丁",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "神诏「众神谕使」",
				"effect": "依姬召唤神灵,附加一层「神耀桂冠」,如果本次提供的料理带有“传说”标签,则额外附加一层。\n当稀有客人产生不为完美的评价时,消耗一层「神耀桂冠」引发神迹,将评价提升至完美。"
			},
			"punishCard": {
				"name": "诫罚「诸神圣裁」",
				"effect": "依姬引发神迹将部分传说封印,接下来30秒内,带有“传说”标签的料理或使用带有“传说”标签的食材制作的料理无法被制作。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "月都"
		},
		{
			"name": "al",
			"chinese": "爱莲",
			"info": "",
			"tag": "家常, 西式, 饱腹, 梦幻, 凉爽, 甜",
			"noTag": "重油, 生, 水产",
			"drinks": "可加热, 甘, 古典, 低酒精, 啤酒",
			"money": "300 - 500",
			"recommendCooks": "毛玉三色冰激凌",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「恋爱的糖果屋」",
				"effect": "接下来30秒内,当完成场上客人的订单且至少获得普通评价后,在座位附近掉落一枚蓬松松糖果以供拾取。"
			},
			"punishCard": {
				"name": "「乌撒的猫咪」",
				"effect": "苏格拉底威吓场上的伙伴,使他们移动速度下降30%,工作速度下降50%,持续30秒。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "魔界"
		},
		{
			"name": "mm",
			"chinese": "魅魔",
			"info": "",
			"tag": "鲜, 生, 菌类, 力量涌现, 水产, 山珍, 猎奇",
			"noTag": "高级, 清淡",
			"drinks": "高酒精, 可加冰, 烧酒, 辛, 西洋酒",
			"money": "2000 - 3000",
			"recommendCooks": "力量汤, 牛肉鸳鸯火锅",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「幽冥的轮回」",
				"effect": "如果场上不存在「幽玄封魔阵」则生成法阵,如果存在则为法阵填充2点能量。\n「幽玄封魔阵」:魅魔以外的稀客释放任意符卡时,填充1点能量。能量达到7点时,消耗全部能量引发梦符「时空一粟」场上所有入座客人的剩余预算回复到上限,接下来20秒内,制作料理不消耗食材且瞬间完成,客人必定给出最高评价。"
			},
			"punishCard": {
				"name": "「渎神的代价」",
				"effect": "受到恶灵缠怨:接下来30秒内无法获得夜雀之歌类Buff,且无法触发特殊厨具效果。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "魔界"
		},
		{
			"name": "lyz",
			"chinese": "露易兹",
			"info": "",
			"tag": "特产, 小巧, 甜, 西式, 适合拍照, 水产",
			"noTag": "饱腹, 重油",
			"drinks": "可加冰, 中酒精, 鸡尾酒, 现代, 啤酒",
			"money": "800 - 1000",
			"recommendCooks": "毛玉三色冰激凌, 无意识妖怪慕斯",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「传奇的格列佛」",
				"effect": "露易兹召唤一架魔法相机停留在店内,若稀有客人本尊离开时未吃饱且预算未耗尽,则相机拍下该稀客并转换为一份「旅者博客」。\n当日结束后「旅者博客」解放(若拍摄时当日已结束则立即解放),投影出其拍摄的客人形象再次光临食堂,以此方式形成的稀客影像可以使用符卡,喜好与原先无异,但预算为其离开时的预算,续单上限为其离开时剩余的可点单数。"
			},
			"punishCard": {
				"name": "「遗落的水晶鞋」",
				"effect": "当晚营业结束后,再经过60s,将会强制驱逐店铺内的客人并关店。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "妖怪兽道, 人间之里, 魔法森林, 红魔馆, 迷途竹林, 妖怪之山, 旧地狱, 地灵殿, 命莲寺, 神灵庙, 太阳花田, 辉针城, 魔界"
		},
		{
			"name": "hpym",
			"chinese": "魂魄妖梦",
			"info": "",
			"tag": "家常, 清淡, 鲜, 力量涌现",
			"noTag": "咸, 重油, 猎奇",
			"drinks": "无酒精, 可加热, 水果",
			"money": "300 - 400",
			"recommendCooks": "力量汤*海苔+露水, 饭团*海苔+露水",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「」",
				"effect": ""
			},
			"punishCard": {
				"name": "「」",
				"effect": ""
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "妖怪兽道, 人间之里, 博丽神社, 迷途竹林"
		},
		{
			"name": "xxsyyz",
			"chinese": "西行寺幽幽子",
			"info": "",
			"tag": "传说, 肉, 高级, 饱腹, 中华, 水产, 和风, 大份",
			"noTag": "素, 清淡, 小巧",
			"drinks": "可加冰, 高酒精, 鸡尾酒",
			"money": "1500 - 2000",
			"recommendCooks": "大江户船祭, 白雪",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「食物瞬间消失术」",
				"effect": "接下来直到营业结束为止,客人会瞬间吃下所有的料理。\n再次触发时此符卡转化为\n「墨染浮櫻化醉蝶」\n幽幽子释放1/3/5/8(随使用次数提升)只蝴蝶飞向保温箱,每只蝴蝶吞噬保温箱中存储的一个料理,转化为等同于4倍料理价格的金钱(享受小费倍率加成)。"
			},
			"punishCard": {
				"name": "「加料加量不加价」",
				"effect": "接下来直到营业结束为止,所有的料理不加满5个档位的料,都会收到差评。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "博丽神社, 红魔馆, 迷途竹林, 神灵庙"
		},
		{
			"name": "ttym",
			"chinese": "饕餮尤魔",
			"info": "",
			"tag": "肉, 饱腹, 大份, 高级, 传说, 鲜, 生, 不可思议, 力量涌现",
			"noTag": "",
			"drinks": "高酒精, 烧酒, 直饮, 辛",
			"money": "9999 - 9999",
			"recommendCooks": "惠灵顿牛排, 大江户船祭",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「」",
				"effect": ""
			},
			"punishCard": {
				"name": "「」",
				"effect": ""
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "妖怪兽道, 博丽神社, 魔法森林, 红魔馆, 迷途竹林, 妖怪之山, 旧地狱, 地灵殿, 命莲寺, 神灵庙, 太阳花田, 辉针城"
		},
		{
			"name": "byz",
			"chinese": "八云紫",
			"info": "",
			"tag": "家常, 高级, 猎奇, 凉爽, 传说, 适合拍照, 汤羹",
			"noTag": "家常, 高级, 猎奇, 凉爽, 传说, 适合拍照, 汤羹",
			"drinks": "古典, 中酒精, 高酒精, 烧酒",
			"money": "4000 - 6000",
			"recommendCooks": "大江户船祭",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「人与妖的梦乡」",
				"effect": "在当日结束前触发时,冻结所有剩余时间大于44秒的Buff时间,使之不再减少,直至当日结束。\n再次触发或在当日结束后触发,所有剩余时间大于44秒的Buff时间增加当前剩余时长的10%(每种类型的Buff至多通过此符卡增加17秒)。"
			},
			"punishCard": {
				"name": "「现与隐的境界」",
				"effect": "在场上开启数个会变换位置的隙间,若接近隙间则会被吸入其中,然后随机传送到其他隙间处,同时托盘内的酒水会消失。隙间持续30秒。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "妖怪兽道, 人间之里, 魔法森林, 红魔馆, 迷途竹林, 妖怪之山, 旧地狱, 地灵殿, 命莲寺, 神灵庙, 太阳花田, 辉针城, 月都, 魔界"
		},
		{
			"name": "mcg",
			"chinese": "萌澄果",
			"info": "",
			"tag": "甜, 肉, 水产, 梦幻, 流行•喜爱",
			"noTag": "灼热, 猎奇, 流行•厌恶",
			"drinks": "甘, 可加冰, 辛, 水果",
			"money": "1200 - 1600",
			"recommendCooks": "毛玉三色冰激凌*肉+水产",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「」",
				"effect": ""
			},
			"punishCard": {
				"name": "「」",
				"effect": ""
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "妖怪兽道, 人间之里, 博丽神社, 魔法森林, 红魔馆, 迷途竹林, 妖怪之山, 命莲寺, 神灵庙, 太阳花田, 辉针城"
		},
		{
			"name": "bbttdsyj",
			"chinese": "蹦蹦跳跳的三妖精",
			"info": "",
			"tag": "梦幻, 甜, 菌类, 小巧, 家常, 凉爽, 流行•喜爱",
			"noTag": "生, 灼热, 猎奇, 流行•厌恶",
			"drinks": "苦, 甘, 水果, 无酒精",
			"money": "300 - 400",
			"recommendCooks": "毛玉三色冰激凌*土豆",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「」",
				"effect": ""
			},
			"punishCard": {
				"name": "「」",
				"effect": ""
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "妖怪兽道, 人间之里, 博丽神社, 红魔馆, 迷途竹林, 妖怪之山"
		},
		{
			"name": "yyl",
			"chinese": "冴月麟",
			"info": "",
			"tag": "水产, 中华, 家常, 辣, 流行•喜爱",
			"noTag": "生, 重油, 下酒",
			"drinks": "气泡, 甘, 无酒精",
			"money": "400 - 600",
			"recommendCooks": "水饺*辣椒+水产, 豚骨拉面, 秘制小鱼干",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「扶我起来,我还能吃」",
				"effect": "在冴月麟的特殊处理下,食物被去除了高热量等有害要素,客人能够更健康的摄入营养,同时体味美食的乐趣,包括排队人物在内的在场所有客人30%增加1次额外续单,每位客人概率独立计算。通过此种方式增加的额外续单将无视预算上限。"
			},
			"punishCard": {
				"name": "「饭要一口一口吃才健康」",
				"effect": "大口吃饭有害身体健康!饭要细嚼慢咽!包括排队人物在内的所有客人,用餐时间增加到200%,但此技能效果优先级低于立刻完食类buff。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "妖怪兽道, 人间之里, 博丽神社, 红魔馆, 迷途竹林"
		},
		{
			"name": "lkx",
			"chinese": "立空汐",
			"info": "",
			"tag": "昂贵, 肉, 山珍, 和风, 下酒, 力量涌现, 流行•厌恶",
			"noTag": "素, 清淡, 流行•喜爱",
			"drinks": "可加热, 可加冰, 高酒精",
			"money": "500 - 800",
			"recommendCooks": "白雪, 幻想佛跳墙",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "「不玩尽兴还想走?!」",
				"effect": "使用空间能力将在场所有就餐客人封闭起来,只要顾客还吃得下并且有能消费得起的料理,就必须消费,直到花费额度至少到达预算的70%上限才会解除,在解除前,客人无法离开桌子,只能继续点单。持续60秒。"
			},
			"punishCard": {
				"name": "拷问「頞部陀」",
				"effect": "接下来的120秒内,制作所有含有“清淡”或“素”标签的料理,最终只能做出黑暗料理。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "妖怪兽道, 博丽神社, 红魔馆, 迷途竹林, 妖怪之山"
		},
		{
			"name": "syy",
			"chinese": "时焉侑",
			"info": "",
			"tag": "文化底蕴, 传说, 中华, 下酒, 西式, 特产",
			"noTag": "水产, 饱腹, 重油",
			"drinks": "西洋酒, 中酒精, 可加冰, 鸡尾酒",
			"money": "1300 - 1800",
			"recommendCooks": "水饺*萝卜, 月光团子, 惠灵顿牛排",
			"recommendDrinks": "",
			"rewardCard": {
				"name": "因果「推理与判断之眼」",
				"effect": "通过能力,在120秒内辨识客人的剩余预算与点单次数。"
			},
			"punishCard": {
				"name": "律符「颠倒错乱」",
				"effect": "接下来的60秒间,无论上的食谱如何合衬客人的心意,得到的评价都是随机的一种。"
			},
			"friendship": [{
				"name": "",
				"condition": "",
				"task": ""
			}],
			"location": "人间之里, 博丽神社"
		}
	]
}