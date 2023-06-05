import React from 'react'

async function fetchRepos() {
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));

    const repos = await response.json;

    return repos
}

async function getData() {
    const res = await fetch('https://api.github.com/users/MyronJoe/repos');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    return res.json();
}


const ReposPage = async () => {
    const data = await getData();

    return <div>{data[0].name}</div>;

}

export default ReposPage