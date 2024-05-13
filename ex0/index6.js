

// for (  initiere de variabila/iterator [x=ceva]    ;    conditie de validare [boolean]     ;      pasul variabilei   [instructiune]  ) {
//  bloc instructiuni
// }

function display_even_smaller_numbers_in_ascending_order(n) {

    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }

}

// display_even_smaller_numbers_in_ascending_order(10);
display_even_smaller_numbers_in_ascending_order(13);

// 2, 4, 6, 8, 10
// 2, 4, 6, 8, 10, 12

