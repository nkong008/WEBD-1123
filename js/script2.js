let drink = "energy drink";
let lyrics ="";
let cans = 99;
let paragragh = document.getElementById"one");
while (cans > 0){
    
    lyrics = lyrics + cans + " cans of "
    + drink + " on the wall <br>";
    lyrics = lyrics + cans + " cans of "
    +drink + " on the wall <br>";
    lyrics+ lyrics + " take one down pass it around, <br>";
    if(cans > 1){
        lyrics + lyrics + (cans - 1) + " cans of "
        + drink + " on the wall <br>";
        
    }
    else {
        lyrics = lyrics + " no more cans of "
        + drink + " on the wall <br>";
    }
    cans = cans - 1;
}
paragragh.innerHTML = lyrics;
console.log(lyrics);