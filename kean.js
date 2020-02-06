var msgAlert = function(msg){
	return msg;
}
var msg = msgAlert("How are you Kean?");

console.log(msg);

let employee = {
    id : 123,
    name : "kean",
    salary: 5000,
    testFunction : function (){
        return this.id + " " + this.name + " salary is : " + this.salary;
    }
};
console.log(employee.testFunction());
