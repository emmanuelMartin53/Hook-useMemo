import { memo } from "react";


const Profile = ({count, profile}) => {

  console.log("je suis dans profile")
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item"><p className="h2">User ID:{count} </p> </li>
        <li className="list-group-item"> <strong>Nom:  </strong>{profile.name} </li>
        <li className="list-group-item"><strong>Pseudo: </strong> {profile.username}</li>
        <li className="list-group-item"><strong>Email: </strong> {profile.email} </li>
      </ul>
    </div>
  )
}

export default memo(Profile);
