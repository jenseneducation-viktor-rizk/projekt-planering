import Home from '@/views/Home'
import Contact from '@/views/Contact'
import About from '@/views/About'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path:'/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path:'/about',
        name: 'About',
        component: About
    }
]

export default routes