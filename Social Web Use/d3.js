// ----------------------------------------------------------
// DATA -----------------------------------------------------
// ----------------------------------------------------------
var data_set_068 = {
container_width: 540,
container_height: 540,
margin: 20,
center_x: 250,
center_y: 270,
// ----------------------------------------------------------
position_headline: 25,
position_source: 500,
// ----------------------------------------------------------
text_headline: "Social Web Use",
text_subheadline_1: "In emerging economies",
text_subheadline_2: "By age group and education",
text_source_1: "Source: Pew Research Center 2019,",
text_source_2: "Mobile Technology and Its Social Impact Survey 2018",
// ----------------------------------------------------------
color_bg: "#f9f4ef",
color_basic: "#a399e7",
color_layout_stroke: "#f2e8df",
// ----------------------------------------------------------
// plot
index: 1,
plot_width: 394,
plot_height: 350,
color_area_layout_axis: "#a5a7af",
color_line_1: "#ff8e4b",
color_line_2: "#5b4cc4",
color_circle_1: "#ffc19c",
color_circle_2: "#ff8e4b",
color_circle_3: "#da5404",
color_circle_4: "#a399e7",
color_circle_5: "#261697",
// legend
legend_1: [
{"label": "Age group", "position": 0},
{"label": "50+", "position": 45},
{"label": "30-49", "position": 79},
{"label": "18-29", "position": 95},
],
legend_2: [
{"label": "Education", "position": 0},
{"label": "less", "position": 54},
{"label": "more", "position": 93},
],
// text
color_text_headline: "#2e2f33",
color_text_source: "#e4cfbb"
};




// ----------------------------------------------------------
// STRUCTURE ------------------------------------------------
// ----------------------------------------------------------
// create container for svg content
var container_068 = d3.select("#canvas_068").append("svg")
.attr("width", data_set_068.container_width)
.attr("height", data_set_068.container_height)
.attr("class", "canvas")
//.style("border", "1px solid black")
.style("background-color", data_set_068.color_bg);
// set up margin
var margin_068 = data_set_068.margin;
var width_068 = data_set_068.container_width - 2 * margin_068;
var height_068 = data_set_068.container_height - 2 * margin_068;
// ----------------------------------------------------------
// create group for layout
var layout_group_068 = container_068.append("g")
.attr("class", "layout_group");
// ----------------------------------------------------------
// create container for scaling
var container_margin_068 = container_068.append("g")
.attr("class", "canvas_margin")
.attr("transform", `translate(${margin_068}, ${margin_068})`);
// ----------------------------------------------------------
// create group for gfx - translate the group for margin top, left
var gfx_group_068 = container_margin_068.append("g");
// create sub-groups for layers
var gfx_layer_0_068 = gfx_group_068.append("g")
.attr("class", "gfx_layer_0")
.attr("transform", "translate(80,80)");
var gfx_layer_1_068 = gfx_group_068.append("g")
.attr("class", "gfx_layer_1")
.attr("transform", "translate(80,80)");
var gfx_layer_2_068 = gfx_group_068.append("g")
.attr("class", "gfx_layer_2")
//.attr("transform", "translate(80,80)")
;
var gfx_layer_3_068 = gfx_group_068.append("g")
.attr("class", "gfx_layer_3")
//.attr("transform", "translate(80,80)")
;
// ----------------------------------------------------------
// create group for text
var text_group_068 = container_margin_068.append("g");




// ----------------------------------------------------------
// LAYOUT ---------------------------------------------------
// ----------------------------------------------------------
// set layout strokes
layout_group_068.append("rect")
.attr("class", "gfx_bar_stroke")
.attr("x", 20)
.attr("y", data_set_068.position_headline + 35)
.attr("height", 2)
.attr("width", 500)
.style("fill", data_set_068.color_layout_stroke);
//
layout_group_068.append("rect")
.attr("class", "gfx_bar_stroke")
.attr("x", 20)
.attr("y", data_set_068.position_source + 30)
.attr("height", 2)
.attr("width", 500)
.style("fill", data_set_068.color_layout_stroke);




// ----------------------------------------------------------
// GFX ------------------------------------------------------
// ----------------------------------------------------------
// parse the data
d3.csv("http://niefeld.com/static/viz/068/data.csv", function(data_plot_068) {

// LAYER 0 --------------------------------------------------
// define X scale
var xScale_068 = d3.scaleLinear()
.domain([0, 100])
.range([ 0, data_set_068.plot_width]);
// add X axis
gfx_layer_0_068.append("g")
//.attr("class","Xaxis")
.attr("transform", "translate(0," + data_set_068.plot_height + ")")
.call(d3.axisBottom(xScale_068).ticks(5))
.call(customXAxis_068);
// change X axis design
function customXAxis_068(g) {
g.select(".domain").remove();
g.selectAll(".tick line").attr("stroke", data_set_068.color_area_layout_axis)
// scale ticks over full height
.attr("y2", 0 - data_set_068.plot_height + 30)
.attr("stroke-dasharray", "3,3").style("stroke-width", 1);
g.selectAll("text").attr("fill", data_set_068.color_area_layout_axis);
};
// label for X axis
gfx_layer_0_068.append("text")
.attr("class","tick")
.attr("transform","translate(" + (data_set_068.plot_width + 24) + " ," + (data_set_068.plot_height + 18) + ")")
.attr("fill", data_set_068.color_area_layout_axis)
.style("text-anchor", "end")
.text("%");

// define Y scales
var yScale_068 = d3.scaleBand()
.range([ 0, data_set_068.plot_height ])
.domain(data_plot_068.map(function(d) { return d.group; }))
.padding(1);
// add Y axis
gfx_layer_0_068.append("g")
.call(d3.axisLeft(yScale_068))
.call(customYAxis_068);
// change Y axis design
function customYAxis_068(g) {
g.select(".domain").remove();
g.selectAll(".tick line")
// scale ticks over full width
.attr("x2", data_set_068.plot_width)
// fit axis line with gfx line
.attr("transform", "translate(0,-0.5)")
.attr("stroke", data_set_068.color_area_layout_axis)
.attr("stroke-dasharray", "3,3").style("stroke-width", 1);
g.selectAll(".tick text").attr("text-anchor", "end").attr("x", -10)
// fit values with axis line
.attr("transform", "translate(0,-0.5)")
.style("fill", data_set_068.color_text_headline);
};

// LAYER 1 --------------------------------------------------
// add lines
gfx_layer_1_068.selectAll()
.data(data_plot_068)
.enter()
.append("line")
.attr("class", "plot-line")
.attr("x1", function(d) { return xScale_068(d.value1); })
.attr("x2", function(d) { return xScale_068(d.value3); })
.attr("y1", function(d) { return yScale_068(d.group); })
.attr("y2", function(d) { return yScale_068(d.group); })
.attr("stroke", data_set_068.color_line_1)
.attr("stroke-width", "1px");
// add circles of value 1
gfx_layer_1_068.selectAll()
.data(data_plot_068)
.enter()
.append("circle")
.attr("class", "circle_a")
.attr("cx", function(d) { return xScale_068(d.value1); })
.attr("cy", function(d) { return yScale_068(d.group); })
.attr("r", 6)
.style("fill", data_set_068.color_circle_1);
// add circles of value 2
gfx_layer_1_068.selectAll()
.data(data_plot_068)
.enter()
.append("circle")
.attr("class", "circle_b")
.attr("cx", function(d) { return xScale_068(d.value2); })
.attr("cy", function(d) { return yScale_068(d.group); })
.attr("r", 6)
.style("fill", data_set_068.color_circle_2);
// add circles of value 3
gfx_layer_1_068.selectAll()
.data(data_plot_068)
.enter()
.append("circle")
.attr("class", "circle_c")
.attr("cx", function(d) { return xScale_068(d.value3); })
.attr("cy", function(d) { return yScale_068(d.group); })
.attr("r", 6)
.style("fill", data_set_068.color_circle_3);




// ----------------------------------------------------------
// LEGEND ---------------------------------------------------
// ----------------------------------------------------------
// LAYER 2 --------------------------------------------------
// legend text
gfx_layer_2_068.selectAll()
.data(data_set_068.legend_1)
.enter()
.append("text")
.attr("class", "legend")
.attr("y", 76)
.attr("x", function(d) { return 80 + xScale_068(d.position); })
// diverse text anchors
.style("text-anchor", function(d,i){
if(i == 0){return "start"}
else {return "middle"}
})
.text(function (d) { return d.label; })
.style("fill", data_set_068.color_area_layout_axis);
// filter out first value from array that is headline
var first_element_1_068 = data_set_068.legend_1[0];
var filtered_1_068 = data_set_068.legend_1.filter((d)=>{return d !== first_element_1_068;})
// legend rect
gfx_layer_2_068.selectAll()
.data(filtered_1_068)
.enter()
.append("rect")
.attr("height", 18)
.attr("width", 1)
.attr("y", 82)
// allign rect positions to pixels
.attr("x", function(d) { return Math.round(80 + xScale_068(d.position)); })
.style("fill", data_set_068.color_area_layout_axis);

// LAYER 3 --------------------------------------------------
// legend text
gfx_layer_3_068.selectAll()
.data(data_set_068.legend_2)
.enter()
.append("text")
.attr("class", "legend")
.attr("y", 76)
.attr("x", function(d) { return 80 + xScale_068(d.position); })
// diverse text anchors
.style("text-anchor", function(d,i){
if(i == 0){return "start"}
else {return "middle"}
})
.text(function (d) { return d.label; })
.style("fill", data_set_068.color_area_layout_axis);
// filter out first value from array that is headline
var first_element_2_068 = data_set_068.legend_2[0];
var filtered_2_068 = data_set_068.legend_2.filter((d)=>{return d !== first_element_2_068;})
// legend rect
gfx_layer_3_068.selectAll()
.data(filtered_2_068)
.enter()
.append("rect")
.attr("height", 18)
.attr("width", 1)
.attr("y", 82)
// allign rect positions to pixels
.attr("x", function(d) { return Math.round(80 + xScale_068(d.position)); })
.style("fill", data_set_068.color_area_layout_axis);
// hide layer
gfx_layer_3_068.attr("opacity", 0);




// ----------------------------------------------------------
// ANIMATION ------------------------------------------------
// ----------------------------------------------------------
//radio button on website
d3.selectAll("input[name='button_B_068']")
.on("change", change_068);

//button function
function change_068() {

// button switch
//transform to state 2
if (data_set_068.index == 1) {
data_set_068.index = 2;

// remove circles of value 2
gfx_layer_1_068.selectAll(".circle_b")
.transition().duration(100)
.attr("r", 0)
.remove()
// Change
gfx_layer_1_068.selectAll(".plot-line")
.transition().duration(400)
.attr("x1", function(d) { return xScale_068(d.value4); })
.attr("x2", function(d) { return xScale_068(d.value5); })
.attr("stroke", data_set_068.color_line_2);
gfx_layer_1_068.selectAll(".circle_a")
.transition().duration(400)
.attr("cx", function(d) { return xScale_068(d.value4); })
.style("fill", data_set_068.color_circle_4);
gfx_layer_1_068.selectAll(".circle_c")
.transition().duration(400)
.attr("cx", function(d) { return xScale_068(d.value5); })
.style("fill", data_set_068.color_circle_5);
// legend
gfx_layer_2_068.attr("opacity", 0);
gfx_layer_3_068.transition().delay(300).duration(100).attr("opacity", 1);

//transform to state 1
} else {
data_set_068.index = 1;

// change
gfx_layer_1_068.selectAll(".plot-line")
.transition().duration(400)
.attr("x1", function(d) { return xScale_068(d.value1); })
.attr("x2", function(d) { return xScale_068(d.value3); })
.attr("stroke", data_set_068.color_line_1);
gfx_layer_1_068.selectAll(".circle_a")
.transition().duration(400)
.attr("cx", function(d) { return xScale_068(d.value1); })
.style("fill", data_set_068.color_circle_1);
gfx_layer_1_068.selectAll(".circle_c")
.transition().duration(400)
.attr("cx", function(d) { return xScale_068(d.value3); })
.style("fill", data_set_068.color_circle_3);
// add circles of value 2
gfx_layer_1_068.selectAll()
.data(data_plot_068)
.enter()
.append("circle")
.attr("class", "circle_b")
.attr("cx", function(d) { return xScale_068(d.value2); })
.attr("cy", function(d) { return yScale_068(d.group); })
.attr("r", 0)
.transition().delay(300).duration(100)
.attr("r", 6)
.style("fill", data_set_068.color_circle_2);
// legend
gfx_layer_3_068.attr("opacity", 0);
gfx_layer_2_068.transition().delay(300).duration(100).attr("opacity", 1);

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
var text_headline_068 = text_group_068.append("text")
.attr("class", "text_headline")
.attr("y", data_set_068.position_headline)
.text(data_set_068.text_headline)
.style("fill", data_set_068.color_text_headline);
// create text "subheadline"
var text_subheadline_1_068 = text_group_068.append("text")
.attr("class", "text_subheadline_1")
.attr("x", 500)
.attr("y", data_set_068.position_headline - 14)
.attr("text-anchor", "end")
.text(data_set_068.text_subheadline_1)
.style("fill", data_set_068.color_text_headline);
var text_subheadline_2_068 = text_group_068.append("text")
.attr("class", "text_subheadline_2")
.attr("x", 500)
.attr("y", data_set_068.position_headline + 4)
.attr("text-anchor", "end")
.text(data_set_068.text_subheadline_2)
.style("fill", data_set_068.color_text_headline);
// create text "source"
var text_source_1_068 = text_group_068.append("text")
.attr("class", "text_source")
.attr("x", 500)
.attr("y", data_set_068.position_source - 14)
.attr("text-anchor", "end")
.text(data_set_068.text_source_1)
.style("fill", data_set_068.color_text_source);
var text_source_2_068 = text_group_068.append("text")
.attr("class", "text_source")
.attr("x", 500)
.attr("y", data_set_068.position_source)
.attr("text-anchor", "end")
.text(data_set_068.text_source_2)
.style("fill", data_set_068.color_text_source);



//
