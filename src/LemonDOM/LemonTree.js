const LemonTree = {

    createDOMTree: function (element) {
        if (typeof (element) === 'object' && element.$$typeof === "LemonElement") {

            var lemComp;

            if (typeof (element.type) === "function") {
                lemComp = new element.type(element.props);
            } else {
                lemComp = new LemonComponent(element.props);
            }
            lemComp._internalFiber = LemonTree.createInternalFiber(element,lemComp);
            lemComp.render();
            return lemComp;
        }

        return null;

    },

    createInternalFiber: function (element,comp) {
        var children;

        var internalFiber = {
            type: element.type,
            child: null,
            sibling: null,
            node: null,
            memorizedProps: element.props,
            memorizedState: element.state,
            pendingProps: null,
            pendingState: null,
            tag: LemonTree.tagCount   
        };

        LemonTree.tagCount++;

        if (typeof (element.type) === "function") {

            var elem = comp!=null?comp:new element.type(element.props);
            elem._internalFiber = internalFiber;
            internalFiber.node = elem;
            internalFiber.child = this.createInternalFiber(elem.render());

        } else {
            children = element.children
            if (children != undefined) {
                var firstChild = null;
                var previousChild = null;
                for (let child of children) {
                    let childFiber = this.createInternalFiber(child);
                    firstChild == null ? firstChild = childFiber : false;
                    previousChild != null ? previousChild.sibling = childFiber : false;
                    previousChild = childFiber;
                }
                internalFiber.child = firstChild;
            }
        }

        return internalFiber;

    },

    tagCount: 0,

    compareFiber : function(fiber1,fiber2){

        var res = {};

        if(fiber1.type!=fiber2.type){

            res.push({message:"replace"});

        }

        while(fiber1!=null){

            
        }

    }

};