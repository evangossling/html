//var data = [[5, 3], [10, 17], [15, 4], [2, 8], [1, 20]];

var margin = {top: 20, right: 15, bottom: 60, left: 60}, 
		width = 960 - margin.left - margin.right, 
		height = 500 - margin.top - margin.bottom
		x = d3.scale.ordinal().rangeRoundBands([0,width], 0.5),  //
        y = d3.scale.linear().range([height,0]);                 //

d3.json("data/test_points.json", function(data){

var x = d3.scale.linear()
    .domain([0, d3.max(data, function (d) {
                return d.x;
            })])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([0, d3.max(data, function (d) {
                return d.y;
            })])
    .range([height, 0]);

var chart = d3.select('body')
    .append('svg:svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'chart')

    var main = chart.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
		.attr('width', width)
		.attr('height', height)
		.attr('class', 'main')

    // draw the x axis
    var xAxis = d3.svg.axis()
		.scale(x)
		.orient('bottom');

main.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.attr('class', 'main axis date')
	.call(xAxis);

// draw the y axis
var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left');

main.append('g')
	.attr('transform', 'translate(0,0)')
	.attr('class', 'main axis date')
	.call(yAxis);

var g = main.append("svg:g");

g.selectAll("scatter-dots")
	.data(data)
	.enter()
		.append("svg:circle")
		.attr("cx", function (d, i) {
			return x(d.x);
		})
		.attr("cy", function (d) {
			return y(d.y);
		})
		.attr("r", 8);

})