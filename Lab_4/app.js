function valid(){
    let user = document.getElementById("user").value

    if(!user){
        document.getElementById("hll").innerHTML = "Username is required";
    }

   
    return false;
}