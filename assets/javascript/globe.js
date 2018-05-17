const width = 800,
    height = 600,
    speed = .005,
    verticalTilt = -20,
    horizontalTilt = 0;
let locations = [];
const svg = d3.select(".globe").append("svg")
    .attr("width",width)
    .attr("height",height);
const markerGroup = svg.append("g");

const projection = d3.geoOrthographic()
    .scale(245)
    .translate([width / 2, height / 2])
    .clipAngle(90);
const path = d3.geoPath().projection(projection);
const center = [width/2, height/2];
const world_map_data_url = "https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json";
const location_url = "https://kascheri12.github.io/data/201805160147_providor_node_data.json";

drawGlobe();
enableRotation();

function drawGlobe() {
    d3.queue()
        .defer(d3.json, world_map_data_url)
        .defer(d3.csv, location_url)
        .await((error, worldData, locationData) => {
            svg.append("path")
                .datum({type: "Sphere"})
                .attr("class", "water")
                .attr("d", path)
                .style("fill", "#00248F");
            svg.selectAll(".segment")
                .data(topojson.feature(worldData, worldData.objects.countries).features)
                .enter().append("path")
                .attr("class", "segment")
                .attr("d", path)
                .style("stroke", "#FFF")
                .style("stroke-width", ".7px")
                .style("fill", (d, i) =>  "#A98B6F")
                .style("opacity", ".9");
            locations = locationData;
            drawMarkers();
        });
}

function enableRotation() {
    d3.timer(function(elapsed) {
        projection.rotate([speed*elapsed - 120, verticalTilt, horizontalTilt])
        svg.selectAll("path").attr("d",path);
        drawMarkers();
    });
}

function drawMarkers() {
  const markers = markerGroup.selectAll("circle")
      .data(locations)
  markers
      .enter()
      .append("circle")
      .merge(markers)
      .attr("cx", d=> projection([parseFloat(d.longitude), parseFloat(d.latitude)])[0])
      .attr("cy", d=> projection([parseFloat(d.longitude), parseFloat(d.latitude)])[1])
      .attr("fill", d=> {
          const coordinate = [parseFloat(d.longitude), parseFloat(d.latitude)];
          gdistance = d3.geoDistance(coordinate, projection.invert(center));
          return gdistance > 1.57 ? "none" : "steelblue";
      })
      .attr("r", 3);

  markerGroup.each(function() {
      this.parentNode.appendChild(this);
  });
}
