let task4 = document.getElementById('task4');

task4.onclick = function () {
    let snake_case1 = "my_variable";
        let snake_case2 = "new_brand_product";

        function toCamelCase(snake_case) {
                function lowerAfterHyphenUpper(match) {
                    return match.toUpperCase();
                }
                return  snake_case.replace(/_\w/g, lowerAfterHyphenUpper);
            }
        console.log(toCamelCase(snake_case1).replace(/_/g, ''));
        console.log(toCamelCase(snake_case2).replace(/_/g, ''));
}
