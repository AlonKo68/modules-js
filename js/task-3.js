function getElementWidth(content, padding, border) {
    const numerContent = Number.parseFloat(content);
    const numerPadding = Number.parseFloat(padding);
    const numerBorder = Number.parseFloat(border);
    const total = numerContent + numerPadding * 2 + numerBorder * 2;
    return total;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

