async function someFunc() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (response.ok) {
        let json = await response.json();
        console.log(json);
    }
}

someFunc();


// -----

fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(data => console.log('then', data)).catch(() => {});