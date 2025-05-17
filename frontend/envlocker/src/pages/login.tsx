import { useForm } from "@tanstack/react-form";
import { NavLink } from "react-router";

export default function SignInPage() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div className="flex h-dvh justify-center items-center">
      <div className="card w-96 bg-base-200 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Sign In</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div className="flex flex-col gap-3 p-2">
              <form.Field
                name="email"
                children={(field) => (
                  <div>
                    <label htmlFor={field.name} className="label">
                      Email
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type="email"
                      className="input"
                      required
                    />
                  </div>
                )}
              />

              <form.Field
                name="password"
                children={(field) => (
                  <div>
                    <label htmlFor={field.name} className="label">
                      Password
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type="password"
                      className="input"
                      required
                    />
                  </div>
                )}
              />
              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                  <div className="card-actions">
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="btn btn-primary"
                    >
                      {isSubmitting ? "..." : "Sign In"}
                    </button>
                  </div>
                )}
              />
              <NavLink to="/signup">
                <p className="text-sm text-primary underline">
                  Create an Account
                </p>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
