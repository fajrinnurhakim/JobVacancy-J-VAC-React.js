import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const Login = () => {
    let navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleInput = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        setInput({ ...input, [name]: value });
    };

    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();

        let { email, password } = input;
        if (rememberMe && window.confirm("Save your login information?")) {
            saveLoginInformation(email, password);
        }

        axios
            .post("https://dev-example.sanbercloud.com/api/login", {
                email,
                password,
            })
            .then((res) => {
                let data = res.data;
                let { token, user } = data;
                Cookies.set("token", token, { expires: 1 });
                Cookies.set("user", JSON.stringify(user), { expires: 1 });
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Success",
                    timer: 1500,
                });
                navigate("/dashboard");
            })

            .catch((error) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: error,
                    timer: 1500,
                });
            });
    };

    const saveLoginInformation = (email, password) => {
        localStorage.setItem("savedEmail", email);
        localStorage.setItem("savedPassword", password);
    };

    return (
        <div className="px-6 lg:px-12 py-6 bg-lime-50">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login | J-VAC</title>
            </Helmet>
            <div className="flex flex-col-reverse justify-center items-center lg:justify-between lg:flex-row">
                <div className="hidden lg:w-2/5 lg:inline">
                    <img src="/assets/image-hero3.svg" alt="" />
                </div>

                <div className="card w-full md:w-3/5 md:mx-auto lg:w-2/5 shadow-lg bg-white items-center text-center p-4 lg:p-12">
                    <form
                        onSubmit={handleLogin}
                        className="flex flex-col space-y-3 lg:space-y-6 w-full"
                    >
                        <h1 className="text-xl lg:text-4xl font-bold">
                            Login
                        </h1>
                        <img
                            src="/assets/logo.svg"
                            alt=""
                            className="w-32 mx-auto"
                        />

                        <div className="form-control w-full">
                            <label className="label" htmlFor="email">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                id="email"
                                placeholder="yourmail@mail.com"
                                className="input input-bordered w-full"
                                value={input.email}
                                onChange={handleInput}
                                type={"text"}
                                name="email"
                                required
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                id="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                value={input.password}
                                onChange={handleInput}
                                type={"password"}
                                name="password"
                                minLength="8"
                                required
                            />
                        </div>

                        <div className="flex flex-col w-full text-left space-y-2">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                    className="checkbox-xs"
                                />{" "}
                                Remember Me
                            </label>
                            <button type="submit" className="btn btn-secondary">
                                Login
                            </button>
                        </div>

                        <span>
                            Don`t have an account?
                            <a
                                href="/register"
                                className="font-bold text-secondary"
                            >
                                {" "}
                                Register
                            </a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
