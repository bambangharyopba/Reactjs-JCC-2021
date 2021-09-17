import "./BForm.css";
import { Button } from "antd";

function BForm(props) {
  // title: form title (string)
  // dataInput: data for generating field (array of object with object {name (string), type (string), ref (reference)})
  // action: function to run after submit (function)
  let { title, dataInput, action } = props;

  return (
    <div className="bForm">
      <div className="bForm-title">{title && <h1>{title}</h1>}</div>
      <form onSubmit={action}>
        {dataInput &&
          dataInput.map((data, i) => {
            return (
              <label key={`fi-${i}`}>
                <span>{data.name}</span>
                <input type={data.type} name={data.name} ref={data.ref} />
              </label>
            );
          })}
        <Button htmlType="submit" className="bForm-submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default BForm;
