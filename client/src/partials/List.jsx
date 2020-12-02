export default function List(props) {
  const { list, givenClass, handleDelete } = props;
  return (
    <ul className={givenClass}>
      {list.map((item, i) => {
        return <li key={`${item}${i}`}>
          <span>&#127876;</span>
          &nbsp;{item}&nbsp;
          <span onClick={() => handleDelete(item)}>&#10060;</span>
        </li>
      })}
    </ul>
  )
}
