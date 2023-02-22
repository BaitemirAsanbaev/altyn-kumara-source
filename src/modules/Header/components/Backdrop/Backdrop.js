import classes from './Backdrop.module.scss'

const Backdrop = ({close, isOpen}) => {
  return ( isOpen ? <div
    className={classes.Backdrop}
    onClick={close}></div> : null );
}
 
export default Backdrop;