// import { Logo, DownArrow } from "@assets";
import { Logo } from "@assets";      // остаётся логотип
import DownArrow from "@assets/downArrow.svg?react";
import TasksIcon  from "@assets/tasks.svg?react";
import StarIcon  from "@assets/starIcon.svg?react";
import styles from "./asideList.module.css";
import { FC, SVGProps } from "react";

interface GeneralList {
  id:number;
  name:string;
  Icon:FC<SVGProps<SVGSVGElement>>;
}

const mockGeneralList:GeneralList[] = [
  {
    id:1,
    name:'My Tasks',
    Icon:TasksIcon,
  },
  {
    id:2,
    name:'2My Tasks',
    Icon:StarIcon,
  }
]

function AsideList() {
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
              <div className={styles.dropdown}>
                General
                <div>
                  <DownArrow/>
                </div>
              </div>
            {mockGeneralList.map(({id,name,Icon})=>{
              return (
                <div key={id} className={styles.listItem}>
                  <Icon className={styles.icon}/>
                  <div>{name}</div>
                </div>
              )
            })}
          </div>
      </div>
    );
}

export default AsideList;
