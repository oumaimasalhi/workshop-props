import React from 'react'

function CustomProfile(props) {
  console.log(props)
  return(
    <div className="profile">
    <img src='https://thumbs.dreamstime.com/b/female-silhoutte-avatar-default-profile-picture-photo-placeholder-vector-illustration-130555145.jpg' width="100"  />
    <h1>{props.fullName}</h1>
    <h2>{props.bio} - {props.profession}</h2>
    </div>
);

}
export default CustomProfile