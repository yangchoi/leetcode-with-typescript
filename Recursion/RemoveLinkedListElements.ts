/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // val 이 0이고 다음 값이 head 인 listnode를 만든다.
  const temp: ListNode = new ListNode(0, head);
  // 그 값을 current에 할당
  let current: ListNode = temp;

  // current에 next값이 있는 동안 반복
  while(current.next !== null) {
    // current의 next 값이 val와 같다면
    if(current.next.val === val) {
      // current.next 값은 current.next의 next 값이 된다.
      current.next = current.next.next;
    }else {
      // 같지 않다면 current 값은 current.next 값이 된다.
      current = current.next;
    }
  }
  // 반복이 끝나면 head를 return.
  return temp.next;
}; 