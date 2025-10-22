
const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  const successStyle = {
    color: '#155724',
    background: '#d4edda',
    fontSize: '18px',
    padding: '12px 16px',
    borderRadius: '6px',
    marginBottom: '12px',
    fontFamily: 'Arial, sans-serif',
    border: '2px solid #99d7a7ff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  }

  return (
    <div style={successStyle}>{message}</div>
  )
}

export default Notification