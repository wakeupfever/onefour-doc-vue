function ListNode (val) {
  this.val = val
  this.next = null
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
node1.next = node2
node2.next = node3

let node5 = new ListNode(3)
let node6 = new ListNode(3)
let node7 = new ListNode(3)

node5.next = node6
node6.next = node7

/**
 * @description 合并有序链表
 * @param {*} l1
 * @param {*} l2
 * @return {*} 
 */
function mergeTwoLists (l1, l2) {
  // 定义链表开始
  let head = new ListNode(null)
  // 获取当前操作的链表
  let current = head
  // 只有当两个有序链表都删除完毕之后才跳出
  while (l1 && l2) {
    // 如果l1的val小于l2的val
    if (l1.val <= l2.val) {
      // 当前链表得到小于的那个链表目标
      current.next = l1
      // 删除这个链表目标
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }
    // 链表得到下一个选项
    current = current.next
  }
  // 处理链表不相等，因为有序的原因可以直接补上剩余的链表内容
  current.next = l1 !== null ? l1 : l2
  // 返回最终结果
  return head.next
};

let repeatList = mergeTwoLists(node1, node5)

// /**
//  * @description 链表去重
//  * @param {*} head
//  * @return {*} 
//  */
// function duplicates (head) {
//   let cur = head
//   while (cur && cur.next) {
//     if (cur.val === cur.next.val) {
//       cur.next = cur.next.next
//     } else {
//       cur = cur.next
//     }
//   }
//   return head
// }

// duplicates(repeatList)

// /**
//  * @description 删除重复的所有链表
//  * @param {*} head
//  * @return {*} 
//  */
// function deleteAllDuplicates (head) {
//   if (!head || !head.next) {
//     return head
//   }
//   // 设置一个默认链表
//   let dummy = new ListNode(null)
//   // 指向第一个链表目标
//   dummy.next = head
//   // 当前目标
//   let cur = dummy
//   // 至少有两个节点
//   while (cur.next && cur.next.next) {
//     // 比对下个和下下个是否相等
//     if (cur.next.val === cur.next.next.val) {
//       // 拿出相等的值
//       let val = cur.next.val
//       // 开始循环后面的值重复
//       while (cur.next && cur.next.val === val) {
//         // 如果有就删除
//         cur.next = cur.next.next
//       }
//     } else {
//       // 没有就跳过
//       cur = cur.next
//     }
//   }
//   // 目标处理后的链表
//   return dummy.next
// }

// deleteAllDuplicates(repeatList)