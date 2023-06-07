import React from 'react'
import Repo from '@/app/components/Repo'

const RepoPage = ({params:{name}}) => {
  return (
    <Repo name={name}/>
  )
}

export default RepoPage