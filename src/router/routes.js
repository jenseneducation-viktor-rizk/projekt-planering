import Home from '@/views/Home'
import Contact from '@/views/Contact'
import About from '@/views/About'
import Event from '@/views/Event'
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
    },
    {
        path:'/event/:id',
        name: 'Event',
        component: Event
    }
]

export default routes