/* NOTE: just make a separate siteIds.json file */
let sites = null;
let siteIds = new Array;
fetch("./site-list.json")
    .then(response => response.json())
    .then(values => {
        sites = values.sites
        for (var i = 0; i < sites.length; i++) {
            siteIds.push(sites[i]['id'])
        };
        let list = document.getElementById('site-list');
        for (var i = 0; i < siteIds.length; i++) {
            let option = document.createElement("option");
            option.innerText = siteIds[i];
            list.appendChild(option);
        }
    })
    .catch(error => {
        console.log(error)
    });

