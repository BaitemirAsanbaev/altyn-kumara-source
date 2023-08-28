import { useHref } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import homeHeader from '../../../assets/images/home-header.png'
import menuHeader from '../../../assets/images/menu-header.png'
import deliveryHeader from '../../../assets/images/delivery-header.png'
import Drawer from "./Drawer/Drawer";
import Backdrop from "./Backdrop/Backdrop";
export const Header = () => {
  const url = useHref()
  const [img, setImg] = useState('')
  const [open, setOpen] = useState(false)
  const pages = [
    '/',
    '/menu',
    '/delivery'
  ]
useEffect(()=>{
  switch (url) {
    case '/':
      setImg(homeHeader)
      break;
    case '/menu':
      setImg(menuHeader)
      break;
    case '/delivery':
      setImg(deliveryHeader)
      break;
    default:
      break;
  }
}, [url])
  return ( <header>
    <Nav open={()=>setOpen(true)}/>
    <Drawer isOpen={open} close={()=>setOpen(false)}/>
    <Backdrop close={()=>setOpen(false)} isOpen={open}/>
    {pages.includes(url) ? <Banner img={img}/> : <div style={{marginBottom:"100px"}}></div>}
  </header> );
}
 