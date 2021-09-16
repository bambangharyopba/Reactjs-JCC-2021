import "./BTable.css";

function BTable(props) {
  // title: table title  (string)
  // header: table header (array of string)
  // data: table cell value (array of array)
  // index: show index (boolean)
  let { title, header, data, index } = props;

  return (
    <div className="bTable">
      <div className="bTable-title">{title && <h1>{title}</h1>}</div>
      <table>
        <thead>
          <tr>
            {index && <th className="num-col">No</th>}
            {header &&
              header.map((head, i) => {
                return <th key={`th-${i}`}>{head}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, i) => {
              return (
                <tr key={`rd-${i}`}>
                  {index && <td className="num-col">{i + 1}</td>}
                  {row.map((value, j) => {
                    return <td key={`cv-${j}`}>{value}</td>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default BTable;
