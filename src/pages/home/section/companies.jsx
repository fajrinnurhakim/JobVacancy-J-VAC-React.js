export default function Companies() {
    return (
        <div>
            <div className="flex-col px-2 py-5 bg-lime-100 lg:px-12">
                <h2 className="text-lg py-5 text-center font-bold">
                    Join Most Well Known Companies Around The World
                </h2>
                
                <div className="flex lg:space-x-5 space-y-5 flex-wrap justify-between px-2 py-5 lg:px-12">
                    <img
                        src="/assets/Airbnb.svg"
                        alt="companies"
                        className="w-44 lg:w-52"
                    />
                    <img
                        src="/assets/Google.svg"
                        alt="companies"
                        className="w-44 lg:w-52"
                    />
                    <img
                        src="/assets/Microsoft.svg"
                        alt="companies"
                        className="w-44 lg:w-52"
                    />
                    <img
                        src="/assets/Slack.svg"
                        alt="companies"
                        className="w-44 lg:w-52"
                    />
                </div>
            </div>
        </div>
    );
}
