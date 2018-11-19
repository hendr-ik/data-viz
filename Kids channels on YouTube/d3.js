// ----------------------------------------------------------
// DATA -----------------------------------------------------
// ----------------------------------------------------------
var data_set =
{
container_width: 540,
container_height: 540,
margin: 20,
limit_top: 85,
limit_bottom: 90,
padding: 0.675,
// ----------------------------------------------------------
domain_max_1: 15.6,
domain_max_2: 20.3,
domain_max_3: 2968,
// ----------------------------------------------------------
position_headline: 25,
position_source: 430,
position_menu: 480,
// ----------------------------------------------------------
text_headline_1: "Kids channels on YouTube / views",
text_headline_2: "Kids channels on YouTube / subscriptions",
text_headline_3: "Kids channels on YouTube / uploads",
text_source: "Source: Social Blade, October 16, 2018",
// ----------------------------------------------------------
color_svg: "#f9f4ef", // background
color_layout_display: "#ff8e4b", // label bars
color_layout_stroke: "#f2e8df", // layout lines
color_bar_1: "#ffc19c", color_bar_display_1: "#2e2f33", // bars layer 1
color_bar_2: "#ffc19c", color_bar_display_2: "#2e2f33", // bars layer 2
color_bar_3: "#ffc19c", color_bar_display_3: "#2e2f33", // bars layer 3
color_button_stroke: "#19ab86",
color_button_on: "#19ab86",
color_button_off: "#5ad0b2",
color_button_text: "#fff",
color_text_headline: "#2e2f33",
color_text_source: "#e4cfbb"
};

// ----------------------------------------------------------
var data_menu = [
{
temp: "button_1",
display: "views",
x: 0,
y: 455,
width: 80,
height: 40
},
{
temp: "button_2",
display: "subscriptions",
x: 90,
y: 455,
width: 155,
height: 40
},
{
temp: "button_3",
display: "uploads",
x: 255,
y: 455,
width: 105,
height: 40
}
];

// ----------------------------------------------------------
var data_input = [
{
temp: "Nickelodeon",
value_1: 2.8, display_1: "2,8 B", adjust_1: 0,
value_2: 4.7, display_2: "4,7 M", adjust_2: 0,
value_3: 2970, display_3: "2.970", adjust_3: 0
},
{
temp: "Sesame Street",
value_1: 5.4, display_1: "5,4 B", adjust_1: 0,
value_2: 4.2, display_2: "4,2 M", adjust_2: 0,
value_3: 2610, display_3: "2.610", adjust_3: 0
},
{
temp: "ChuChu TV",
value_1: 15.6, display_1: "15,6 B", adjust_1: 0,
value_2: 20.3, display_2: "20,3 M", adjust_2: 0,
value_3: 260, display_3: "260", adjust_3: 45
},
{
temp: "BillionSurpriseToys",
value_1: 5.6, display_1: "5,6 B", adjust_1: 0,
value_2: 17.7, display_2: "17,7 M", adjust_2: 0,
value_3: 230, display_3: "230", adjust_3: 45
},
{
temp: "LooLoo Kids",
value_1: 4.7, display_1: "4,7 B", adjust_1: 0,
value_2: 11.7, display_2: "11,7 M", adjust_2: 0,
value_3: 510, display_3: "510", adjust_3: 0
}
];




// ----------------------------------------------------------
// STRUCTURE ------------------------------------------------
// ----------------------------------------------------------

// create spacer left
var spacer_left = d3.select("#canvas").append("svg")
.attr("height", 540)
.attr("width", 50)
.attr("class", "spacer_left");
spacer_left.append("rect")
.attr("height", 540)
.attr("width", 50)
.style("fill", data_set.color_svg);
// ----------------------------------------------------------
// create container for svg content
var container = d3.select("#canvas").append("svg")
.attr("width", data_set.container_width)
.attr("height", data_set.container_height)
.style("background-color", data_set.color_svg);
// set up margin
var margin = data_set.margin;
var width = data_set.container_width - 2 * margin;
var height = data_set.container_height - 2 * margin;
// ----------------------------------------------------------
// create group for layout
var layout_group = container.append("g")
.attr("class", "layout_group");
// ----------------------------------------------------------
// create container for scaling
var container_margin = container.append("g")
.attr("class", "container_margin")
.attr("transform", `translate(${margin}, ${margin})`);
// ----------------------------------------------------------
// create group for menu
var menu_group = container_margin.append("g")
.attr("class", "menu_group");
// ----------------------------------------------------------
// create group for gfx - translate the group for margin top, left
var gfx_group = container_margin.append("g")
.attr("class", "gfx_group");
// create sub-group for diagram_1
var gfx_layer_1 = gfx_group.append("g")
.attr("class", "gfx_layer_1");
// create sub-group for diagram_2
var gfx_layer_2 = gfx_group.append("g")
.attr("class", "gfx_layer_2");
// create sub-group for diagram_3
var gfx_layer_3 = gfx_group.append("g")
.attr("class", "gfx_layer_3");
// ----------------------------------------------------------
// create group for text
var text_group = container_margin.append("g")
.attr("class", "text_group");
// ----------------------------------------------------------
// create spacer right
var spacer_right = d3.select("#canvas").append("svg")
.attr("height", 540)
.attr("width", 50)
.attr("class", "spacer_right");
spacer_right.append("rect")
.attr("height", 540)
.attr("width", 50)
.style("fill", data_set.color_svg);



// ----------------------------------------------------------
// MENU -----------------------------------------------------
// ----------------------------------------------------------

// create menu button rec
var button = menu_group.selectAll(".menu_button")
.data(data_menu)
.enter()
.append("rect")
.attr("class", "menu_button_rect")
.attr("x", function (d) { return d.x; })
.attr("y", function (d) { return d.y; })
.attr("width", function (d) { return d.width; })
.attr("height", function (d) { return d.height; })
.style("stroke-width", 2)
.style("stroke", data_set.color_button_stroke)
.style("fill", data_set.color_button_off);

// create menu button text
var button = menu_group.selectAll(".menu_button")
.data(data_menu)
.enter()
.append("text")
.attr("class", "menu_button_text")
.attr("text-anchor", "start")
.attr("x", function (d) { return 15 + d.x; })
.attr("y", function (d) { return 27 + d.y; })
.text( function (d) { return d.display; })
.style("fill", data_set.color_button_text);

// create menu button active
var button = menu_group.selectAll(".menu_button")
.data(data_menu)
.enter()
.append("rect")
.attr("class", "menu_button_active")
.attr("x", function (d) { return d.x - 5; })
.attr("y", function (d) { return d.y - 5; })
.attr("width", function (d) { return 10 + d.width; })
.attr("height", function (d) { return 10 + d.height; })
.attr("opacity", 0);


// give id to button rect
d3.selectAll(".menu_button_rect")
.data(data_menu)
.attr("id", function (d) { return d.temp + "_r";  });

// give id to button active
d3.selectAll(".menu_button_active")
.data(data_menu)
.attr("id", function (d) { return d.temp + "_a";  });




// ----------------------------------------------------------
// GFX ------------------------------------------------------
// ----------------------------------------------------------

// set up scales
// Y
var yScale = d3.scaleBand()
.domain(data_input.map((s) => s.temp))
.range([0 + data_set.limit_top, height - data_set.limit_bottom])
.paddingInner(data_set.padding);

// X
var xScale_1 = d3.scaleLinear()
.range([0, width])
.domain([0, data_set.domain_max_1]);

var xScale_2 = d3.scaleLinear()
.range([0, width])
.domain([0, data_set.domain_max_2]);

var xScale_3 = d3.scaleLinear()
.range([0, width])
.domain([0, data_set.domain_max_3]);


// LAYOUT  -----------------------------------------------
// set layout strokes below headline
layout_group.append("rect")
.attr("class", "gfx_bar_stroke")
.attr("x", 20)
.attr("y", data_set.position_headline + 30)
.attr("height", 2)
.attr("width", 500)
.style("fill", data_set.color_layout_stroke);

// link data input to create layout
var gfx_layout = layout_group.selectAll()
.data(data_input)
.enter()
.append("g")
.attr("class", "gfx_layout");

// set layout display text
gfx_layout.append("text")
.attr("class", "gfx_bar_display")
.attr("x", 20)
.attr("y", function(d) {return yScale(d.temp) + 10;})
.attr("text-anchor", "start")
.text((a) => `${a.temp}`)
.style("fill", data_set.color_layout_display);

// set layout strokes for gfx
gfx_layout.append("rect")
.attr("class", "gfx_bar_stroke")
.attr("x", 20)
// trim yScale from all decimal digits and add adjust
.attr("y", function(d) {return 45 + Number( d3.format(".0f")(yScale(d.temp))  );})
.attr("height", 2)
.attr("width", 500)
.style("fill", data_set.color_layout_stroke);



// DIAGRAM 1  ---------------------------------------------
// create diagram 1
var gfx_bar = gfx_layer_1.selectAll()
.data(data_input)
.enter()
.append("g")
.attr("class", "gfx_bar");
// set gfx bars attributes
gfx_bar.append("rect")
.attr("class", "gfx_bar_rect")
.attr("y", function(d) {return yScale(d.temp);})
.attr("height", yScale.bandwidth())
.attr("width", (d) => xScale_1(d.value_1))
.style("fill", data_set.color_bar_1);
// set gfx bars value text
gfx_bar.append("text")
.attr("class", "gfx_bar_value")
.attr("x", (d) => xScale_1(d.value_1) - 5 + d.adjust_1)
.attr("y", function(d) {return 20 + yScale(d.temp);})
.attr("text-anchor", "end")
.text(function(d) {return d.display_1;})
.style("fill", data_set.color_bar_display_1);

// DIAGRAM 2  ---------------------------------------------
// create diagram 2
var gfx_bar = gfx_layer_2.selectAll()
.data(data_input)
.enter()
.append("g")
.attr("class", "gfx_bar");
// set gfx bars attributes
gfx_bar.append("rect")
.attr("class", "gfx_bar_rect")
.attr("y", function(d) {return yScale(d.temp);})
.attr("height", yScale.bandwidth())
.attr("width", (d) => xScale_2(d.value_2))
.style("fill", data_set.color_bar_2);
// set gfx bars value text
gfx_bar.append("text")
.attr("class", "gfx_bar_value")
.attr("x", (d) => xScale_2(d.value_2) - 5 + d.adjust_2)
.attr("y", function(d) {return 20 + yScale(d.temp);})
.attr("text-anchor", "end")
.text(function(d) {return d.display_2;})
.style("fill", data_set.color_bar_display_2);

// DIAGRAM 3  ---------------------------------------------
// create diagram 3
var gfx_bar = gfx_layer_3.selectAll()
.data(data_input)
.enter()
.append("g")
.attr("class", "gfx_bar");
// set gfx bars attributes
gfx_bar.append("rect")
.attr("class", "gfx_bar_rect")
.attr("y", function(d) {return yScale(d.temp);})
.attr("height", yScale.bandwidth())
.attr("width", (d) => xScale_3(d.value_3))
.style("fill", data_set.color_bar_3);
// set gfx bars value text
gfx_bar.append("text")
.attr("class", "gfx_bar_value")
.attr("x", (d) => xScale_3(d.value_3) - 5 + d.adjust_3)
.attr("y", function(d) {return 20 + yScale(d.temp);})
.attr("text-anchor", "end")
.text(function(d) {return d.display_3;})
.style("fill", data_set.color_bar_display_3);




// ----------------------------------------------------------
// ANIMATION "button_1"
// ----------------------------------------------------------
d3.select("#button_1_r")
// set button colors ----------------------------------------
.style("fill", data_set.color_button_on);
// switch out -----------------------------------------------
d3.select(".gfx_layer_2").attr("opacity", 0);
d3.selectAll(".gfx_layer_2 .gfx_bar .gfx_bar_rect").attr("width", 0);
d3.selectAll(".gfx_layer_2 .gfx_bar .gfx_bar_value").attr("opacity", 0);
d3.select(".gfx_layer_3").attr("opacity", 0);
d3.selectAll(".gfx_layer_3 .gfx_bar .gfx_bar_rect").attr("width", 0);
d3.selectAll(".gfx_layer_3 .gfx_bar .gfx_bar_value").attr("opacity", 0);

// ----------------------------------------------------------
// ANIMATION "button_2"
// ----------------------------------------------------------
d3.select("#button_2_a")
.data(data_input)
// enter
.on("mouseenter", function () {
// set button colors ----------------------------------------
d3.select("#button_1_r").style("fill",  data_set.color_button_off);
d3.select("#button_2_r").style("fill", data_set.color_button_on);
// switch out -----------------------------------------------
d3.select(".gfx_layer_1").attr("opacity", 0);
// make sure its allways width = 0
d3.selectAll(".gfx_layer_1 .gfx_bar .gfx_bar_rect")
.transition().delay(301).duration(0).attr("width", 0);
d3.selectAll(".gfx_layer_1 .gfx_bar .gfx_bar_value").attr("opacity", 0);
// switch on ------------------------------------------------
d3.select(".gfx_layer_2").attr("opacity", 1);
d3.selectAll(".gfx_layer_2 .gfx_bar .gfx_bar_rect")
.transition().duration(300).ease(d3.easePolyOut)
.attr("width", (d) => xScale_2(d.value_2));
d3.selectAll(".gfx_layer_2 .gfx_bar .gfx_bar_value")
.transition().delay(90).duration(100).attr("opacity", 1);
// change ---------------------------------------------------
d3.select(".text_headline").text(data_set.text_headline_2);
})
// leave
.on("mouseleave", function () {
// set button colors ----------------------------------------
d3.select("#button_2_r").style("fill", data_set.color_button_off);
d3.select("#button_1_r").style("fill", data_set.color_button_on);
// switch out -----------------------------------------------
d3.select(".gfx_layer_2").attr("opacity", 0);
// make sure its allways width = 0
d3.selectAll(".gfx_layer_2 .gfx_bar .gfx_bar_rect")
.transition().delay(301).duration(0).attr("width", 0);
d3.selectAll(".gfx_layer_2 .gfx_bar .gfx_bar_value").attr("opacity", 0);
// switch on ------------------------------------------------
d3.select(".gfx_layer_1").attr("opacity", 1);
d3.selectAll(".gfx_layer_1 .gfx_bar .gfx_bar_rect")
.transition().duration(300).ease(d3.easePolyOut)
.attr("width", (d) => xScale_1(d.value_1));
d3.selectAll(".gfx_layer_1 .gfx_bar .gfx_bar_value")
.transition().delay(90).duration(100).attr("opacity", 1);
// change ---------------------------------------------------
d3.select(".text_headline").text(data_set.text_headline_1);
});

// ----------------------------------------------------------
// ANIMATION "button_3"
// ----------------------------------------------------------
d3.select("#button_3_a")
.data(data_input)
// enter
.on("mouseenter", function () {
// set button colors ----------------------------------------
d3.select("#button_1_r").style("fill", data_set.color_button_off);
d3.select("#button_3_r").style("fill", data_set.color_button_on);
// switch out -----------------------------------------------
d3.select(".gfx_layer_1").attr("opacity", 0);
// make sure its allways width = 0
d3.selectAll(".gfx_layer_1 .gfx_bar .gfx_bar_rect")
.transition().delay(301).duration(0).attr("width", 0);
d3.selectAll(".gfx_layer_1 .gfx_bar .gfx_bar_value").attr("opacity", 0);
// switch on ------------------------------------------------
d3.select(".gfx_layer_3").attr("opacity", 1);
d3.selectAll(".gfx_layer_3 .gfx_bar .gfx_bar_rect")
.transition().duration(300).ease(d3.easePolyOut)
.attr("width", (d) => xScale_3(d.value_3));
d3.selectAll(".gfx_layer_3 .gfx_bar .gfx_bar_value")
.transition().delay(90).duration(100).attr("opacity", 1);
// change ---------------------------------------------------
d3.select(".text_headline").text(data_set.text_headline_3);
})
// leave
.on("mouseleave", function () {
// set button colors ----------------------------------------
d3.select("#button_3_r").style("fill", data_set.color_button_off);
d3.select("#button_1_r").style("fill", data_set.color_button_on);
// switch out -----------------------------------------------
d3.select(".gfx_layer_3").attr("opacity", 0);
// make sure its allways width = 0
d3.selectAll(".gfx_layer_3 .gfx_bar .gfx_bar_rect")
.transition().delay(301).duration(0).attr("width", 0);
d3.selectAll(".gfx_layer_3 .gfx_bar .gfx_bar_value").attr("opacity", 0);
// switch on ------------------------------------------------
d3.select(".gfx_layer_1").attr("opacity", 1);
d3.selectAll(".gfx_layer_1 .gfx_bar .gfx_bar_rect")
.transition().duration(300).ease(d3.easePolyOut)
.attr("width", (d) => xScale_1(d.value_1));
d3.selectAll(".gfx_layer_1 .gfx_bar .gfx_bar_value")
.transition().delay(90).duration(100).attr("opacity", 1);
// change ---------------------------------------------------
d3.select(".text_headline").text(data_set.text_headline_1);
});




// ----------------------------------------------------------
// TEXT -----------------------------------------------------
// ----------------------------------------------------------

// create text "headline"
var text_headline = text_group.append("text")
.attr("class", "text_headline")
.attr("y", data_set.position_headline)
.text(data_set.text_headline_1)
.style("fill", data_set.color_text_headline);
// create text "source"
var text_source = text_group.append("text")
.attr("class", "text_source")
.attr("x", 500)
.attr("y", data_set.position_source)
.attr("text-anchor", "end")
.text(data_set.text_source)
.style("fill", data_set.color_text_source);





//
