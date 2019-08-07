// ----------------------------------------------------------
// DATA -----------------------------------------------------
// ----------------------------------------------------------
var data_set_069 = {
container_width: 540,
container_height: 540,
margin: 20,
center_x: 250,
center_y: 270,
// ----------------------------------------------------------
position_headline: 25,
position_source: 500,
// ----------------------------------------------------------
text_headline: "Tracking Users",
text_subheadline_A_1: "Tracking Companies",
text_subheadline_A_2: "Reach Top 5",
text_subheadline_B_1: "Tracking Scripts",
text_subheadline_B_2: "Reach Top 10",
text_source: "Source: Cliqz 2018",
// ----------------------------------------------------------
color_bg: "#f9f4ef",
color_basic: "#a399e7",
color_layout_stroke: "#f2e8df",
color_axis_line: "#a5a7af",
// ----------------------------------------------------------
// bars
width_A: 400,
height_A: 360,
width_B: 310,
height_B: 360,
// text
color_text_headline: "#2e2f33",
color_text_source: "#e4cfbb"
};




// ----------------------------------------------------------
// STRUCTURE ------------------------------------------------
// ----------------------------------------------------------
// create container for svg content
var container_069 = d3.select("#canvas_069").append("svg")
.attr("width", data_set_069.container_width)
.attr("height", data_set_069.container_height)
.attr("class", "canvas")
//.style("border", "1px solid black")
.style("background-color", data_set_069.color_bg);
// set up margin
var margin_069 = data_set_069.margin;
var width_069 = data_set_069.container_width - 2 * margin_069;
var height_069 = data_set_069.container_height - 2 * margin_069;
// ----------------------------------------------------------
// create group for layout
var layout_group_069 = container_069.append("g")
.attr("class", "layout_group");
// ----------------------------------------------------------
// create container for scaling
var container_margin_069 = container_069.append("g")
.attr("class", "canvas_margin")
.attr("transform", `translate(${margin_069}, ${margin_069})`);
// ----------------------------------------------------------
// create group for gfx - translate the group for margin top, left
var gfx_group_069 = container_margin_069.append("g");
// create sub-groups for layers
var gfx_layer_0_069 = gfx_group_069.append("g")
.attr("class", "gfx_layer_0")
.attr("transform", "translate(90,80)");
var gfx_layer_1_069 = gfx_group_069.append("g")
.attr("class", "gfx_layer_1")
.attr("transform", "translate(180,80)");
var gfx_layer_2_069 = gfx_group_069.append("g")
.attr("class", "gfx_layer_2");
// move 0 point for scaling
var gfx_layer_3_069 = gfx_group_069.append("g")
.attr("class", "gfx_layer_3")
.attr("transform", "translate(500,500)");
// sub g for illustration
gfx_layer_3_069.append("g")
.attr("class", "gfx_layer_3_sub")
.attr("transform", "translate(-310,-330)");
// ----------------------------------------------------------
// create group for text
var text_group_069 = container_margin_069.append("g");




// ----------------------------------------------------------
// LAYOUT ---------------------------------------------------
// ----------------------------------------------------------
// set layout strokes
layout_group_069.append("rect")
.attr("class", "gfx_bar_stroke")
.attr("x", 20)
.attr("y", data_set_069.position_headline + 35)
.attr("height", 2)
.attr("width", 500)
.style("fill", data_set_069.color_layout_stroke);
//
layout_group_069.append("rect")
.attr("class", "gfx_bar_stroke")
.attr("x", 20)
.attr("y", data_set_069.position_source + 30)
.attr("height", 2)
.attr("width", 500)
.style("fill", data_set_069.color_layout_stroke);




// ----------------------------------------------------------
// GFX ------------------------------------------------------
// ----------------------------------------------------------
// Parse the Data
d3.csv("http://niefeld.com/static/viz/069/data.csv", function(data_069) {
//d3.csv("static/viz/069/data.csv", function(data_069) {

// LAYER 0 --------------------------------------------------
// X scale
var xScale_A_069 = d3.scaleLinear()
.domain([0, 86])
.range([0,data_set_069.width_A]);
// Y scale
var yScale_A_069 = d3.scaleBand()
.range([0,data_set_069.height_A])
//.domain(data_069.map(function(d) { return d.company; }))
// fix for data map bug
.domain(['Google', 'Facebook', 'comScore', 'Twitter', 'Yandex'])
.padding(.1);
// add Y axis
gfx_layer_0_069.append("g")
.attr("class", "Yaxis_069")
.call(d3.axisLeft(yScale_A_069))
.call(customYAxisA_069);
// change Y axis design
function customYAxisA_069(g) {
g.select(".domain").remove();
// move ticks up
d3.select(".gfx_layer_0 g").attr("transform", "translate(0,-16)");
g.selectAll(".tick line").remove();
};
// Bars
gfx_layer_0_069.selectAll()
// filter the data for first 5 entries of csv file
.data(data_069.filter(function(d){
if( d.count < 6 ){return d;}
}))
.enter()
.append("rect")
.attr("class", "rect_A")
.attr("x", xScale_A_069(0) )
.attr("y", function(d) { return yScale_A_069(d.company); })
.attr("width", function(d) { return xScale_A_069(d.valueA); })
.attr("height", yScale_A_069.bandwidth() )
.attr("fill", function(d) { return d.colorA });
// Values on bars
gfx_layer_0_069.selectAll()
// filter the data for first 5 entries of csv file
.data(data_069.filter(function(d){
if( d.count < 6 ){return d;}
}))
.enter()
.append("text")
.attr("class", "displayA_069")
.attr("x", function(d) { return -6 + xScale_A_069(d.valueA); })
.attr("y", function(d) { return 20 + yScale_A_069(d.company); })
.attr("text-anchor", "end")
.text(function(d) { return d.valueA + "%" })
.attr("fill", "#fff");

// LAYER 1 --------------------------------------------------
// X scale
var xScale_B_069 = d3.scaleLinear()
.domain([0, 46])
.range([0,data_set_069.width_B]);
// Y scale
var yScale_B_069 = d3.scaleBand()
.range([0,data_set_069.height_B])
.domain(data_069.map(function(d) { return d.script; }))
.padding(.2);
// add Y axis
gfx_layer_1_069.append("g")
.call(d3.axisLeft(yScale_B_069))
.call(customYAxisB_069);
// change Y axis design
function customYAxisB_069(g) {
g.select(".domain").remove();
// move ticks up
d3.select(".gfx_layer_1 g").attr("transform", "translate(0,-4)");
g.selectAll(".tick line").remove();
};
// Bars
gfx_layer_1_069.selectAll()
.data(data_069)
.enter()
.append("rect")
.attr("class", "rect_B")
.attr("x", xScale_B_069(0) )
.attr("y", function(d) { return yScale_B_069(d.script); })
.attr("width", function(d) { return xScale_B_069(d.valueB); })
.attr("height", yScale_B_069.bandwidth() )
.attr("fill", function(d) { return d.colorB });
// Values on bars
gfx_layer_1_069.selectAll()
.data(data_069)
.enter()
.append("text")
.attr("class", "displayB_069")
.attr("x", function(d) { return -6 + xScale_B_069(d.valueB); })
.attr("y", function(d) { return 16 + yScale_B_069(d.script); })
.attr("text-anchor", "end")
.text(function(d) { return d.valueB + "%" })
.attr("fill", "#fff");

// LAYER 2 --------------------------------------------------
// Axis line
var line_069 = d3.select(".gfx_layer_2")
.append("line")
.attr("class", "axis_line")
.attr("x1", 90)
.attr("x2", 90)
.attr("y1", 70)
.attr("y2", 450)
.attr("stroke-dasharray", "3,3").style("stroke-width", 1)
.attr("stroke", data_set_069.color_axis_line);

// LAYER 3 --------------------------------------------------
// import illustration svg
var illustration_069 = d3.select(".gfx_layer_3_sub");
d3.xml("http://niefeld.com/static/viz/069/illustration.svg", function(error, documentFragment) {
//d3.xml("static/viz/069/illustration.svg", function(error, documentFragment) {
if (error) {console.log(error); return;}
var svgNode_069 = documentFragment.getElementsByTagName("svg")[0];
illustration_069.node().appendChild(svgNode_069);
});



// ----------------------------------------------------------
// ANIMATION ------------------------------------------------
// ----------------------------------------------------------
// preset states
d3.select(".gfx_layer_0").attr("opacity", 1)
d3.select(".gfx_layer_1").attr("opacity", 0)
gfx_layer_1_069.selectAll(".rect_B")
.attr("width", function(d) { return 0; });
gfx_layer_1_069.selectAll(".displayB_069")
.attr("opacity", 0);
//radio button on website
d3.selectAll("input[name='button_B_069']")
.on("change", change_069);
//button function
function change_069() {

// button switch
//transform to state 2 -----------------------------------------------------
if (data_set_069.index == 1) {
data_set_069.index = 2;
// layer_1 animations
gfx_layer_1_069.selectAll(".displayB_069")
.attr("opacity", 0);
gfx_layer_1_069.selectAll(".rect_B")
.transition().duration(100)
.attr("width", function(d) { return 0; });
d3.select(".gfx_layer_1")
.transition().delay(100).duration(0)
.attr("opacity", 0);
// Subheadline animations
d3.select(".text_subheadline_1")
.text(data_set_069.text_subheadline_A_1);
d3.select(".text_subheadline_2")
.text(data_set_069.text_subheadline_A_2);
// axis_line animations
gfx_layer_2_069.selectAll(".axis_line")
.transition().delay(200).duration(200)
.attr("x1", 90)
.attr("x2", 90);
// illustration animations
d3.select(".gfx_layer_3")
.transition().delay(200).duration(200)
.attr("transform", "translate(500,500)scale(1)");
// layer_0 animations
d3.select(".gfx_layer_0")
.transition().delay(300).duration(100)
.attr("opacity", 1);
gfx_layer_0_069.selectAll(".rect_A")
.transition().delay(400).duration(300)
.attr("width", function(d) { return xScale_A_069(d.valueA); });
gfx_layer_0_069.selectAll(".displayA_069")
.transition().delay(650).duration(0)
.attr("opacity", 1);

//transform to state 1 -----------------------------------------------------
} else {
data_set_069.index = 1;
// layer_0 animations
gfx_layer_0_069.selectAll(".displayA_069")
.attr("opacity", 0);
gfx_layer_0_069.selectAll(".rect_A")
.transition().duration(100)
.attr("width", function(d) { return 0; });
d3.select(".gfx_layer_0")
.transition().delay(100).duration(0)
.attr("opacity", 0);
// Subheadline animations
d3.select(".text_subheadline_1")
.text(data_set_069.text_subheadline_B_1);
d3.select(".text_subheadline_2")
.text(data_set_069.text_subheadline_B_2);
// axis_line animations
gfx_layer_2_069.selectAll(".axis_line")
.transition().delay(200).duration(200)
.attr("x1", 180)
.attr("x2", 180);
// illustration animations
d3.select(".gfx_layer_3")
.transition().delay(200).duration(200)
.attr("transform", "translate(500,450)scale(0.79)");
// layer_1 animations
d3.select(".gfx_layer_1")
.transition().delay(400).duration(100)
.attr("opacity", 1);
gfx_layer_1_069.selectAll(".rect_B")
.transition().delay(400).duration(300)
.attr("width", function(d) { return xScale_B_069(d.valueB); });
gfx_layer_1_069.selectAll(".displayB_069")
.transition().delay(650).duration(0)
.attr("opacity", 1);

// close button switch
};
// close button function
};
// close csv read function
});




// ----------------------------------------------------------
// TEXT -----------------------------------------------------
// ----------------------------------------------------------
// create text "headline"
var text_headline_069 = text_group_069.append("text")
.attr("class", "text_headline")
.attr("y", data_set_069.position_headline)
.text(data_set_069.text_headline)
.style("fill", data_set_069.color_text_headline);
// create text "subheadline"
var text_subheadline_1_069 = text_group_069.append("text")
.attr("class", "text_subheadline_1")
.attr("x", 500)
.attr("y", data_set_069.position_headline - 14)
.attr("text-anchor", "end")
.text(data_set_069.text_subheadline_A_1)
.style("fill", data_set_069.color_text_headline);
var text_subheadline_2_069 = text_group_069.append("text")
.attr("class", "text_subheadline_2")
.attr("x", 500)
.attr("y", data_set_069.position_headline + 4)
.attr("text-anchor", "end")
.text(data_set_069.text_subheadline_A_2)
.style("fill", data_set_069.color_text_headline);
// create text "source"
var text_source_2_069 = text_group_069.append("text")
.attr("class", "text_source")
.attr("x", 500)
.attr("y", data_set_069.position_source)
.attr("text-anchor", "end")
.text(data_set_069.text_source)
.style("fill", data_set_069.color_text_source);




//
