var u_mail = document.getElementById("mail");
var u_pass = document.getElementById("pass");

let u_data = [ { name : "Vamsi@gmail.com" , passw : "Vamsi@123" } ,
 { name : "Prabhu@gmail.com" , passw : "Prabhu@123" } ,
 { name : "Murali@gmail.com" , passw : "Murali@123" } 
]




var new_name = document.getElementById("n_mail");
var new_pass = document.getElementById("n_pass");

function signup(){

    if(new_name.value != "" && new_pass.value != ""){
    var n_obj = {
        name : new_name.value,
        passw : new_pass.value
    }
}else{
    return null
}
 
    u_data.push(n_obj)
    
    localStorage.setItem("data" , JSON.stringify(u_data));
    window.alert("Signed Up Successfully, Click on Login")
}



var users = JSON.parse(localStorage.getItem("data"));

function login(){
    var f_user = users.find( (user,i) => {
        if(users[i].name == u_mail.value){
            return true
        }
    } )
    if(f_user){
        if(f_user.passw == u_pass.value){
            window.alert("You have loggedIn succesfully");
            location.href = "Products.html"
        }
        else{
            return  window.alert("Please enter Correct Password");
            }
    }else{
        return  window.alert("Please enter Correct Details");
        }
}



