import { useEffect, useState } from "react"
import { useModulesContext } from "../Utils/Context"
import Banner from "../Components/Banner"
import Modulecard from "../Components/ModuleCard"
import toTitleCase from '../Utils/ToTitleCase'


export default function Home(){

    const[user, setUser] = useState("")
    const[modules, setModules] = useState([])
    const[showBanner, setShowBanner] = useState(true)

    const { contentData } = useModulesContext();

    useEffect(() => {

        const uniqueModulesArray = [];

        contentData?.map((contentItem) => {
            const { moduleName, image  } = contentItem;

            const existingModule = uniqueModulesArray.find((module) => module.moduleName === moduleName);

            if (!existingModule) {
                uniqueModulesArray.push({ moduleName, image });
            }
        })

        setModules(uniqueModulesArray)
    }, [contentData])


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
            <div className="bg-wrapper grid-container justify-center items-center p-6 md:p-20" >
            {modules?.map(({ moduleName, image }, index) => (
                <Modulecard 
                    key={index}
                    title={toTitleCase(moduleName)}
                    coverImg={image}
                />
            ))}
            </div>
            {showBanner && <Banner message={`Welcome, ${user}`} />}
        </>
    )
}


//Bug: the welcome banner shows up on each page reload