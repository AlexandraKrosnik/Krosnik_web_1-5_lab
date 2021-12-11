let task5 = document.getElementById('task5');

task5.onclick = function () {
    let snake_case1 = "myVariable";
        let snake_case2 = "newBrandProduct";
        function toSnakeCase(snake_case) {
                function upperToHyphenLower(match) {
                    return '_' + match.toLowerCase();
                }
                return snake_case.replace(/[A-Z]/g, upperToHyphenLower);
            }
            console.log(toSnakeCase(snake_case1));
            console.log(toSnakeCase(snake_case2));
}
