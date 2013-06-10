
guidedModel =// @startlock
{
	Admin :
	{
		fullName :
		{
			onGet:function()
			{// @endlock
				return this.firstName + " " + this.lastName
			}// @startlock
		},
		events :
		{
			onRemove:function()
			{// @endlock
				// remove the admin entity and the directory listing
				// using the directory ID of the admin class find the corresponding directory user
				debugger;
				var myUser = directory.user( this.directoryID ); // creates the user object
				// if the user is found then remove the user from the directory
				
				if(myUser != null){
					myUser.remove();
					directory.save();
				}
				 
				
			},// @startlock
			onSave:function()
			{// @endlock
				// Whenever an admin is saved, check to see if there is this admin in the directory.
				// Query the directory to see this admin is there
				
				// using the directory ID of the admin class find the corresponding directory user
				var myUser = directory.user( this.directoryID );
				// if the user is found then save the password
				if(myUser != null){
					//If there is already this admin in the directory then update the attributes
					setPassword( this.password )
					directory.save(); // do not forget to save the changes
				} else {
					// Else add this admin to the directory.
					
					var newUser = directory.addUser(this.userName, this.password, this.fullName);
					directory.save(); // do not forget to save the changes
				}
				
				
			}// @startlock
		}
	},
	Person :
	{
		fullFirstLast :
		{
			onGet:function()
			{// @endlock
				// Create a fullFirstLast from 
				return ds.Person.firstName + " " + ds.Person.lastName;
			}// @startlock
		},
		fullLastFirst :
		{
			onGet:function()
			{// @endlock
					// Create a fullFirstLast from 
				return ds.Person.lastName + " " + ds.Person.firstName;
			}// @startlock
		},
		displayName :
		{
			onGet:function()
			{// @endlock
				if(ds.Person.isCompany == true){
					return ds.Person.fullFirstLast;
				} else {
					return ds.Person.companyName;
				}
			}// @startlock
		}
	}
};// @endlock
