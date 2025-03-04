import { IData } from "../App";


interface IProps {
  posts: Array<IData>;
}

function ShowData(props: IProps) {
  return (
    <div>
      {props.posts.map((post, index) => {
        return (
          <div
            className="box"
            key={index}
            style={{
              display: "flex",
              border: "1px solid red",
              flexDirection: "column",
              margin: "10px",
            }}
          >
            <p> id: {post.id}</p>

            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ShowData;
