const LemonTree = {

    createDOMTree: function (element) {
        if (typeof (element) === 'object' && element.$$typeof === "LemonElement") {

            var lemComp;

            if (typeof (element.type) === "function") {
                lemComp = new element.type(element.props);
            } else {
                lemComp = new LemonComponent(element.props);
            }
            lemComp._internalFiber = LemonTree.createInternalFiber(element);
            return lemComp;
        }

        return null;

    },

    createInternalFiber: function (element) {
        var children;

        var internalFiber = {
            type: element.type,
            child: null,
            sibling: null,
            node: null,
            memorizedProps: element.props,
            memorizedState: null,
            pendingProps: null,
            pendingState: null
        };

        if (typeof (element.type) === "function") {

            internalFiber.child = this.createInternalFiber(new element.type(element.props).render());

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

    }

};