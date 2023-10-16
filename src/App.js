import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

const App = () => {
  const [data, setData] = useState([])
  const [task1, setTask] = useState('')
  const [tag1, setTag] = useState(tagsList[0].displayText)
  const [data1, setData1] = useState(data)

  const add = e => {
    e.preventDefault()
    setTag(tagsList[0].displayText)
    setTask('')
    setData([...data, {id: uuidv4(), task: task1, tag: tag1}])
    setData1([...data, {id: uuidv4(), task: task1, tag: tag1}])
  }

  const f = id => {
    const updatedData = data.filter(each => {
      console.log(each.tag === id)

      if (each.tag === id) {
        return true
      }
      return false
    })
    setData1(updatedData)
  }

  console.log(data1)

  return (
    <div className="main-container">
      <div className="app-container">
        <div className="add-task">
          <h1 className="">Create a Task</h1>
          <form>
            <label htmlFor="task">Task</label>
            <input
              id="task"
              type="text"
              placeholder="Enter the task here"
              onChange={e => setTask(e.target.value)}
              value={task1}
            />
            <label htmlFor="tag">Tags</label>

            <select
              onChange={e => setTag(e.target.value)}
              id="tag"
              value={tag1}
            >
              {tagsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit" onClick={add}>
              Add Task
            </button>
          </form>
        </div>
        <div className="tag-section">
          <h1 className="">Tags</h1>
          <ul className="tags">
            {tagsList.map(each => (
              <li className="tag" key={each.optionId}>
                <button type="button" onClick={() => f(each.optionId)}>
                  {each.displayText}
                </button>
              </li>
            ))}
          </ul>
          <h1>Tasks</h1>
          <ul className="task-container">
            {data1.length === 0 ? (
              <p>No Tasks Added Yet</p>
            ) : (
              <ul>
                {data1.map(each => (
                  <li className="item" key={each.id}>
                    <p>{each.task}</p>
                    <p>{each.tag}</p>
                  </li>
                ))}
              </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
