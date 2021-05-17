function removeEveryKthLL(head, k) {
    if(!head) return null
    
    let hold = new ListNode('hold')
    hold.next = head
    let curr = hold
    let next
    while(curr){
        next = curr.next
        for(let i = 1; i < k; i++){
            if(!next || !next.next) return hold.next
            next = next.next
            curr = curr.next
        }
        curr.next = next.next
    }
   
   
   
    return hold.next
}
