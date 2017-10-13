/* Eric Zorn: Module 6 with JavaScript and Chart JS ICT 4510  10/4/17*/

/*
    In this project, we working with a very unique library that uses the HTML5 element,
    canvas, to its full potential to make some animated charts and graphs. This library
    is known as Chart JS and is one of many that manipulate the HTML5 canvas element in different ways.
    Like it sounds, this library is really known for making animated and interactive charts
    and graphs for the developer. It shortens development time drastically and makes web page statistics
    way more inviting for the user! I took the standard JSON and converted it to fit the API properties for the Pie Chart
    and I also called the standard JSON from the Bar Chart JSON file. With the Bar Graph, we used a for each loop and assigned the proper
    properties to the JSON data for the data to loop over in an array.
    */


    var ctx = document.getElementById("myChart").getContext("2d");

    var ctx2 = document.getElementById("secondMyChart").getContext("2d");

    $(document).ready(function () {




        /* ------------------------- Bar Chart -----------------------*/



        $.ajax('json/barchart-data.json',   // request url
        {
                success: function (data, status, xhr) {// success callback function
                    var barData = data;
                    console.log(barData);
                    console.log(status);
                    console.log(xhr);

                    barData.datasets.forEach(function (dataset) {
                        var dataSetLength = dataset.data.length;

                        var barColorArr = new Array(dataSetLength);

                        barColorArr.fill(dataset.fillColor);

                        dataset.backgroundColor = barColorArr;
                    });


                    let barChart = new Chart(ctx, {
                        type: 'bar',
                        data: barData
                    });
                }
            });



        /* ------------------------- Pie Chart -----------------------*/
    //Vanilla JS Request
    function loadPieChart() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function (data) {
            if(this.readyState === 4 && this.status === 200) {
                var pieChartData = JSON.parse(this.responseText);
                console.log(pieChartData);


                let pieChart = new Chart(ctx2, pieChartData);


            }
        };

        xmlhttp.open("GET", "json/piechart-second.json", true);
        xmlhttp.send();
    }
    loadPieChart();




});