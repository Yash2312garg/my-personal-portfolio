import profile from '../images/My project.png'
import Card from '../components/projectcard'
import bg1 from '../images/bg-1.png'
import fall from '../images/fall.webp'
import {BiDownload} from "react-icons/bi"
const Home = () => {
    const heading1 = "<DEVELOPER>"
    return (
        <>
            <div className="first-container">
                <div className="container-field2">
                    <div className='image-container'><img className='profileData' src={profile} alt="profile" />
                    <div className='bg1'><img src={bg1} alt=""  /></div>
                    </div>  
                    <div className='field-content'>
                            <h1>{heading1}</h1>
                           <div> Full stack developer who
                            writes clean and efficient code. </div>
                           <span> My expertise lies within front-end web apps, and the main languages in my tech stack are 
                            JavaScript, React, and of course HTML/CSS.</span>
                        <div className='resume'>DOWNLOAD MY RESUME?  <BiDownload /></div>
                    </div>
                </div>
            </div>
            <div className='second-container'>
                <img className='fall' src={fall} alt="" width='10%' />
                <div className='second-container-field1'><hr class="straight-line" />My Recent Work<hr class="straight-line" /></div>
                <div className='second-container-field2'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}
export default Home;