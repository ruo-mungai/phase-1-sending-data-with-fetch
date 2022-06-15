function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
        }),
    })
    .then(res => res.json())
    .then(data => {
      createObjId (data)
    })
    .catch(error => {
       getError(error)
    })
}

function createObjId(obj){
    const userElement = document.createElement('p');
    userElement.innerHTML = obj.id;
        document.querySelector('body').appendChild(userElement);
}

function getError(errObj){
    const myError = document.createElement('p');
    myError.innerHTML = errObj.message;
    document.querySelector('body').appendChild(myError);
}