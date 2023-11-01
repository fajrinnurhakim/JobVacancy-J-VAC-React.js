export default function PostJob() {
    return (
        <div>
            <div className="flex flex-col xs-2 py-5 lg:px-12 lg:flex-row">
                <div className="w-8/12 mx-auto md:w-1/2 lg:w-1/2">
                    <img src="/assets/Image-hero2.svg" alt="hero image" />
                </div>
                
                <div className="w-full px-2 text-center space-y-5 flex flex-col justify-center items-center lg:w-1/2 lg:pe-24 lg:text-left">
                    <h1 className="text-2xl font-bold lg:text-6xl">
                        Post Your Job Vacancy
                    </h1>
                    <p className="text-xs lg:text-sm">
                        Create job listings for the positions you re offering.
                        Receive daily notifications and directly accept
                        applications from potential candidates. Sign up now for
                        free and start posting your job vacancies.
                    </p>
                    <div className="flex-row w-full my-5">
                        <a href="/dashboard" className="btn btn-secondary">
                            Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
