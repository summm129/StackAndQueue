import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css'],
})
export class QueueComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  title = 'Queue';

  // using namespace std;
  MAX = 100000; // キュー配列の最大サイズ

  qu = [...Array(this.MAX)].map(() => 0); // キューを表す配列
  tail = 0; // キューの先頭要素を表す変数
  head = 0; // キューの末尾の次の要素を表す変数

  // キューを初期化する
  init() {
    this.head = this.tail = 0;
  }

  // キューが空かどうかを判定する
  isEmpty() {
    return this.head == this.tail;
  }

  // スタックが満杯かどうかを判定する
  isFull() {
    return this.head == (this.tail + 1) % this.MAX;
  }

  // enqueue (tail に要素を格納してインクリメント)
  enqueue(v: number) {
    if (this.isFull()) {
      console.log(`error: stack is full.`);
      return;
    }
    this.qu[this.tail++] = v;
    if (this.tail == this.MAX) this.tail = 0; // リングバッファの終端に来たら 0 に
  }

  // dequeue (head にある要素を返して head をインクリメント)
  dequeue(): number {
    if (this.isEmpty()) {
      console.log(`error: stack is empty.`);
      return -1;
    }
    const res: number = this.qu[this.head];
    ++this.head;
    if (this.head == this.MAX) this.head = 0;
    return res;
  }

  main() {
    this.init(); // キューを初期化

    this.enqueue(3); // キューに 3 を積む {} -> {3}
    this.enqueue(5); // キューに 5 を積む {3} -> {3, 5}
    this.enqueue(7); // キューに 7 を積む {3, 5} -> {3, 5, 7}

    console.log(`${this.dequeue()}`); // {3, 5, 7} -> {5, 7} で 3 を出力
    console.log(`${this.dequeue()}`); // {5, 7} -> {7} で 5 を出力

    this.enqueue(9); // 新たに 9 を積む {7} -> {7, 9}
    this.enqueue(11); // {7, 9} -> {7, 9, 11}

    this.dequeue(); // {7, 9, 11} -> {9, 11}
    this.dequeue(); // {9, 11} -> {11}
    this.dequeue(); // {11} -> {}

    // 空かどうかを check: empty の方を出力
    console.log(`${this.isEmpty() ? 'empty' : 'not empty'}`);
  }
}
