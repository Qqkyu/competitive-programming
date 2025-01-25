class MyQueue {
  private stackOne: Array<number> = [];
  private stackTwo: Array<number> = [];

  push(x: number): void {
    this.stackOne.push(x);
  }

  pop(): number {
    if (this.stackTwo.length === 0) {
      this.moveElements();
    }
    return this.stackTwo.pop() as number;
  }

  peek(): number {
    if (this.stackTwo.length === 0) {
      this.moveElements();
    }
    return this.stackTwo.at(-1) as number;
  }

  empty(): boolean {
    return this.stackOne.length === 0 && this.stackTwo.length === 0;
  }

  private moveElements() {
    while (this.stackOne.length > 0) {
      this.stackTwo.push(this.stackOne.pop() as number);
    }
  }
}
