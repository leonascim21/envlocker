export default function SignInPage() {
  return (
    <div className="flex h-dvh justify-center items-center">
      <div className="card w-96 bg-base-200 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Sign In</h2>
          <form className="flex flex-col gap-3 p-2">
            <div>
              <label className="label">Email</label>
              <input type="email" className="input" />
            </div>

            <div>
              <label className="label">Password</label>
              <input type="password" className="input" />
            </div>
          </form>
          <div className="card-actions">
            <button className="btn btn-primary">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
