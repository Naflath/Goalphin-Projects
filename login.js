function loga(){
    let user = document.getElementById("un").value
    let pass = document.getElementById("ps").value
    console.log(pass)

    
    if (pass=='1122' ) {
        window.location.href="wel.html?u="+user
    }
    else{
        alert ("Wrong password")
    }
}
function log() {
    let a=window.location.href+""
    console.log(a)
    let log=a.split('=')
    document.getElementById("lg").innerHTML=log[1]
}
 document.getElementById("b").style.backgroundColor="blue"
