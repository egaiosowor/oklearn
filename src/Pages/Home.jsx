import { useEffect, useState } from "react"
import { useModulesContext } from "../Utils/Context"
import Banner from "../Components/Banner"
import Modulecard from "../Components/ModuleCard"

export default function Home(){

    const[user, setUser] = useState("")
    const[showBanner, setShowBanner] = useState(true)

    const { modules } = useModulesContext();

    const closeBanner = () => {
        setTimeout(() => {
            setShowBanner(false)
        }, 4000)
    }

    useEffect(() => {
        const user = localStorage.getItem("user")
        setUser(user)

        closeBanner()
    }, [])

    return(
        <>
            <div className="bg-wrapper" >
            {modules?.map(({ title, coverImg }, index) => (
                <Modulecard 
                    key={index}
                    title={title}
                />
            ))}
            </div>
            {showBanner && <Banner message={`Welcome, ${user}`} />}
        </>
    )
}


//Bug: the welcome banner shows up on each page reload