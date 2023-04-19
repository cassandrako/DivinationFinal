let tester1 = "https://api.rawg.io/api/games?platforms=8,9,13,10&genres=simulation,casual&dates=2000-03-17,2023-04-16&metacritic=50,&ordering=-rating&parent_platforms=5&include_platforms=true&search_precise=true&multiplayer_modes=coop&search_precise=true&singleplayer=1&key=378f5f9f8b824216a61340f59cfd0f5c"
let data;
let imgs = [];

function preload() {
  data = loadJSON(tester1);
  console.log("Data loaded:", data);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<data.results.length; i++){
    let img = data.results[i].background_image
    imgs.push(createImg(img));
  }
  console.log(imgs);
}

function draw() {
  background(0);
  let gridSize = 7;
  let imageSize = 200;
  let padding = 20;
  for(let i = 0; i < data.results.length; i++) {
    let row = Math.floor(i / gridSize);
    let col = i % gridSize;
    let x = col * (imageSize + padding);
    let y = row * (imageSize + padding);
    image(imgs[i], x, y, imageSize, imageSize);
  }

  
}