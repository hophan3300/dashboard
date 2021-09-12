import React,{useRef} from 'react'
import './Sidebar.css'
import Logo from '../../assets/images/logo.png'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { Link } from 'react-router-dom'


const SideItem = props =>{
   const active = props.active ? "active" : ""

   return(
      <div className="sidebar__item">
         <div className={`sidebar__item-inner ${active}`}>
            <i className={props.icon}></i>
            <span>{props.title}</span>
         </div>
      </div>
   )
}

const clickOutsideRef = (content_ref) => {
   document.addEventListener("mousedown", (e) => {
      // user click toggle
      if(content_ref.current && content_ref.current.contains(e.target)){
         content_ref.current.classList.toggle('active')
      }else{
         //user click outside toggle and content
         if(content_ref.current && !content_ref.current.contains(e.target)){
            content_ref.current.classList.remove('active')
         }

      }
   })
}

const Sidebar = (props) => {

   const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

   const sidebarRef = useRef(null)

   clickOutsideRef(sidebarRef)
   
   const sidebarActive = () => sidebarRef.current.classList.add('active')

   return (
    <div>
      <div className="sidebar__hidden" onClick={()=>sidebarActive()}>
         <i className='bx bx-menu-alt-left' ></i>
      </div>
      <div className="sidebar" ref={sidebarRef}>
        <div className="sidebar__logo">
           <img src={Logo} alt="company logo" />
        </div>
        {
           sidebar_items.map((item, index) => (
              <Link to={item.route} key={index}>
                 <SideItem
                     title={item.display_name}
                     icon={item.icon}
                     active={index === activeItem}
                 />
              </Link>
           ))
        }
      </div>
      </div>
   )
}

export default Sidebar
