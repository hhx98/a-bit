export default class Scanner {
  constructor(templateStr) {
    this.pos = 0;
    this.tail = templateStr;
    this.templateStr = templateStr;
  }

  scanUntil(stopTag) {
    // 记录开始执行时pos的值
    const pos_backup = this.pos;
    while (!this.eos() && !this.tail.startsWith(stopTag)) {
      // console.log(this.pos, this.templateStr[this.pos]);
      this.pos++;
      this.tail = this.templateStr.substr(this.pos);
    }
    return this.templateStr.substring(pos_backup, this.pos);
  }

  scan(tag) {
    // 跳过
    if (this.tail.startsWith(tag)) {
      this.pos += tag.length;
      this.tail = this.templateStr.substring(this.pos);
    }
  }

  // end of string
  eos() {
    return this.pos >= this.templateStr.length;
  }
}
