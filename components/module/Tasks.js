import { RiMastodonLine } from "react-icons/ri";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
function Tasks({ data, back, next, fetchTodos }) {
  return (
    <div className="tasks">
      {data?.map((i) => (
        <div key={i._id} className="task__card">
          <span className={i.status}></span>
          <RiMastodonLine />
          <h4>{i.title}</h4>
          <div style={{display:"flex", justifyContent:"space-between"}}>
          {back ? <button className="button-back"><BiLeftArrow/> back</button> : null}
          {next ? <button className="button-next">next<BiRightArrow/></button> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
