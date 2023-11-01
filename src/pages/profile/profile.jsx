import { Helmet } from "react-helmet";
import Cookies from "js-cookie";

export default function Profile() {
    const user = JSON.parse(Cookies.get("user"));

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Profile | J-VAC</title>
            </Helmet>
            <div className="px-6 lg:px-12 py-6 bg-lime-50">
                <div className="card w-full  lg:w-4/12 bg-base-100 shadow-xl mx-auto">
                    <figure>
                        <img src={user.image_url} alt="profile" />
                    </figure>

                    <div className="card-body">
                        <span>Nama : {user.name} </span>
                        <span>Email : {user.email}</span>
                        <a
                            href="/dashboard/change-password"
                            className="btn btn-secondary"
                        >
                            Change Password
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
