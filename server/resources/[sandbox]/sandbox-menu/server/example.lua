-- AddEventHandler('MenuExample:Shared:DependencyUpdate', RetrieveComponents)
-- function RetrieveComponents()
--     Chat = exports['sandbox-base']:FetchComponent('Chat')
--     Chat:RegisterCommand('menu', function(source, args, rawCommand)
--         TriggerClientEvent('Menu:Client:Test', source)
--     end, {
--         help = 'Test Menu'
--     })
-- end

-- AddEventHandler('Core:Shared:Ready', function()
--     exports['sandbox-base']:RequestDependencies('MenuExample', {
--         'Chat',
--     }, function(error)
--         if #error > 0 then return end -- Do something to handle if not all dependencies loaded
--         RetrieveComponents()
--     end)
-- end)
