/* Eric Zorn: Module 6 with JavaScript and Chart JS ICT 4510  10/4/17*/

/*
    In this project, we working with a very unique library that uses the HTML5 element,
    canvas, to its full potential to make some animated charts and graphs. This library
    is known as Chart JS and is one of many that manipulate the HTML5 canvas element in different ways.
    Like it sounds, this library is really known for making animated and interactive charts
    and graphs for the developer. It shortens development time drastically and makes web page statistics
    way more inviting for the user!
*/


var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");


//AJAX Call One
// $(document).ready(function(){
//     $("#submitButton").click(function(){
//         $.get("json/barchart-data.json", function(data, status){
//             var chartData = JSON.parse(data);
//             console.log(chartData);
//             alert("Data: " + chartData.datasets + "\nStatus: " + status);
//         });
//     });
// });



var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});