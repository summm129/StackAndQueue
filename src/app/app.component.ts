import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Stack';

  // using namespace std;
  MAX = 100000; // スタック配列の最大サイズ

  st = [...Array(this.MAX)].map(() => 0); // スタックを表す配列(最大値をあらかじめ指定し、要素の値をすべて「0」に設定)
  top = 0; // スタックの先頭を表すポインタ

  // スタックを初期化する
  init() {
    this.top = 0; // スタックポインタを初期位置に
  }

  // スタックが空かどうかを判定する
  isEmpty() {
    return this.top == 0; // スタックサイズが 0 かどうか
  }

  // スタックが満杯かどうかを判定する
  isFull() {
    return this.top == this.MAX; // スタックサイズが MAX かどうか
  }

  // push (top を進めて要素を格納)
  push(v: number) {
    if (this.isFull()) {
      console.log(`error: stack is full.`);
      return;
    }
    this.st[this.top++] = v; // st[top] = v; と top++; をまとめてこのように表せます
  }

  // pop (top をデクリメントして、top の位置にある要素を返す)
  pop(): number {
    if (this.isEmpty()) {
      console.log(`error: stack is empty.`);
      return -1;
    }
    return this.st[--this.top]; // --top; と return st[top]; をまとめてこのように表せます
  }

  main() {
    this.init(); // スタックを初期化

    this.push(3); // スタックに 3 を積む {} -> {3}
    this.push(5); // スタックに 5 を積む {3} -> {3, 5}
    this.push(7); // スタックに 7 を積む {3, 5} -> {3, 5, 7}

    console.log(`${this.pop()}`); // {3, 5, 7} -> {3, 5} で 7 を出力
    console.log(`${this.pop()}`); // {3, 5} -> {3} で 5 を出力

    this.push(9); // 新たに 9 を積む {3} -> {3, 9}
    this.push(11); // {3, 9} -> {3, 9, 11}

    this.pop(); // {3, 9, 11} -> {3, 9}
    this.pop(); // {3, 9} -> {3}
    this.pop(); // {3} -> {}

    // 空かどうかを check: empty の方を出力
    console.log(`${this.isEmpty() ? 'empty' : 'not empty'}`);
  }
}
