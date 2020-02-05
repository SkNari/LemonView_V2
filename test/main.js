var el = Lemon.createElement(myComp,{name:"toto"});
var comp = LemonTree.createDOMTree(el)
LemonDOM.nodeFromFiber(comp._internalFiber);
console.log(comp);
