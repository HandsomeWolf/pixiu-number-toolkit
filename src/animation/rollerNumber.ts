export class RollerNumber {
  private element: HTMLElement;
  private value: number;
  private targetValue: number;
  private animationDuration: number;
  private digitHeight: number;

  constructor(element: HTMLElement, initialValue = 0, digitHeight = 40) {
    this.element = element;
    this.value = initialValue;
    this.targetValue = initialValue;
    this.animationDuration = 1000; // 默认1秒
    this.digitHeight = digitHeight;
    this.render();
  }

  setValue(newValue: number): void {
    this.targetValue = newValue;
    this.animateToTarget();
  }

  setAnimationDuration(duration: number): void {
    this.animationDuration = duration;
    this.render();
  }

  private render(): void {
    this.element.style.overflow = 'hidden';
    this.element.style.display = 'flex';
    this.element.style.height = `${this.digitHeight}px`;
    this.element.innerHTML = this.createDigitElements();
  }

  private createDigitElements(): string {
    return this.value
      .toString()
      .split('')
      .map((char) => {
        if (char === '.') {
          return `<div style="width: ${this.digitHeight / 4}px; display: flex; align-items: flex-end; justify-content: center;">.</div>`;
        }
        return `
          <div style="position: relative; width: ${this.digitHeight / 2}px; height: ${this.digitHeight}px; overflow: hidden;">
            <div class="digit-column" style="position: absolute; top: 0; left: 0; width: 100%; height: ${this.digitHeight * 20}px; transition: transform ${this.animationDuration}ms cubic-bezier(0.25, 0.1, 0.25, 1);">
              ${Array.from({ length: 20 }, (_, i) => `<div style="height: ${this.digitHeight}px; display: flex; align-items: center; justify-content: center;">${i % 10}</div>`).join('')}
            </div>
          </div>
        `;
      })
      .join('');
  }

  private animateToTarget(): void {
    const currentDigits = this.value.toString().split('');
    const targetDigits = this.targetValue.toString().split('');
    let digitElements = Array.from(this.element.children);

    // 如果目标值的位数多于当前显示的位数，添加新的数字元素
    while (digitElements.length < targetDigits.length) {
      const newDigit = document.createElement('div');
      newDigit.innerHTML = this.createDigitElements();
      this.element.appendChild(newDigit.firstElementChild!);
      digitElements = Array.from(this.element.children);
    }

    // 从左到右遍历数字
    targetDigits.forEach((targetChar, index) => {
      const digitElement = digitElements[index];
      const currentChar = currentDigits[index] || '0';

      if (targetChar === '.' || currentChar === '.') {
        // 如果是小数点，不需要动画
        digitElement.textContent = targetChar;
      } else {
        const currentDigit = parseInt(currentChar);
        const targetDigit = parseInt(targetChar);

        let distance = targetDigit - currentDigit;
        if (distance < 0) distance += 10; // 如果是负数，加10使其成为正数

        const column = digitElement.firstElementChild as HTMLElement;
        const targetTop = -(currentDigit + distance) * this.digitHeight;
        column.style.transform = `translateY(${targetTop}px)`;

        // 添加过渡结束事件监听器
        column.addEventListener('transitionend', this.handleTransitionEnd.bind(this, column, currentDigit, targetDigit), { once: true });
      }
    });

    this.value = this.targetValue;
  }

  private handleTransitionEnd(column: HTMLElement, currentDigit: number, targetDigit: number): void {
    // 移除过渡效果
    column.style.transition = 'none';

    // 计算新的位置
    const newTop = -targetDigit * this.digitHeight;
    column.style.transform = `translateY(${newTop}px)`;

    // 强制回流
    column.offsetHeight;

    // 恢复过渡效果
    column.style.transition = `transform ${this.animationDuration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
  }
}
