export const canvas = () => {
  const svg = d3
    .select(".chart-area")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400);

  const circle = svg
    .append("circle")
    .attr("cx", 200)
    .attr("cy", 200)
    .attr("r", 100)
    .attr("fill", "blue");
};

export const canvas2 = () => {
  const svg = d3
    .select(".row")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400);

  const circle = svg
    .append("circle")
    .attr("cx", 300)
    .attr("cy", 200)
    .attr("r", 100)
    .attr("fill", "blue");
};
