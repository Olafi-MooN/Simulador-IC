document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".container-popup").classList.add("active");
    });
document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".box-login").classList.add("active");
    });
document.querySelector(".container-popup .box-login .bi-x").addEventListener("click",function(){
    document.querySelector(".box-login").classList.remove("active");
});
document.querySelector(".container-popup .box-login .bi-x").addEventListener("click",function(){
    document.querySelector(".container-popup").classList.remove("active");
});
