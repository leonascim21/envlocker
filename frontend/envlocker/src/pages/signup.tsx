import { useForm } from "@tanstack/react-form";
import { z } from "zod";

const formSchema = z
  .object({
    email: z.string().email("Invalid Email Address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export default function SignUpPage() {
  const form = useForm({
    validators: {
      onBlur: formSchema,
    },
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div className="flex h-dvh justify-center items-center">
      <div className="card w-96 bg-base-200 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Sign Up</h2>
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
                    {field.state.meta.errors.length > 0 &&
                      field.state.meta.isDirty && (
                        <p className="text-red-300">
                          {field.state.meta.errors[0]?.message}
                        </p>
                      )}
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
                    {field.state.meta.errors.length > 0 &&
                      field.state.meta.isDirty && (
                        <p className="text-red-300">
                          {field.state.meta.errors[0]?.message}
                        </p>
                      )}
                  </div>
                )}
              />

              <form.Field
                name="confirmPassword"
                children={(field) => (
                  <div>
                    <label htmlFor={field.name} className="label">
                      Confirm Password
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
                    {field.state.meta.errors.length > 0 &&
                      field.state.meta.isDirty && (
                        <p className="text-red-300">
                          {field.state.meta.errors[0]?.message}
                        </p>
                      )}
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
                      {isSubmitting ? "..." : "Sign Up"}
                    </button>
                  </div>
                )}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
