class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let current = this;
    
    while(current){
      if(value < current.value){
        if(current.left === null){
          current.left = new BST(value);
          break;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = new BST(value);
          break;
        }
        current = current.right;
      }
    }
    return this;
  }

  contains(value) {
    let current = this;
        
    while(current){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        return true;
      }
    }
    
    return false;
  }

  remove(value, parent = null) {
    let current = this;
        
    while(current){
      //search for value
      if(value < current.value){
        parent = current;
        current = current.left;
      } else if( value > current.value){
        parent = current;
        current = current.right;
      } else {
        if (current.left && current.right){
          //if found and has 2 children, make the current node's value the successor value
          current.value = current.right.findMinVal();
          //recursively change the values 
          current.right.remove(current.value, current);
        } else if(parent === null){
          //if no parent, change the values and references 
          if(current.left){
            current.value = current.left.value;
            current.right = current.left.right;
            current.left = current.left.left;
          } else if(current.right){
            current.value = current.right.value;
            current.right = current.right.right;
            current.left = current.right.left;
          }
        } else if(parent.left === current){
          parent.left = current.left !== null ? current.left : current.right;
        } else if(parent.right === current){
          parent.right = current.left !== null ? current.left : current.right;
        }
        break;
      }
    }

    return this;
  }
    
  findMinVal(){
    let current = this;
    while(current.left){
      current = current.left;
    }
    return current.value;
  }
}