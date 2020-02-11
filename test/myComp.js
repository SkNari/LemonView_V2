class myComp extends LemonComponent{
    
    render(){
        return Lemon.createElement("div",{onclick:function(){
            console.log("toto");
        }},"Salut ",this.props.name,Lemon.createElement("input",{type:"date"}));  
    }
}

class comp2 extends LemonComponent{

    render(){
        return Lemon.createElement("div",null,"toto",Lemon.createElement(myComp,{name:"toto"}),Lemon.createElement(myComp,{name:"titi"}));
    }

}