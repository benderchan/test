import style from './ProfileCard.module.css'
import { Tabs } from '../Tabs/Tabs'
import { TabsContent } from '../Tabs/TabsContent'
import { useState } from 'react'


export const ProfileCard = (props) => {

    const [activeTab, setActiveTab] = useState('name')

    const onHover = e => {
        setActiveTab(e.currentTarget.id)
    }

    return (
        <div className={style.card}>
            <div className={style.header}>
                <div className={style.imgWrapper}>
                    <img src={props.picture.medium} alt='Profile '/>
                </div>
            </div>

            <TabsContent {...props} activeTab={activeTab}/>
            <Tabs activeTab={activeTab} onHover={onHover}/>


        </div>
    )
}
