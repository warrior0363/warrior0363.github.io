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
      data.addColumn('number', 'Total Confirmed');
      data.addColumn('number', 'Total Deceased');
      data.addColumn('number', 'Total recovered');
      //console.log(myObj.cases_time_series[0].totalconfirmed);
 
        for(var i=0;i<myObj.cases_time_series.length;i++)
        {
          var tota11=myObj.cases_time_series[i].totalconfirmed;
          var tota22=myObj.cases_time_series[i].totaldeceased;
          var tota33=myObj.cases_time_series[i].totalrecovered;
          var dt11=myObj.cases_time_series[i].date;
        // console.log("hello"+dt11)
            data.addRows([
        [dt11,  parseInt(tota11,10),parseInt(tota22,10),parseInt(tota33,10)]
      ]);
        }
     


      var options = {
        chart: {
          title: 'Situation is Alarming!!!See the Curve!! ',
          subtitle: 'It may stop you from unnecessarily steping out.Hover over the line to view numbers'
        },
        
      };

      var chart = new google.charts.Line(document.getElementById('linechart_material'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }
     
    }//3
  };//2
});
