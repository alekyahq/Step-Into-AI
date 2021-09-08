// allow user to order item
// if item available in stock, place order and reduce stock
// else print item not available

    
var store = {
    shirts: 40,
    tshirt: 23,
    jeans: 30,
    blazer: 10
}



function order_item(){

     //    var ordered_item_count = prompt("stock needed")

    var ordered_item =  document.getElementById("item_name").value

    var ordered_item_count =   document.getElementById("item_count").value 

    var status = "Item not found"
    
    var order_message = ""
    
    
    // loop on dict
    for(item in store){

        if(ordered_item == item){

            status = "Item found"
            if(store[item] >= ordered_item_count){

                order_message = "Order placed successfully"

                store[item] = store[item] - ordered_item_count

            }else{

                order_message = "only " + store[item] + " are available"

            }
        }
    }   
    
  
    console.log(status)
    console.log(order_message)
    document.getElementById("message").innerHTML = "<small class='bg-success p-2 rounded card text-white'>" + order_message + "</small>" 
    message
    console.log(store)

   
}

























// var storeHouse = "false";

// var userdata = {}

// var items = prompt("what r u serching for")

// var stock = prompt("stock needed")

// function itemName(items){
//     // for(x=0; x <= 1; x++){
//     //     if(store[x]["blazer"] == items)
//     // } 
//     for(item in store){

//         if(store[x]["shirts"] == items){

//         console.log(items, store[item])

//         }
//         if(store[x]["count"] == stock){

//         }

// }
// function counts(){
//     if(storeHouse == "true"){
//         console,log("we have", userdata['count'])
//     }else{
//         console.log("not avaliable")
//     }
// }

// itemName(items)
// counts()