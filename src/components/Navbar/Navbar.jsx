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
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/themeSlice';
import { current } from '@reduxjs/toolkit';


const Navbar = () => {
    const mode = JSON.parse(localStorage.getItem('theme-dark'));
    const dispatch = useDispatch();
    let currentUser = useSelector(state => state.user.user)
    const changeThemeMode = () => {
        dispatch(changeTheme());
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
                        {mode ? <WbSunnyOutlinedIcon onClick={changeThemeMode} /> : <DarkModeOutlinedIcon onClick={changeThemeMode} />}
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
                    <img src={currentUser.img} />
                    <span>{currentUser.name}</span>
                </div>

            </section>
        </>
    )
}

export default Navbar