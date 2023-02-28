import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import './Navbar.scss';
import { user } from '../../assets/assets';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/themeSlice';

const Navbar = () => {
    const mode = JSON.parse(localStorage.getItem('theme-dark'));

    const dispatch = useDispatch();
    // const { toggle, darkMode } = useContext(DarkModeContext)
    const changeThemeMode = () => {
        dispatch(changeTheme());
        if (!localStorage.getItem('theme-dark')) {
            localStorage.setItem('theme-dark', true)
        } else if (mode) {
            localStorage.setItem('theme-dark', false)
        } else {
            localStorage.setItem('theme-dark', true)
        }
    }


    return (
        <>
            <section className='navContainer'>
                <div className='navLeft'>
                    <span className='logo'>
                        Bonjour
                    </span>
                    <div className='leftNavIcons'>
                        <HomeOutlinedIcon />
                        {mode ? <WbSunnyOutlinedIcon onClick={changeTheme} /> : <DarkModeOutlinedIcon onClick={changeThemeMode} />}
                        <GridViewOutlinedIcon />
                    </div>
                    <div className='searchContainer'>
                        <SearchOutlinedIcon />
                        <input type="text" placeholder='Search' />
                    </div>
                </div>
                <div className='navRight'>
                    <PersonOutlinedIcon />
                    <MailOutlinedIcon />
                    <NotificationsOutlinedIcon />
                    <img src='https://images.unsplash.com/photo-1674231749604-d915baa7df9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0Mnx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt="User Image" />
                    <span>John Doe</span>
                </div>

            </section>
        </>
    )
}

export default Navbar