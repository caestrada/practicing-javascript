function binarySearch(list, item) {
    let start = 0;
    let end = list.length - 1;
    let i;

    while (start <= end) {
        i = Math.floor((start + end) / 2);

        if (list[i] === item) {
            return i;
        } else {
            if (list[i] < item) {
                start = i + 1;
            } else {
                end = i - 1;
            }
        }
    }

    return -1;
}

// Test
const l = [1, 2, 3, 4, 5];
console.log(binarySearch(l, 5));