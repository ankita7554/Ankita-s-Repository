var obj= {

	'name':'Ankita',
	'age':'20',
	getdetails: function(){
		
		console.log("NAME IS "+this.name+" AGE is"+ this.age+"." )
	}

}
console.log(obj.name)    //Ankita
console.log(obj.age)     //20.
// obj.getdetails()   
var details  = obj.getdetails 

details()
details.call(obj)
