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
            //   props.setTitle(e.target.value);
            props.setTitle(e.target.value);
          }}
        />
        <button onClick={props.addData}>Add data</button>
      </div>
    </div>
  );
}

export default AddData;
