
guidedModel =// @startlock
{
	Person :
	{
		entityMethods :
		{// @endlock
			fullLastFirst:function()
			{// @lock
				// Add your code here
			},// @lock
			fullFirstLast:function()
			{// @lock
				// Create a fullFirstLast from 
				return firstName + " " + lastName
			},// @lock
			displayName:function()
			{// @lock
				if(ds.Person.isCompany == True){
					return fullName
				} else {
					return companyName
				}
			
			}// @startlock
		}
	}
};// @endlock
