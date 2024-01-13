import Link from "next/link";
import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";

function Layout({children}) {
  return (
    <div className="container">
      <header>
        <p>todo project</p>
      </header>
      <div className="container--main">
        <aside>
            <p>welcome 🤞</p>
            <ul>
                <li>
                    <VscListSelection/>
                    <Link href="/">todos</Link>
                </li>
                <li>
                    <BiMessageSquareAdd/>
                    <Link href="/add-todo">Add todo</Link>
                </li>
                <li>
                    <RxDashboard/>
                    <Link href="/">profile</Link>
                </li>
            </ul>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
}

export default Layout;
