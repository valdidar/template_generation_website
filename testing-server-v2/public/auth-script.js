const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        const data = {
            "user": username,
            "pwd": password
        }
        console.log(username+" tried to log in");
        fetch('/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if (res.status === 200) {
                window.location.href = '/';
            } else {
                alert('incorrect username or password');
            }
        })
    })    