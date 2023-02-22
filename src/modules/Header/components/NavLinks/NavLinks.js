import { NavLink } from 'react-router-dom'
import cartIcon from '../../../../assets/images/cart-icon.svg'
import settingsIcon from '../../../../assets/images/settings-icon.svg'
import profileIcon from '../../../../assets/images/profile-icon.svg'
import burger from '../../../../assets/images/burger.svg'
import classes from './NavLinks.module.scss'

const NavLinks = ({ pages, drawer=false, open, close }) => {
  return (<ul className={classes.NavLinks}>
    {pages ?
      <>
        <li className={`${classes.pagesLink} ${drawer ? classes.drawerLink : null}`}><NavLink onClick={close} to='/'>Главная</NavLink></li>
        <li className={`${classes.pagesLink} ${drawer ? classes.drawerLink : null}`}><NavLink onClick={close} to='/menu'>Меню</NavLink></li>
        <li className={`${classes.pagesLink} ${drawer ? classes.drawerLink : null}`}><NavLink onClick={close} to='/delivery'>Доставка</NavLink></li>
      </> :
      <>
        <li><NavLink to='/cart'><img src={cartIcon} alt='cart' /></NavLink></li>
        <li><NavLink to='/setting'><img src={settingsIcon} alt='settings' /></NavLink></li>
        <li><NavLink to='/profile'><img src={profileIcon} alt='profile' /></NavLink></li>
        <li className={classes.burger} onClick={open}><img src={burger} alt='burger' /></li>
        </>
    }
  </ul>);
}

export default NavLinks;