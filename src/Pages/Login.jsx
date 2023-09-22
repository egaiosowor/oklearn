import Kids from '../Assets/Media/Kids.svg';
import { useState } from 'react';
import { usernameIsValid } from '../Utils/Validate';
import { useNavigate } from 'react-router-dom';
import Banner from '../Components/Banner';

export default function Login(){

    const[username, setUsername] = useState("")
    const[showBanner, setShowBanner] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(usernameIsValid(username)){
            localStorage.setItem("isUserSignedIn", true)
            localStorage.setItem("user", username)
            navigate('/')
        }else{
            handleInvalidUsername()
        }
    }

    const handleInvalidUsername = () => {
        setShowBanner(true)
        setTimeout(() => {
            setShowBanner(false)
        }, 4000)
    }

    return(
        <>
            <div className="px-10 bg-wrapper flex flex-col justify-end items-center" >
                <div className="space-y-4" >
                    <form 
                        onSubmit={handleSubmit}
                        className='flex flex-col items-center space-y-2' 
                    >
                        <input 
                            type='text'
                            required
                            className='bg-input px-6 outline-none text-white'
                            placeholder='enter in your name'
                            value={username}
                            onChange={(e) => {setUsername(e.target.value)}}
                        />
                        <button 
                            type='submit'
                            className='bg-button text-white text-xl' 
                        >
                            ENTER
                        </button>
                    </form>
                    <div className='max-w-[500px]' >
                        <img 
                            src={Kids} 
                            alt="Kids playing" 
                            className='w-full'
                        />
                    </div>
                </div>
            </div>
            {showBanner && <Banner message={'Name should not include any special characters and should not exceed 12 characters'} />}
        </>
    )
}