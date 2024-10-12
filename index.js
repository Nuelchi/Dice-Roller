

function Roll(){
    const Number = document.getElementById("Number").value;
    const Display = document.getElementById("text");
    const image = document.getElementById("image");
    const results = [];
    const images = [];

for(i = 0; i < Number; i++){
    const result = Math.floor(Math.random() * 6) + 1;
    results.push(result);
    Display.textContent = `DICE Outcome: ${results}`;
    images.push(`<img src="dice_images/${result}.jpg" alt="Dice pic" width="100px">`);
    image.innerHTML = images;

}
}