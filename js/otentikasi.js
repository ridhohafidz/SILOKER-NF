function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "admin@siloker.com" && password == "12345") {
        window.location.href = "halaman_admin.html";
        console.log("Login Sukses");
    } 
    else {
        alert("Email dan Password salah");
    }
    return false;
}