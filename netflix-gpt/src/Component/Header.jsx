import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { USER_ICON } from "../icons/Icons";
import { auth } from "../utilis/Firebase";
import { LOGO_URL } from "../utilis/constants";
const Header = () => {
  const navigate = useNavigate();
  const handleLogOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }
  return (
    <div className="relative">
    <div className="absolute px-20 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-full">
        <img className="w-44 cursor-pointer"
        src={LOGO_URL}
        alt="logo"/>
        <div>
          <ul className="text-white flex space-x-5 mt-7 cursor-pointer font-bold text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Constact Us</li>
          </ul>
        </div>
        <div>
              <button className=" rounded-3xl bg-red-400 px-8 mt-6 py-2 flex" onClick={handleLogOut}>{USER_ICON}
              LogOut</button>
        </div>
    </div>
    </div>
   
  )
}

export default Header