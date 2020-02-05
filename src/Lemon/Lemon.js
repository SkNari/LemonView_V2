const Lemon = {

    createElement : function(){
        if(arguments.length<2){
            return null;
        }
        var component = {
            $$typeof:"LemonElement",
            type:arguments[0],
            props:arguments[1]
        };
        if(typeof(component.type)==='string'&&arguments.length>2){    
            component.children = [];
            for(let i = 2 ; i < arguments.length ; i++){
                let child = typeof(arguments[i])==="object"?arguments[i]:Lemon.createElement("text",{value:arguments[i]});
                component.children.push(child);
            }
        }

        return component;
    }

};