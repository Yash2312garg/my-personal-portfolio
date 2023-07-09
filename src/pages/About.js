import profile from "../images/profile.png"
import bg1 from '../images/bg-1.png'
const About = () => {
    return (
        <div className="about-container">
                            <div className='image-container'><img className='profileData' src={profile} alt="profile" />
                    <div className='bg1'><img src={bg1} alt=""  /></div>
                    </div>  
            <div className="profile-image">
                <img src={profile} alt="" width='80%' />
            </div>
        </div>
    )
}
export default About;