export default function FindJob() {
    return (
        <div>
            <div className="flex flex-col-reverse xs-2 py-2 lg:px-12 lg:flex-row">
                <div className="w-full px-2 text-center flex flex-col justify-center items-center lg:w-1/2 lg:pe-24 lg:text-left">
                    <h1 className="text-2xl font-bold my-5 lg:text-6xl">
                        Find the job of your Dreams
                    </h1>
                    <p className="text-xs lg:text-sm my-5">
                        Find You New Job Today! New Job Postings Everyday just
                        for you, browse the job you want and apply wherever you
                        want
                    </p>
                    <div className="flex-row w-full my-5">
                        <a href="/job-vacancy" className="btn btn-secondary">
                            Job Vacancy
                        </a>
                    </div>
                </div>

                <div className="w-8/12 mx-auto md:w-1/2 lg:w-1/2">
                    <img src="/assets/image-hero.svg" alt="hero image" />
                </div>
            </div>
        </div>
    );
}
