import './App.css';
import React from 'react';


class App extends React.Component {

state = {
  head: [{name: "Name", place: "Place", hits: "Hits", rate: "Rate"}],
  sportsmans: [
    {name: "Johannies", place: "2", hits: "3", rate: "2"},
    {name: "Evheniy", place: "4", hits: "16", rate: "1"},
    {name: "Sergey", place: "1", hits: "10", rate: "1"},
    {name: "Dominic", place: "6", hits: "31", rate: "2"},
    {name: "Frederik", place: "3", hits: "22", rate: "1"},
    {name: "Emil", place: "8", hits: "23", rate: "2"},
    {name: "Klemen", place: "5", hits: "42", rate: "2"},
    {name: "Timofey", place: "10", hits: "27", rate: "1"},
    {name: "Mark", place: "7", hits: "32", rate: "3"},
    {name: "Nikita", place: "9", hits: "30", rate: "2"}
].sort((a,b) => a.place - b.place)
}



sportsmansSortByName = () => {
  this.setState({
    sportsmans: this.state.sportsmans.sort((a, b) => a.name > b.name ? 1 : -1)
  })
}

sportsmansSortByHits = () => {
  this.setState({
    sportsmans: this.state.sportsmans.sort((a, b) => a.hits - b.hits)
  })
}

sportsmansSortByRate = () => {
  this.setState({
    sportsmans: this.state.sportsmans.sort((a, b) => a.rate - b.rate)
  })

}

searchByName= () => {
let searchQuery = document.getElementById('search-input')
let table = document.getElementById('table-score')
let reg = new RegExp(searchQuery.value, 'i')
let flag = false

for (let i = 1; i < table.rows.length; i++) {
  flag = false
  for (let j = table.rows[i].cells.length -1; j >= 0; j--) {
    flag = reg.test(table.rows[i].cells[j].innerHTML)
    if (flag) break;
  }

  if (flag) {
    table.rows[i].style.display = ""
  } else {
    table.rows[i].style.display = "none"
  }
}
}

render() {
  return (<>
<div className="btn-group" role="group">
  <button onClick={this.sportsmansSortByName} type="button" className="btn btn-secondary">Sort by name</button>
  <button onClick={this.sportsmansSortByHits} type="button" className="btn btn-secondary">Sort by hits</button>
  <button onClick={this.sportsmansSortByRate} type="button" className="btn btn-secondary">Sort by rate</button>
<input id='search-input' type="text" className="form-control" placeholder="Name" onKeyUp={this.searchByName}></input>
</div>

<table id='table-score' className='table'>
 <thead className='thead-dark'>{this.state.head.map((item) => (<tr><th>{item.name}</th><th>{item.place}</th><th>{item.hits}</th><th>{item.rate}</th></tr>))}</thead>
 <tbody>{this.state.sportsmans.map((item) => (<tr><td>{item.name}</td><td>{item.place}</td><td>{item.hits}</td><td>{item.rate}</td></tr>))
}</tbody>
</table>
  </>)
}

}

export default App;
