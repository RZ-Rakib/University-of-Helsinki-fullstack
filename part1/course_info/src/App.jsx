const Header = ({course}) => {
  console.log(course.name);

  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part = ({parts}) => {
console.log({parts});

  return (
    <div>
      <p>{parts.name} {parts.exercises}</p>
    </div>
  )
}

const Content = ({course})=> {
  console.log({course});

  return (
    <div>
      <Part parts={course.parts[0]}/>
      <Part parts={course.parts[1]}/>
      <Part parts={course.parts[2]}/>
    </div>
    )
}

const Total = ({course}) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  console.log({total:{total}});
  return(
    <div>
      <p>Number of excercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course}/>
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App