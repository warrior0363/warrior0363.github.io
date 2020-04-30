$(document).ready(function(){
var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://api.covid19india.org/data.json", true);
    xmlhttp.setRequestHeader("Accept", "application/json");
    xmlhttp.send();
      xmlhttp.onreadystatechange = function() {//2
        if (this.readyState == 4 && this.status == 200) {//3
        var myObj = JSON.parse(this.responseText);

        google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
     data.addColumn('string', '');
      data.addColumn('number', '');
      data.addColumn('number', '');
    //  console.log(myObj.cases_time_series[0].totalconfirmed);
 
        for(var i=0;i<myObj.cases_time_series.length;i++)
        {
          var tota22=myObj.cases_time_series[i].dailydeceased;
          var dt11=myObj.cases_time_series[i].date;
        // console.log("hello"+dt11)
            data.addRows([
        [dt11,0,parseInt(tota22,10)]
      ]);
        }
     


      var options = {
        chart: {
          title: 'Total Deceased Patients Each Day',
          subtitle: 'Hover over the line to view data'
        },
        width: 400,
        height: 300
      };

      var chart = new google.charts.Line(document.getElementById('curve_chart_deceased'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
     
    }//3
  };//2
});
