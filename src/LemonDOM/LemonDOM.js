const LemonDOM = {

    render : function(){

    },

    nodeFromFiber : function(fiber){

        var el;
        if(typeof(fiber.type)==='function'){
            fiber.node = new fiber.type(fiber.memorizedProps);
            el = LemonDOM.nodeFromFiber(fiber.child);
            el 
        }
        if(fiber.type=='text'){
            return document.create
        }
    }

}