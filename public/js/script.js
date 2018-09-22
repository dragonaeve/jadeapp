
console.log("print");

function generateStat(){



    //console.log("In generate stast func");

    // alert("Entering");

    var start = document.getElementById("Start").value;
     var city = document.getElementById("cityList").value;

    localStorage.setItem("city", city);
    

    window.location.replace("stats");

    
    
}

function setStat(){

    var city = localStorage.getItem("city");
    console.log(city);

    if (city == "SanJose"){
        var date = document.getElementById("date");
        date.innerHTML = new Date();
 
        var temp = document.getElementById("state");
        state.innerHTML = "CA";

        temp  = document.getElementById("city");
        temp.innerHTML = localStorage.getItem("city");

        temp  = document.getElementById("address");
        temp.innerHTML = "16000 block of East Ithaca Place";

        temp  = document.getElementById("numbersKilled");
        temp.innerHTML = "4";
        temp  = document.getElementById("injured");
        temp.innerHTML = "0";

        temp  = document.getElementById("incidentUrl");
        temp.innerHTML = "";

        temp  = document.getElementById("sourceurl");
        temp.innerHTML = "http://www.gunviolencearchive.org/incident/478925";

       

        temp  = document.getElementById("congressionalDistrict");
        temp.innerHTML = localStorage.getItem("city");;

        temp  = document.getElementById("stolen");
        temp.innerHTML = "NO";

        temp  = document.getElementById("gunType");
        temp.innerHTML = "NA";


     }else if(city == "LosAngeles"){
        var date = document.getElementById("date");
        date.innerHTML = new Date();
 
        var temp = document.getElementById("state");
        state.innerHTML = "CA";

        temp  = document.getElementById("city");
        temp.innerHTML = localStorage.getItem("city");

        temp  = document.getElementById("address");
        temp.innerHTML = "13500 block of Cerise Avenue";

        temp  = document.getElementById("numbersKilled");
        temp.innerHTML = "6";
        temp  = document.getElementById("injured");
        temp.innerHTML = "2";

        temp  = document.getElementById("incidentUrl");
        temp.innerHTML = "";

        temp  = document.getElementById("sourceurl");
        temp.innerHTML = "http://losangeles.cbslocal.com/2013/01/01/man-killed-3-wounded-at-nye-party-in-hawthorne/";

       

        temp  = document.getElementById("congressionalDistrict");
        temp.innerHTML = localStorage.getItem("city");;

        temp  = document.getElementById("stolen");
        temp.innerHTML = "NO";

        temp  = document.getElementById("gunType");
        temp.innerHTML = "AK-47";

     }else if(city == "Hawthorne"){
        var date = document.getElementById("date");
        date.innerHTML = new Date();
 
        var temp = document.getElementById("state");
        state.innerHTML = "CA";

        temp  = document.getElementById("city");
        temp.innerHTML = localStorage.getItem("city");

        temp  = document.getElementById("address");
        temp.innerHTML = "1000 block of Flat Town Road";

        temp  = document.getElementById("numbersKilled");
        temp.innerHTML = "2";
        temp  = document.getElementById("injured");
        temp.innerHTML = "9";

        temp  = document.getElementById("incidentUrl");
        temp.innerHTML = "";

        temp  = document.getElementById("sourceurl");
        temp.innerHTML = "http://theadvocate.com/home/5018249-125/3-law-enforcement-officers-shot";

       

        temp  = document.getElementById("congressionalDistrict");
        temp.innerHTML = localStorage.getItem("city");;

        temp  = document.getElementById("stolen");
        temp.innerHTML = "NO";

        temp  = document.getElementById("gunType");
        temp.innerHTML = "NA";

     }else if(city == "Lorain"){
        var date = document.getElementById("date");
        date.innerHTML = new Date();
 
        var temp = document.getElementById("state");
        state.innerHTML = "CA";

        temp  = document.getElementById("city");
        temp.innerHTML = localStorage.getItem("city");

        temp  = document.getElementById("address");
        temp.innerHTML = "504 Calle Montecito";

        temp  = document.getElementById("numbersKilled");
        temp.innerHTML = "7";
        temp  = document.getElementById("injured");
        temp.innerHTML = "2";

        temp  = document.getElementById("incidentUrl");
        temp.innerHTML = "";

        temp  = document.getElementById("sourceurl");
        temp.innerHTML = "http://www.cbs8.com/story/21637042/2-teens-killed-2-injured-in-barrage-of-bullets-at-oceanside-park";

       

        temp  = document.getElementById("congressionalDistrict");
        temp.innerHTML = localStorage.getItem("city");;

        temp  = document.getElementById("stolen");
        temp.innerHTML = "NO";

        temp  = document.getElementById("gunType");
        temp.innerHTML = "NA";

     }else if(city == "Aurora"){
        var date = document.getElementById("date");
        date.innerHTML = new Date();
 
        var temp = document.getElementById("state");
        state.innerHTML = "CA";

        temp  = document.getElementById("city");
        temp.innerHTML = localStorage.getItem("city");

        temp  = document.getElementById("address");
        temp.innerHTML = "2900 block of Greenwood Avenue";

        temp  = document.getElementById("numbersKilled");
        temp.innerHTML = "9";
        temp  = document.getElementById("injured");
        temp.innerHTML = "1";

        temp  = document.getElementById("incidentUrl");
        temp.innerHTML = "";

        temp  = document.getElementById("sourceurl");
        temp.innerHTML = "http://www.wapt.com/news/central-mississippi/jackson/Police-arrest-man-in-quadruple-shooting/19231618";

       

        temp  = document.getElementById("congressionalDistrict");
        temp.innerHTML = localStorage.getItem("city");;

        temp  = document.getElementById("stolen");
        temp.innerHTML = "NO";

        temp  = document.getElementById("gunType");
        temp.innerHTML = "NA";

     }
}