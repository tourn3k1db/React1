import {useState} from 'react'

const Tasks2 = () => {
    const [task, setTasks] = useState ([
        {
            id:1,
            text:'food shopping',
            day:'Jan 5th at 2:30pm',
            reminder:true,
        },
    ])


    return (
        <>
        {task.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
        ))}
        </>
    )
}

export default Tasks2




// import {useState} from 'react'

// const Tasks2 = () => {

//     const [task, setTasks] = useState ({insert array here})

//     return (
//         <>
//         {task.map((task) => (
//         <h3 key={task.id}>{task.text}</h3>
//         ))}
//         </>
//     )
// }

// export default Tasks2



