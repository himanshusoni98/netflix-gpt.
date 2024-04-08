import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browser from "./Browser"
import LogIn from "./LogIn"
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element : <LogIn/>
        },
        {
            path: "/Browser",
            element : <Browser/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body