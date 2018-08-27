//problem not short circuting at line 7 for some reason

// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.
 function ListNode(val) {
         this.val = val;
         this.next = null;
     }

partition = function(head, x) {
    
    let small = [];
    let node = head.next
    while(node.next){
        if (node.next.val < x){
            small.push(node.next.val);
            node.next = node.next.next;
        }else {
        node = node.next;
        }
        if(node === null){break;}
    }
    if (small.length === 0) {return head;}
    let second = head.next; 
    let listHead = new ListNode(small.shift());
    let node2 = listHead;
    while (small.length > 0){
      let newNode = new ListNode(small.shift());
        node2.next = newNode;
        
    }
        head.next = listHead;
        node2.next = second;
    return head;
};
