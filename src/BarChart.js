// import React from 'react';
// import { select, append, attr, data, options, scaleBand, padding, scaleLinear, text, max, axisBottom, axisLeft, selectAll, remove, style } from 'd3'
// import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

// const filterDict = {
//     "Goals": "goals_overall",
//     "Assists": "assists_overall",
//     "Clean Sheets": "clean_sheets_overall",
//     "Appearances": "appearances_overall",
//     "Minutes Played": "minutes_played_overall",
//     "Minutes Per Goal": "min_per_goal_overall",
// }

// function TheBarChart(props) {
//     var data = props.goalData;
//     var data = [1,2]
//     var allPlayerData = props.allPlayerData;
//     var names = props.playerNameData
//     var width = 400,
//     scaleFactor = 15,
//     barHeight = 20;

//     if (props.selectedFilter) {
//         var filter = filterDict[props.selectedFilter];
//         console.log(filter)
//     }

//     console.log(allPlayerData)
//     https://stackoverflow.com/questions/6237537/finding-matching-objects-in-an-array-of-objects
//     console.log("In barchart, selected name: " + props.selectedPlayer)
//     var playerResult = allPlayerData.filter((entry) => { return entry.full_name === props.selectedPlayer })
//     const playerResultObject = Object.assign({}, playerResult[0])
//     console.log(playerResultObject)
//     console.log(playerResult)
//     var data = []
//     playerResult ? data = playerResult[0].goals_overall : data = []
//     if (filter != " ") {
//         console.log("The filter is " + typeof(filter))
//         playerResult ? data = playerResultObject[filter] : data = []
//         console.log(props.selectedPlayer + " has " + playerResultObject[filter] + " " + filter)
//         var result = playerResultObject[filter] || 0
//         result = parseInt(result)
//         console.log("The result inside the if is " + result + " and its type is " + typeof(result))
//     }
    
//     console.log("the result outside of the if is " + result + " and its type is " + typeof(result))
//     console.log(barHeight * result)

//     select("svg").remove()


//     var graph = select("body")
//                 .append("svg")
//                 .attr("width", width)
//                 .attr("height", barHeight * result)

//     var bar = graph.selectAll("g")
//                 .data(result)
//                 .enter()
//                 .append("g")
//                 .attr("transform", function(d, i) {
//                     return "translate(0," + i * barHeight + ")";
//                 })

//     bar.append("rect")
//     .attr("width", function(d) {
//                 return d * scaleFactor;
//     })
//     .attr("height", barHeight - 1)
//     .style("fill", "#0b6efd")
//     .style("margin-left", '200px')
//     .style("border-left", '200px')

//     bar.append("text")
//     .attr("x", function(d) { return (d*scaleFactor); })
//     .attr("y", barHeight / 2)
//     .attr("dy", ".35em")
//     .text(function(d) { return d; })


//     var dataset1 = [33, 57, 84, 21, 60]

//     var svg = select("body")
//                 .append("svg")

//                 svg.append("text")
//                 .attr("transform", "translate(100,0)")
//                 .attr("x", 50)
//                 .attr("y", 50)
//                 .attr("font-size", "24px")
//                 .text("XYZ Foods Stock Price")
    
//     var margin = 200, width = svg.attr("width") - margin,
//         height = svg.attr("height") - margin



//     var xScale = scaleBand().range([0, width]).padding(0.5),
//                 yScale = scaleLinear().range([barHeight * result, 0]);

//     var g = svg.append("g")
//                 .attr("transform", "translate(" + 100 + "," + 100 + ")");

        
//                 xScale.domain(dataset1.map(function(d) { return d.year; }));
//                 yScale.domain([0, max(dataset1, function(d) { return d.value; })]);
        
//                 g.append("g")
//                  .attr("transform", "translate(0," + (barHeight * result) + ")")
//                  .call(axisBottom(xScale))
//                  .append("text")
//                  .attr("y", height - 250)
//                  .attr("x", width - 100)
//                  .attr("text-anchor", "end")
//                  .attr("stroke", "black")
//                  .text("Year");
        
//                 g.append("g")
//                  .call(axisLeft(yScale).tickFormat(function(d){
//                      return "$" + d;
//                  })
//                  .ticks(10))
//                  .append("text")
//                  .attr("transform", "rotate(-90)")
//                  .attr("y", 6)
//                  .attr("dy", "-5.1em")
//                  .attr("text-anchor", "end")
//                  .attr("stroke", "black")
//                  .text("Stock Price");
        
//                 g.selectAll(".bar")
//                  .data(dataset1)
//                  .enter().append("rect")
//                  .attr("class", "bar")
//                  .attr("x", function(d) { return xScale(d.year); })
//                  .attr("y", function(d) { return yScale(d.value); })
//                  .attr("width", xScale.bandwidth())
//                  .attr("height", function(d) { return height - yScale(d.value); });

//     const chartData = [
//         {name: 'Geeksforgeeks', students: 400},
//         {name: 'Technical scripter', students: 700},
//         {name: 'Geek-i-knack', students: 200},
//         {name: 'Geek-o-mania', students: 1000}
//       ];
        
        
//       return (
//       <BarChart width={600} height={600} data={chartData}>
//           <Bar dataKey="students" fill="green" />
//           <CartesianGrid stroke="#ccc" />
//           <XAxis dataKey="name" />
//           <YAxis />
//         </BarChart>
//       );

//     return (
//         <h3>{result}</h3>
//     )

// }

// export default TheBarChart;
