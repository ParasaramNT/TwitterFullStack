import React from 'react'
import "./ProfImage.css"

const ProfImage = ({userDetails, userPosts}) => {
    console.log("useDetails in Profimg", userDetails)
    console.log("usePosts in Profimg", userPosts)
    
  return (
    <div>
        <nav className='nav'>
            <span className="text-4xl">⬅️</span>
            <div>
                <h1 className="user-info">{userDetails.displayname}</h1> 
                <h1 className="user-info text-md">{userPosts?.length} Tweets</h1>
            </div>
        </nav>
        <div className="profile-section">
            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user-image" className="rounded-full"/>
            <h1>{userDetails.displayname}</h1>
            <div className='follow-info'>
                <div className='flex'>
                    <span>{userDetails.followers?.length} Followers</span>
                    <span>{userDetails.following?.length} Following</span>
                </div>
                <button className="follow-button">Follow</button>
                <button className="follow-button">Unfollow</button>
            </div> 
        </div>
    </div>
  )
}

export default ProfImage
