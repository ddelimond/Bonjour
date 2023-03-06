import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useSelector } from 'react-redux'
import './ProfileInfo.scss'


const ProfileInfo = () => {
    const currentUser = useSelector(state => state.user.user);
    return (
        <div className='profileInfoContainer'>
            <div className='profilePicContainer'>
                <img src={currentUser.img} alt="Profile Picture" />
            </div>
            <h1>{currentUser.name}</h1>
            <div className='InfoContainer'>
                <div className='socialContainer'>
                    <FacebookIcon fontSize='large' />
                    <InstagramIcon fontSize='large' />
                    <TwitterIcon fontSize='large' />
                </div>
                <div className='middle'>
                    <div>
                        <LocationOnIcon fontSize='small' />
                        <span>USA</span>
                    </div>
                    <div>
                        <LanguageIcon fontSize='small' />
                        <span>john.doe</span>
                    </div>
                </div>
                <div className='right'>
                    <MailOutlineOutlinedIcon />
                    <MoreVertOutlinedIcon />
                </div>
            </div>
            <button>Follow</button>

        </div>
    )
}

export default ProfileInfo