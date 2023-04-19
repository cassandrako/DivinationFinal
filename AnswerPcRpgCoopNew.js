let tester1 = "https://api.rawg.io/api/games?platforms=1&genres=adventure,arcade&dates=2023-03-17,2023-04-16&metacritic=50,&ordering=-released&parent_platforms=1&include_platforms=true&search_precise=true&multiplayer_modes=2&search_precise=true&key=378f5f9f8b824216a61340f59cfd0f5c"
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