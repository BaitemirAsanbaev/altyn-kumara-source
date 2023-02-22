import Logo from '../../../../components/UI/Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import classes from './Nav.module.scss'

const Nav = ({open}) => {
  return (<nav className={classes.Nav}>
      <Logo/>
      <NavLinks pages={true}/>
      <NavLinks pages={false} open={open}/>
    </nav>
  )
}

export default Nav;