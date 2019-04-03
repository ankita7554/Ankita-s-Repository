var obj1 = {'name':'viswa',
'age':25
}

var obj2  = {'name':'ankita','age':23}


var obj3 = {
	'name':'xyz',
	'age':16,
	eligible : function(){
		return this.age>18
	}
}

console.log(obj3.eligible())

//1st solution:
console.log(obj3.eligible.call(obj1))
//2nd solution:
var  age =obj3.eligible
console.log(age.call(obj1))
