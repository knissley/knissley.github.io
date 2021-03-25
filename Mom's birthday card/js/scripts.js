const favson = prompt("Who's your favorite son?");

// if (favson.toLowerCase().includes('kyle'))
if (/kyle/i.test(favson)) {
    alert('That\'s right! Love you!');
    const correctName = favson;
    document.getElementById("loveYou").innerHTML = "Love you!!" //+ correctName//;
} else {
    alert('Sorry, we were looking for \'Kyle\'..');
    const wrongName = favson;
    document.getElementById('loveYou').innerHTML = "Love you!! Even though you answered " + wrongName +" :(";
}