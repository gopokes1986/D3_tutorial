// javascript


// two select methods
d3.select(); // First selection of methods
d3.selectAll(); // All the elements

d3.select('h1').style('color', 'red').attr('class', 'heading').text('updated h1 tag');

d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');

d3.selectAll('p').style('color', 'blue');