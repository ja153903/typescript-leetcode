class RandomizedSet {
  items: Set<number>;

  constructor() {
    this.items = new Set();
  }

  insert(val: number): boolean {
    if (this.items.has(val)) {
      return false;
    }

    this.items.add(val);

    return true;
  }

  remove(val: number): boolean {
    if (this.items.has(val)) {
      this.items.delete(val);
      return true;
    }

    return false;
  }

  getRandom(): number {
    return [...this.items.values()][this.getRandomIndex()];
  }

  getRandomIndex(): number {
    return Math.floor(Math.random() * this.items.size);
  }
}

export { RandomizedSet };
