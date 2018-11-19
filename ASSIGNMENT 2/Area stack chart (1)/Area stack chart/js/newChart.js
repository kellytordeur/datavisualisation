var items = [];
var i = 2;

$(".loadData").on("click", function () {

});

$(function () {
    $.ajax({
        url: 'data/datav10.JSON',
        dataType: 'JSON',
        success: onSuccess,
        error: function (err) {
            console.error('Fout: ', err);
        }
    });

});

function onSuccess(data) {
    console.log(data);

    $("#spinner").attr("max", data.length);

    drawChart(data, 1);

}

function updateData(data, i) {
    $("svg").remove();
    console.log(d3.event);
    drawChart(data, i);
}

//d3.select(window).on("resize", drawChart(data, i));

function drawChart(data, i) {

    var height = window.innerWidth * 0.355 || documentElement.clientWidth * 0.355 || document.body.clientWidth * 0.355;
    var width = window.innerWidth * 0.40 || documentElement.clientWidth * 0.4 || document.body.clientWidth * 0.4;
    var margin = {
        left: 50,
        right: 50,
        top: 5,
        bottom: 5
    };

    var tooltip = d3.select("body").append("div").style("opacity", "0").style("position", "absolute");

    var ourData = data[i - 1];

    var dataPoints = ourData.length;

    var steps = [];

    for (i = 0; i < ourData.length; i++) {
        var x = 0;
        x = ourData[i].run.current_run_steps;
        steps.push(x);
    }

    var totalRewards = [];

    for (i = 0; i < ourData.length; i++) {
        var x = 0;
        x = ourData[i].rewards.run_reward_movement_total;
        totalRewards.push(x);
    }

    var distanceRewards = [];

    for (i = 0; i < ourData.length; i++) {
        var x = 0;
        x = ourData[i].rewards.distances.distance_reward_total;
        distanceRewards.push(x);
    }

    var speedRewards = [];

    for (i = 0; i < ourData.length; i++) {
        var x = 0;
        x = ourData[i].rewards.speeds.speed_reward_total;
        speedRewards.push(x);
    }

    var terrainRewards = [];

    for (i = 0; i < ourData.length; i++) {
        var x = 0;
        x = ourData[i].rewards.terrains.terrain_reward_total;
        terrainRewards.push(x);
    }
    var totalTotal = []

    for (i = 0; i < totalRewards.length; i++) {
        var a = totalRewards[i];
        var b = distanceRewards[i];
        var c = terrainRewards[i];
        var d = speedRewards[i];

        totalTotal.push(a, b, c, d);
    }

    var xScale = d3.scaleLinear()
        .domain([0, dataPoints])
        .range([0, width]);

    var yScale = d3.scaleLinear()
        .domain([Math.min.apply(null, totalTotal), Math.max.apply(null, totalTotal)]) // input 
        .range([height, 0]); // output



    var line = d3.line()
        .x(function (d, i) {
            return xScale(i);

        })
        .y(function (d, i) {
            return yScale(d.y);

        })
        .curve(d3.curveMonotoneX)

    var lineDistance = d3.line()
        .x(function (d, i) {
            return xScale(i);

        })
        .y(function (d, i) {
            return yScale(d.y);

        })
        .curve(d3.curveMonotoneX)

    var lineSpeed = d3.line()
        .x(function (d, i) {
            return xScale(i);

        })
        .y(function (d, i) {
            return yScale(d.y);

        })
        .curve(d3.curveMonotoneX)

    var lineTerrain = d3.line()
        .x(function (d, i) {
            return xScale(i);

        })
        .y(function (d, i) {
            return yScale(d.y);

        })
        .curve(d3.curveMonotoneX)

    var dataset = d3.range(dataPoints).map(function (d, i) {
        return {
            "x": steps[i],
            "y": totalRewards[i]
        }
    })

    var datasetDistance = d3.range(dataPoints).map(function (d, i) {
        return {
            "x": steps[i],
            "y": distanceRewards[i]
        }
    })

    var datasetSpeed = d3.range(dataPoints).map(function (d, i) {
        return {
            "x": steps[i],
            "y": speedRewards[i]
        }
    })


    var datasetTerrain = d3.range(dataPoints).map(function (d, i) {
        return {
            "x": steps[i],
            "y": terrainRewards[i]
        }
    })

    var svg = d3.select(".rechtseSvg").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));


    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(yScale));


    svg.append("path")
        .datum(dataset)
        .attr("class", "totalLine line")
        .attr("d", line)
        .on("mousemove", function (d) {
            tooltip.style("opacity", "1") //make tooltip visible
                .style("left", (d3.event.pageX + 20 )+ "px")
                .style("top", d3.event.pageY + "px");

            tooltip.html("Total Rewards");

        })
        .on("mouseout", function () {
            tooltip.style("opacity", "0")
        });


    svg.append("path")
        .datum(datasetDistance)
        .attr("class", "distance line")
        .attr("d", lineDistance)
        .on("mousemove", function (d) {
            tooltip.style("opacity", "1") //make tooltip visible
                .style("left", (d3.event.pageX + 20 ) + "px")
                .style("top", d3.event.pageY + "px");

            tooltip.html("Distance Rewards");
        })
        .on("mouseout", function () {
            tooltip.style("opacity", "0")
        });

    svg.append("path")
        .datum(datasetSpeed)
        .attr("class", "speed line")
        .attr("d", lineSpeed).on("mousemove", function (d) {
            tooltip.style("opacity", "1") //make tooltip visible
                .style("left", (d3.event.pageX + 20 ) + "px")
                .style("top", d3.event.pageY + "px");

            tooltip.html("Speed Rewards");
        })
        .on("mouseout", function () {
            tooltip.style("opacity", "0")
        });

    svg.append("path")
        .datum(datasetTerrain)
        .attr("class", "terrain line")
        .attr("d", lineTerrain).on("mousemove", function (d) {
            tooltip.style("opacity", "1") //make tooltip visible
                .style("left", (d3.event.pageX + 20 ) + "px")
                .style("top", d3.event.pageY + "px");

            tooltip.html("Terrain Rewards");
        })
        .on("mouseout", function () {
            tooltip.style("opacity", "0")
        });

    //BAR CHARTS 

    var heightSessionChart = window.innerWidth * 0.28 || documentElement.clientWidth * 0.28 || document.body.clientWidth * 0.28;

    var widthSessionChart = window.innerWidth * 0.40 || documentElement.clientWidth * 0.4 || document.body.clientWidth * 0.4;

    var topScoreRuns = [];

    for (i = 0; i < data.length; i++) {
        var score = [];
        for (j = 0; j < data[i].length; j++) {
            var run = data[i];
            score.push(run[j].rewards.run_reward_movement_total);

        }

        topScoreRuns.push(Math.max.apply(null, score));

    }

    var max = Math.max.apply(null, score)

    var xScaleSession = d3.scaleLinear()
        .domain([0, data.length + 1])
        .range([0, widthSessionChart]);

    var yScaleSession = d3.scaleLinear()
        .domain([0, Math.max.apply(null, topScoreRuns)]) // input 
        .range([heightSessionChart, 0]); // output

    var svg = d3.select(".linkseSvg").append("svg")
        .attr("width", widthSessionChart + margin.left + margin.right)
        .attr("height", heightSessionChart + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + heightSessionChart + ")")
        .call(d3.axisBottom(xScaleSession));

    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(yScaleSession));

    svg.selectAll("rect")
        .data(topScoreRuns)
        .enter().append("rect")
        .attr("height", function (d, i) {
            return d;
        })
        .attr("width", function () {
            return widthSessionChart / (topScoreRuns.length + 1); // width of the x axis / 9 
        })
        .attr("x", function (d, i) {
            return ((widthSessionChart / (topScoreRuns.length + 1)) * i + (widthSessionChart / (topScoreRuns.length + 1)) / 2);

        })
        .attr("y", function (d, i) {
            return heightSessionChart - d;
        })
        .attr("fill", function (d) {
            //            return "rgb(255, " + (65 + 120 / max * d) + ", 50)";
            return "rgb(" + (6 + 143 / max * d) + ", " + (62 - 62 / max * d) + ", " + (142 + 33 / max * d) + ")";
        })
        .on("click", function (d, i) {
            $("#spinner").val(i + 1);
            updateData(data, i + 1);
            $(".runH1").text("RUN: " + (i + 1));

        });

}
