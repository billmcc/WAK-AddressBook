
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'app';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dataGrid3 = {};	// @dataGrid
	var container16 = {};	// @container
	// @endregion// @endlock

	// eventHandlers// @lock

	dataGrid3.onCellClick = function dataGrid3_onCellClick (event)// @startlock
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

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dataGrid3", "onCellClick", dataGrid3.onCellClick, "WAF");
	WAF.addListener(this.id + "_container16", "click", container16.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
