import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import './Navbar.scss'

const Navbar = () => {
    return (
        <>
            <section className='navContainer'>
                <div className='navLeft'>
                    <span className='logo'>
                        Bonjour
                    </span>
                    <HomeOutlinedIcon />
                    <DarkModeOutlinedIcon />
                    <GridViewOutlinedIcon />
                    <div className='searchContainer'>
                        <SearchOutlinedIcon />
                        <input type="text" placeholder='Search' />
                    </div>
                </div>
                <div className='navRight'>
                    <PersonOutlinedIcon />
                    <MailOutlinedIcon />
                    <NotificationsOutlinedIcon />
                    <img src="https://wwhf.org/wp-content/uploads/2021/09/z_Profile-3.png" alt="User Image" />
                    <span>John Doe</span>
                </div>






            </section>
        </>
    )
}

export default Navbar