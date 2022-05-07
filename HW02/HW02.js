let movies1 = [
    {
        id1: 1,
        title1: "Narnia: The Lion, the Witch and the Wardrobe",
        director1: "Andrew Adamson and Michael Apted",
        runtime1: "2h 30m",
        release_year1: 2005,
        description1: "While playing, Lucy and her siblings find a wardrobe that lands them in a mystical place called Narnia. Here they realise that it was fated and they must now unite with Aslan to defeat an evil queen.",
        poster_url1: "image1.jpg",
        cinema_number1: 1,
        ticket_price1: "R30",
        tickets_in_cart1: ""
    }]

let movies2 = [
    {
        id2: 2,
        title2: "The Matrix",
        director2: "Lana Wachowski, Lilly Wachowski",
        runtime2: "2h 27m",
        release_year2: 1999,
        description2: "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
        poster_url2: "image2.jpg",
        cinema_number2: 2,
        ticket_price2: "R40",
        tickets_in_cart2: "" 
    }] 

let movies3 = [
    {
        id3: 3,
        title3: "The Notebook",
        director3: "Nick Cassavetes",
        runtime3: "2h 4m",
        release_year3: 2004,
        description3: "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from dementia, on a daily basis out of his notebook.",
        poster_url3: "image3.jpg",
        cinema_number3: 3,
        ticket_price3: "R45",
        tickets_in_cart3: ""  
    }]

let movies4 = [
    {
        id4: 4,
        title4: "The Proposal",
        director4: "Anne Fletcher",
        runtime4: "1h 48m",
        release_year4: 2009,
        description4: "When New York editor Margaret faces deportation, she convinces her assistant Andrew to marry her in return for a promotion. However, when she visits his hometown, it changes her in many ways.",
        poster_url4: "image4.jpg",
        cinema_number4: 4,
        ticket_price4: "R35",
        tickets_in_cart4: ""  
    }]

 function movieInfo1() {
     for (var i = 0; i < 10; i++)
     movies1 = document.getElementById("movie1").value;
 }

 function movieInfo2() {
    for (var i = 0; i < 10; i++)
    movies2 = document.getElementById("movie2").value;
}

function movieInfo3() {
    for (var i = 0; i < 10; i++)
    movies3 = document.getElementById("movie3").value;
}

function movieInfo4() {
    for (var i = 0; i < 10; i++)
    movies4 = document.getElementById("movie4").value;
}

//increment number next to cart
var $button = document.querySelector('.increment-btn');
var $counter = document.querySelector('.counter');

$button.addEventListener('click', function(){
  $counter.value = parseInt($counter.value) + 1; // `parseInt` converts the `value` from a string to a number
}, false);

//delete rows in Cart
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table1").deleteRow(i);
  }

  //calculate total cost
  $('#val1, #val2').change(function(){
    var val1 = parseFloat($('#val1').val()) || 0;
    var val2 = parseFloat($('#val2').val()) || 0;

    $('#val3').val(val1 * val2);    
});