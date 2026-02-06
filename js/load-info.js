const elSiteQuery = document.getElementById("site-query");
const elClearInput = document.getElementById("clear-input");
const elSite = document.getElementById("site");
const elWarningsUl = document.getElementById("warnings-ul");
const elRoutes = document.getElementById("preferredRoutes");
const elGoButton = document.getElementById("go-button");
const elNav = document.getElementById("nav");
const elAdd = document.getElementById("add");
const elDialog = document.getElementById("dialog");
const elLegend = document.getElementById("legend");

const welcomeMsg = "Select site";

elSite.innerText = welcomeMsg;

function setSite(_value) {
			if (siteIds.includes(_value)) {
			/* Site Id */
			elSite.innerText = _value;

			/* Dialog */
			elLegend.innerText = `Choose the type of help for ${_value}:`

			/* Take focus off nav */
			elSite.focus();

			/* grave notation doesn't work for this you must use bracket notation */

			/* Warnings */
			elWarningsUl.innerText = "";
			if (sites[_value]["warnings"].length) {
				sites[_value]["warnings"].forEach((text) => {
					let li = document.createElement("li");
					li.innerText = text;
					elWarningsUl.appendChild(li);
				})
			}

			/* Route */
			elRoutes.innerText = "";
			if (sites[_value]["routes"].length) {
				sites[_value]["routes"].forEach((text) => {
					let li = document.createElement("li");
					li.innerText = text;
					elRoutes.appendChild(li);
				})
			}
		}
}


/* Clear everything first */
elSiteQuery.addEventListener('change',
	(e) => {
		setSite(e.target.value);
	}
);

elGoButton.addEventListener('click',
	(e) => {
		/* this is NOT innerText */
		setSite(elSiteQuery.value.toUpperCase());
	}
);


elSiteQuery.addEventListener('click',
	(e) => {
		if (siteIds.includes(e.target.value)) {
			e.target.value = "";
		}
	}
);

elClearInput.addEventListener('click', 
	(e) => {
		elSiteQuery.value = "";
		elSite.innerText = welcomeMsg;
		elWarningsUl.innerText = "";
		elRoutes.innerText = "";
	}
);

function showAddOptions() {
	elDialog.showModal();
	return;
};

elAdd.addEventListener('click', 
	(e) => {
		showAddOptions();
	}
)
