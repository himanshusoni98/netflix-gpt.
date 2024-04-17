import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { auth } from "../utilis/Firebase";
import { addUser } from "../utilis/userSlice";
import Browser from "./Browser";
import LogIn from "./LogIn";
const Body = () => {
    const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <LogIn />
        },
        {
            path: "/Browser",
            element: <Browser />
        }
    ])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, name: displayName }))
            } else {
               // dispatch(removeUser());
                // ...
            }
        });
    }, [])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body