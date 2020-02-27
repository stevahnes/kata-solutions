/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth_2 = function (root) {
    if (root == null) {
        return 0;
    } else {
        var count = 0;
        var array = [];
        array.push(root);
        var arrayCounter = 0;
        while (array.length != 0) {
            arrayCounter++;
            var nextArray = [];
            for (var i = 0; i < array.length; i++) {
                if (array[i].left != null) {
                    nextArray.push(array[i].left);
                }
                if (array[i].right != null) {
                    nextArray.push(array[i].right);
                }
            }
            array = nextArray;
        };
        return arrayCounter;
    }
};

var maxDepth_1 = function (root) {
    if (root == null) {
        return 0;
    } else {
        var count = 0;
        var array = [];
        array.push(root);
        var arrayCounter = 0;
        while (array.length != 0) {
            arrayCounter++;
            var nextArray = [];
            for (var i = 0; i < array.length; i++) {
                if (array[i].left != null) {
                    nextArray.push(array[i].left);
                }
                if (array[i].right != null) {
                    nextArray.push(array[i].right);
                }
            }
            array = nextArray;
        };
        return arrayCounter;
    }
};