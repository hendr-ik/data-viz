// ----------------------------------------------------------
// DATA -----------------------------------------------------
// ----------------------------------------------------------
var data_set_064 =
{
container_width: 540,
container_height: 540,
margin: 20,
limit_top: 80,
limit_bottom: 50,
padding_left: 6,
padding_right: 112,
// ----------------------------------------------------------
position_headline: 25,
position_source: 500,
position_menu: 480,
// ----------------------------------------------------------
text_headline: "Monthly app downloads",
text_subheadline: "2018 / United States",
text_source: "Source: SensorTower / TechCrunch, Nov 18, 2018",
// ----------------------------------------------------------
color_bg: "#f9f4ef", // background
color_layout_axis: "#a5a7af",
color_layout_stroke: "#f2e8df", // layout lines
// graphs
color_graph_a: "#ff8e4b",
color_graph_b: "#b9f8e8",
color_graph_b_on: "#19ab86",
color_graph_label_a: "#ff8e4b",
color_graph_label_b: "#5ad0b2",
color_graph_label_b_on: "#038e6b",
// texts
color_text_headline: "#2e2f33",
color_text_source: "#e4cfbb"
};

var data_input_main_064 = {
n: 10, // Amount of data points
text_label_1: "Snapchat",
text_label_2: "YouTube",
text_label_3: "Instagram",
text_label_4: "Facebook",
text_label_5: "TikTok"
}

// data for graphs
var data_input_1_064 = [
3200000, 3150000, 2720000, 2450000, 2850000, 2800000, 2850000, 2650000, 2800000, 2350000
];
var data_input_2_064 = [
2550000, 2350000, 2800000, 2200000, 2300000, 2350000, 2400000, 2500000, 2350000, 2400000
];
var data_input_3_064 = [
3700000, 2600000, 2900000, 2800000, 3450000, 3900000, 3550000, 2850000, 2800000, 2900000
];
var data_input_4_064 = [
3650000, 2950000, 3300000, 3250000, 3700000, 3700000, 3700000, 3550000, 3600000, 3250000
];
var data_input_5_064 = [
1600000, 1350000, 1800000, 1750000, 2050000, 2200000, 2900000, 2850000, 2950000, 3800000
];




// ----------------------------------------------------------
// STRUCTURE ------------------------------------------------
// ----------------------------------------------------------

// create spacer left
var spacer_left_064 = d3.select("#canvas_064").append("svg")
.attr("height", 540)
.attr("width", 50)
.attr("class", "spacer_left");
spacer_left_064.append("rect")
.attr("height", 540)
.attr("width", 50)
.style("fill", data_set_064.color_bg);
// ----------------------------------------------------------
// create container for svg content
var container_064 = d3.select("#canvas_064").append("svg")
.attr("width", data_set_064.container_width)
.attr("height", data_set_064.container_height)
.attr("class", "container")
.style("background-color", data_set_064.color_bg);
// set up margin
var margin_064 = data_set_064.margin;
var width_064 = data_set_064.container_width - 2 * margin_064;
var height_064 = data_set_064.container_height - 2 * margin_064;
// ----------------------------------------------------------
// create group for layout
var layout_group_064 = container_064.append("g")
.attr("class", "layout_group");
// ----------------------------------------------------------
// create container for scaling
var container_margin_064 = container_064.append("g")
.attr("class", "container_margin")
.attr("transform", `translate(${margin_064}, ${margin_064})`);
// ----------------------------------------------------------
// create group for gfx - translate the group for margin top, left
var gfx_group_064 = container_margin_064.append("g")
.attr("class", "gfx_group")
// padding > translate to fix x axis overlap
.attr("transform", "translate(" + data_set_064.padding_left + ",0)");
// create sub-groups for layers
var gfx_layer_0_064 = gfx_group_064.append("g")
.attr("class", "gfx_layer_0");
var gfx_layer_1_064 = gfx_group_064.append("g")
.attr("class", "gfx_layer_1");
var gfx_layer_2_064 = gfx_group_064.append("g")
.attr("class", "gfx_layer_2");
var gfx_layer_3_064 = gfx_group_064.append("g")
.attr("class", "gfx_layer_3");
var gfx_layer_4_064 = gfx_group_064.append("g")
.attr("class", "gfx_layer_4");
var gfx_layer_5_064 = gfx_group_064.append("g")
.attr("class", "gfx_layer_5");
// ----------------------------------------------------------
// create group for text
var text_group_064 = container_margin_064.append("g")
.attr("class", "text_group");
// ----------------------------------------------------------
// create spacer right
var spacer_right_064 = d3.select("#canvas_064").append("svg")
.attr("height", 540)
.attr("width", 50)
.attr("class", "spacer_right");
spacer_right_064.append("rect")
.attr("height", 540)
.attr("width", 50)
.style("fill", data_set_064.color_bg);




// ----------------------------------------------------------
// LAYOUT ---------------------------------------------------
// ----------------------------------------------------------
// set layout strokes below headline
layout_group_064.append("rect")
.attr("class", "gfx_bar_stroke")
.attr("x", 20)
.attr("y", data_set_064.position_headline + 30)
.attr("height", 2)
.attr("width", 500)
.style("fill", data_set_064.color_layout_stroke);




// ----------------------------------------------------------
// SCALES ---------------------------------------------------
// ----------------------------------------------------------
// X
// for lines
var xScale_064 = d3.scaleLinear()
.domain([0, data_input_main_064.n - 1]) // input
.range([0, width_064 - data_set_064.padding_right]); // output
// for x axis
var xScale_date_064 = d3.scaleTime()
  .domain([new Date(2017, 12), new Date(2018, 9)])
  .range([0, width_064 - data_set_064.padding_right]);

// Y
var yScale_064 = d3.scaleLinear()
.domain([0, 4000000]) // input
.range([height_064 - data_set_064.limit_bottom, data_set_064.limit_top])




// ----------------------------------------------------------
// GFX ------------------------------------------------------
// ----------------------------------------------------------

// LAYER 0 --------------------------------------------------
// AXIS -----------------------------------------------------
// X
// create custom axis number format
var xAxis_064 = d3.axisBottom(xScale_date_064)
.ticks(d3.timeMonth, 1)
.tickFormat(d3.timeFormat('%b'));
// append custom axis
gfx_layer_0_064.append("g")
.attr("class", "x_axis")
.attr("transform", "translate(0," + ( height_064 - data_set_064.limit_bottom ) + ")")
.call(customXAxis_064);
// change axis design
function customXAxis_064(g) {
g.call(xAxis_064);
g.select(".domain").remove();
g.selectAll(".tick line").attr("stroke", data_set_064.color_layout_axis)
g.selectAll(".tick text").style("fill", data_set_064.color_layout_axis);
}

// Y
// create custom axis number format
var formatNumber_064 = d3.format(".1f");
var yAxis_064 = d3.axisRight(yScale_064)
.ticks(5)
.tickSize(width_064 - data_set_064.padding_right)
.tickFormat(function(d) {
var s_064 = formatNumber_064(d / 1e6);
return this.parentNode.nextSibling
? s_064
: s_064 + " M";
});
// append custom axis
gfx_layer_0_064.append("g")
.attr("class", "y_axis")
.call(customYAxis_064);
// change axis design
function customYAxis_064(g) {
g.call(yAxis_064);
g.select(".domain").remove();
g.selectAll(".tick:not(:first-of-type) line").attr("stroke", data_set_064.color_layout_axis)
.attr("stroke-dasharray", "3,3").style("stroke-width", 1);
g.selectAll(".tick:first-of-type line").attr("stroke", data_set_064.color_layout_axis);
g.selectAll(".tick text").attr("text-anchor", "start").attr("x", -4).attr("dy", -10)
.style("fill", data_set_064.color_layout_axis)
// blend out only 4th element
.attr("opacity", function(d, i)
{ if (i==3) { return 0 }
  else { return 1 }
});

}


// LAYER 1 --------------------------------------------------
// GRAPH 1 --------------------------------------------------
// d3's line generator
var line_1_064 = d3.line()
.x(function(d, i) { return xScale_064(i); }) // set the x values for the line generator
.y(function(d) { return yScale_064(d); }) // set the y values for the line generator

// Duplicate for stroke behind stroke
gfx_layer_1_064.append("path")
.datum(data_input_1_064) // Binds data to the line
.attr("class", "line_deko")
.attr("d", line_1_064) // Calls the line generator
.style("fill", "none").style("stroke", data_set_064.color_bg).style("stroke-width", 9);
// Original graph
gfx_layer_1_064.append("path")
.datum(data_input_1_064) // Binds data to the line
.attr("class", "line")
.attr("d", line_1_064) // Calls the line generator
.style("fill", "none").style("stroke", data_set_064.color_graph_b).style("stroke-width", 3);
// Duplicate fpr bigger active area
gfx_layer_1_064.append("path")
.datum(data_input_1_064) // Binds data to the line
.attr("class", "line_active")
.attr("d", line_1_064) // Calls the line generator
.style("fill", "none").style("stroke", "transparent").style("stroke-width", 20);

// Append a circle for each datapoint
gfx_layer_1_064.selectAll(".dot")
.data(data_input_1_064)
.enter().append("circle") // Uses the enter().append() method
.attr("class", "dot") // Assign a class for styling
.attr("cx", function(d, i) { return xScale_064(i) })
.attr("cy", function(d) { return yScale_064(d) })
.attr("r", 4)
.attr("opacity", 0)
.style("fill", data_set_064.color_graph_b_on).style("stroke", data_set_064.color_bg).style("stroke-width", 2);

// set text
var label_1_064 = gfx_layer_1_064.append("text")
.attr("class", "label")
.attr("x", 10 + xScale_064(data_input_main_064.n-1))
.attr("y", 17 + yScale_064(data_input_1_064[data_input_main_064.n-1]))
.text(data_input_main_064.text_label_1)
.style("fill", data_set_064.color_graph_label_b);


// LAYER 2 --------------------------------------------------
// GRAPH 2 --------------------------------------------------
// d3's line generator
var line_2_064 = d3.line()
.x(function(d, i) { return xScale_064(i); }) // set the x values for the line generator
.y(function(d) { return yScale_064(d); }) // set the y values for the line generator

// Duplicate for stroke behind stroke
gfx_layer_2_064.append("path")
.datum(data_input_2_064) // Binds data to the line
.attr("class", "line_deko")
.attr("d", line_2_064) // Calls the line generator
.style("fill", "none").style("stroke", data_set_064.color_bg).style("stroke-width", 9);
// Original graph
gfx_layer_2_064.append("path")
.datum(data_input_2_064) // Binds data to the line
.attr("class", "line")
.attr("d", line_2_064) // Calls the line generator
.style("fill", "none").style("stroke", data_set_064.color_graph_b).style("stroke-width", 3);
// Duplicate fpr bigger active area
gfx_layer_2_064.append("path")
.datum(data_input_2_064) // Binds data to the line
.attr("class", "line_active")
.attr("d", line_2_064) // Calls the line generator
.style("fill", "none").style("stroke", "transparent").style("stroke-width", 20);

// Append a circle for each datapoint
gfx_layer_2_064.selectAll(".dot")
.data(data_input_2_064)
.enter().append("circle") // Uses the enter().append() method
.attr("class", "dot") // Assign a class for styling
.attr("cx", function(d, i) { return xScale_064(i) })
.attr("cy", function(d) { return yScale_064(d) })
.attr("r", 4)
.attr("opacity", 0)
.style("fill", data_set_064.color_graph_b_on).style("stroke", data_set_064.color_bg).style("stroke-width", 2);

// set text
var label_2_064 = gfx_layer_2_064.append("text")
.attr("class", "label")
.attr("x", 10 + xScale_064(data_input_main_064.n-1))
.attr("y", -3 + yScale_064(data_input_2_064[data_input_main_064.n-1]))
.text(data_input_main_064.text_label_2)
.style("fill", data_set_064.color_graph_label_b);


// LAYER 3 --------------------------------------------------
// GRAPH 3 --------------------------------------------------
// d3's line generator
var line_3_064 = d3.line()
.x(function(d, i) { return xScale_064(i); }) // set the x values for the line generator
.y(function(d) { return yScale_064(d); }) // set the y values for the line generator

// Duplicate for stroke behind stroke
gfx_layer_3_064.append("path")
.datum(data_input_3_064) // Binds data to the line
.attr("class", "line_deko")
.attr("d", line_3_064) // Calls the line generator
.style("fill", "none").style("stroke", data_set_064.color_bg).style("stroke-width", 9);
// Original graph
gfx_layer_3_064.append("path")
.datum(data_input_3_064) // Binds data to the line
.attr("class", "line")
.attr("d", line_3_064) // Calls the line generator
.style("fill", "none").style("stroke", data_set_064.color_graph_b).style("stroke-width", 3);
// Duplicate fpr bigger active area
gfx_layer_3_064.append("path")
.datum(data_input_3_064) // Binds data to the line
.attr("class", "line_active")
.attr("d", line_3_064) // Calls the line generator
.style("fill", "none").style("stroke", "transparent").style("stroke-width", 20);

// Append a circle for each datapoint
gfx_layer_3_064.selectAll(".dot")
.data(data_input_3_064)
.enter().append("circle") // Uses the enter().append() method
.attr("class", "dot") // Assign a class for styling
.attr("cx", function(d, i) { return xScale_064(i) })
.attr("cy", function(d) { return yScale_064(d) })
.attr("r", 4)
.attr("opacity", 0)
.style("fill", data_set_064.color_graph_b_on).style("stroke", data_set_064.color_bg).style("stroke-width", 2);

// set text
var label_3 = gfx_layer_3_064.append("text")
.attr("class", "label")
.attr("x", 10 + xScale_064(data_input_main_064.n-1))
.attr("y", 5 + yScale_064(data_input_3_064[data_input_main_064.n-1]))
.text(data_input_main_064.text_label_3)
.style("fill", data_set_064.color_graph_label_b);


// LAYER 4 --------------------------------------------------
// GRAPH 4 --------------------------------------------------
// d3's line generator
var line_4_064 = d3.line()
.x(function(d, i) { return xScale_064(i); }) // set the x values for the line generator
.y(function(d) { return yScale_064(d); }) // set the y values for the line generator

// Duplicate for stroke behind stroke
gfx_layer_4_064.append("path")
.datum(data_input_4_064) // Binds data to the line
.attr("class", "line_deko")
.attr("d", line_4_064) // Calls the line generator
.style("fill", "none").style("stroke", data_set_064.color_bg).style("stroke-width", 9);
// Original graph
gfx_layer_4_064.append("path")
.datum(data_input_4_064) // Binds data to the line
.attr("class", "line")
.attr("d", line_4_064) // Calls the line generator
.style("fill", "none").style("stroke", data_set_064.color_graph_b).style("stroke-width", 3);
// Duplicate fpr bigger active area
gfx_layer_4_064.append("path")
.datum(data_input_4_064) // Binds data to the line
.attr("class", "line_active")
.attr("d", line_4_064) // Calls the line generator
.style("fill", "none").style("stroke", "transparent").style("stroke-width", 20);

// Append a circle for each datapoint
gfx_layer_4_064.selectAll(".dot")
.data(data_input_4_064)
.enter().append("circle") // Uses the enter().append() method
.attr("class", "dot") // Assign a class for styling
.attr("cx", function(d, i) { return xScale_064(i) })
.attr("cy", function(d) { return yScale_064(d) })
.attr("r", 4)
.attr("opacity", 0)
.style("fill", data_set_064.color_graph_b_on).style("stroke", data_set_064.color_bg).style("stroke-width", 2);

// set text
var label_4 = gfx_layer_4_064.append("text")
.attr("class", "label")
.attr("x", 10 + xScale_064(data_input_main_064.n-1))
.attr("y", 5 + yScale_064(data_input_4_064[data_input_main_064.n-1]))
.text(data_input_main_064.text_label_4)
.style("fill", data_set_064.color_graph_label_b);


// LAYER 5 --------------------------------------------------
// GRAPH 5 --------------------------------------------------
// d3's line generator
var line_5_064 = d3.line()
.x(function(d, i) { return xScale_064(i); }) // set the x values for the line generator
.y(function(d) { return yScale_064(d); }) // set the y values for the line generator

// Duplicate for stroke behind stroke
gfx_layer_5_064.append("path")
.datum(data_input_5_064) // Binds data to the line
.attr("class", "line_deko")
.attr("d", line_5_064) // Calls the line generator
.style("fill", "none").style("stroke", data_set_064.color_bg).style("stroke-width", 9);
// Original graph
gfx_layer_5_064.append("path")
.datum(data_input_5_064) // Binds data to the line
.attr("class", "line")
.attr("d", line_5_064) // Calls the line generator
.style("fill", "none").style("stroke", data_set_064.color_graph_a).style("stroke-width", 3);

// Append a circle for each datapoint
gfx_layer_5_064.selectAll(".dot")
.data(data_input_5_064)
.enter().append("circle") // Uses the enter().append() method
.attr("class", "dot") // Assign a class for styling
.attr("cx", function(d, i) { return xScale_064(i) })
.attr("cy", function(d) { return yScale_064(d) })
.attr("r", 4)
.style("fill", data_set_064.color_graph_a).style("stroke", data_set_064.color_bg).style("stroke-width", 2);

// set text
var label_5 = gfx_layer_5_064.append("text")
.attr("class", "label")
.attr("x", 10 + xScale_064(data_input_main_064.n-1))
.attr("y", 5 + yScale_064(data_input_5_064[data_input_main_064.n-1]))
.text(data_input_main_064.text_label_5)
.style("fill", data_set_064.color_graph_label_a);




// ----------------------------------------------------------
// ANIMATION ------------------------------------------------
// ----------------------------------------------------------

// define moveTo functions - does this needs to be localized????
d3.selection.prototype.moveToFront = function() {
return this.each(function(){
this.parentNode.appendChild(this);
});
};
d3.selection.prototype.moveToBack = function() {
return this.each(function() {
var firstChild = this.parentNode.firstChild;
if (firstChild) {
this.parentNode.insertBefore(this, firstChild);
}
});
};

// mouseovers
// layer 1
d3.select("#canvas_064").select(".gfx_layer_1")
.on("mouseenter", function() {
d3.select(this).moveToFront();
d3.select("#canvas_064").selectAll(".gfx_layer_1 .line").style("stroke", data_set_064.color_graph_b_on);
d3.select("#canvas_064").selectAll(".gfx_layer_1 .dot").attr("opacity", 1);
d3.select("#canvas_064").selectAll(".gfx_layer_1 .label").style("fill", data_set_064.color_graph_label_b_on);
})
.on("mouseleave", function() {
d3.select("#canvas_064").select(".gfx_layer_5").moveToFront();
d3.select("#canvas_064").selectAll(".gfx_layer_1 .line").style("stroke", data_set_064.color_graph_b);
d3.select("#canvas_064").selectAll(".gfx_layer_1 .dot").attr("opacity", 0);
d3.select("#canvas_064").selectAll(".gfx_layer_1 .label").style("fill", data_set_064.color_graph_label_b);

});

// layer 2
d3.select(".gfx_layer_2")
.on("mouseenter", function() {
d3.select(this).moveToFront();
d3.select("#canvas_064").selectAll(".gfx_layer_2 .line").style("stroke", data_set_064.color_graph_b_on);
d3.select("#canvas_064").selectAll(".gfx_layer_2 .dot").attr("opacity", 1);
d3.select("#canvas_064").selectAll(".gfx_layer_2 .label").style("fill", data_set_064.color_graph_label_b_on);
})
.on("mouseleave", function() {
d3.select(".gfx_layer_5").moveToFront();
d3.select("#canvas_064").selectAll(".gfx_layer_2 .line").style("stroke", data_set_064.color_graph_b);
d3.select("#canvas_064").selectAll(".gfx_layer_2 .dot").attr("opacity", 0);
d3.select("#canvas_064").selectAll(".gfx_layer_2 .label").style("fill", data_set_064.color_graph_label_b);
});

// layer 3
d3.select(".gfx_layer_3")
.on("mouseenter", function() {
d3.select(this).moveToFront();
d3.select("#canvas_064").selectAll(".gfx_layer_3 .line").style("stroke", data_set_064.color_graph_b_on);
d3.select("#canvas_064").selectAll(".gfx_layer_3 .dot").attr("opacity", 1);
d3.select("#canvas_064").selectAll(".gfx_layer_3 .label").style("fill", data_set_064.color_graph_label_b_on);
})
.on("mouseleave", function() {
d3.select(".gfx_layer_5").moveToFront();
d3.select("#canvas_064").selectAll(".gfx_layer_3 .line").style("stroke", data_set_064.color_graph_b);
d3.select("#canvas_064").selectAll(".gfx_layer_3 .dot").attr("opacity", 0);
d3.select("#canvas_064").selectAll(".gfx_layer_3 .label").style("fill", data_set_064.color_graph_label_b);
});

// layer 4
d3.select(".gfx_layer_4")
.on("mouseenter", function() {
d3.select(this).moveToFront();
d3.select("#canvas_064").selectAll(".gfx_layer_4 .line").style("stroke", data_set_064.color_graph_b_on);
d3.select("#canvas_064").selectAll(".gfx_layer_4 .dot").attr("opacity", 1);
d3.select("#canvas_064").selectAll(".gfx_layer_4 .label").style("fill", data_set_064.color_graph_label_b_on);
})
.on("mouseleave", function() {
d3.select("#canvas_064").select(".gfx_layer_5").moveToFront();
d3.select("#canvas_064").selectAll(".gfx_layer_4 .line").style("stroke", data_set_064.color_graph_b);
d3.select("#canvas_064").selectAll(".gfx_layer_4 .dot").attr("opacity", 0);
d3.select("#canvas_064").selectAll(".gfx_layer_4 .label").style("fill", data_set_064.color_graph_label_b);
});




// ----------------------------------------------------------
// TEXT -----------------------------------------------------
// ----------------------------------------------------------
// create text "headline"
var text_headline_064 = text_group_064.append("text")
.attr("class", "text_headline")
.attr("y", data_set_064.position_headline)
.text(data_set_064.text_headline)
.style("fill", data_set_064.color_text_headline);
// create text "subheadline"
var text_subheadline_064 = text_group_064.append("text")
.attr("class", "text_subheadline")
.attr("x", 500)
.attr("y", data_set_064.position_headline)
.attr("text-anchor", "end")
.text(data_set_064.text_subheadline)
.style("fill", data_set_064.color_text_headline);
// create text "source"
var text_source_064 = text_group_064.append("text")
.attr("class", "text_source")
.attr("x", 500)
.attr("y", data_set_064.position_source)
.attr("text-anchor", "end")
.text(data_set_064.text_source)
.style("fill", data_set_064.color_text_source);




//
