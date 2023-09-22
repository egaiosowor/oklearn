import { useContext, createContext } from "react";
import { useState, useEffect } from "react";


const ModulesContext = createContext();

export const useModulesContext = () => useContext(ModulesContext);

export const ModulesProvider = ({ children }) => {

    const[modules, setModules] = useState()

    
    useEffect(() => {

        const unsubscribe = () => {

            const modules = [
                {
                    coverImg: "cover_image_url",
                    title: "Shapes",
                    content: [
                        { name: "Square", image: "square_image_url", sound: "square_sound_url" },
                        { name: "Circle", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "Rectangle", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "Octagon", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "Pentagon", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "Star", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "Oval", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "Hexagon", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "Rectangle", image: "circle_image_url", sound: "circle_sound_url" },
                    ]
                },
                {
                    coverImg: "cover_image_url",
                    title: "Fruits",
                    content: [
                        { name: "Apple", image: "square_image_url", sound: "square_sound_url" },
                        { name: "Strawberry", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "Watermelon", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "Carrot", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "Bannana", image: "circle_image_url", sound: "circle_sound_url" },
                    ]
                },
                {
                    coverImg: "cover_image_url",
                    title: "Colors",
                    content: [
                        { name: "red", image: "square_image_url", sound: "square_sound_url" },
                        { name: "blue", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "yellow", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "green", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "white", image: "circle_image_url", sound: "circle_sound_url" },
                        { name: "black", image: "circle_image_url", sound: "circle_sound_url" },
                    ]
                },
            ]; 
            setModules(modules)
        }

        return () => {
            unsubscribe()
        }
    }, [])     


    return(
        <ModulesContext.Provider value={{ modules }} >
            { children }
        </ModulesContext.Provider>
    )
}