
function display_smaller_numbers(n) {
    while (true) {
        console.log(n);
        n = n - 1;

        if (n < 0) {
            break;
        }
    }
}

display_smaller_numbers(10);

