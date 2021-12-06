import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Body from './components/Body.js'
import Image from './components/Image.js'
import Tasks from './components/Tasks.js'
import Tasks2 from './components/Tasks2.js'
import { useState } from 'react'


const App = () => {

  const [tasks, setTasks] = useState ([
    {
        id:1,
        text:'food shopping',
        day:'Jan 5th at 2:30pm',
        reminder:true,
    },
    {
        id:2,
        text:'furniture shopping',
        day:'Feb 5th at 2:30pm',
        reminder:true,
    },
    {
        id:3,
        text:'Doctor appintment',
        day:'Mar 5th at 2:30pm',
        reminder:true,
    },
    {
        id:4,
        text:'School meeting',
        day:'April 5th at 2:30pm',
        reminder:true,
    },
])

const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
//console.log('delete',id)
 // setTasks(tasks.fitler((task) => task.id !==id))
}

  return (
    <div className='container'>
      <Header/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask}/>
  ) : (
    'No Tasks to Show'
  )}
    <Image/>
    <Body/>
    <Footer/>
    </div>
  )
}

export default App
