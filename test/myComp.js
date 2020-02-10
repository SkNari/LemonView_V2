class myComp extends LemonComponent{
    
    render(){
        return Lemon.createElement("div",{onclick:function(){
            console.log("toto");
        },id:"toto"},"Salut ",this.props.name,Lemon.createElement("input",{type:"date"}));  
    }
}