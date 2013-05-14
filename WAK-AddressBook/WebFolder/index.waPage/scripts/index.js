
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		debugger;
		// load a combo array with options
		var aDisplayOptions = new Array();
		aDisplayOptions[0] = "Last name, first";
		aDisplayOptions[1] = "First name, last";
		//Set the value into the widget
		('aDisplayOptions').setValue(aDisplayOptions);
		
		// Find out how to display the list (lastname, first etc) from settings
		 
		// create an array with 'All Contacts' at the top
		
		
		var aGroupList = new Array();
		aGroupList[0] = "All contacts...";
		

		// Query all persons for this admin
		
		// Load all persons into the array
		
		
		
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
