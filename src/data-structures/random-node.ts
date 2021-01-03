export default class Node {
  val: number;
  next: Node | null;
  random: Node | null;

  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val ?? 0;
    this.next = next ?? null;
    this.random = random ?? null;
  }
}
