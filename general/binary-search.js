function binarySearch(list, item) {
    let min = 0;
    let max = list.length - 1;
    let i;

    while (min < max) {
        i = Math.floor((min + max) / 2);

        if (list[i] === item) {
            return i;
        } else {
            if (list[i] < item) {
                min = i + 1;
            } else {
                max = i - 1;
            }
        }
    }

    return -1;
}