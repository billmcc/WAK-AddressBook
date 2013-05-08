
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Find out how to display the list (lastname, first etc) from settings
		 
		// create an array with 'All Contacts' at the top
		
		
		var aGroupList = new Array();
		mycars[0] = "All contacts...";
		

		// Query all persons for this admin
		
		// Load all persons into the array
		
		
		
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
