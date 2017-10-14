/* Eric Zorn: Module 6 with JavaScript and Chart JS ICT 4510  10/4/17*/

/*
    In this project, we working with a very unique library that uses the HTML5 element,
    canvas, to its full potential to make some animated charts and graphs. This library
    is known as Chart JS and is one of many that manipulate the HTML5 canvas element in different ways.
    Like it sounds, this library is really known for making animated and interactive charts
    and graphs for the developer. It shortens development time drastically and makes web page statistics
    way more inviting for the user!
*/
var ctx = document.getElementById("myChart").getContext("2d");
var ctx2 = document.getElementById("secondMyChart").getContext("2d");

$(document).ready(function () {

    //Vanilla JS Request
    function loadPieChart() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if(this.readyState === 4 && this.status === 200) {
                var pieChartData = JSON.parse(this.responseText);

                var data = pieChartData.map(({value}) => value); // [300, 50, 100]
                console.log(data);
                var backgroundColor = pieChartData.map(({color}) => color);
                var borderColor = pieChartData.map(({highlight}) => highlight);
                var labels = pieChartData.map(({label}) => label);
                var datasets = [
                  {
                    data,
                    backgroundColor,
                    borderColor
                  }
                ];

                var myPieChart = new Chart(ctx2, {
                  type: 'pie',
                  data: {
                    datasets,
                    labels
                  },
                  options: {
                    responsive: false
                  }
                });
            }
        };

        xmlhttp.open("GET", "json/piechart-data.json", true);
        xmlhttp.send();
    }
    loadPieChart();

    $.ajax('json/barchart-data.json',   // request url
        {
            success: function (barData, status, xhr) { // success callback function

                barData.datasets.forEach(function (dataset) {
                    var dataSetLength = dataset.data.length;

                    var barColorArr = new Array(dataSetLength);

                    barColorArr.fill(dataset.fillColor);

                    dataset.backgroundColor = barColorArr;
                });


                let barChart = new Chart(ctx, {
                    type: 'bar',
                    data: barData,
                    options: {
                        responsive: false
                    }
                });
            }
        });
});
