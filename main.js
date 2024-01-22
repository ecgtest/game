//grass párosítás
const grassDivs = [];

for (let i = 1; i <= 100; i++) {
    const divId = "grass" + i;
    const grass = document.getElementById(divId);

    if (grass) {
        grassDivs.push(grass);
    }
}

const body = document.getElementById("body");



//gombok párosítása
////////////////////////////////// BOLT GOMBOK /////////////////////////////////
const solarPanelBtn = document.getElementById("solarPanelBtn");
const windmillBtn = document.getElementById("windmillBtn");
const mineBtn = document.getElementById("mineBtn");

const aliGenBtn = document.getElementById("aliGenBtn");
const coalPowerBtn = document.getElementById("coalPowerBtn");
const hydroelectricPlantBtn = document.getElementById("hydroelectricPlantBtn");
////////////////////////////////////////////////////////////////////////////////

const clickUpgBtn = document.getElementById("clickUpg");
const trashBtn = document.getElementById("removeContainer");



//shop értékek párosítása
const solarPanelSM = document.getElementById("solarPanelSpanM");
const solarPanelSE = document.getElementById("solarPanelSpanE");
const solarPanelSG = document.getElementById("solarPanelSpanG");

const windmillSM = document.getElementById("windmillSpanM");
const windmillSE = document.getElementById("windmillSpanE");
const windmillSG = document.getElementById("windmillSpanG");

const mineSM = document.getElementById("mineSpanM");
const mineSE = document.getElementById("mineSpanE");
const mineSG = document.getElementById("mineSpanG");



const aliGenSM = document.getElementById("aliGenSpanM");
const aliGenSE = document.getElementById("aliGenSpanE");

const coalPowerPlantSM = document.getElementById("coalPowerPlantSpanM");
const coalPowerPlantSE = document.getElementById("coalPowerPlantSpanE");

const hydroelectricPlantSM = document.getElementById("hydroelectricPlantSpanM");
const hydroelectricPlantSE = document.getElementById("hydroelectricPlantSpanE");



//változók
var placeItem = 0;
var deleteItem = 0;

//////////////////////////////

const solarPanelM = 100;    //100$-ba kerül
const solarPanelE = 30;     //30 W-ot fogyaszt
const solarPanelG = 10;     //10$-t ad másodpercenként

const windmillM = 10000;
const windmillE = 1000;
const windmillG = 250;

const mineM = 25000;
const mineE = 10000;
const mineG = 2000;

/////////////////////////////////

const aliGenM = 100;      //100$-ba kerül
const aliGenE = 30;     //30 W-ot ad

const coalPowerPlantM = 1500;
const coalPowerPlantE = 500;

const hydroelectricPlantM = 5000;
const hydroelectricPlantE = 1500;

////////////////////////////////

var moneyPerSec = parseInt(localStorage.getItem('moneyPerSec')) || 0;



//shop értékek kiírása JS-ből
solarPanelSM.innerHTML = "$"+solarPanelM;
solarPanelSE.innerHTML = "⚡"+solarPanelE+" W";
solarPanelSG.innerHTML = "$"+solarPanelG+"/s";

windmillSM.innerHTML = "$"+windmillM;
windmillSE.innerHTML = "⚡"+windmillE+" W";
windmillSG.innerHTML = "$"+windmillG+"/s";

mineSM.innerHTML = "$"+mineM;
mineSE.innerHTML = "⚡"+mineE+" W";
mineSG.innerHTML = "$"+mineG+"/s";



aliGenSM.innerHTML = "$"+aliGenM;
aliGenSE.innerHTML = "⚡"+aliGenE+" W";

coalPowerPlantSM.innerHTML = "$"+coalPowerPlantM;
coalPowerPlantSE.innerHTML = "⚡"+coalPowerPlantE+" W";

hydroelectricPlantSM.innerHTML = "$"+hydroelectricPlantM;
hydroelectricPlantSE.innerHTML = "⚡"+hydroelectricPlantE+" W";



//Boltból építeni
solarPanelBtn.onclick = function buildMode() {
    placeItem = 1;
}

windmillBtn.onclick = function buildMode() {
    placeItem = 2;
};

mineBtn.onclick = function buildMode() {
    placeItem = 3;
};



aliGenBtn.onclick = function buildMode() {
    placeItem = 6;
};

coalPowerBtn.onclick = function buildMode() {
    placeItem = 7;
};

hydroelectricPlantBtn.onclick = function buildMode() {
    placeItem = 8;
};

const grassUsed = {};
const itemOnGrass = {};

function grassclick(grass, grassId) {
    if (!grassUsed[grassId]) {
        let itemImg = "";

        if (placeItem === 1) {
            if (money >= solarPanelM && energy >= solarPanelE) {
                console.log("Solar panel placed");
                itemImg = `sprites/solar-panel/solar-panel-20.png`;
                grass.src = itemImg;
                grassUsed[grassId] = true;
                itemOnGrass[grassId] = 1;

                money = money - solarPanelM;
                energy = energy - solarPanelE;
                moneyPerSec = moneyPerSec + solarPanelG;
            }

        } else if (placeItem === 2) {
            if (money >= windmillM && energy >= windmillE) {
                console.log("Windmill placed");
                itemImg = `sprites/windmill/windmill-20.gif`;
                grass.src = itemImg;
                grassUsed[grassId] = true;
                itemOnGrass[grassId] = 2;

                money = money - windmillM;
                energy = energy - windmillE;
                moneyPerSec = moneyPerSec + windmillG;
            }

        } else if (placeItem === 3) {
            if (money >= mineM && energy >= mineE) {
                console.log("Mine placed");
                itemImg = `sprites/mine/mine-20.png`;
                grass.src = itemImg;
                grassUsed[grassId] = true;
                itemOnGrass[grassId] = 3;

                money = money - mineM;
                energy = energy - mineE;
                moneyPerSec = moneyPerSec + mineG;
            }



        } else if (placeItem === 6) {
            if (money >= aliGenM) {
                console.log("AliExpress Generator placed");
                itemImg = `sprites/generator-1/generator-1-20.png`;
                grass.src = itemImg;
                grassUsed[grassId] = true;
                itemOnGrass[grassId] = 6;

                money = money - aliGenM;
                energy = energy + aliGenE;
            }
            
        } else if (placeItem === 7) {
            if (money >= coalPowerPlantM) {
                console.log("Coal power plant placed");
                itemImg = `sprites/coal-power-plant/coal-power-plant-20.png`;
                grass.src = itemImg;
                grassUsed[grassId] = true;
                itemOnGrass[grassId] = 7;

                money = money - coalPowerPlantM;
                energy = energy + coalPowerPlantE;
            }

        } else if (placeItem === 8) {
            if (money >= hydroelectricPlantM) {
                console.log("Hydroelectrical plant placed");
                itemImg = `sprites/hydroelectric-plant/hydroelectric-plant-20.gif`;
                grass.src = itemImg;
                grassUsed[grassId] = true;
                itemOnGrass[grassId] = 8;
    
                money = money - hydroelectricPlantM;
                energy = energy + hydroelectricPlantE;  
            }
            

        } else if (placeItem === 0) {
            console.log("Nothing to place!");
        }

        // if (placeItem > 0) {        ]
        //     placeItem = 0;          ]----  abban ez esetben visszaállítani, ha kell a régi vásárlás
        // }                           ]

    } else {
        
        if (deleteItem === 1) {
            itemImg = "sprites/grass/grass20.png";
            grass.src = itemImg;

            grassUsed[grassId] = false;

            if (itemOnGrass[grassId] === 1) {
                moneyPerSec = moneyPerSec - solarPanelG;
                energy = energy + solarPanelE;
            } else if (itemOnGrass[grassId] === 2) {
                moneyPerSec = moneyPerSec - windmillG;
                energy = energy + windmillE;
            } else if (itemOnGrass[grassId] === 3) {
                moneyPerSec = moneyPerSec - windmillG;
                energy = energy + windmillE;
            } else if (itemOnGrass[grassId] === 6) {
                energy = energy - aliGenE;
            } else if (itemOnGrass[grassId] === 7) {
                energy = energy - coalPowerPlantE;
            } else if (itemOnGrass[grassId] === 8) {
                energy = energy - hydroelectricPlantE;
            }



            itemOnGrass[grassId] = 0;
        }
        
        
        console.log("Block is already occupied!");
    }
}

for (let i = 1; i <= 100; i++) {
    const divId = "grass" + i;
    const grass = document.getElementById(divId);

    if (grass) {
        grass.onclick = function () {
            grassclick(grass, divId);
        };
    }
}



trashBtn.onclick = function () {
    deleteItem++;
    placeItem = 0;
};





//MONEY & ENERGY & CLICK
const clickingArea = document.getElementById("clickingArea");

const moneyDiv = document.getElementById("money");
const energyDiv = document.getElementById("energy");
const clickMoney = document.getElementById("clickMoney");
const clickUpgg = document.getElementById("clickUpgPrice");

var money = parseInt(localStorage.getItem('money')) || 0;
var energy = parseInt(localStorage.getItem('energy')) || 0;
var click = parseInt(localStorage.getItem('click')) || 1;
var clickUpgradePrice = parseInt(localStorage.getItem('clickUpgradePrice')) || 1000;

const moneyPSI = document.getElementById("moneyPSI");



clickingArea.onclick = function() {
    money = money + click;
    if (placeItem > 0) {
        placeItem = 0;
    }
};



//CLICK VÁSÁRLÁS
var clickUpgIndicator = 0;

clickUpgBtn.onclick = function () {
    if (clickUpgIndicator === 0) {
        if (money >= clickUpgradePrice) {
            money = money - clickUpgradePrice;
            click = click * 2;

            clickUpgradePrice = 5000;    //beállítható következő fejlesztési ár

            clickUpgIndicator++;
        }
    } else if (clickUpgIndicator === 1) {
        if (money >= clickUpgradePrice) {
            money = money - clickUpgradePrice;
            click = click * 2;

            clickUpgradePrice = 25000;

            clickUpgIndicator++;
        }
    } else if (clickUpgIndicator === 2) {
        if (money >= clickUpgradePrice) {
            money = money - clickUpgradePrice;
            click = click * 2;

            clickUpgradePrice = 75000;

            clickUpgIndicator++;
        }
    } else if (clickUpgIndicator === 3) {
        if (money >= clickUpgradePrice) {
            money = money - clickUpgradePrice;
            click = click * 2;

            clickUpgradePrice = 250000;

            clickUpgIndicator++;
        }
    } else if (clickUpgIndicator === 4) {
        if (money >= clickUpgradePrice) {
            money = money - clickUpgradePrice;
            click = click * 2;

            clickUpgradePrice = 1500000;

            clickUpgIndicator++;
        }
    } else if (clickUpgIndicator === 5) {
        if (money >= clickUpgradePrice) {
            money = money - clickUpgradePrice;
            click = click * 2;

            clickUpgradePrice = "MAX";

            clickUpgIndicator++;
        }
    }
};






//UI frissítés 10 ms
setInterval(() => {
    moneyDiv.innerHTML = "$" + money;
    energyDiv.innerHTML = energy + " W";
    clickMoney.innerHTML = "$" + click;
    clickUpgg.innerHTML = "$" + clickUpgradePrice;
    moneyPSI.innerHTML = "$" + moneyPerSec;

    localStorage.setItem('money', money);
    localStorage.setItem('energy', energy);                          // ezt a 5öt komment az átíráshoz
    localStorage.setItem('click', click);
    localStorage.setItem('clickUpgradePrice', clickUpgradePrice);
    localStorage.setItem('moneyPerSec', moneyPerSec);

    if (deleteItem > 1) {
        deleteItem = 0;
        body.style.cursor = "default";
    }

    if (deleteItem === 1) {
        body.style.cursor = "crosshair";
    }

}, 10);

//UI frissítés 1 sec
setInterval(() => {
    money = money + moneyPerSec;
}, 1000);
