// import { Logo, DownArrow } from "@assets";
import React, {useState} from "react";
import { Logo } from "@assets";      // остаётся логотип
import styles from "./asideList.module.css";
import DownArrow from "@assets/downArrow.svg?react";
import TasksIcon  from "@assets/tasks.svg?react";
import StarIcon  from "@assets/starIcon.svg?react";
import Messages  from "@assets/messagesIcon.svg?react";
import Trash  from "@assets/trashIcon.svg?react";

interface GeneralList {
  id:number;
  name:string;
  svg:React.ElementType;
}

const list:GeneralList[] = [
  {
    id: 1,
    name: 'My Tasks',
    svg: TasksIcon,
  },
  {
    id: 2,
    name: 'Favorites',
    svg: StarIcon,
  }, {
    id: 3,
    name: 'DMessages',
    svg: Messages,
  }, {
    id: 4,
    name: 'Trash',
    svg: Trash,
  }
]

function AsideList() {
  const [open,setOpen] = useState(false);
  const menuDropdown = () =>{setOpen(v=>!v)}


    return (
      <div className={styles.asideList}>
          <div>
              <a
                href="/"
                className={styles.logoLink}
              >
                  <Logo className={styles.logo} />
              </a>

          </div>
          <div >
              <div  className={styles.dropdown}>
               <div onClick={menuDropdown} className={styles.title}>
                 General
                 <div className={open?styles.arrow:styles.arrowOpen}>
                   <DownArrow />
                 </div>
               </div>
                <ul className={open?styles.listItemsActive:styles.listItems}>
                  {list.map(({id,name,svg: Svg})=>{
                    return (
                      <li key={id} className={styles.listItem}>
                        <a className={styles.link}>
                          <Svg className={styles.icon}/>
                          <div>{name}</div>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </div>
      </div>
    );
}

export default AsideList;
