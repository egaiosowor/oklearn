import { useContext, createContext, useState, useEffect } from "react";
import { db } from "../Config/Firebase";
import { collection, onSnapshot } from 'firebase/firestore';



const ModulesContext = createContext();

export const useModulesContext = () => useContext(ModulesContext);

export const ModulesProvider = ({ children }) => {

    const[contentData, setContentData] = useState();

    useEffect(() => {

        try {
            const contentCollectionRef = collection(db, 'content');

            const unsubscribeContent = onSnapshot(contentCollectionRef, (snapshot) => {
                const contentData = [];

                snapshot.forEach((doc) => {
                    const content = doc.data();
                    contentData.push(content);
                });

                setContentData(contentData);
            });

            return () => {
                // unsubscribeModules();
                unsubscribeContent();
            };
        } catch (err) {
            console.log(err.code)
        }
    })


    return(
        <ModulesContext.Provider value={{ contentData }} >
            { children }
        </ModulesContext.Provider>
    )
}