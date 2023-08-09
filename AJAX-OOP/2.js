let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

xhr.send();

xhr.onload = () => {
    if (xhr.status === 200) {
        console.log('request successful', xhr.response);
    }  else if (xhr.status === 404) {
        console.log('client error');
    } else if (xhr.status === 500) {
        console.log('server error');
    }
};

xhr.onerror = () => {
    console.log('some error happened');
};

// xhr.onprogress = (event) => {
//     console.log(event.lengthComputable);
// };