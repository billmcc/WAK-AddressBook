
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
				var myUser = directory.user( this.directoryID ); // creates the user object
				if(myUser != null){
					myUser.remove( );
					directory.save();
				}
				 
				
			},// @startlock
			onSave:function()
			{// @endlock
				// Whenever an admin is saved, check to see if there is this admin in the directory.
				// Query the directory to see this admin is there
				
				var myUser = directory.user( this.directoryID );
				if(myUser != null){
					//If there is already this admin in the directory then update the attributes
					setPassword( this.password )
					directory.save(); // do not forget to save the changes
				} else {
					// Else at this admin to the directory.
					var newUser = directory.addUser(ds.Admin.userName, ds.Admin.password, ds.Admin.fullName);
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
