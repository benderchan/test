import style from './Tabs.module.css'

export const TabsContent = ({id, activeTab, ...props}) => {

    const showContent = (tab) => {

        switch (tab) {
            case 'password':
                return <div><p>My password is: <br/> <span>{props.login.password}</span></p></div>
            case 'address':
                return <div><p>My address is: <br/>
                    <span>{props.location.street.number} {props.location.street.name}</span>
                </p></div>
            case 'name':
                return <div><p>My name is: <br/> <span>{props.name.first} {props.name.last}</span></p></div>
            case 'email':
                return <div><p>My email is: <br/> <span>{props.email}</span></p></div>
            case 'phone':
                return <div><p>My phone number is: <br/> <span>{props.phone}</span></p></div>
            case 'birthday':

                const day = new Date(props.dob.date).getDay()
                const month = new Date(props.dob.date).getMonth()
                const year = new Date(props.dob.date).getFullYear()
                return <div><p>My birthday is: <br/> <span>{day}/{month}/{year}</span></p></div>
            default:
                return `My name is ${props.name.first} ${props.name.last}`
        }
    }
    return (
        <div className={style.info}>
            {
                showContent(activeTab)

            }
        </div>
    )
}