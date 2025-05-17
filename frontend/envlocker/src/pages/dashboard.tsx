import Navbar from "../components/navbar";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="grid grid-cols-6 w-[90%] gap-10 mt-8">
        <div className="flex col-span-1 ">
          <ul className="menu bg-base-200 rounded-box w-56">
            <li>
              <a>Project 1</a>
            </li>
            <li>
              <a>Project 2</a>
            </li>
            <li>
              <a>Project 3</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col overflow-x-auto border-1 border-neutral-500 rounded-xl col-span-5">
          <form className="flex flex-row gap-3 p-2 items-center">
            <input type="text" className="input" placeholder="Name" />
            <input type="text" className="input" placeholder="Key" />
            <input type="text" className="input" placeholder="Note" />
            <button className="btn btn-primary">Add Key</button>
          </form>
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Key</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
