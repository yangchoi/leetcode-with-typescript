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

function reverseList(head: ListNode | null): ListNode | null {
  // head: 시작 노드
  // prev: 이전노드(초기값, 맨 처음 시작노드인 1의 이전값은 null)
  // nextNode: 다음 노드(while문에서 초기값을 head.next로 할당)

  let prev = null;

  while(head !== null) {
    // next는 시작노드 다음으로 지정
    // 시작노드 1의 다음은 2  
    let next = head.next;
    // reverse이니 이전 값인 prev(현재는 Null)로 연결
    head.next = prev;
    // 다음 노드로 이동해 작업 반복
    // prev는 현재 시작노드인 head로 한칸 이동
    prev = head;
    // 시작노드 head는 다음 노드인 next로 이동해 다음을 반복
    head = next;
    // head가 5에서 next로 이동하면 null 이기 때문에 while문 종료
    // 이때 prev의 위치는 node 5 맨 끝 연결의 시작점
    // 따라서 prev 를 반환하면 됨 ( 연결리스트는 연결된 순으로 해당 노드와 연결된 모든 노드를 반환 )
  }
  return prev;
};