
$(document).ready(function(){

	  var xmlhttp = new XMLHttpRequest();
	  xmlhttp.open("GET", "https://api.covid19india.org/data.json", true);
	  xmlhttp.setRequestHeader("Accept", "application/json");
	  xmlhttp.send();
	    xmlhttp.onreadystatechange = function() {//2
	      if (this.readyState == 4 && this.status == 200) {//3
	      var myObj = JSON.parse(this.responseText);
	      //console.log(myObj.statewise);
		  var t_p=myObj.statewise[0].confirmed;
		  var a_p=myObj.statewise[0].active;
		  var r_p=myObj.statewise[0].recovered;
		  var d_p=myObj.statewise[0].deaths;
	         for(var k=1;k<myObj.statewise.length;k++) {	//4    	  
    	     var state=myObj.statewise[k].state;
    	     var confirmed=myObj.statewise[k].confirmed;
    	     var active=myObj.statewise[k].active;
    	     var recovered=myObj.statewise[k].recovered;
    	     var deaths=myObj.statewise[k].deaths;
		     //var last_up_time=myObj.statewise[k].lastupdatedtime;
             var markup =  "<tr><td>" + state + "</td><td>" + confirmed + "</td><td class='hel1'>" + active + "</td><td class='hel2'>" +recovered + "</td><td>" + deaths +"</td></tr>";
             $("table tbody").append(markup);
             }//4
		
	    $("#ttlp p").append(t_p);
		$("#active_patients p").append(a_p);
	    $("#rec_p p").append(r_p);
		$("#dec_p p").append(d_p);
	  }//3
	};//2
});
// function Function101()
// {
//     //  var x = document.getElementById("haddi");
//     // x.style.display = "block";
  
//    var y= document.getElementById("img200");
//      y.style.display = "none";
  

// }


// function Function100()
// {
//      var x = document.getElementById("haddi");
//     x.style.display = "none";
  
//    var y= document.getElementById("img200");
//      y.style.display = "block";
  

// }
