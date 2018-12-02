var div = document.getElementById('main_div');

var requestURL = "http://142.93.173.116:5000/teams/";

var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
}

function proveraLogin(){
    var timovi = request.response;
    var teamname = document.getElementById("imeText").value;
    var uuid = document.getElementById("prezimeText").value;
    var logged_in = false;

    for(var i = 0; i<timovi.length; i++){
        if(timovi[i].name == teamname){
            //set up current in database
            if(timovi[i].team_uuid == uuid){
                window.location="../izmena.html";
            }
        }
    }
}