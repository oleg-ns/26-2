//1
if (document.querySelector("body").childNodes.length == 0) {console.log("empty")};
//2
for (i=0; i<10; i++) {
    document.body.querySelector("tbody").children[i].children[i].style.backgroundColor= "red";
}
//3
setTimeout(function printNumbersInterval() {
    for (i=1; i<=20; i++) {
        setTimeout(console.log(i), 100)
    }
}
,100)
//4
function createSpanInBlockByID(blockID) {
        if (document.getElementById(blockID).querySelectorAll('span').length == 0) {
            document.getElementById(blockID).appendChild(document.createElement('span'))}
    }
createSpanInBlockByID('myBlock')
//5
function createCloneNode(block) {
    document.body.appendChild(document.createElement(block))
}
createCloneNode(block)
//6
function addChickenTo(block, count, type) {
    var n = document.createElement(type);
    if (count <= 0) {var t = 0} else {var t = count - 1}
    document.querySelector(block).insertBefore(n, document.querySelector(block).children[t])
}
addChickenTo(block, count, type)
//7
function replaceElBy(blockCurrent, blockToReplace) {
    document.body.replaceChild(blockCurrent, blockToReplace)
}
replaceElBy(blockCurrent, blockToReplace)
