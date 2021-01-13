interface CompressionCounter {
  character: string;
  counter: number;
}

class StringIterator {
  compressed: CompressionCounter[];

  constructor(compressedString: string) {
    this.compressed = this.preprocess(compressedString);
  }

  next(): string {
    const result: string =
      this.compressed[0]?.counter > 0 ? this.compressed[0]?.character : " ";

    if (result !== " ") {
      this.compressed[0].counter--;

      if (this.compressed[0].counter === 0) {
        this.compressed.shift();
      }
    }

    return result;
  }

  hasNext(): boolean {
    return this.compressed.length > 0;
  }

  preprocess(compressedString: string): CompressionCounter[] {
    const result: CompressionCounter[] = [];
    let currentChar: string = compressedString[0];
    let currentNum: number = 0;
    let i: number = 1;

    while (i <= compressedString.length) {
      if (i === compressedString.length) {
        result.push({
          character: currentChar,
          counter: currentNum,
        });
      } else if (compressedString[i] >= "0" && compressedString[i] <= "9") {
        currentNum = currentNum * 10 + Number.parseInt(compressedString[i]);
      } else {
        // if we hit another character, then we'll want to add the following toa  result
        result.push({
          character: currentChar,
          counter: currentNum,
        });

        currentChar = compressedString[i];
        currentNum = 0;
      }

      i++;
    }

    return result;
  }
}
