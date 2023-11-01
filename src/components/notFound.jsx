import { Helmet } from "react-helmet";

export default function NotFound() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 Not Found | J-VAC</title>
            </Helmet>
            <img src="/assets/404notfound.gif" alt="cek" />
        </div>
    );
}
