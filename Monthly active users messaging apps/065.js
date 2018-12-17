// ----------------------------------------------------------
// DATA -----------------------------------------------------
// ----------------------------------------------------------
var data_set_065 =
{
container_width: 540,
container_height: 540,
margin: 20,
center_x: 250,
center_y: 270,
radius: 195,
// ----------------------------------------------------------
position_headline: 25,
position_source: 500,
position_menu: 480,
// ----------------------------------------------------------
text_headline: "Monthly Active Users",
text_subheadline: "2013 - 2018 / in millions",
text_source: "Source: Statista 2018, Company press releases 2013",
// ----------------------------------------------------------
color_bg: "#f9f4ef",
color_layout_stroke: "#f2e8df",
// pie
color_pie_1: "#796dd5",
color_pie_2: "#a399e7",
color_pie_3: "#ff8e4b",
color_pie_display: "#2e2f33",
color_pie_value: "#2e2f33",
color_pie_selected: "#da5404",
// text
color_text_headline: "#2e2f33",
color_text_source: "#e4cfbb"
};

// data for pies
var data_input_065 = [{
  "setA_065": 1500,
  "setB_065": 300,
  "display": "WhatsApp"
}, {
  "setA_065": 1300,
  "setB_065": 45,
  "display_extra": "Facebook",
  "display": "Messenger"
}, {
  "setA_065": 1058,
  "setB_065": 236,
  "display": "WeChat"
}, {
  "setA_065": 708,
  "setB_065": 808,
  "display": "QQ Mobile"
}, {
  "setA_065": 300,
  "setB_065": 250,
  "display": "Skype"
}, {
  "setA_065": 260,
  "setB_065": 66,
  "display": "Viber"
}, {
  "setA_065": 203,
  "setB_065": 60,
  "display": "Line"
}];




// ----------------------------------------------------------
// STRUCTURE ------------------------------------------------
// ----------------------------------------------------------

// create container for svg content
var container_065 = d3.select("#canvas_065").append("svg")
.attr("width", data_set_065.container_width)
.attr("height", data_set_065.container_height)
.attr("class", "canvas")
// .style("border", "1px solid black")
.style("background-color", data_set_065.color_bg);
// set up margin
var margin_065 = data_set_065.margin;
var width_065 = data_set_065.container_width - 2 * margin_065;
var height_065 = data_set_065.container_height - 2 * margin_065;
// ----------------------------------------------------------
// create group for layout
var layout_group_065 = container_065.append("g")
.attr("class", "layout_group");
// ----------------------------------------------------------
// create container for scaling
var container_margin_065 = container_065.append("g")
.attr("class", "canvas_margin")
.attr("transform", `translate(${margin_065}, ${margin_065})`);
// ----------------------------------------------------------
// create group for gfx - translate the group for margin top, left
var gfx_group_065 = container_margin_065.append("g")
.attr("transform", "translate(" + data_set_065.center_x + "," + data_set_065.center_y + ")")
.attr("class", "gfx_group");
// create sub-groups for layers
var gfx_layer_0_065 = gfx_group_065.append("g")
.attr("class", "gfx_layer_0");
var gfx_layer_1_065 = gfx_group_065.append("g")
// reposition pie display and value
.attr("transform", "translate(-23,23)")
.attr("class", "gfx_layer_1");
// ----------------------------------------------------------
// create group for text
var text_group_065 = container_margin_065.append("g")
.attr("class", "text_group");




// ----------------------------------------------------------
// LAYOUT ---------------------------------------------------
// ----------------------------------------------------------
// set layout strokes
layout_group_065.append("rect")
.attr("class", "gfx_bar_stroke")
.attr("x", 20)
.attr("y", data_set_065.position_headline + 30)
.attr("height", 2)
.attr("width", 500)
.style("fill", data_set_065.color_layout_stroke);

layout_group_065.append("rect")
.attr("class", "gfx_bar_stroke")
.attr("x", 20)
.attr("y", data_set_065.position_source + 30)
.attr("height", 2)
.attr("width", 500)
.style("fill", data_set_065.color_layout_stroke);




// ----------------------------------------------------------
// SCALES & SETUP -------------------------------------------
// ----------------------------------------------------------

// define colors of pie pieces
var color_065 = d3.scaleOrdinal().range ([
data_set_065.color_pie_1,
data_set_065.color_pie_2,
data_set_065.color_pie_3,
data_set_065.color_pie_1,
data_set_065.color_pie_2,
data_set_065.color_pie_1,
data_set_065.color_pie_2
]);

var pie_generator_065 = d3.pie()
.value(function(d) {return d.setA_065;})
.sort(null);

var arc_generator_065 = d3.arc()
.innerRadius(3)
.padAngle(0.5)
.padRadius(4)
.cornerRadius(4)
.outerRadius(150);

var format_065 = d3.format(",.0f")




// ----------------------------------------------------------
// GFX ------------------------------------------------------
// ----------------------------------------------------------
// create gfx structure
var g0_065 = gfx_layer_0_065.datum(data_input_065).selectAll(".wedge")
.data(pie_generator_065)
.enter()
.append("g")
.attr("class", "wedge");

var g1_065 = gfx_layer_1_065.datum(data_input_065).selectAll(".pie_value")
.data(pie_generator_065)
.enter()
.append("g")
.attr("class", "pie_value");

var g2_065 = gfx_layer_1_065.datum(data_input_065).selectAll(".pie_display")
.data(pie_generator_065)
.enter()
.append("g")
.attr("transform", "translate(0,-22)")
.attr("class", "pie_display");

var g3_065 = gfx_layer_1_065.datum(data_input_065).selectAll(".pie_display_extra")
.data(pie_generator_065)
.enter()
// filter and create display if value > 1299
.filter(function(d){ return d.data.setA_065 > 1299; }).append("g")
.attr("transform", "translate(0,-38)")
.attr("class", "pie_display_extra");


// LAYER 0 --------------------------------------------------
// Create wedge
g0_065.append("path")
.attr("d", arc_generator_065)
.style("fill", function(d) {
return color_065(d.data.setA_065);
})
.each(function(d) {
this._current = d;
});

// LAYER 1 --------------------------------------------------
// Create pie_value
g1_065.append("text")
// position text anchors
.attr("text-anchor", "start")
// reposition centroid
.attr("transform", function(d) {
var c_065 = arc_generator_065.centroid(d);
return "translate(" + c_065[0]*2.5 +"," + c_065[1]*2.5 + ")";
})
// return a formated number out of value
.text(function(d) { return format_065(d.data.setA_065); })
.style("fill", data_set_065.color_pie_value);

// Create pie_display
g2_065.append("text")
// reposition text anchors
.attr("text-anchor", "start")
// reposition centroid
.attr("transform", function(d) {
var c_065 = arc_generator_065.centroid(d);
return "translate(" + c_065[0]*2.5 +"," + c_065[1]*2.5 + ")";
})
.text(function(d) {return d.data.display;})
.style("fill", data_set_065.color_pie_display);

// Create pie_display extra
g3_065.append("text")
// reposition text anchors
.attr("text-anchor", "start")
// reposition centroid
.attr("transform", function(d) {
var c_065 = arc_generator_065.centroid(d);
return "translate(" + c_065[0]*2.5 +"," + c_065[1]*2.5 + ")";
})
.text(function(d) {return d.data.display_extra;})
.style("fill", data_set_065.color_pie_display);

// highlight stuff
g1_065.selectAll("text").filter(function(d){ return d.data.display == "WeChat"; })
.style("fill", data_set_065.color_pie_selected);
g2_065.selectAll("text").filter(function(d){ return d.data.display == "WeChat"; })
.style("fill", data_set_065.color_pie_selected);




// ----------------------------------------------------------
// ANIMATION ------------------------------------------------
// ----------------------------------------------------------
// On radio button click
d3.selectAll("input")
.on("change", change);
// change the value function
function change() {
var value_065 = this.value;
pie_generator_065.value(function(d) {
return d[value_065];
});

// compute the new angles
g0_065 = g0_065.data(pie_generator_065);
g1_065 = g1_065.data(pie_generator_065);
g2_065 = g2_065.data(pie_generator_065);
g3_065 = g3_065.data(pie_generator_065);

// redraw wedges
g0_065.select("path")
.transition().duration(750)
.attrTween("d", arcTween);

// redraw pie_value
g1_065.select("text")
.style("opacity", 0)
.transition().delay(600).duration(0)
// reposition centroid
.attr("transform", function(d) {
var c_065 = arc_generator_065.centroid(d);
return "translate(" + c_065[0]*2.5 +"," + c_065[1]*2.5 + ")";
})
// update text value in formatted number
.text(function(d) { return format_065(d.data[value_065]); })
.transition()
.duration(200)
.style("opacity", 1)
;

// redraw pie_display
g2_065.select("text")
.transition().duration(750)
// reposition centroid
.attr("transform", function(d) {
var c_065 = arc_generator_065.centroid(d);
return "translate(" + c_065[0]*2.5 +"," + c_065[1]*2.5 + ")";
})

// redraw pie_display extra
g3_065.select("text")
.transition().duration(750)
// reposition centroid
.attr("transform", function(d) {
var c_065 = arc_generator_065.centroid(d);
return "translate(" + c_065[0]*2.5 +"," + c_065[1]*2.5 + ")";
})
}

// set order of switch
function type(d) {
d.setA_065 = +d.setA_065;
d.setB_065 = +d.setB_065;
return d;
}

// Store and interpolate angles
function arcTween(a) {
var i_065 = d3.interpolate(this._current, a);
this._current = i_065(0);
return function(t) {
return arc_generator_065(i_065(t));
};
}




// ----------------------------------------------------------
// TEXT -----------------------------------------------------
// ----------------------------------------------------------
// create text "headline"
var text_headline_065 = text_group_065.append("text")
.attr("class", "text_headline")
.attr("y", data_set_065.position_headline)
.text(data_set_065.text_headline)
.style("fill", data_set_065.color_text_headline);
// create text "subheadline"
var text_subheadline_065 = text_group_065.append("text")
.attr("class", "text_subheadline")
.attr("x", 500)
.attr("y", data_set_065.position_headline)
.attr("text-anchor", "end")
.text(data_set_065.text_subheadline)
.style("fill", data_set_065.color_text_headline);
// create text "source"
var text_source_065 = text_group_065.append("text")
.attr("class", "text_source")
.attr("x", 500)
.attr("y", data_set_065.position_source)
.attr("text-anchor", "end")
.text(data_set_065.text_source)
.style("fill", data_set_065.color_text_source);




//
