const Header = ({course}) => {
  console.log('Header: ', course.name);

  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part = ({parts}) => {
console.log('parts: ',{parts});

  return (
    <div>
      <p>{parts.name} {parts.exercises}</p>
    </div>
  )
}

const Content = ({course})=> {
  console.log('Content: ', course.parts);

  return (
    <div>
      <Part parts={course.parts[0]}/>
      <Part parts={course.parts[1]}/>
      <Part parts={course.parts[2]}/>
      <Part parts={course.parts[3]}/>
    </div>
    )
}
 const Total= ({parts}) => {
  const total = parts.reduce((sum, part) => {
    console.log('what is happening ', sum, part)
    return sum += part.exercises
  }, 0)
  console.log('Total exercises:', total)
  
  return (
    <div>
      <h4>total of {total} exercises</h4>
    </div>
  )
 }

const Course = ({course}) => {
  return (
    <div>
      <Header course = {course} />
      <Content course={course} />
      <Total parts= {course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App