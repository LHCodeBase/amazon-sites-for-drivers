jq '{"sites": [.sites | keys[]] }' data/siteListMaster.json > data/siteIds.json
