_itemsSource["drugs"] = {
	{
		name = "weedseed_male",
		label = "Male Marijuana Seed",
		price = 100,
		isUsable = true,
		isStackable = 500,
		type = 7,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0.05,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 28),
	},
	{
		name = "weedseed_female",
		label = "Female Marijuana Seed",
		price = 100,
		isUsable = true,
		isStackable = 500,
		type = 7,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0.05,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 28),
	},
	{
		name = "rolling_paper",
		label = "Rolling Paper",
		price = 20,
		isUsable = true,
		isRemoved = false,
		isStackable = 30,
		type = 4,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0.01,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 7),
	},
	{
		name = "plastic_wrap",
		label = "Plastic Wrap",
		price = 50,
		isUsable = false,
		isRemoved = false,
		isStackable = 5,
		type = 4,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0.05,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 7),
	},
	{
		name = "baggy",
		label = "Empty Baggy",
		price = 50,
		isUsable = false,
		isRemoved = false,
		isStackable = 100,
		type = 4,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0.05,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 7),
	},
	{
		name = "weed_baggy",
		label = "Baggy of Weed",
		price = 200,
		isUsable = true,
		isRemoved = true,
		isStackable = 100,
		type = 12,
		rarity = 2,
		closeUi = true,
		metalic = false,
		weight = 0.05,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 14),
	},
	{
		name = "weed_bud",
		label = "Marijuana Bud",
		price = 100,
		isUsable = true,
		isRemoved = false,
		isStackable = 100,
		type = 12,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0.1,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 14),
	},
	{
		name = "weed_joint",
		label = "Joint",
		price = 25,
		isUsable = true,
		isRemoved = false,
		isStackable = 10,
		type = 12,
		rarity = 1,
		statusChange = {
			Remove = {
				PLAYER_HUNGER = 5,
			},
		},
		drugState = {
			type = "weed",
			duration = (60 * 30),
		},
		closeUi = true,
		metalic = false,
		weight = 0.5,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 20),
	},
	{
		name = "weed_brick",
		label = "Brick of Weed",
		price = 10000,
		isUsable = true,
		isRemoved = true,
		isStackable = false,
		type = 12,
		rarity = 3,
		closeUi = true,
		metalic = false,
		weight = 10,
		state = "ANIM_weed",
		isDestroyed = true,
		durability = (60 * 60 * 24 * 45),
	},
	{
		name = "oxy",
		label = "OxyContin",
		price = 50,
		isUsable = true,
		isRemoved = true,
		isStackable = 15,
		type = 12,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0.1,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 20),
		statusChange = {
			Remove = {
				PLAYER_THIRST = 3,
			},
		},
		drugState = {
			type = "oxy",
			duration = (60 * 60),
		},
		animConfig = {
			time = 2800,
			pbConfig = {
				label = "Popping Oxy",
				useWhileDead = false,
				canCancel = false,
				vehicle = false,
				disarm = false,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = false,
				animation = {
					animDict = "mp_suicide",
					anim = "pill",
					flags = 50,
				},
			},
		},
	},
	{
		name = "contraband",
		label = "Mysterious Box",
		price = 1000,
		isUsable = false,
		isRemoved = false,
		isStackable = false,
		type = 14,
		rarity = 5,
		closeUi = false,
		metalic = false,
		weight = 10,
		state = "ANIM_box",
		isDestroyed = true,
		durability = (60 * 60 * 24),
	},
	{
		name = "meth_pipe",
		label = "Meth Pipe",
		price = 1000,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 12,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 1,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 30),
	},
	{
		name = "meth_bag",
		label = "Meth",
		price = 400,
		isUsable = false,
		isRemoved = false,
		isStackable = 25,
		type = 12,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 0.1,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 20),
	},
	{
		name = "meth_brick",
		label = "Brick of Meth",
		price = 60,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 12,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 5,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 20),
	},
	{
		name = "coke_bag",
		label = "Cocaine",
		price = 400,
		isUsable = true,
		isRemoved = false,
		isStackable = 25,
		type = 12,
		rarity = 1,
		statusChange = {
			Remove = {
				PLAYER_THIRST = 5,
			},
		},
		drugState = {
			type = "coke",
			duration = (60 * 60),
		},
		closeUi = true,
		metalic = false,
		weight = 0.1,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 20),
	},
	{
		name = "coke_brick",
		label = "Brick of Cocaine",
		price = 60,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 12,
		rarity = 1,
		closeUi = true,
		metalic = false,
		weight = 5,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 20),
	},
	{
		name = "adrenaline",
		label = "Adrenaline Syringe",
		qualification = "PD_SWAT",
		price = 25,
		isUsable = true,
		isRemoved = true,
		isStackable = 5,
		type = 1,
		rarity = 3,
		closeUi = true,
		metalic = false,
		weight = 0.0,
		isDestroyed = true,
		durability = (60 * 60 * 24 * 7),
	},
	{
		name = "moonshine_still",
		label = "Still",
		price = 15000,
		isUsable = true,
		isRemoved = false,
		isStackable = false,
		type = 3,
		rarity = 4,
		closeUi = true,
		metalic = true,
		weight = 2.0,
		durability = (60 * 60 * 24 * 14),
	},
	{
		name = "moonshine_barrel",
		label = "Oak Barrel",
		price = 1000,
		isUsable = true,
		isRemoved = false,
		isStackable = 20,
		type = 3,
		rarity = 4,
		closeUi = true,
		metalic = true,
		weight = 2.0,
		durability = (60 * 60 * 24 * 14),
	},
	{
		name = "moonshine_jar",
		label = "Empty Mason Jar",
		price = 200,
		isUsable = true,
		isRemoved = false,
		isStackable = 500,
		type = 4,
		rarity = 1,
		closeUi = true,
		metalic = true,
		weight = 0.0,
		durability = (60 * 60 * 24 * 90),
	},
	{
		name = "moonshine",
		label = "Homemade Moonshine",
		price = 500,
		isUsable = true,
		isRemoved = false,
		isStackable = 500,
		type = 1,
		rarity = 2,
		closeUi = true,
		metalic = true,
		weight = 0.1,
		durability = (60 * 60 * 24 * 10),
	},
}
