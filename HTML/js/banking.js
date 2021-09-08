// FEATURES
//0. Authentication
//1. view balance
//2. withdraw
//3. deposit


//database
var data = [
    {
        name : "user1", 
        password : "pass_user1",
        balance : 1000
    },
    {
        name : "user2", 
        password : "pass_user2",
        balance : 2000
    },
    {
        name : "user3", 
        password : "pass_user3",
        balance : 1500
    }
]


var logged_in_status = "false"; 
var userdata = {}
// suppose user has entered credentials and we got the following username and password
var username = prompt("Please enter username")
var password = prompt("Please enter password")


function login(username, password){
    
        for(x = 0; x < data.length ; x++ ){
        
            if(data[x]["name"] == username ){
        
               // console.log("username found" , username)
        
                if(data[x]["password"] == password){

                    userdata = data[x]
        
                    //console.log("passwor is correct" , username)
        
                     logged_in_status = "true";
                }
            }
            
        }
        
    
        console.log("user logged in: " , logged_in_status)
}



function view_balance(){

    if(logged_in_status == "true"){

        console.log("User account balance is: " , userdata['balance'])

    }else{
        console.log("please login to view balace")
    }
}


login(username,password)
view_balance()






