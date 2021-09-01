var users=[
    {
       name:"john", 
       age:15, 
       PhoneNo: 98765543, 
       country:"china",
       skills: [ "html", "css","js"],
     },
     {
       name:"ravi", 
       age:12, 
       PhoneNo: 94545, 
       country:"china",
       skills: [ "html", "css","js"],
     },
     {
       name:"sam", 
       age:23, 
       PhoneNo: 98765543, 
       country:"china",
       skills: [ "html", "css","js"],
     },
     {
        name:"sam", 
        age:25, 
        PhoneNo: 98765543, 
        country:"china",
        skills: [ "python", "java","js"],
      }
]


function search_user(age,username){

    for(x = 0; x < 3; x++){


        console.log(users[x]["name"])



        if(users[x]["name"] == username && users[x]["age"] == age){
            console.log("================USER FOUND===========")
            console.log( users[x])
        }
    }



    
    
}


search_user(23, "sam")




// for(x = 0; x < 3; x++){
    //     if(users[x]["age"] < 18){
    //         alert(  users[x]['name']  +      " below 18 aged are not allowed in this roller coaster")
    //     }
    // }
