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
const width = 600;
const height = 500;
let click = 0;

const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};


const mapElement = document.getElementById("map");
mapElement.addEventListener("click", (event) => {
    click++; 
    // console.log(click);
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