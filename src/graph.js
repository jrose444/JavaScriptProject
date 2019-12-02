export const graph = () => {
    
    const margin = { top: 10, right: 40, bottom: 30, left: 30 },
      width = 450 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
    
    const svg = d3
      .select(".chart-area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    const x = d3
      .scaleLinear()
      .domain([0, 100]) // This is the min and the max of the data: 0 to 100 if percentages
      .range([0, 400]); // This is the corresponding value I want in Pixel

    // Show the axis that corresponds to this scale
    svg.append('g')
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    const y = d3
      .scaleLinear()
      .domain([100, 0]) // This is the min and the max of the data: 0 to 100 if percentages
      .range([0, 400]); // This is the corresponding value I want in Pixel

    svg
      .append("g")
      .attr("transform", "translate(0, 60)")
      .call(d3.axisLeft(y));

}