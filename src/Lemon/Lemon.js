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

        if(typeof(type)==='string'){
            component.children = [];
            for(let i = 2 ; i < arguments.length ; i++){
                component.children.push(arguments[i]);
            }
        }

        return component;
    }

};