
export default function Banner({ message }){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50">
          
            <div
                className="fixed inset-0 bg-black opacity-50"
            ></div>
            
            <div className="flex flex-col justify-center items-center p-4 shadow-lg rounded-lg bg-banner z-50 ">
                <p className="mt-4 text-white text-2xl text-center">
                    { message }
                </p>
            </div>
        </div>
    )
}