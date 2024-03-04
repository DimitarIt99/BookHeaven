import { GiAngelWings } from "react-icons/gi";
function LoginUser() {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="loginForm">
        <div>
          <h1>
            Book Heaven <GiAngelWings />
          </h1>
        </div>
        <form>
          <div className="mb-4 form-floating">
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              placeholder="Email"
            />
            <label htmlFor="loginEmail">Email</label>
          </div>
          <div className="md-4 form-floating">
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder="Password"
            />
            <label htmlFor="loginPassword">Password</label>
          </div>
          <button type="submit" className="btn btn-primary m-1">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginUser;
