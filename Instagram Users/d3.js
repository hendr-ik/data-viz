// ----------------------------------------------------------
// DATA -----------------------------------------------------
// ----------------------------------------------------------
var data_set_066 = {
container_width: 540,
container_height: 540,
margin: 20,
center_x: 250,
center_y: 270,
// ----------------------------------------------------------
map_width: 540,
map_height: 540,
bar_width: 475,
bar_height: 300,
// ----------------------------------------------------------
position_headline: 25,
position_source: 500,
position_menu: 480,
// ----------------------------------------------------------
text_headline_1: "Instagram Users",
text_subheadline_1: "Top 10, 2018",
text_subheadline_2: "MAU, In millions",
text_subheadline_3: "MAU, In millions",
text_source: "Source: Statista 2018, TechCrunch 2016",
// ----------------------------------------------------------
color_bg: "#f9f4ef",
color_basic: "#a399e7",
// map
color_map_01: "#f2e4d6",
color_map_02: "#e1ccb9",
color_map_circle_marker: "#ff8e4b",
color_map_display: "#2e2f33",
color_map_value: "#2e2f33",
// bars
color_bars_layout_axis: "#a5a7af",
color_bars_layout_stroke: "#f2e8df",
color_bars_layout_axis_marker: "#2e2f33",
color_bars_marker: "#5b4cc4",
// text
color_text_headline: "#2e2f33",
color_text_source: "#e4cfbb"
};

// extra data for map
var data_input_066 = [
{ "cx": -180, "cy": -50, "mau": 121, "display": "USA"},
{ "cx": 112, "cy": 38, "mau": 71, "display": "India"},
{ "cx": -80, "cy": 60, "mau": 64, "display": "Brazil"},
{ "cx": 180, "cy": 50, "mau": 59, "display": "Indonesia"},
{ "cx": 30, "cy": -18, "mau": 37, "display": "Turkey"},
{ "cx": 130, "cy": -70, "mau": 32, "display": "Russia"},
{ "cx": 208, "cy": -12, "mau": 25, "display": "Japan"},
{ "cx": 66, "cy": 6, "mau": 24, "display": "Iran"},
{ "cx": -14, "cy": -38, "mau": 23, "display": "UK"},
{ "cx": -158, "cy": 22, "mau": 22, "display": "Mexico"}
];




// ----------------------------------------------------------
// STRUCTURE ------------------------------------------------
// ----------------------------------------------------------
// create container for svg content
var container_066 = d3.select("#canvas_066").append("svg")
.attr("width", data_set_066.container_width)
.attr("height", data_set_066.container_height)
.attr("class", "canvas")
//.style("border", "1px solid black")
.style("background-color", data_set_066.color_bg);
// set up margin
var margin_066 = data_set_066.margin;
var width_066 = data_set_066.container_width - 2 * margin_066;
var height_066 = data_set_066.container_height - 2 * margin_066;
// ----------------------------------------------------------
// create group for layout
var layout_group_066 = container_066.append("g")
.attr("class", "layout_group");
// ----------------------------------------------------------
// create container for scaling
var container_margin_066 = container_066.append("g")
.attr("class", "canvas_margin")
.attr("transform", `translate(${margin_066}, ${margin_066})`);
// ----------------------------------------------------------
// create group for gfx - translate the group for margin top, left
var gfx_group_066 = container_margin_066.append("g")
.attr("transform", "translate(" + data_set_066.center_x + "," + data_set_066.center_y + ")")
.attr("class", "gfx_group");
// create sub-groups for layers
var gfx_layer_0_066 = gfx_group_066.append("g")
.attr("class", "gfx_layer_0");
var gfx_layer_1_066 = gfx_group_066.append("g")
.attr("transform", "translate(0,-10)")
.attr("class", "gfx_layer_1");
var gfx_layer_2_066 = gfx_group_066.append("g")
.attr("transform", "translate(0,-10)")
.attr("class", "gfx_layer_2");
var gfx_layer_3_066 = gfx_group_066.append("g")
.attr("transform", "translate(-214,-170)")
.attr("class", "gfx_layer_3");
var gfx_layer_4_066 = gfx_group_066.append("g")
.attr("transform", "translate(-214,-170)")
.attr("class", "gfx_layer_4");
// ----------------------------------------------------------
// create group for text
var text_group_066 = container_margin_066.append("g")
.attr("class", "text_group");




// ----------------------------------------------------------
// LAYOUT ---------------------------------------------------
// ----------------------------------------------------------
// set layout strokes
layout_group_066.append("rect")
.attr("class", "gfx_bar_stroke")
.attr("x", 20)
.attr("y", data_set_066.position_headline + 35)
.attr("height", 2)
.attr("width", 500)
.style("fill", data_set_066.color_bars_layout_stroke);
//
layout_group_066.append("rect")
.attr("class", "gfx_bar_stroke")
.attr("x", 20)
.attr("y", data_set_066.position_source + 30)
.attr("height", 2)
.attr("width", 500)
.style("fill", data_set_066.color_bars_layout_stroke);




// ----------------------------------------------------------
// GFX ------------------------------------------------------
// ----------------------------------------------------------

// LAYER 0 --------------------------------------------------
// Map
// projection
var path_map_066 = d3.geoPath();
var projection_map_066 = d3.geoVanDerGrinten3()
.scale(90)
.center([0,0])
.translate([-10, 40]);
// Data and color scale
var data_map_066 = d3.map();
var colorScale_map_066 = d3.scaleThreshold()
.domain([21])
.range([data_set_066.color_map_01, data_set_066.color_map_02]);
// Load external data and boot
d3.queue()
//.defer(d3.json, "http://niefeld.com/static/viz/066/map_world.geojson")
//.defer(d3.csv, "http://niefeld.com/static/viz/066/map.csv", function(d) { data_map_066.set(d.code, +d.mau); })
.defer(d3.json, "/static/viz/066/map_world.geojson")
.defer(d3.csv, "/static/viz/066/map.csv", function(d) { data_map_066.set(d.code, +d.mau); })
.await(ready_map_066);
// Draw function
function ready_map_066(error, topo) {
// Draw the map
gfx_layer_0_066.append("g")
.selectAll("path")
.data(topo.features)
.enter()
.append("path")
// draw each country
.attr("d", d3.geoPath()
.projection(projection_map_066)
)
// set stroke
.style("stroke", "#f9f4ef")
// set the color of each country
.attr("fill", function (d) {
d.total = data_map_066.get(d.id) || 0;
return colorScale_map_066(d.total);
});

// LAYER 1 --------------------------------------------------
// Map
// Add circles
gfx_layer_1_066.append("g")
.selectAll("circle")
.data(data_input_066)
.enter()
.append("circle")
.attr("cx", function (d) { return d.cx; })
.attr("cy", function (d) { return d.cy; })
.attr("r", function (d) { return d.mau / 2.8; })
.style("fill", data_set_066.color_basic)
.attr("fill-opacity", .4)
// highlight stuff
.attr("class", function(d,i){
if(data_input_066[i].mau == 25){ return "circle_marker"}
else if(data_input_066[i].mau == 121){ return "circle_marker"}
})
gfx_layer_1_066.selectAll(".circle_marker").style("fill", data_set_066.color_map_circle_marker)
// close data parse
}

// LAYER 2 --------------------------------------------------
// Map
// Add display
gfx_layer_2_066.append("g")
.selectAll("text")
.data(data_input_066)
.enter()
.append("text")
.attr("class", "map_display")
.attr("x", function(d) { return d.cx + d.mau / 300 })
.attr("y", function(d) { return 10 + d.cy; })
.text(function(d) { return d.display })
.style("fill", data_set_066.color_map_display);
// Add value
gfx_layer_2_066.append("g")
.selectAll("text")
.data(data_input_066)
.enter()
.append("text")
.attr("class", "map_value")
.attr("x", function(d) { return d.cx + d.mau / 300 })
.attr("y", function(d) { return 28 + d.cy; })
.text(function(d) { return d.mau })
.style("fill", data_set_066.color_map_value);

// LAYER 3 --------------------------------------------------
// Bars
// Parse the Data
//d3.csv("http://niefeld.com/static/viz/066/bars.csv", function(data_bars_066) {
d3.csv("/static/viz/066/bars.csv", function(data_bars_066) {
// SCALE X axis
var xScale_066 = d3.scaleBand()
.range([ 0, data_set_066.bar_width ])
.domain(data_bars_066.map(function(d) { return d.time; }))
.padding(.4);
// Y axis
var xAxis_066 = d3.axisBottom(xScale_066)
// append custom axis
gfx_layer_3_066.append("g")
.attr("class", "x_axis")
.attr("transform", "translate(0," + data_set_066.bar_height + ")")
.call(customXAxis_066);
// change axis design
function customXAxis_066(g) {
g.call(xAxis_066);
g.select(".domain").remove();
g.selectAll(".tick line").attr("stroke", data_set_066.color_bars_layout_axis)
g.selectAll("text").attr("transform", "translate(-10,0)rotate(-45)")
.style("text-anchor", "end").attr("fill", data_set_066.color_bars_layout_axis);
// highlight stuff
var ticks_066 = g.selectAll(".tick text");
ticks_066.attr("class", function(d,i){
if(data_bars_066[i].mau == 1){ return "tick_marker"}
else if(data_bars_066[i].mau == 1000){ return "tick_marker"}
});
g.selectAll(".tick_marker").attr("fill", data_set_066.color_bars_layout_axis_marker);
}

// SCALE Y axis
var yScale_066 = d3.scaleLinear()
.domain([0, 1000])
.range([ data_set_066.bar_height, 0]);
// Y axis
var yAxis_066 = d3.axisRight(yScale_066)
.tickSize(data_set_066.bar_width - 12)
.ticks(5);
// append custom axis
gfx_layer_3_066.append("g")
.attr("class", "y_axis")
.call(customYAxis_066);
// change axis design
function customYAxis_066(g) {
g.call(yAxis_066);
g.select(".domain").remove();
g.selectAll(".tick:not(:first-of-type) line").attr("stroke", data_set_066.color_bars_layout_axis)
.attr("stroke-dasharray", "3,3").style("stroke-width", 1);
g.selectAll(".tick:first-of-type line").remove();
g.selectAll(".tick text").attr("text-anchor", "end").attr("x", -6).attr("dy", -2)
.style("fill", data_set_066.color_bars_layout_axis);
}

// LAYER 4 --------------------------------------------------
// Bars
gfx_layer_4_066.selectAll()
.data(data_bars_066)
.enter()
.append("rect")
.attr("x", function(d) { return xScale_066(d.time); })
.attr("width", xScale_066.bandwidth())
.attr("fill", data_set_066.color_basic)
.attr("fill-opacity", .5)
.attr("y", function(d) { return yScale_066(d.mau); })
.attr("height", function(d) { return data_set_066.bar_height - yScale_066(d.mau); })
// highlight stuff
.attr("class", function(d,i){
if(data_bars_066[i].mau == 1){ return "bar_marker"}
else if(data_bars_066[i].mau == 1000){ return "bar_marker"}
})
gfx_layer_4_066.selectAll(".bar_marker").attr("fill", data_set_066.color_bars_marker)
// close data parse
})




// ----------------------------------------------------------
// ANIMATION ------------------------------------------------
// ----------------------------------------------------------
// set up switch variable and layer transparencys
var switch_066 = true;
d3.select(".gfx_layer_0").attr("opacity", 1);
d3.select(".gfx_layer_1").attr("opacity", 1);
d3.select(".gfx_layer_2").attr("opacity", 1);
d3.select(".gfx_layer_3").attr("opacity", 0);
d3.select(".gfx_layer_4").attr("opacity", 0);
//
d3.select(".text_subheadline_1").attr("opacity", 1);
d3.select(".text_subheadline_2").attr("opacity", 1);

// On radio button click
d3.selectAll("input[name='button_B']")
.on("change", change_066
);
//
function change_066() {
if (switch_066 == false) {
d3.select(".gfx_layer_3").transition().duration(200).attr("opacity", 0);
d3.select(".gfx_layer_4").transition().duration(200).attr("opacity", 0);
//
d3.select(".text_subheadline_1").transition().duration(300).attr("opacity", 1);
d3.select(".gfx_layer_0").transition().duration(300).attr("opacity", 1);
d3.select(".gfx_layer_1").transition().delay(100).duration(300).attr("opacity", 1);
d3.select(".gfx_layer_2").transition().delay(150).duration(300).attr("opacity", 1);
switch_066 = true;
}
else {
d3.select(".text_subheadline_1").transition().duration(200).attr("opacity", 0);
d3.select(".gfx_layer_2").transition().duration(200).attr("opacity", 0);
d3.select(".gfx_layer_1").transition().duration(200).attr("opacity", 0);
d3.select(".gfx_layer_0").transition().duration(200).attr("opacity", 0);
//
d3.select(".gfx_layer_3").transition().duration(300).attr("opacity", 1);
d3.select(".gfx_layer_4").transition().delay(150).duration(300).attr("opacity", 1);
switch_066 = false;
}
}




// ----------------------------------------------------------
// TEXT -----------------------------------------------------
// ----------------------------------------------------------
// create text "headline"
var text_headline_066 = text_group_066.append("text")
.attr("class", "text_headline")
.attr("y", data_set_066.position_headline)
.text(data_set_066.text_headline_1)
.style("fill", data_set_066.color_text_headline);
// create text "subheadline 1"
var text_subheadline_066 = text_group_066.append("text")
.attr("class", "text_subheadline_1")
.attr("x", 500)
.attr("y", data_set_066.position_headline - 14)
.attr("text-anchor", "end")
.text(data_set_066.text_subheadline_1)
.style("fill", data_set_066.color_text_headline);
// create text "subheadline 2"
var text_subheadline_066 = text_group_066.append("text")
.attr("class", "text_subheadline_2")
.attr("x", 500)
.attr("y", data_set_066.position_headline + 4)
.attr("text-anchor", "end")
.text(data_set_066.text_subheadline_2)
.style("fill", data_set_066.color_text_headline);
// create text "source"
var text_source_066 = text_group_066.append("text")
.attr("class", "text_source")
.attr("x", 500)
.attr("y", data_set_066.position_source)
.attr("text-anchor", "end")
.text(data_set_066.text_source)
.style("fill", data_set_066.color_text_source);




//
