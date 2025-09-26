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

export default Course