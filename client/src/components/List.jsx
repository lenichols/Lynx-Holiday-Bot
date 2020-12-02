export default function List(props) {
  const { list, handleDelete } = props;
  return (
    <ul id="App-nameslist">
      {list.map((name, i) => {
        return <li key={i}>{name}
            &nbsp;
            <span className="List-deleteBtn">
            <i onClick={() => handleDelete(name, i)} className="fas fa-times"></i>
          </span>
        </li>
      })}
    </ul>
  )
}
