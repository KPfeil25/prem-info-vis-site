import React from 'react';
import { select, append, attr, data } from 'd3'

function BarChart(props) {
    // var data = props.goalData;
    // var data = [1,2]
    var allPlayerData = props.allPlayerData;
    var names = props.playerNameData
    var width = 200,
    scaleFactor = 10,
    barHeight = 20;

    // console.log(allPlayerData)
    // https://stackoverflow.com/questions/6237537/finding-matching-objects-in-an-array-of-objects
    // console.log("In barchart, selected name: " + props.selectedPlayer)
    var playerResult = allPlayerData.filter((entry) => { return entry.full_name === props.selectedPlayer }) 
    // console.log(playerResult)
    var data = []
    playerResult ? data = playerResult[0].goals_overall : data = []
    
    var graph = select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", barHeight * data.length);

    var bar = graph.selectAll("g")
                .data(data)
                .enter()
                .append("g")
                .attr("transform", function(d, i) {
                    return "translate(0," + i * barHeight + ")";
                });

    bar.append("rect")
    .attr("width", function(d) {
                return d * scaleFactor;
    })
    .attr("height", barHeight - 1);

    bar.append("text")
    .attr("x", function(d) { return (d*scaleFactor); })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });

    return (
        <div>
            
        </div>
    );
}

export default BarChart;
