$(function () { //AJAX call to load the json data from a file located at "data/datav10.JSON
    $.ajax({
        url: 'data/datav10.JSON',
        dataType: 'JSON', 
        success: onSuccess,
        error: function (err) {
            console.error('Error: ', err);
        }
    });

});

function onSuccess(data) { //onSucces function = when the data is succesfully loaded in
    console.log(data);

    $("#spinner").attr("max", data.length);  //the maximum value of the spinner can not be larger than the length of the data

    drawChart(data, 1); //drawChart function with the data of the first "run"

}

function updateData(data, i) { //a function to remove the current svg and draw a new chart
    $("svg").remove();
    console.log(d3.event);
    drawChart(data, i);
}

function drawChart(data, i) { //the function in which the chart is drawn

    var height = window.innerWidth * 0.355 || documentElement.clientWidth * 0.355 || document.body.clientWidth * 0.355; //the height of the line chart is 35 % of the height of the window 
    var width = window.innerWidth * 0.40 || documentElement.clientWidth * 0.4 || document.body.clientWidth * 0.4; //the width of the line chart is 40 % of the height of the window 
    var margin = { //margins of the line chart
        left: 50,
        right: 50,
        top: 5,
        bottom: 30
    };

    var tooltip = d3.select("body").append("div").style("opacity", "0").style("position", "absolute"); //tooltip in a div with opacity 0 so it is hidden when not hovering over the lines

    var ourData = data[i - 1]; //the data (i-1 so we can call the first datapoint which is 0 in the array 1)

    var dataPoints = ourData.length; //the length of our data

    var steps = []; //an array to hold each "step"

    for (i = 0; i < ourData.length; i++) { // for loop to push each step into the steps array
        var x = 0;
        x = ourData[i].run.current_run_steps;
        steps.push(x);
    }

    var totalRewards = []; //an array to hold the total rewards of the runs

    for (i = 0; i < ourData.length; i++) { // for loop to push the total rewards of each run into the totalRewards array
        var x = 0;
        x = ourData[i].rewards.run_reward_movement_total;
        totalRewards.push(x);
    }

    var distanceRewards = []; //an array to hold the distance rewards (per step)

    for (i = 0; i < ourData.length; i++) { // for loop to push the distance rewards of each step into the distanceRewards array
        var x = 0;
        x = ourData[i].rewards.distances.distance_reward_total;
        distanceRewards.push(x);
    }

    var speedRewards = []; //an array to hold the speed rewards (per step)

    for (i = 0; i < ourData.length; i++) { // for loop to push the speed rewards of each step into the speedRewards array
        var x = 0;
        x = ourData[i].rewards.speeds.speed_reward_total;
        speedRewards.push(x);
    }

    var terrainRewards = []; //an array to hold the terrain rewards (per step)

    for (i = 0; i < ourData.length; i++) { // for loop to push the terrain rewards of each step into the terrainRewards array
        var x = 0;
        x = ourData[i].rewards.terrains.terrain_reward_total;
        terrainRewards.push(x);
    }
    var totalTotal = [] //an array to hold the total of all the rewards per run

    for (i = 0; i < totalRewards.length; i++) { // for loop to push the total of all rewards of each run into the totalTotal array
        var a = totalRewards[i];
        var b = distanceRewards[i];
        var c = terrainRewards[i];
        var d = speedRewards[i];

        totalTotal.push(a, b, c, d);
    }

    var xScale = d3.scaleLinear() //xScale, a linear scale
        .domain([0, dataPoints]) //domain of 0 to the data length
        .range([0, width]); //projected onto a range of 0 to the width of the chart

    var yScale = d3.scaleLinear() //yScale, a linear scale
        .domain([Math.min.apply(null, totalTotal), Math.max.apply(null, totalTotal)]) //domain from the minimum value in totalTotal to the maximum value in totalTotal
        .range([height, 0]); //projected onto a range of the height of the chart to 0



    var line = d3.line() //a line for the totalRewards, with an x value on the xScale and a y value on the yScale
        .x(function (d, i) {
            return xScale(i);

        })
        .y(function (d, i) {
            return yScale(d.y);

        })
        .curve(d3.curveMonotoneX) //d3 attribute to curve the line

    var lineDistance = d3.line() //a line for the distanceRewards, with an x value on the xScale and a y value on the yScale
        .x(function (d, i) {
            return xScale(i);

        })
        .y(function (d, i) {
            return yScale(d.y);

        })
        .curve(d3.curveMonotoneX) //d3 attribute to curve the line

    var lineSpeed = d3.line() //a line for the speedRewards, with an x value on the xScale and a y value on the yScale
        .x(function (d, i) {
            return xScale(i);

        })
        .y(function (d, i) {
            return yScale(d.y);

        })
        .curve(d3.curveMonotoneX) //d3 attribute to curve the line

    var lineTerrain = d3.line() //a line for the terrainRewards, with an x value on the xScale and a y value on the yScale
        .x(function (d, i) {
            return xScale(i);

        })
        .y(function (d, i) {
            return yScale(d.y);

        })
        .curve(d3.curveMonotoneX) //d3 attribute to curve the line

    var dataset = d3.range(dataPoints).map(function (d, i) { // dataset to map the data. The x values are the steps and the y values are the rewards
        return {
            "x": steps[i],
            "y": totalRewards[i]
        }
    })

    var datasetDistance = d3.range(dataPoints).map(function (d, i) { // dataset to map the data. The x values are the steps and the y values are the rewards
        return {
            "x": steps[i],
            "y": distanceRewards[i]
        }
    })

    var datasetSpeed = d3.range(dataPoints).map(function (d, i) { // dataset to map the data. The x values are the steps and the y values are the rewards
        return {
            "x": steps[i],
            "y": speedRewards[i]
        }
    })


    var datasetTerrain = d3.range(dataPoints).map(function (d, i) { // dataset to map the data. The x values are the steps and the y values are the rewards
        return {
            "x": steps[i],
            "y": terrainRewards[i]
        }
    })

    var svg = d3.select(".rightSvg").append("svg") // create a svg and append it to a div
        .attr("width", width + margin.left + margin.right) //width of the svg
        .attr("height", height + margin.top + margin.bottom) //height of the svg
        .append("g") //create a new group
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); //translate it with the margins


    svg.append("g") //group for the x axis
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));


    svg.append("g") //group for the y axis
        .attr("class", "y axis")
        .call(d3.axisLeft(yScale));


    svg.append("path") //append a path to the svg, create the totalLine line
        .datum(dataset) //using the dataset of totalRewards
        .attr("class", "totalLine line")
        .attr("d", line)
        .on("mousemove", function (d) { //make the tooltip visible hen hovering over the line
            tooltip.style("opacity", "1") 
                .style("left", (d3.event.pageX + 30 )+ "px")
                .style("top", d3.event.pageY +30 + "px");

            tooltip.html("Total Rewards");

        })
        .on("mouseout", function () { //make the tooltip invisible when not hovering over a line
            tooltip.style("opacity", "0")
        });


    svg.append("path") //append a path to the svg, create the distance line
        .datum(datasetDistance)//using the dataset of distanceRewards
        .attr("class", "distance line")
        .attr("d", lineDistance)
        .on("mousemove", function (d) { //make the tooltip visible hen hovering over the line
            tooltip.style("opacity", "1")
                .style("left", (d3.event.pageX + 30 ) + "px")
                .style("top", d3.event.pageY +30 + "px");

            tooltip.html("Distance Rewards");
        })
        .on("mouseout", function () { //make the tooltip invisible when not hovering over a line
            tooltip.style("opacity", "0")
        });

    svg.append("path") //append a path to the svg, create the speed line
        .datum(datasetSpeed)//using the dataset of speedRewards
        .attr("class", "speed line")
        .attr("d", lineSpeed).on("mousemove", function (d) { //make the tooltip visible hen hovering over the line
            tooltip.style("opacity", "1") 
                .style("left", (d3.event.pageX + 30 ) + "px")
                .style("top", d3.event.pageY +30 + "px");

            tooltip.html("Speed Rewards");
        })
        .on("mouseout", function () { //make the tooltip invisible when not hovering over a line
            tooltip.style("opacity", "0")
        });

    svg.append("path") //append a path to the svg, create the speed line
        .datum(datasetTerrain)//using the dataset of terrainRewards
        .attr("class", "terrain line")
        .attr("d", lineTerrain).on("mousemove", function (d) { //make the tooltip visible hen hovering over the line
            tooltip.style("opacity", "1")
                .style("left", (d3.event.pageX + 30 ) + "px")
                .style("top", d3.event.pageY + 30+ "px");

            tooltip.html("Terrain Rewards");
        })
        .on("mouseout", function () { //make the tooltip invisible when not hovering over a line
            tooltip.style("opacity", "0")
        });

    //BAR CHARTS 

    var heightSessionChart = window.innerWidth * 0.28 || documentElement.clientWidth * 0.28 || document.body.clientWidth * 0.28; //height of the barchart is 28% of the window

    var widthSessionChart = window.innerWidth * 0.40 || documentElement.clientWidth * 0.4 || document.body.clientWidth * 0.4; //width of the barchart is 40% of the window

    var topScoreRuns = []; //an array to hold the total value of the rewards per run

    for (i = 0; i < data.length; i++) { //for loop to push the total rewards per run into topScoreRuns[]
        var score = [];
        for (j = 0; j < data[i].length; j++) {
            var run = data[i];
            score.push(run[j].rewards.run_reward_movement_total);

        }

        topScoreRuns.push(Math.max.apply(null, score)); //push the maximum reward of that run

    }

    var max = Math.max.apply(null, score); //the maximum score

    var xScaleSession = d3.scaleLinear() //x scale for the bar chart with a domain of 0 to the length of the data projected onto a range of 0 to the width of the chart
        .domain([0, data.length + 1])
        .range([0, widthSessionChart]);

    var yScaleSession = d3.scaleLinear() //y scale for the bar chart with a domain of 0 to the maximum value of the topScoreRuns projected onto a range of the height of the chart to 0
        .domain([0, Math.max.apply(null, topScoreRuns)])
        .range([heightSessionChart, 0]); 

    var svg = d3.select(".leftSvg").append("svg") //create an svg and append it to a div
        .attr("width", widthSessionChart + margin.left + margin.right) //width of the svg
        .attr("height", heightSessionChart + margin.top + margin.bottom) //height of the svg
        .append("g") //create a new group
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); //translate the svg with the margins

    svg.append("g") //create a group for the x axis
        .attr("class", "x axis")
        .attr("transform", "translate(0," + heightSessionChart + ")")
        .call(d3.axisBottom(xScaleSession));

    svg.append("g") // a group for the y axis
        .attr("class", "y axis")
        .call(d3.axisLeft(yScaleSession));

    svg.selectAll("rect") //create rects
        .data(topScoreRuns) //with the topScoreRuns array as data
        .enter().append("rect")
        .attr("height", function (d, i) {
            return d;
        })
        .attr("width", function () {
            return widthSessionChart / (topScoreRuns.length + 1); // width of the x axis / 9 
        })
        .attr("x", function (d, i) { 
            return ((widthSessionChart / (topScoreRuns.length + 1)) * i + (widthSessionChart / (topScoreRuns.length + 1)) / 2); //places the bars with their center on each tick

        })
        .attr("y", function (d, i) {
            return heightSessionChart - d; 
        })
        .attr("fill", function (d) {
            
            return "rgb(" + (6 + 143 / max * d) + ", " + (62 - 62 / max * d) + ", " + (142 + 33 / max * d) + ")"; //generates a colorrange based on the height of the bars
        })
        .on("click", function (d, i) { //when a bar is clicked change the current line chart to the coresponding one
            $("#spinner").val(i + 1);
            updateData(data, i + 1);
            $(".runH1").text("RUN: " + (i + 1));

        });

}
