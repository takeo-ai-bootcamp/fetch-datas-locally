interface IProps {
  setTitle: (value: string) => void;
  addData: () => void;
}

function AddData(props: IProps) {
  return (
    <div className="content-app">
      <div>
        <input
          type="text"
          onChange={(e) => {
            props.setTitle(e.target.value);
          }}
          className="input input-lg"
        />
        <button onClick={props.addData} className="btn">
          Add data
        </button>
      </div>
    </div>
  );
}

export default AddData;
