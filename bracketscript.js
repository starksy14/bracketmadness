
const canvas1 = document.getElementById("canvas1");
const ctx2 = canvas1.getContext("2d");


ctx2.font = "10px bold, sans-serif";
ctx2.fillStyle = "black";
ctx2.fillText("FIRST ROUND", 0, 21);
ctx2.fillText("SECOND ROUND", 115, 21);
ctx2.fillText("SWEET 16", 250, 21);
ctx2.fillText("ELITE 8", 390, 21);
ctx2.fillText("FINAL FOUR", 530, 21);
ctx2.fillText("FIRST ROUND", 1330, 21);
ctx2.fillText("SECOND ROUND", 1200, 21);
ctx2.fillText("SWEET 16", 1100, 21);
ctx2.fillText("ELITE 8", 970, 21);
ctx2.fillText("FINAL FOUR", 790, 21);


const canvas = document.getElementById("myCanvas");
var heightRatio = 0.7;
canvas.height = canvas.width * heightRatio;
const ctx = canvas.getContext("2d");
ETeam1 = "(1)UConn";
ETeam2 = "(2)Iowa St.";
ETeam3 = "(3)Illinois";
ETeam4 = "(4)Auburn";
ETeam5 = "(5)San Diego St.";
ETeam6 = "(6)BYU";
ETeam7 = "(7)Wash. St.";
ETeam8 = "(8)FAU";
ETeam9 = "(9)Northwestern";
ETeam10 = "(10)Drake";
ETeam11 = "(11)Duquesne";
ETeam12 = "(12)UAB";
ETeam13 = "(13)Yale";
ETeam14 = "(14)Morehead St.";
ETeam15 = "(15)S. Dakota St.";
ETeam16 = "(16)Stetson";
WTeam1 = "(1)N. Carolina";
WTeam2 = "(2)Arizona";
WTeam3 = "(3)Baylor";
WTeam4 = "(4)Alabama";
WTeam5 = "(5)Saint Mary's";
WTeam6 = "(6)Clemson";
WTeam7 = "(7)Dayton";
WTeam8 = "(8)Miss. St.";
WTeam9 = "(9)Mich. St.";
WTeam10 = "(10)Nevada";
WTeam11 = "(11)New Mexico";
WTeam12 = "(12)Grand Canyon";
WTeam13 = "(13)Charleston";
WTeam14 = "(14)Colgate";
WTeam15 = "(15)Long Beach St.";
WTeam16 = "(16)Wagner";
STeam1 = "(1)Houston";
STeam2 = "(2)Marquette";
STeam3 = "(3)Kentucky";
STeam4 = "(4)Duke";
STeam5 = "(5)Wisconsin";
STeam6 = "(6)Texas Tech";
STeam7 = "(7)Florida";
STeam8 = "(8)Utah St.";
STeam9 = "(9)TCU";
STeam10 = "(10)BSU/COLO";
STeam11 = "(11)N.C. State";
STeam12 = "(12)James Madison";
STeam13 = "(13)Vermont";
STeam14 = "(14)Oakland";
STeam15 = "(15)W. Kentucky";
STeam16 = "(16)Longwood";
MTeam1 = "(1)Purdue";
MTeam2 = "(2)Tennessee";
MTeam3 = "(3)Creighton";
MTeam4 = "(4)Kansas";
MTeam5 = "(5)Gonzaga";
MTeam6 = "(6)S. Carolina";
MTeam7 = "(7)Texas";
MTeam8 = "(8)Utah St.";
MTeam9 = "(9)TCU";
MTeam10 = "(10)Colorado St.";
MTeam11 = "(11)Oregon";
MTeam12 = "(12)McNeese";
MTeam13 = "(13)Samford";
MTeam14 = "(14)Akron";
MTeam15 = "(15)St. Peter's";
MTeam16 = "(16)MTST/Gram";

ctx.font = "12px normal, sans-serif";
ctx.fillStyle = "black";
ctx.fillText("NATIONAL", 685, 200);
ctx.fillText("CHAMPIONSHIP", 668, 215);
ctx.font = "normal 30px bold, sans-serif";
ctx.fillText("MARCH", 660, 30);
ctx.fillText("MADNESS", 640, 55);
ctx.font = "normal 70px bold, sans-serif";
ctx.fillStyle = "lightgray";
ctx.fillText("2024", 638, 105);



// Define the rectangles
const rectangles = [
    { x: 0, y: 5, width: 100, height: 25 },
    { x: 0, y: 35, width: 100, height: 25 },
    { x: 0, y: 65, width: 100, height: 25 },
    { x: 0, y: 95, width: 100, height: 25 },
    { x: 0, y: 125, width: 100, height: 25 },
    { x: 0, y: 155, width: 100, height: 25 },
    { x: 0, y: 185, width: 100, height: 25 },
    { x: 0, y: 215, width: 100, height: 25 },
    { x: 0, y: 245, width: 100, height: 25 },
    { x: 0, y: 275, width: 100, height: 25 },
    { x: 0, y: 305, width: 100, height: 25 },
    { x: 0, y: 335, width: 100, height: 25 },
    { x: 0, y: 365, width: 100, height: 25 },
    { x: 0, y: 395, width: 100, height: 25 },
    { x: 0, y: 425, width: 100, height: 25 },
    { x: 0, y: 455, width: 100, height: 25 },
    { x: 0, y: 485, width: 100, height: 25 },
    { x: 0, y: 515, width: 100, height: 25 },
    { x: 0, y: 545, width: 100, height: 25 },
    { x: 0, y: 575, width: 100, height: 25 },
    { x: 0, y: 605, width: 100, height: 25 },
    { x: 0, y: 635, width: 100, height: 25 },
    { x: 0, y: 665, width: 100, height: 25 },
    { x: 0, y: 695, width: 100, height: 25 },
    { x: 0, y: 725, width: 100, height: 25 },
    { x: 0, y: 755, width: 100, height: 25 },
    { x: 0, y: 785, width: 100, height: 25 },
    { x: 0, y: 815, width: 100, height: 25 },
    { x: 0, y: 845, width: 100, height: 25 },
    { x: 0, y: 875, width: 100, height: 25 },
    { x: 0, y: 905, width: 100, height: 25 },
    { x: 0, y: 935, width: 100, height: 25 },
    { x: 115, y: 20, width: 100, height: 25 },
    { x: 115, y: 80, width: 100, height: 25 },
    { x: 115, y: 140, width: 100, height: 25 },
    { x: 115, y: 200, width: 100, height: 25 },
    { x: 115, y: 260, width: 100, height: 25 },
    { x: 115, y: 320, width: 100, height: 25 },
    { x: 115, y: 380, width: 100, height: 25 },
    { x: 115, y: 440, width: 100, height: 25 },
    { x: 115, y: 500, width: 100, height: 25 },
    { x: 115, y: 560, width: 100, height: 25 },
    { x: 115, y: 620, width: 100, height: 25 },
    { x: 115, y: 680, width: 100, height: 25 },
    { x: 115, y: 740, width: 100, height: 25 },
    { x: 115, y: 800, width: 100, height: 25 },
    { x: 115, y: 860, width: 100, height: 25 },
    { x: 115, y: 920, width: 100, height: 25 },
    { x: 250, y: 50, width: 100, height: 25 },
    { x: 250, y: 170, width: 100, height: 25 },
    { x: 250, y: 290, width: 100, height: 25 },
    { x: 250, y: 410, width: 100, height: 25 },
    { x: 250, y: 530, width: 100, height: 25 },
    { x: 250, y: 650, width: 100, height: 25 },
    { x: 250, y: 770, width: 100, height: 25 },
    { x: 250, y: 890, width: 100, height: 25 },
    { x: 390, y: 110, width: 100, height: 25 },
    { x: 390, y: 350, width: 100, height: 25 },
    { x: 390, y: 590, width: 100, height: 25 },
    { x: 390, y: 830, width: 100, height: 25 },
    { x: 530, y: 230, width: 100, height: 25 },
    { x: 530, y: 710, width: 100, height: 25 },
    { x: 650, y: 320, width: 125, height: 25 },
    { x: 1300, y: 5, width: 100, height: 25 },
    { x: 1300, y: 35, width: 100, height: 25 },
    { x: 1300, y: 65, width: 100, height: 25 },
    { x: 1300, y: 95, width: 100, height: 25 },
    { x: 1300, y: 125, width: 100, height: 25 },
    { x: 1300, y: 155, width: 100, height: 25 },
    { x: 1300, y: 185, width: 100, height: 25 },
    { x: 1300, y: 215, width: 100, height: 25 },
    { x: 1300, y: 245, width: 100, height: 25 },
    { x: 1300, y: 275, width: 100, height: 25 },
    { x: 1300, y: 305, width: 100, height: 25 },
    { x: 1300, y: 335, width: 100, height: 25 },
    { x: 1300, y: 365, width: 100, height: 25 },
    { x: 1300, y: 395, width: 100, height: 25 },
    { x: 1300, y: 425, width: 100, height: 25 },
    { x: 1300, y: 455, width: 100, height: 25 },
    { x: 1300, y: 485, width: 100, height: 25 },
    { x: 1300, y: 515, width: 100, height: 25 },
    { x: 1300, y: 545, width: 100, height: 25 },
    { x: 1300, y: 575, width: 100, height: 25 },
    { x: 1300, y: 605, width: 100, height: 25 },
    { x: 1300, y: 635, width: 100, height: 25 },
    { x: 1300, y: 665, width: 100, height: 25 },
    { x: 1300, y: 695, width: 100, height: 25 },
    { x: 1300, y: 725, width: 100, height: 25 },
    { x: 1300, y: 755, width: 100, height: 25 },
    { x: 1300, y: 785, width: 100, height: 25 },
    { x: 1300, y: 815, width: 100, height: 25 },
    { x: 1300, y: 845, width: 100, height: 25 },
    { x: 1300, y: 875, width: 100, height: 25 },
    { x: 1300, y: 905, width: 100, height: 25 },
    { x: 1300, y: 935, width: 100, height: 25 },
    { x: 1185, y: 20, width: 100, height: 25 },
    { x: 1185, y: 80, width: 100, height: 25 },
    { x: 1185, y: 140, width: 100, height: 25 },
    { x: 1185, y: 200, width: 100, height: 25 },
    { x: 1185, y: 260, width: 100, height: 25 },
    { x: 1185, y: 320, width: 100, height: 25 },
    { x: 1185, y: 380, width: 100, height: 25 },
    { x: 1185, y: 440, width: 100, height: 25 },
    { x: 1185, y: 500, width: 100, height: 25 },
    { x: 1185, y: 560, width: 100, height: 25 },
    { x: 1185, y: 620, width: 100, height: 25 },
    { x: 1185, y: 680, width: 100, height: 25 },
    { x: 1185, y: 740, width: 100, height: 25 },
    { x: 1185, y: 800, width: 100, height: 25 },
    { x: 1185, y: 860, width: 100, height: 25 },
    { x: 1185, y: 920, width: 100, height: 25 },
    { x: 1050, y: 50, width: 100, height: 25 },
    { x: 1050, y: 170, width: 100, height: 25 },
    { x: 1050, y: 290, width: 100, height: 25 },
    { x: 1050, y: 410, width: 100, height: 25 },
    { x: 1050, y: 530, width: 100, height: 25 },
    { x: 1050, y: 650, width: 100, height: 25 },
    { x: 1050, y: 770, width: 100, height: 25 },
    { x: 1050, y: 890, width: 100, height: 25 },
    { x: 910, y: 110, width: 100, height: 25 },
    { x: 910, y: 350, width: 100, height: 25 },
    { x: 910, y: 590, width: 100, height: 25 },
    { x: 910, y: 830, width: 100, height: 25 },
    { x: 770, y: 230, width: 100, height: 25 },
    { x: 770, y: 710, width: 100, height: 25 },
    { x: 650, y: 640, width: 125, height: 25 },
    { x: 650, y: 480, width: 125, height: 25 },
];

const lines = [
  {  x: 99, y: 30, width: 20, height: 5 },
  {  x: 99, y: 90, width: 20, height: 5 },
  {  x: 99, y: 150, width: 20, height: 5 },
  {  x: 99, y: 210, width: 20, height: 5 },
  {  x: 99, y: 270, width: 20, height: 5 },
  {  x: 99, y: 330, width: 20, height: 5 },
  {  x: 99, y: 390, width: 20, height: 5 },
  {  x: 99, y: 450, width: 20, height: 5 },
  {  x: 99, y: 510, width: 20, height: 5 },
  {  x: 99, y: 570, width: 20, height: 5 },
  {  x: 99, y: 630, width: 20, height: 5 },
  {  x: 99, y: 690, width: 20, height: 5 },
  {  x: 99, y: 750, width: 20, height: 5 },
  {  x: 99, y: 810, width: 20, height: 5 },
  {  x: 99, y: 870, width: 20, height: 5 },
  {  x: 99, y: 930, width: 20, height: 5 },
  {  x: 230, y: 60, width: 20, height: 5 },
  {  x: 230, y: 180, width: 20, height: 5 },
  {  x: 230, y: 300, width: 20, height: 5 },
  {  x: 230, y: 420, width: 20, height: 5 },
  {  x: 230, y: 540, width: 20, height: 5 },
  {  x: 230, y: 660, width: 20, height: 5 },
  {  x: 230, y: 780, width: 20, height: 5 },
  {  x: 230, y: 900, width: 20, height: 5 },
  {  x: 209, y: 30, width: 20, height: 5 },
  {  x: 209, y: 90, width: 20, height: 5 },
  {  x: 209, y: 150, width: 20, height: 5 },
  {  x: 209, y: 210, width: 20, height: 5 },
  {  x: 209, y: 270, width: 20, height: 5 },
  {  x: 209, y: 330, width: 20, height: 5 },
  {  x: 209, y: 390, width: 20, height: 5 },
  {  x: 209, y: 450, width: 20, height: 5 },
  {  x: 209, y: 510, width: 20, height: 5 },
  {  x: 209, y: 570, width: 20, height: 5 },
  {  x: 209, y: 630, width: 20, height: 5 },
  {  x: 209, y: 690, width: 20, height: 5 },
  {  x: 209, y: 750, width: 20, height: 5 },
  {  x: 209, y: 810, width: 20, height: 5 },
  {  x: 209, y: 870, width: 20, height: 5 },
  {  x: 209, y: 930, width: 20, height: 5 },
  {  x: 229, y: 30, width: 5, height: 65 },
  {  x: 229, y: 150, width: 5, height: 65 },
  {  x: 229, y: 270, width: 5, height: 65 },
  {  x: 229, y: 390, width: 5, height: 65 },
  {  x: 229, y: 510, width: 5, height: 65 },
  {  x: 229, y: 630, width: 5, height: 65 },
  {  x: 229, y: 750, width: 5, height: 65 },
  {  x: 229, y: 870, width: 5, height: 65 },
  {  x: 349, y: 60, width: 20, height: 5 },
  {  x: 369, y: 60, width: 5, height: 125 },
  {  x: 349, y: 180, width: 20, height: 5 },
  {  x: 349, y: 300, width: 20, height: 5 },
  {  x: 369, y: 300, width: 5, height: 125 },
  {  x: 349, y: 420, width: 20, height: 5 },
  {  x: 349, y: 540, width: 20, height: 5 },
  {  x: 369, y: 540, width: 5, height: 125 },
  {  x: 349, y: 660, width: 20, height: 5 },
  {  x: 349, y: 780, width: 20, height: 5 },
  {  x: 369, y: 780, width: 5, height: 125 },
  {  x: 349, y: 900, width: 20, height: 5 },
  {  x: 369, y: 120, width: 22, height: 5 },
  {  x: 489, y: 120, width: 22, height: 5 },
  {  x: 369, y: 360, width: 22, height: 5 },
  {  x: 489, y: 360, width: 22, height: 5 },
  {  x: 369, y: 600, width: 22, height: 5 },
  {  x: 489, y: 600, width: 22, height: 5 },
  {  x: 369, y: 840, width: 22, height: 5 },
  {  x: 489, y: 840, width: 22, height: 5 },
  {  x: 509, y: 120, width: 5, height: 245 },
  {  x: 509, y: 600, width: 5, height: 245 },
  {  x: 509, y: 240, width: 22, height: 5 },
  {  x: 509, y: 720, width: 22, height: 5 },
  {  x: 649, y: 480, width: 22, height: 5 },
  {  x: 649, y: 240, width: 5, height: 485 },
  {  x: 629, y: 240, width: 22, height: 5 },
  {  x: 629, y: 720, width: 22, height: 5 },
  {  x: 509, y: 720, width: 22, height: 5 },
  {  x: 1281, y: 30, width: 20, height: 5 },
  {  x: 1281, y: 90, width: 20, height: 5 },
  {  x: 1281, y: 150, width: 20, height: 5 },
  {  x: 1281, y: 210, width: 20, height: 5 },
  {  x: 1281, y: 270, width: 20, height: 5 },
  {  x: 1281, y: 330, width: 20, height: 5 },
  {  x: 1281, y: 390, width: 20, height: 5 },
  {  x: 1281, y: 450, width: 20, height: 5 },
  {  x: 1281, y: 510, width: 20, height: 5 },
  {  x: 1281, y: 570, width: 20, height: 5 },
  {  x: 1281, y: 630, width: 20, height: 5 },
  {  x: 1281, y: 690, width: 20, height: 5 },
  {  x: 1281, y: 750, width: 20, height: 5 },
  {  x: 1281, y: 810, width: 20, height: 5 },
  {  x: 1281, y: 870, width: 20, height: 5 },
  {  x: 1281, y: 930, width: 20, height: 5 },
  {  x: 1150, y: 60, width: 20, height: 5 },
  {  x: 1150, y: 180, width: 20, height: 5 },
  {  x: 1150, y: 300, width: 20, height: 5 },
  {  x: 1150, y: 420, width: 20, height: 5 },
  {  x: 1150, y: 540, width: 20, height: 5 },
  {  x: 1150, y: 660, width: 20, height: 5 },
  {  x: 1150, y: 780, width: 20, height: 5 },
  {  x: 1150, y: 900, width: 20, height: 5 },
  {  x: 1171, y: 30, width: 20, height: 5 },
  {  x: 1171, y: 90, width: 20, height: 5 },
  {  x: 1171, y: 150, width: 20, height: 5 },
  {  x: 1171, y: 210, width: 20, height: 5 },
  {  x: 1171, y: 270, width: 20, height: 5 },
  {  x: 1171, y: 330, width: 20, height: 5 },
  {  x: 1171, y: 390, width: 20, height: 5 },
  {  x: 1171, y: 450, width: 20, height: 5 },
  {  x: 1171, y: 510, width: 20, height: 5 },
  {  x: 1171, y: 570, width: 20, height: 5 },
  {  x: 1171, y: 630, width: 20, height: 5 },
  {  x: 1171, y: 690, width: 20, height: 5 },
  {  x: 1171, y: 750, width: 20, height: 5 },
  {  x: 1171, y: 810, width: 20, height: 5 },
  {  x: 1171, y: 870, width: 20, height: 5 },
  {  x: 1171, y: 930, width: 20, height: 5 },
  {  x: 1171, y: 30, width: 5, height: 65 },
  {  x: 1171, y: 150, width: 5, height: 65 },
  {  x: 1171, y: 270, width: 5, height: 65 },
  {  x: 1171, y: 390, width: 5, height: 65 },
  {  x: 1171, y: 510, width: 5, height: 65 },
  {  x: 1171, y: 630, width: 5, height: 65 },
  {  x: 1171, y: 750, width: 5, height: 65 },
  {  x: 1171, y: 870, width: 5, height: 65 },
  {  x: 1029, y: 60, width: 20, height: 5 },
  {  x: 1029, y: 60, width: 5, height: 125 },
  {  x: 1029, y: 180, width: 20, height: 5 },
  {  x: 1029, y: 300, width: 20, height: 5 },
  {  x: 1029, y: 300, width: 5, height: 125 },
  {  x: 1029, y: 420, width: 20, height: 5 },
  {  x: 1029, y: 540, width: 20, height: 5 },
  {  x: 1029, y: 540, width: 5, height: 125 },
  {  x: 1029, y: 660, width: 20, height: 5 },
  {  x: 1029, y: 780, width: 20, height: 5 },
  {  x: 1029, y: 780, width: 5, height: 125 },
  {  x: 1029, y: 900, width: 20, height: 5 },
  {  x: 889, y: 120, width: 22, height: 5 },
  {  x: 1009, y: 120, width: 22, height: 5 },
  {  x: 889, y: 360, width: 22, height: 5 },
  {  x: 1009, y: 360, width: 22, height: 5 },
  {  x: 1009, y: 600, width: 22, height: 5 },
  {  x: 889, y: 600, width: 22, height: 5 },
  {  x: 1009, y: 840, width: 22, height: 5 },
  {  x: 889, y: 840, width: 22, height: 5 },
  {  x: 889, y: 120, width: 5, height: 245 },
  {  x: 889, y: 600, width: 5, height: 245 },
  {  x: 869, y: 240, width: 22, height: 5 },
  {  x: 869, y: 720, width: 22, height: 5 },
  {  x: 770, y: 240, width: 5, height: 485 },
  {  x: 629, y: 240, width: 22, height: 5 },
  {  x: 629, y: 720, width: 22, height: 5 },
  {  x: 509, y: 720, width: 22, height: 5 },
];

// Draw the rectangles
rectangles.forEach(rect => {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
});

lines.forEach(rect => {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
});

// Add mousemove event listener to detect hover
canvas.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX - canvas.getBoundingClientRect().left;
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;

    // Check if the mouse is inside any of the rectangles
    rectangles.forEach(rect => {
        if (
            mouseX >= rect.x && 
            mouseX <= rect.x + rect.width && 
            mouseY >= rect.y && 
            mouseY <= rect.y + rect.height
        ) {
            // Change the fill style when hovering
            ctx.fillStyle = "gray";
            ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        } else {
            // Reset the fill style if not hovering
            ctx.fillStyle = "lightgray";
            ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        }
    });
    {
ctx.textAlign = "left";
ctx.font = "8px sans-serif, bold";
ctx.fillStyle = "black";
ctx.fillText(ETeam1, 11, 21,);
ctx.fillText(ETeam16, 11, 51);
ctx.fillText(ETeam8, 11, 81);
ctx.fillText(ETeam9, 11, 111);
ctx.fillText(ETeam4, 11, 141);
ctx.fillText(ETeam13, 11, 171);
ctx.fillText(ETeam5, 11, 201);
ctx.fillText(ETeam12, 11, 231);
ctx.fillText(ETeam3, 11, 261);
ctx.fillText(ETeam14, 11, 291);
ctx.fillText(ETeam6, 11, 321);
ctx.fillText(ETeam11, 11, 351);
ctx.fillText(ETeam7, 11, 381);
ctx.fillText(ETeam10, 11, 411);
ctx.fillText(ETeam2, 11, 441);
ctx.fillText(ETeam15, 11, 471);
ctx.fillText(WTeam1, 11, 501);
ctx.fillText(WTeam16, 11, 531);
ctx.fillText(WTeam8, 11, 561);
ctx.fillText(WTeam9, 11, 591);
ctx.fillText(WTeam4, 11, 621);
ctx.fillText(WTeam13, 11, 651);
ctx.fillText(WTeam5, 11, 681);
ctx.fillText(WTeam12, 11, 711);
ctx.fillText(WTeam3, 11, 741);
ctx.fillText(WTeam14, 11, 771);
ctx.fillText(WTeam6, 11, 801);
ctx.fillText(WTeam11, 11, 831);
ctx.fillText(WTeam7, 11, 861);
ctx.fillText(WTeam10, 11, 891);
ctx.fillText(WTeam2, 11, 921);
ctx.fillText(WTeam15, 11, 951);
ctx.fillText(STeam1, 1311, 21);
ctx.fillText(STeam16, 1311, 51);
ctx.fillText(STeam8, 1311, 81);
ctx.fillText(STeam9, 1311, 111);
ctx.fillText(STeam4, 1311, 141);
ctx.fillText(STeam13, 1311, 171);
ctx.fillText(STeam5, 1311, 201);
ctx.fillText(STeam12, 1311, 231);
ctx.fillText(STeam3, 1311, 261);
ctx.fillText(STeam14, 1311, 291);
ctx.fillText(STeam6, 1311, 321);
ctx.fillText(STeam11, 1311, 351);
ctx.fillText(STeam7, 1311, 381);
ctx.fillText(STeam10, 1311, 411);
ctx.fillText(STeam2, 1311, 441);
ctx.fillText(STeam15, 1311, 471);
ctx.fillText(MTeam1, 1311, 501);
ctx.fillText(MTeam16, 1311, 531);
ctx.fillText(MTeam8, 1311, 561);
ctx.fillText(MTeam9, 1311, 591);
ctx.fillText(MTeam4, 1311, 621);
ctx.fillText(MTeam13,1311, 651);
ctx.fillText(MTeam5, 1311, 681);
ctx.fillText(MTeam12, 1311, 711);
ctx.fillText(MTeam3, 1311, 741);
ctx.fillText(MTeam14, 1311, 771);
ctx.fillText(MTeam6, 1311, 801);
ctx.fillText(MTeam11, 1311, 831);
ctx.fillText(MTeam7, 1311, 861);
ctx.fillText(MTeam10, 1311, 891);
ctx.fillText(MTeam2, 1311, 921);
ctx.fillText(MTeam15, 1311, 951);
}
{
ctx.font = "30px normal, sans-serif";
ctx.fillStyle = "lightgray";
ctx.fillText("EAST", 400, 250);
ctx.fillText("WEST", 400, 730);
ctx.fillText("SOUTH", 915, 250);
ctx.fillText("MIDWEST", 915, 730);
ctx.font = "18px normal, sans-serif";
ctx.fillStyle = "lightgray";
ctx.fillText("CHAMPION", 664, 475);
}
    }

    
);