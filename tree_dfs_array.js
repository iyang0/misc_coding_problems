class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
  
    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }
  
    depthFirstSearch() {
        //make a depth first search method that will traverse the tree
        //and output an array names of each node in traversal order from left to right
        let output = [];
        let dfsStack = [];
        let currNode = this;
        array.push(this.name);
        for(let i=this.children.length-1; i>=0; i--){
            dfsStack.push(this.children[i]);
        }
        while(dfsStack.length > 0){
            currNode = dfsStack.pop();
            array.push(currNode.name);
            for(let i=currNode.children.length-1; i>=0; i--){
                dfsStack.push(currNode.children[i]);
            }
        }
        
        return output;
    }
  }