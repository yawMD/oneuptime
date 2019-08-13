
var apiUrl = '';
var backendUrl = '';
if (window.location.href.indexOf('localhost') > -1) {
    apiUrl = 'http://localhost:3000';
    backendUrl = 'http://localhost:3002';
} else if (window.location.href.indexOf('staging') > -1) {
    apiUrl = 'https://staging-dashboard.fyipe.com';
    backendUrl = 'https://staging-api.fyipe.com';
} else {
    apiUrl = 'https://dashboard.fyipe.com';
    backendUrl = 'https://api.fyipe.com';
}
//eslint-disable-next-line
function loginUrl(extra){
    if(extra){
        window.location.href = `${apiUrl}/login${extra}`;
    }
    else{
    window.location.href = `${apiUrl}/login`;
    }
}
//eslint-disable-next-line
function registerUrl(params){
    if(params){
        window.location.href = `${apiUrl}/register${params}`;
    }
    else{
    window.location.href = `${apiUrl}/register`;
    }
}
//eslint-disable-next-line
function formUrl(){
    return `${backendUrl}/lead/`;
}

