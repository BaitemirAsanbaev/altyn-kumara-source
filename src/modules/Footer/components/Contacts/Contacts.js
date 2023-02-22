import classes from './Contacts.module.scss'
import facebook from '../../../../assets/images/facebook.svg'
import whatsapp from '../../../../assets/images/whatsapp.svg'
import tripadv from '../../../../assets/images/trip-adv.svg'
import insta from '../../../../assets/images/insta.svg'
import tg from '../../../../assets/images/tg.svg'

const Contacts = () => {
  return (<div className={classes.Contacts}>
    <div>
    <div className={classes.info}>
      <h2>Наши контакты:</h2>
      <h3>0 999 66 69 99 <br /> 0 666 99 96 66</h3>
      <h3>ул. Пржевальского 105а</h3>
    </div>
    <div className={classes.icons}>
      <a href='https://google.com' target='_blank' rel='noreferrer'><img src={facebook} alt='facebook' /></a>
      <a href='https://google.com' target='_blank' rel='noreferrer'><img src={whatsapp} alt='whatsapp' /></a>
      <a href='https://google.com' target='_blank' rel='noreferrer'><img src={tripadv} alt='tripadv' /></a>
      <a href='https://google.com' target='_blank' rel='noreferrer'><img src={insta} alt='insta' /></a>
      <a href='https://google.com' target='_blank' rel='noreferrer'><img src={tg} alt='tg' /></a>
    </div>
    </div>
    <div className={classes.map}>
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183.85646859515637!2d78.38430175567255!3d42.49785579934702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe5e3d768d570e350!2z0JDQu9GC0YvQvSDQmtGD0LzQsNGA0LA!5e0!3m2!1sru!2skg!4v1622704059122!5m2!1sru!2skg" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
    </div>
  </div>);
}

export default Contacts;