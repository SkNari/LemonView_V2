class myComp extends LemonComponent{
    render(){
        return Lemon.createElement("div",null,"Salut",this.props.name);
    }
}