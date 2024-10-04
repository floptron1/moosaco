// It turns out you can read uploaded files at any time. huh.

// fileInput.addEventListener('change', (event) => {
//     console.log("didnt click submit yet?")
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.readAsText(file);
//         reader.onload = (e) => {
//             console.log(e.target.result);
//             console.log("hope that wasnt private!");
//         };
//     }
// });

const stdoutArea = document.getElementById('stdout-output');
document.getElementById('submit-btn').addEventListener('click', (event) => {
    let input = document.getElementById('stdin-input').value;
    const file = document.getElementById('fileInput').files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
        let code = reader.result;
        console.log(code);
        console.log(input);
        fetch('https://ggzk2rm2ad.execute-api.us-west-1.amazonaws.com/Prod/execute', {
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
                console.log(data.status);
                console.log(data.stdout);
                if (data.status != 'success') {
                    console.log(data);
                    stdoutArea.value = data.toString();
                } else stdoutArea.value = data.stdout;
            })
            .catch(error => alert('Error:', error));
    }
});