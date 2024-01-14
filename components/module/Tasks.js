import { RiMastodonLine } from "react-icons/ri";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
function Tasks({ data }) {
 return (
    <div className="tasks">
      {data?.map((i) => (
        <div key={i._id} className="task__card">
          <span className={i.status}></span>
          <RiMastodonLine />
          <h4>{i.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
