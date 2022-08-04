/*
  Players example:
    Current Club: "West Ham United"
    age: "32"
    appearances_away: "9"
    appearances_home: "11"
    appearances_overall: "20"
    assists_away: "0"
    assists_home: "1"
    assists_overall: "1"
    assists_per_90_overall: "0.06"
    birthday: "629683200"
    birthday_GMT: "1989/12/15"
    cards_per_90_overall: "0.06"
    clean_sheets_away: "1"
    clean_sheets_home: "2"
    clean_sheets_overall: "3"
    conceded_away: "10"
    conceded_home: "12"
    conceded_overall: "22"
    conceded_per_90_overall: "1.25"
    full_name: "Aaron Cresswell"
    goals_away: "0"
    goals_home: "0"
    goals_involved_per_90_overall: "0.06"
    goals_overall: "0"
    goals_per_90_away: "0"
    goals_per_90_home: "0"
    goals_per_90_overall: "0"
    league: "Premier League"
    min_per_assist_overall: "1589"
    min_per_card_overall: "1589"
    min_per_conceded_overall: "72"
    min_per_goal_overall: "0"
    min_per_match: "79"
    minutes_played_away: "701"
    minutes_played_home: "888"
    minutes_played_overall: "1589"
    nationality: "England"
    penalty_goals: "0"
    penalty_misses: "0"
    position: "Defender"
    rank_in_club_top_scorer: "20"
    rank_in_league_top_attackers: "290"
    rank_in_league_top_defenders: "80"
    rank_in_league_top_midfielders: "191"
    red_cards_overall: "0"
    season: "2018/2019"
    yellow_cards_overall: "1"
*/

import React from 'react';
import './App.css'
import TheBarChart from './BarChart';
import { useState } from 'react'
import {
  Dropdown,
  DropdownButton
} from 'react-bootstrap';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

const filters = [
  "Goals",
  "Assists",
  "Clean Sheets",
  "Goals Conceded",
  "Own Goals",
  "Penalty Goals",
  "Penalty Misses",
  "Yellow Cards",
  "Red Cards",
  "Minutes Played",
  "Appearances",
  "Minutes Per Goal",
  "Minutes Per Assist",
]

function App() {
  const [file, setFile] = useState()
  const [array, setArray] = useState([])
  const [selectedName, setSelectedName] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("")

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePlayerSelect = (eKey, e) => {
    // e.persist()
    console.log(e.target.innerText);
    setSelectedName(e.target.innerText);
  }

  const handleFilterSelect = (eKey, e) => {
    // e.persist()
    console.log(e.target.innerText);
    setSelectedFilter(e.target.innerText);
  }

  const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map(i => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  let playerGoals = [], playerNames = [], playersObject = []

  array.forEach((player) => {
    playerGoals.push(player.goals_overall)
    playerNames.push(player.full_name)
    let currObj = {name: player.full_name, goals: parseInt(player.goals_overall)}
    // console.log(currObj)
    if (parseInt(player.goals_overall) > 0) {
      playersObject.push({currObj})
    }
  })

  // console.log(playersObject)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Premier League Goal Scorers Information Visualization </h1>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          Import Selected File
        </button>
      </form>

      <br />

      {/* <DropdownButton title="Filters" id="filter-dropdown" onSelect={handleFilterSelect}>
        {
          filters.map(item => {
              return <Dropdown.Item>{item}</Dropdown.Item>
          })
        }
      </DropdownButton>
      <br />
      <DropdownButton title="Player List" id="player-name-dropdown" onSelect={handlePlayerSelect}>
        {
          playerNames ? 
            playerNames.map(item => {
                return <Dropdown.Item>{item}</Dropdown.Item>
            }): <Dropdown.Item>No Data</Dropdown.Item>
        }
      </DropdownButton> */}
      
      {/* { selectedName ?
      <h3>{selectedFilter + " for " + selectedName}</h3>
      : <br /> }

      { array.length != 0 && selectedName != "" ? 
        <TheBarChart
          goalData={playerGoals}
          playerNameData={playerNames}
          selectedPlayer={selectedName}
          allPlayerData={array}
          selectedFilter={selectedFilter}
        /> 
        : <div> </div>
      }  */}

      {console.log(playersObject)}

      { playersObject ?
        <div id='bar-chart'>
          <BarChart width={9000} height={400} data={playersObject} barCategoryGap='4%' margin={{bottom: 90}}>
            <Bar dataKey="currObj.goals" fill="steelblue"/>
            <XAxis dataKey="currObj.name" interval={0} tick={ {stroke: 'steelblue', fontSize: 4, angle: '-50', fontWeight: 2} }/>
            <YAxis tick={{stroke: 'gray', dy: 5, dx: 3 , strokeWidth: 1, width: '3px'}}/>
          </BarChart>
        </div>
        : <div></div>
      }

    </div>
  );
}

export default App;
