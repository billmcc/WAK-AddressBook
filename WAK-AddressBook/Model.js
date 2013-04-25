
guidedModel =// @startlock
{
	Person :
	{
		fullFirstLast :
		{
			onGet:function()
			{// @endlock
					// Create a fullFirstLast from 
				return firstName + " " + lastName
			}// @startlock
		},
		fullLastFirst :
		{
			onGet:function()
			{// @endlock
					// Create a fullFirstLast from 
				return lastName + " " + firstName
			}// @startlock
		},
		displayName :
		{
			onGet:function()
			{// @endlock
				if(ds.Person.isCompany == True){
					return fullFirstLast
				} else {
					return companyName
				}
			}// @startlock
		}
	}
};// @endlock
