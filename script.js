// Math.random() --> [0,1)
// [0,1) * 5 = [0,5)
// Math.random() --> [0, size)
function getRandomNumber(size) {
    const res = Math.floor(Math.random() * size);
    return res;
};

function getDistance() {
    const diffX =  event.offsetX - target.x;
    const diffY =  event.offsetY - target.y;
    const c = Math.sqrt(diffX * diffX + diffY * diffY);
    return c;
};

function getDistanceHint(distance) {
    if (distance < 10) {
        color = "#ff0000"
        return "Very close!!";
    } else if (distance < 20) {
        return "Close!";
    } else if (distance < 40) {
        return "Near";
    } else if (distance < 90) {
        return "Somewhere around";
    } else if (distance < 150) {
        return "Not even close";
    } else if (distance < 300) {
        return "Too far";
    }
}
const width = 650;
const height = 550;
let click = 0;

const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

const mapElement = document.getElementById("map");
const ctx = mapElement.getContext("2d");
let color;
mapElement.addEventListener("click", (event) => {
    click++; 
    // console.log(click);

    // drawing arc
    const rect = mapElement.getBoundingClientRect();

    let posX = event.clientX - rect.left;
    let posY = event.clientY - rect.top;

    // "#ff0000" = "#f00"
    ctx.fillStyle = color;

    ctx.beginPath();

    ctx.arc(posX, posY, 50, 0, 2 * Math.PI);

    ctx.fill();
    //////////////////

    const distance = getDistance(event, target);
    const distanceHint = getDistanceHint(distance);
    // console.log(distance)
    // console.log(distanceHint)
    const distanceElement = document.getElementById("distance");
    distanceElement.textContent = distanceHint;
    if(distance < 8) {
        alert("You won!!!");
    }
}); 