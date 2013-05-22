
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataGrid1 = {};	// @dataGrid
	var container16 = {};	// @container
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	dataGrid1.onCellClick = function dataGrid1_onCellClick (event)// @startlock
	{// @endlock
		// When a contact is selected load the contact details.
		// Find out which tab is selected in the contact detail area.
		// If the view tab is selected then display the HTML only summary contact information.
		// Else display the edit form for contact information.
		
		 
		
		
	};// @lock

	container16.click = function container16_click (event)// @startlock
	{// @endlock
			

			// load a combo array with options
			if(aDisplayOptions.size === 0){
				var aDisplayOptions = new Array();
				aDisplayOptions[0] = "Last name, first";
				aDisplayOptions[1] = "First name, last";
			} else {
			
			}
			
		
			//Find the value of vDisplayOptionSettingValue in the array aDisplayOptions
			
			//Set the value into the widget
			$$('aDisplayOptions').setValue(aDisplayOptions);
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//Load the current Admin
		//Who is the currentAdmin? - obtained from the login - for now 
		//Load the ID for the current user		
		var currentAdminID = 1; //which is me
		
		//load var with list type (how the contact list displays the information, i.e. first name last or last name first)
		//find the current class Admin and load the value
		var vDisplayOptionSettingValue = ds.Admin.contactDisplay;
		//load the grid list of groups
		var aGroupList = new Array();
		aGroupList[0] = "All contacts...";
		
		//load the contact list with all the contacts for the user

		debugger;
 


		// Query all persons for this admin
		
		// Load all persons into the array
		
		
		
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dataGrid1", "onCellClick", dataGrid1.onCellClick, "WAF");
	WAF.addListener("container16", "click", container16.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
