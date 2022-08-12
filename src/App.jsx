import { useEffect, useState } from 'react'
import { getProfile } from './api/api'
import { ProfileCard } from './components/ProfileCard/ProfileCard'


function App() {

    const [profileData, setProfileData] = useState([])

    useEffect(() => {
        getProfile().then(data => setProfileData(data.results))
    }, [])

    return (
        <div className='app'>

            {
                profileData.map(el => {
                    return (
                        <ProfileCard key={el.email}  {...el}/>
                    )
                })
            }

        </div>
    )
}

export default App
