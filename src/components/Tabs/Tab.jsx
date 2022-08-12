import style from './Tabs.module.css'
import { IconContext } from 'react-icons'


export const Tab = ({id, activeTab, onHover, icon}) => {
    return (
        <IconContext.Provider
            value={{size: '80px', color: `${activeTab === id ? 'black' : 'green'}`}}
        >
            <div className={style.tab} id={id}
                 onMouseMove={(e) => onHover(e)}>
                {icon}
            </div>
        </IconContext.Provider>
    )
}