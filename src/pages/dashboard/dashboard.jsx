import { Helmet } from "react-helmet";

export default function Dashboard() {
    return (
        <div className="bg-lime-50">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard | J-VAC</title>
            </Helmet>
            <div className="flex flex-col py-5 xs-2 lg:px-12 lg:flex-row">
                <div className="w-8/12 mx-auto md:w-1/2 lg:w-1/2">
                    <img src="/assets/Image-hero2.svg" alt="hero image" />
                </div>

                <div className="flex flex-col items-center justify-center w-full px-2 space-y-5 text-center lg:w-1/2 lg:pe-24 lg:text-left">
                    <h1 className="text-2xl font-bold lg:text-6xl">
                        Post Your Job Vacancy
                    </h1>
                    <p className="text-xs lg:text-sm">
                        Create job listings for the positions you're offering.
                        Receive daily notifications and directly accept
                        applications from potential candidates. Sign up now for
                        free and start posting your job vacancies.
                    </p>
                    <div className="flex-row w-full my-5">
                        <a
                            href="/dashboard/list-job-vacancy/form"
                            className="btn btn-secondary"
                        >
                            Post
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
