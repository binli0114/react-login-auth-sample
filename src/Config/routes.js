import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import PageNotFound from '../Pages/PageNotFound'



const routes =[
    {
        path:'/login',
        component: Login
    },
    {
        path:'/dashboard',
        component: Dashboard
    },
    {
        path:'/*',
        component: PageNotFound
    },
]

export default routes