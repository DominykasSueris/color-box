function generateColor(arr) {
    const randomColor = Math.floor(Math.random() * arr.length);
    return arr[randomColor];
}

export { generateColor };