var result = "";
var stdin = ["2 1 2", "4 2 3 4 1", "5 6 5 4 7 2","6 2 5 7 8 9 11", "7 1 2 3 4 5 6 7", "10 1 1 1 1 1 1 1 1 1 1 1", "1 1", "10 1 2 3 4 5 6 7 8 9 10", "10 10 9 8 7 6 5 4 3 2 151", "10 3 52 5 2 3 51 6 6 23 2147482647"];
var stdout = ["YES\nNO\n","YES\nNO\nYES\nYES\n","NO\nNO\nNO\nNO\nYES\n","NO\nYES\nNO\nYES\nNO\n","YES\nNO\nNO\nYES\nYES\nNO\nYES\n","YES\nNO\nNO\nYES\nYES\nNO\nYES\nYES\nYES\nNO\n","YES\n","YES\nNO\nYES\nNO\nYES\nNO\nYES\nNO\nYES\nNO\n","YES\nYES\nYES\nYES\nYES\nNO\nNO\nNO\nNO\nNO\n","YES\nNO\nNO\nYES\nYES\nNO\nYES\nYES\nNO\nYES\nNO\n"];
// var stdout = ["YES NO ", "YES NO YES YES ", "NO NO NO NO YES ","NO YES NO YES NO ", "YES NO NO YES YES NO YES ", "YES NO NO YES YES NO YES YES YES NO ", "YES ", "YES NO YES NO YES NO YES NO YES NO ", "YES YES YES YES YES NO NO NO NO NO ", "YES NO NO YES YES NO YES YES NO YES NO "];
// var stdout = [["YES","NO"],["YES","NO","YES","YES"],["NO","NO","NO","NO","YES"],["NO","YES","NO","YES","NO"],["YES","NO","NO","YES",”YES”,”NO”,”YES”],[“YES”,”NO”,”NO”,”YES”,”YES”,”NO”,”YES”,”YES”,”YES”,”NO”],[“YES”],[“YES”,”NO”,”YES”,”NO”,”YES”,”NO”,”YES”,”NO”,”YES”,”NO”],[“YES”,”YES”,”YES”,”YES”,"YES","NO","NO","NO","NO","NO"],["YES","NO","NO","YES","YES","NO","YES","YES","NO","YES","NO"]];
document.getElementById('submit-btn').addEventListener('click', (event) => {
    const file = document.getElementById('fileInput').files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = async function(e){
        let code = reader.result;
        console.log(code);
        for (var i = 0; i < 10; i++){
            var input = stdin[i];
            console.log(input);
            await fetch('https://ggzk2rm2ad.execute-api.us-west-1.amazonaws.com/Prod/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    compilerOptions: '-std=c++17 -O2 -Wall -Wextra -Wshadow -Wconversion -Wfloat-equal -Wduplicated-cond -Wlogical-op',
                    filename: 'main.cpp',
                    input: input,
                    language: 'cpp',
                    sourceCode: code
                })
            })
            .then(response => response.json())
            .then(data => {
                result = data.stdout.toString();
                console.log(result);
                console.log(stdout[i]);
                if (result == stdout[i]){
                    console.log("PASS");
                    document.getElementsByClassName("resultsDisplay")[i].style.backgroundColor = "green";
                }
                else{
                    console.log("FAIL");                    
                    document.getElementsByClassName("resultsDisplay")[i].style.backgroundColor = "red";
                }
            })
            .catch(error => alert('Error:', error));
        }
    }
});