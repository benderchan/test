import style from './Tabs.module.css'

import { Tab } from './Tab'

import {
    MdOutlineMailOutline,
    MdOutlineManageAccounts,
    MdOutlineMap,
    MdOutlineDateRange,
    MdOutlineLock,
    MdOutlinePhoneEnabled
} from 'react-icons/md'


const allTabs = [
    {id: 'name', icon: <MdOutlineManageAccounts/>},
    {id: 'email', icon: <MdOutlineMailOutline/>},
    {id: 'birthday', icon: <MdOutlineDateRange/>},
    {id: 'address', icon: <MdOutlineMap/>},
    {id: 'phone', icon: <MdOutlinePhoneEnabled/>},
    {id: 'password', icon: <MdOutlineLock/>}
]

export const Tabs = ({onHover, activeTab}) => {

    return (
        <div className={style.nav}>
            {
                allTabs
                    ? allTabs.map(tab => {
                            return (
                                <Tab key={tab.id} id={tab.id} icon={tab.icon} onHover={onHover} activeTab={activeTab}/>
                            )
                        }
                    )
                    : 'There is nothing at moment...'
            }
        </div>

    )
}