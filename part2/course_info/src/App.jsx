const Header = ({course}) => {
  console.log('Header: ', course.name);

  return (
    <div>
      <h3>{course.name}</h3>
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
      {course.parts.map(p => {
        console.log('After mapping course contents:', p);
        
        return(
          <Part key={p.id} parts={p} />
        )
      })}
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
console.log('App rendering "courses"', courses)

  return (
    <div>
      <h2>Web development curriculum</h2>
      {courses.map(c => {
        console.log('after mapping course:', c)

        return(
          <Course key={c.id} course={c} />
        )
      })}
    </div>
  )
}

export default App