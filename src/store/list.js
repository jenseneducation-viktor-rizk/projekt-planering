import { v4 as uuidv4 } from 'uuid';
let list = [
    {
        name: "Zumba class",
        date: new Date(2020, 11, 17, 9, 0, 0),
        org: "Z-Gang",
        id: uuidv4()
    },
    {
        name: "Coffee on the pier",
        date: new Date(2020, 12, 3, 10, 0, 0),
        org: "Kaffedrickarna",
        id: uuidv4()
    },
    {
        name: "Rave with dave",
        date: new Date(2020, 12, 25, 3, 0, 0),
        org: "Forest trip",
        id: uuidv4()
    },
    {
        name: "Party in the park",
        date: new Date(2020, 10, 4, 17, 0, 0),
        org: "Davey",
        id: uuidv4()
    },
    
]

export default list