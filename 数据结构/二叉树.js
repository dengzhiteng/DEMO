const compare = {
  equal: 0,
  less: -1,
  bigger: 1,
}

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root=null
  }
  useCompare (node,key) {
    if (node.key === key) {
        return compare.equal
    } else if(node.key<key){
        return compare.bigger
    } else if (node.key > key) {
      return compare.less
    }
  }
  insert (key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode (node, key) {
    if (this.useCompare(node, key) === compare.equal || compare.less){
      node.left = new Node(key)
    } else if (this.useCompare(node, key) === compare.bigger) {
      node.right = new Node(key)
    }
  }
}

const tree = new BST()
tree.insert(1)
tree.insert(2)
console.log(tree);