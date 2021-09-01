

// For loop
for(x=5; x<10; x++){
    console.log(x)
}

console.log("Length of items list: " + items.length)

for(x=0; x < items.length; x++){
    console.log(x)
    console.log(items[x])
    if(items[x] == "Mysql"){
       // alert("Mysql found in items")
    }else{
       //alert("Mysql not found")
    }
    
}

// Conditional statements
var x = 5;
//console.log(x == 10)
if(x == 10){

    console.log("x is equeal to 10")
    

}else if(x > 10){

    console.log("x is greater than 10")

}
else{

    console.log("x is not equeal to 10 or greater than 10")

}



// var message = "hi";

// if(message == "hi"){
//     console.log("hello, how can i help you")
// }

// functions

//define
function say_hello(){
    alert("welcome");
}

//call
// say_hello();
// say_hello();

var items = ['Python', "html", "Css", "flask"];

//passing parameters
function search_value(value){
    var found = "not found"
    for(x=0; x < items.length; x++){
        console.log(x)
        console.log(items[x])
        if(items[x] == value){
            found = "item found"
        }
        
    }

    //function return statement
    return found
}

var x = search_value("Python");
console.log(x)













