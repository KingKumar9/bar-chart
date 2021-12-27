import * as d3 from 'd3';
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 id="title">bar chart</h2>
        <body />
      </div>
    )
  }
}


const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 1000;
    const h = 250;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)



export default App;
