import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilis/Firebase";
import { checkValidationData } from "../utilis/Validation";
import { BG_URL, BTN_IMG } from "../utilis/constants";
import Header from "./Header";
const LogIn = () => {
    const navigate = useNavigate();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    
    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const handleClickButton = () => {
        const message = checkValidationData(name.current.value, email.current.value, password.current.value);
        setErrorMessage(message)
    }

    const toggleButton = () => {
        setIsSignInForm(!isSignInForm)
    }

    const SigInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // Sign-in successful
                const user = result.user;
                console.log(user);
                navigate("/Browser")
            })
            .catch((error) => {
                // Handle sign-in errors
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            });
    };
    return (
        <div>
            <Header />
            <div>
                <div className="absolute -z-10">
                    <img className="object-cover w-full h-full" src={BG_URL} alt="bg-img" />
                </div>

                <div className="absolute bg-black w-3/12 flex-col my-32 p-12 mx-auto right-0 left-0 text-white opacity-90 rounded-lg">
                    <h1 className="font-bold text-3xl mb-4">{isSignInForm ? "SignIn" : "SignUp"}</h1>
                    <form onSubmit={(e) => (e.preventDefault())}>
                        {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700" />)}
                        <input ref={email} type="text" placeholder="Email Id" className="p-2 my-4 w-full bg-gray-700" />
                        <input ref={password} type="password" placeholder="Password" className="p-2 my-4 w-full  bg-gray-700" />
                        <p>{errorMessage}</p>
                        <button className="p-3 my-6 bg-red-600 w-full rounded-lg" onClick={handleClickButton}>{isSignInForm ? "SignIn" : "SignUp"}</button>
                        <div className="flex justify-between">
                            <label>
                                <input type="checkbox" />Remember me</label>
                            <h1>Forget Password?</h1>
                        </div>
                        <h1 className="cursor-pointer my-6" onClick={toggleButton}>{isSignInForm ? "New to NetFlix?SignUp Now" : "Already Registered? SignIn now"}</h1>
                        <div>
                            <button onClick={SigInWithGoogle}><img alt="g-logo" src={BTN_IMG} className="" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn