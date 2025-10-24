const Search = ({ onSubmit, value, onChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        Find countries: <input value={value} onChange={onChange} />
        <button type="submit">search</button>
      </form>
    </div>

  )
}

export default Search
