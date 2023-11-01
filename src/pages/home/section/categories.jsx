export default function Categories() {
    return (
        <div>
            <div className="flex-col px-2 py-5 bg-lime-100 lg:px-12">
                <h2 className="text-lg py-5 text-center font-bold">
                    Job Categories
                </h2>

                <div className="flex flex-wrap flex-row justify-around space-x-0 lg:space-x-5 lg:px-12">
                    <div className="card bg-lime-50 text-black-content w-1/4">
                        <div className="card-body items-center text-center">
                            <img
                                src="/assets/Webdev.svg"
                                alt="catrgory"
                                className="w-12 h-12"
                            />
                            <h2 className="card-title text-sm lg:text-xl">
                                Web Developer
                            </h2>
                        </div>
                    </div>

                    <div className="card bg-lime-50 text-black-content w-1/4">
                        <div className="card-body items-center text-center">
                            <img
                                src="/assets/ux.svg"
                                alt="catrgory"
                                className="w-12 h-12"
                            />
                            <h2 className="card-title text-sm lg:text-xl">
                                UI/UX Design
                            </h2>
                        </div>
                    </div>

                    <div className="card bg-lime-50 text-black-content w-1/4">
                        <div className="card-body items-center text-center">
                            <img
                                src="/assets/Marketing.svg"
                                alt="catrgory"
                                className="w-12 h-12"
                            />
                            <h2 className="card-title text-sm lg:text-xl">
                                Marketing
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
