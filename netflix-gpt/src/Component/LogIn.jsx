import { useRef, useState } from "react";
import { checkValidationData } from "../utilis/Validation";
import Header from "./Header";

const LogIn = () => {
    const [isSignInForm , setIsSignInForm ] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null)

    const email= useRef(null);
    const password = useRef(null);

    const handleClickButton = () =>{
        const message = checkValidationData(email.current.value , password.current.value);
        setErrorMessage(message)
    }

    const toggleButton = ()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div>
        <div className="absolute -z-10">
        <img className="bg-gradient-to-b from from-black"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="bg-img"/>
        </div>
        <div className="absolute bg-black w-3/12 flex-col my-32 p-12 mx-auto right-0 left-0 text-white opacity-90 rounded-lg">
        <h1 className="font-bold text-3xl mb-4">{isSignInForm? "SignIn": "SignUp"}</h1>
            <form onSubmit={(e)=>(e.preventDefault())}>
                {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700"/>)  }
                <input ref={email} type="text" placeholder="Email Id" className="p-2 my-4 w-full bg-gray-700"/>
                <input ref={password} type="password" placeholder="Password" className="p-2 my-4 w-full  bg-gray-700"/>
                <p>{errorMessage}</p>
                <button className="p-3 my-6 bg-red-600 w-full rounded-lg" onClick={handleClickButton}>{isSignInForm? "SignIn": "SignUp"}</button>
                <div className="flex justify-between">
                <label>
                <input type="checkbox" />Remember me</label>
                <h1>Forget Password?</h1>
                </div>
                <h1 className="cursor-pointer my-6" onClick={toggleButton}>{isSignInForm? "New to NetFlix?SignUp Now": "Already Registered? SignIn now"}</h1>
            </form>
        </div>
    </div>
    </div>
  )
}

export default LogIn