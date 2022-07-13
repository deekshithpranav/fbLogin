document.getElementById('login').addEventListener('click', loginWithFacebook, false)

function loginWithFacebook() {
    let status = 0;
    let url = "";
    let appId = 510618090830554;
    let redirect_uri = "http://localhost:3000/test.html";
    if(status == 0){
        window.location.replace(`https://www.facebook.com/v14.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirect_uri}&state=5896245`);
        url = window.location.href;
        console.log(url)
    }
    
}