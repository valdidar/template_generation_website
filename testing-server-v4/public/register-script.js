const registerForm = document.querySelector('form');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        const password2 = document.querySelector('#password2').value;
        // check if passwords match
        if (password !== password2) {
            alert('passwords do not match');
            return;
        }
        const data = {
            "user": username,
            "pwd": password
        };
        console.log(username+" has tried to sign up");
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                window.location.href = '/auth';
            }
        })
        .catch(err => console.log(err));
    });