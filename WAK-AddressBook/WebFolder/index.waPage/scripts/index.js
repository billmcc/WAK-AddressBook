
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		window.location = '';
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		window.location = '';
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		debugger;
		if(WAF.directory.currentUser() != null){
			//take action for a logged in request
			$$("main").loadComponent("/components/app.waComponent");
		} else {
			//take action for a non logged in request
			$$("main").loadComponent("/components/public.waComponent");
		}
		
		//Load the current Admin
		//Who is the currentAdmin? - obtained from the login - for now 
		//Load the ID for the current user	
		//Get the currentUser and load the UUID for that user
		//Query	the Admin class - directoryID = 
		var currentAdminID = WAF.directory.currentUser().ID; //which is me
		
		//load var with list type (how the contact list displays the information, i.e. first name last or last name first)
		//find the current class Admin and load the value
		var vDisplayOptionSettingValue = ds.Admin.contactDisplay;
		//load the grid list of groups
		var GroupsList = new Array();
		GroupsList[0] = "All contacts...";
		$$(getHtmlId('GroupListGrid')).setValue(GroupsList);
		//load the contact list with all the contacts for the user


		// Query all persons for this admin
		
		// Load all persons into the array
		
		
		
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
