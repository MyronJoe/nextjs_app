import React from 'react'

//fetching the details of a particular repository
async function fetchRepo(name){
    const res = await fetch(`https://api.github.com/repos/MyronJoe/${name}`);

    const repo = await res.json();

    return repo;
}

const Repo = async ({name}) => {

    const repo = await fetchRepo(name);

    console.log(repo)

  return (
    <div>Repo</div>
  )
}

export default Repo