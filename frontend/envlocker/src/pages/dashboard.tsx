import { useForm } from "@tanstack/react-form";
import Navbar from "../components/navbar";
import CreateProjectModal from "../components/createProjectModal";

export default function DashboardPage() {
  const form = useForm({
    defaultValues: {
      name: "",
      key: "",
      note: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="grid grid-cols-6 w-[90%] gap-32 mt-8">
        <div className="flex flex-col col-span-1 ">
          <ul className="menu bg-base-200 rounded-box w-56">
            <CreateProjectModal />
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div className="flex flex-row gap-3 p-2 items-center">
              <form.Field
                name="name"
                children={(field) => (
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="text"
                    className="input"
                    placeholder="Name"
                  />
                )}
              />
              <form.Field
                name="key"
                children={(field) => (
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="text"
                    className="input"
                    placeholder="Key"
                  />
                )}
              />
              <form.Field
                name="note"
                children={(field) => (
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="text"
                    className="input"
                    placeholder="Note"
                  />
                )}
              />
              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="btn btn-primary"
                  >
                    {isSubmitting ? "..." : "Add Key"}
                  </button>
                )}
              />
            </div>
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
