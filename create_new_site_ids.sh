jq "{sites: ([.sites[] | {id}] | sort_by(.id))}" site-list.json > onlySites.json
