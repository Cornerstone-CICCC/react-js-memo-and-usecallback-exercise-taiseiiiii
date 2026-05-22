import { memo } from 'react'

type ProfileProps = {
  firstname: string
  lastname: string
}

function Profile({ firstname, lastname }: ProfileProps) {
  console.log('Rendered Profile Component')

  return (
    <div>
      <h2>Profile</h2>
      <p>First name: {firstname}</p>
      <p>Last name: {lastname}</p>
    </div>
  )
}

export default memo(Profile)
