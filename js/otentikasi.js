function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "admin@siloker.com" && password == "12345") {
        window.location.href = "index.html";
        console.log("Login Sukses");
    } 

    else if (email == "user@siloker.com" && password == "12345") {
        window.location.href = "index.html";
        console.log("Login Sukses");
    } 
    else {
        alert("Email dan Password salah");
    }
    return false;
}