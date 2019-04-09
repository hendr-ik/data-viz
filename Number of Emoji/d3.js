// ----------------------------------------------------------
// DATA -----------------------------------------------------
// ----------------------------------------------------------
var data_set_067 = {
container_width: 540,
container_height: 540,
margin: 20,
center_x: 250,
center_y: 270,
// ----------------------------------------------------------
position_headline: 25,
position_source: 500,
// ----------------------------------------------------------
text_headline: "Number of Emoji",
text_subheadline: "Single icons only",
text_source: "Source: The Unicode Consortium, 2019",
// ----------------------------------------------------------
color_bg: "#f9f4ef",
color_basic: "#a399e7",
color_layout_stroke: "#f2e8df",
// area
area_width: 460,
area_height: 360,
color_area_layout_axis: "#a5a7af",
color_area_area_1: ["#7a6ed5","#8a7ed8","#a197dd"],
color_area_area_2: ["#261697","#5b4cc4","#a399e7","#da5404","#ff8e4b","#ffc19c","#ddad00","#f9ce35","#ffe68a"],
// sticker
stickerX_1_067: 400,
stickerY_1_067: 20,
sticker_color_1: "#fff",
sticker_bg_color_1: "#dfc6b0",
sticker_display_1: "1,703",
// legend
legend_displays: ["Flags", "Symbols", "Objects", "Activities", "Travel & Places", "Food & Drink", "Animals & Nature", "People & Body", "Smileys & Emotion", "Categories"],
// text
color_text_headline: "#2e2f33",
color_text_source: "#e4cfbb"
};




// ----------------------------------------------------------
// STRUCTURE ------------------------------------------------
// ----------------------------------------------------------
// create container for svg content
var container_067 = d3.select("#canvas_067").append("svg")
.attr("width", data_set_067.container_width)
.attr("height", data_set_067.container_height)
.attr("class", "canvas")
//.style("border", "1px solid black")
.style("background-color", data_set_067.color_bg);
// set up margin
var margin_067 = data_set_067.margin;
var width_067 = data_set_067.container_width - 2 * margin_067;
var height_067 = data_set_067.container_height - 2 * margin_067;
// ----------------------------------------------------------
// create group for layout
var layout_group_067 = container_067.append("g")
.attr("class", "layout_group");
// ----------------------------------------------------------
// create container for scaling
var container_margin_067 = container_067.append("g")
.attr("class", "canvas_margin")
.attr("transform", `translate(${margin_067}, ${margin_067})`);
// ----------------------------------------------------------
// create group for gfx - translate the group for margin top, left
var gfx_group_067 = container_margin_067.append("g");
// create sub-groups for layers
var gfx_layer_0_067 = gfx_group_067.append("g")
.attr("transform", "translate(38,70)");
var gfx_layer_1_067 = gfx_group_067.append("g")
.attr("transform", "translate(38,70)");
var gfx_layer_2_067 = gfx_group_067.append("g")
.attr("transform", "translate(38,70)");
var gfx_layer_3_067 = gfx_group_067.append("g")
.attr("transform", "translate(38,70)");
var gfx_layer_4_067 = gfx_group_067.append("g")
.attr("transform", "translate(100,345)");
// ----------------------------------------------------------
// create group for text
var text_group_067 = container_margin_067.append("g");




// ----------------------------------------------------------
// LAYOUT ---------------------------------------------------
// ----------------------------------------------------------
// set layout strokes
layout_group_067.append("rect")
.attr("class", "gfx_bar_stroke")
.attr("x", 20)
.attr("y", data_set_067.position_headline + 35)
.attr("height", 2)
.attr("width", 500)
.style("fill", data_set_067.color_layout_stroke);
//
layout_group_067.append("rect")
.attr("class", "gfx_bar_stroke")
.attr("x", 20)
.attr("y", data_set_067.position_source + 30)
.attr("height", 2)
.attr("width", 500)
.style("fill", data_set_067.color_layout_stroke);




// ----------------------------------------------------------
// GFX ------------------------------------------------------
// ----------------------------------------------------------
// Parse the Data
d3.csv("http://niefeld.com/static/viz/067/data.csv", function(data_area_067) {
// List of groups = header of the csv files
var keys_067 = data_area_067.columns.slice(1)

// LAYER 0 --------------------------------------------------
// build array of selected years for X axis
var selectedX_067 = [];
for (var i = 0; i < data_area_067.length; i++) {
selectedX_067.push(data_area_067[i].year);
};
// define threshold
var thresholdX_067 = d3.scaleThreshold()
.domain(selectedX_067);

// define X scale
var xScale_067 = d3.scaleLinear()
.range([ 0, data_set_067.area_width ])
.domain(d3.extent(data_area_067, function(d) { return d.year; }));
// add X axis
gfx_layer_0_067.append("g")
.attr("class","Xaxis")
.attr("transform", "translate(0," + data_set_067.area_height + ")")
.call(d3.axisBottom(xScale_067)
// pass treshhold values
.tickValues(thresholdX_067.domain())
// format to plain number
.tickFormat(d3.format("")))
.call(customXAxis_067);
// change X axis design
function customXAxis_067(g) {
g.select(".domain").remove();
g.selectAll(".tick line").attr("stroke", data_set_067.color_area_layout_axis)
g.selectAll("text").attr("transform", "translate(-10,0)rotate(-45)")
.style("text-anchor", "end").attr("fill", data_set_067.color_area_layout_axis);
// highlight stuff
g.selectAll(".tick")
.attr("class", function(d,i){
if(data_area_067[i].year == 2010){ return "tick_marker"}
else if(data_area_067[i].year == 1995){ return "tick_marker"}
else if(data_area_067[i].year == 2016){ return "tick_marker"}
else if(data_area_067[i].year == 2019){ return "tick_marker"}
else{ return "tick"}
});
// fix position "2019"
g.selectAll(".tick_marker:last-of-type").attr("transform", "translate(459,0)");
// change styles
d3.selectAll(".Xaxis").selectAll(".tick").attr("opacity", 0);
d3.selectAll(".tick_marker text").attr("fill", "#a5a7af").attr("font-weight", "400");
}

// array of selected values fo Y axis
var selectedY_067 = [0,200,1000,1800];
// define threshold
var thresholdY_067 = d3.scaleThreshold()
.domain(selectedY_067);
// define Y scales
var yScale_067 = d3.scaleLinear()
.domain([0, 1800])
.range([ data_set_067.area_height, 0 ]);
// add Y axis
gfx_layer_0_067.append("g")
.call(d3.axisRight(yScale_067)
.tickSize(data_set_067.area_width)
.tickValues(thresholdY_067.domain()))
.call(customYAxis_067);
// change Y axis design
function customYAxis_067(g) {
g.select(".domain").remove();
g.selectAll(".tick:not(:first-of-type) line").attr("stroke", data_set_067.color_area_layout_axis)
.attr("stroke-dasharray", "3,3").style("stroke-width", 1);
g.selectAll(".tick:first-of-type line").remove();
g.selectAll(".tick text").attr("text-anchor", "end").attr("x", -6).attr("dy", -2)
.style("fill", data_set_067.color_area_layout_axis);
};

// LAYER 1 --------------------------------------------------
// color palette
var color_067_1 = d3.scaleOrdinal()
.domain(keys_067)
.range(data_set_067.color_area_area_1)
var color_067_2 = d3.scaleOrdinal()
.domain(keys_067)
.range(data_set_067.color_area_area_2)
//stack the data
var stackedData_067 = d3.stack().keys(keys_067)(data_area_067)
// Show the areas color way 1
gfx_layer_1_067.selectAll()
.data(stackedData_067)
.enter()
.append("path")
.style("fill", function(d) { return color_067_1(d.key); })
.attr("d", d3.area()
.x(function(d, i) { return xScale_067(d.data.year); })
.y0(function(d) { return yScale_067(d[0]); })
.y1(function(d) { return yScale_067(d[1]); })
)

// LAYER 2 --------------------------------------------------
// Show the areas color way 2
gfx_layer_2_067.selectAll()
.data(stackedData_067)
.enter()
.append("path")
.style("fill", function(d) { return color_067_2(d.key); })
.attr("d", d3.area()
.x(function(d, i) { return xScale_067(d.data.year); })
.y0(function(d) { return yScale_067(d[0]); })
.y1(function(d) { return yScale_067(d[1]); })
)
// close csv read function
})




// ----------------------------------------------------------
// STICKERS -------------------------------------------------
// ----------------------------------------------------------
// LAYER 3 --------------------------------------------------
var sticker_1_067 = gfx_layer_3_067.append("g")
.attr("class", "sticker");
// create tip
sticker_1_067.append("polygon")
.attr("points", "60 0,0 10,0 0")
.style("fill", data_set_067.sticker_bg_color_1)
.attr("transform", `translate(${data_set_067.stickerX_1_067}, ${data_set_067.stickerY_1_067})`);
// create text
var sticker_text_1_067 = sticker_1_067.append("text")
.attr("text-anchor", "right")
.attr("x", data_set_067.stickerX_1_067 - 45)
.attr("y", data_set_067.stickerY_1_067 + 3)
.text(data_set_067.sticker_display_1)
.style("fill", data_set_067.sticker_color_1);
// get bbox values
var sticker_bbox_1_067 = sticker_text_1_067.node().getBBox();
// update text position
sticker_text_1_067.attr("transform", `translate(0, ${Math.round(sticker_bbox_1_067.height)})`);
// put rec behind text
sticker_1_067.insert("rect","text")
.attr("x", sticker_bbox_1_067.x - 6)
.attr("y", data_set_067.stickerY_1_067)
.attr("width", sticker_bbox_1_067.width + 12)
.attr("height", sticker_bbox_1_067.height + 12)
.style("fill", data_set_067.sticker_bg_color_1);




// ----------------------------------------------------------
// LEGEND ---------------------------------------------------
// ----------------------------------------------------------
// LAYER 4 --------------------------------------------------
// set up colors
var legend_color_067 = d3.scaleOrdinal()
.domain(data_set_067.legend_displays)
.range(data_set_067.color_area_area_2);
// ad rec as legend bg
gfx_layer_4_067.append("rect")
.attr("x", -20)
.attr("y", -220)
.attr("width", 160)
.attr("height", 240)
.attr("fill", data_set_067.color_bg);
// filter out last value from array that is headline
var last_element_067 = data_set_067.legend_displays[data_set_067.legend_displays.length - 1];
var filtered_067 = data_set_067.legend_displays.filter((d)=>{return d !== last_element_067;})
// Add dot for each color used
gfx_layer_4_067.selectAll()
.data(filtered_067)
.enter()
.append("circle")
// the distance between dots reversed to build up from bottom
.attr("cy", function(d,i){return 0 - i*25 - 2})
.attr("cx", 0)
.attr("r", 7)
.style("fill", function(d){ return legend_color_067(d)});
// Add display text for each color in legend
gfx_layer_4_067.selectAll()
.data(data_set_067.legend_displays)
.enter()
.append("text")
.attr("x", 20)
// the distance between text reversed to build up from bottom
.attr("y", function(d,i){ return 0 - i*25})
// color headline differently
.style("fill", function(d,i){
if(i < d.length - 1){return data_set_067.color_area_layout_axis}
else {return data_set_067.color_text_headline}
})
.text(function(d){ return d})
.attr("text-anchor", "left")
.style("alignment-baseline", "middle")
// add different css classes
.attr("class", function(d,i){
if(i < d.length - 1){return "legend"}
else {return "legend_headline"}
});




// ----------------------------------------------------------
// ANIMATION ------------------------------------------------
// ----------------------------------------------------------
// set up switch variable and layer transparencys
gfx_layer_2_067.attr("opacity", 0);
gfx_layer_4_067.attr("opacity", 0);
var switch_067 = true;
// On radio button click
d3.selectAll("input[name='button_B_067']")
.on("change", change_067
);
// Switch to "overview"
function change_067() {
if (switch_067 == false) {
d3.selectAll(".Xaxis").transition().duration(100).selectAll(".tick").attr("opacity", 0);
d3.selectAll(".tick_marker text").transition().duration(100).attr("fill", "#a5a7af").attr("font-weight", "400");
d3.selectAll(".tick_marker line").transition().duration(100).attr("stroke", "#a5a7af");
gfx_layer_4_067.transition().delay(100).duration(100).attr("opacity", 0);
gfx_layer_1_067.transition().delay(100).attr("opacity", 1);
gfx_layer_2_067.transition().delay(150).duration(300).attr("opacity", 0);
switch_067 = true;
}
// Switch to "in detail"
else {
gfx_layer_2_067.transition().duration(100).attr("opacity", 1);
gfx_layer_4_067.transition().delay(50).duration(300).attr("opacity", 1);
gfx_layer_1_067.transition().delay(100).attr("opacity", 0);
d3.selectAll(".Xaxis").selectAll(".tick").transition().delay(100).duration(300).attr("opacity", 1);
d3.selectAll(".tick_marker text").transition().delay(100).duration(300).attr("fill", "#2e2f33").attr("font-weight", "600");
d3.selectAll(".tick_marker line").transition().delay(100).duration(300).attr("stroke", "#2e2f33");
switch_067 = false;
}
}




// ----------------------------------------------------------
// TEXT -----------------------------------------------------
// ----------------------------------------------------------
// create text "headline"
var text_headline_067 = text_group_067.append("text")
.attr("class", "text_headline")
.attr("y", data_set_067.position_headline)
.text(data_set_067.text_headline)
.style("fill", data_set_067.color_text_headline);
// create text "subheadline"
var text_subheadline_067 = text_group_067.append("text")
.attr("class", "text_subheadline")
.attr("x", 500)
.attr("y", data_set_067.position_headline)
.attr("text-anchor", "end")
.text(data_set_067.text_subheadline)
.style("fill", data_set_067.color_text_headline);
// create text "source"
var text_source_067 = text_group_067.append("text")
.attr("class", "text_source")
.attr("x", 500)
.attr("y", data_set_067.position_source)
.attr("text-anchor", "end")
.text(data_set_067.text_source)
.style("fill", data_set_067.color_text_source);




//
