var value = "10";

console.log(value);


//different ways of declaring variable

//1. var (if value is going to change)
//2. const (i cannot be change)
//3. let 
const name = "Adam";

console.log(name);

//name = "Sam"; //it will create an error

const Name = "Sam"

console.log(Name)

//Data types
//-------------------------------------

//1. integer

var x = 10.45;

//2. string
var y = "ds12s54s";
var z = 'Adam';
console.log(typeof(x))
console.log(typeof(y))

//3. array
//              0         1       2     3
var items = ['Python', "html", "Css", "flask"];

console.log(items)

console.log(items[0])


//4. object
var my_object = {
    "Name" : "Adam",
    "Number" : "919000577040",
    "Age" : "25"
}

console.log(my_object)
console.log(my_object['Number'] )