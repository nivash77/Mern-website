// function test(){
//     console.log("f2");
// }
// let test1 =()=>console.log("f1");
// for(let i=0;i<10;i++){
// test();
// }
// test1()
function myfunction(e) {
    e.preventDefault();  // Prevent the form from reloading
    var name = document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    if(name!="" && mail!="" &&pass!=""&& age!=0 && age!=null){
        
        let userlist = {
            username: name,
            mailid: mail,
            password: pass,
            userAge:(age>=18)? "Major":"Minor"
        };
        console.log(userlist); 

    }
    else{
        alert("Not give empty value");
    }

}
function success(){
    console.log("Success")
}
function fail(){
    console.log("Fail")
}
function error(){
    console.log("error")
}
function exec(data,callback){
    if(data){
        console.log(data)
    }
    setTimeout(callback,3000)
}
function trigger(data){
if(data>0){
    exec(data,success)
}
else if(data<=0){
    exec(data,fail)
}
else{
    exec(data,error)
}
}
let d=3
trigger(d)
