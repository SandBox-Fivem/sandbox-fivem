function RegisterMiddleware()
	Middleware:Add("Characters:Spawning", function(source)
		local char = Fetch:CharacterSource(source)
		TriggerLatentClientEvent("Properties:Client:Load", source, 50000, _properties, _charPropertyKeys[char:GetData("ID")])
	end)

	Middleware:Add("Characters:GetSpawnPoints", function(source, charId)
		local p = promise.new()

		Database.Game:find({
			collection = "properties",
			query = {
				[string.format("keys.%s", charId)] = {
					["$exists"] = true,
				},
				foreclosed = {
					["$ne"] = true,
				},
				type = {
					["$nin"] = {
						"container",
						"warehouse",
					}
				}
			},
		}, function(success, results)
			if not success or not #results then
				p:resolve({})
				return
			end
			local spawns = {}

			local keys = {}

			for k, v in pairs(results) do
				table.insert(keys, v._id)
				local property = _properties[v._id]
				if property ~= nil then
					local interior = property.upgrades?.interior
					local interiorData = PropertyInteriors[interior]

					local icon = "house"
					if property.type == "warehouse" then
						icon = "warehouse"
					elseif property.type == "office" then
						icon = "building"
					end

					if interiorData ~= nil then
						table.insert(spawns, {
							id = property.id,
							label = property.label,
							location = {
								x = interiorData.locations.front.coords.x,
								y = interiorData.locations.front.coords.y,
								z = interiorData.locations.front.coords.z,
								h = interiorData.locations.front.heading,
							},
							icon = icon,
							event = "Properties:SpawnInside",
						})
					end
				end
			end
			_charPropertyKeys[charId] = keys
			p:resolve(spawns)
		end)

		return Citizen.Await(p)
	end, 3)
end

AddEventHandler("Characters:Server:PlayerLoggedOut", function(source, cData)
	_charPropertyKeys[cData.ID] = nil
	local property = GlobalState[string.format("%s:Property", source)]
	if property then
		if _insideProperties[property] then
			_insideProperties[property][source] = nil
		end

		GlobalState[string.format("%s:Property", source)] = nil
	end

	if Player(source)?.state?.tpLocation then
		Player(source).state.tpLocation = nil
	end
end)

AddEventHandler("Characters:Server:PlayerDropped", function(source, cData)
	_charPropertyKeys[cData.ID] = nil
	local property = GlobalState[string.format("%s:Property", source)]
	if property then
		if _insideProperties[property] then
			_insideProperties[property][source] = nil
		end

		GlobalState[string.format("%s:Property", source)] = nil
	end

	if Player(source)?.state?.tpLocation then
		Player(source).state.tpLocation = nil
	end
end)