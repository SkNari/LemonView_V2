const LemonDOM = {

    render : function(element,target){
        var comp = LemonTree.createDOMTree(element);
        //console.log(comp);
        //console.log(comp.copy());
        LemonDOM.hydrateElements(comp._internalFiber);
        LemonDOM.createNodeFromFiber(comp._internalFiber,target);
    },

    hydrateElements : function(fiber){

        var el;
        if(typeof(fiber.type)==='function'){
            //fiber.node = new fiber.type(fiber.memorizedProps);
            LemonDOM.hydrateElements(fiber.child);
        }else if(fiber.type=='text'){
            el = document.createTextNode(fiber.memorizedProps.value);
            fiber.node = el;
        }else if(typeof(fiber.type)==='string'){
            el = document.createElement(fiber.type,fiber.memorizedProps);
            fiber.node = el;
            for (let key in fiber.memorizedProps) {
                el[key] = fiber.memorizedProps[key];
            }
            fiber.child!=null?LemonDOM.hydrateElements(fiber.child):false;
        }

        fiber.sibling!=null?LemonDOM.hydrateElements(fiber.sibling):null;
    },

    createNodeFromFiber : function(fiber,target){

        var el;
        var child;
        var sibling;
        if(typeof(fiber.type)==='function'){
            el = fiber.child.node;
            sibling = fiber.sibling;
            fiber = fiber.child;
            child = fiber.child;
        }else{
            el = fiber.node;
            sibling = fiber.sibling;
            child = fiber.child;
        }
        target.appendChild(el);
        sibling != null ? LemonDOM.createNodeFromFiber(sibling,target) : false;
        child != null ? LemonDOM.createNodeFromFiber(child,el) : false;

        return el;

    }

}