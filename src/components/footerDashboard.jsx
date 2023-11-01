export default function FooterDashboard() {
    return (
        <div>
            <div className="flex flex-col items-center lg:flex-row lg:justify-between py-5 bg-secondary px-12 space-x-5">
                <div className="w-full lg:w-1/3">
                    <div className="flex-col">
                        <a href="/">
                            <img
                                src="/assets/jvac2.svg"
                                alt="footer"
                                className="w-24 h-9"
                            />
                        </a>
                        <p>
                            J-Vac is a website for job seekers to find
                            employment opportunities and for employers to post
                            job openings from their companies.
                        </p>
                    </div>
                </div>

                <div className="w-full lg:w-1/3">
                    <h1 className="text-lg font-bold text-center">J-Vac</h1>
                    <div className="flex flex-col">
                        <a href="/" className="hover:text-white">
                            Dashboard
                        </a>
                        <a href="/job-vacancy" className="hover:text-white">
                            List Job Vacancy
                        </a>
                        <a href="/login" className="hover:text-white">
                            Form
                        </a>
                        <a href="/dashboard" className="hover:text-white">
                            Profile
                        </a>
                        <a href="/dashboard" className="hover:text-white">
                            Change Password
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-1/3">
                    <h1 className="text-lg font-bold text-center">Address</h1>
                    <div className="flex flex-col">
                        <p>jvac@jobvacancy.com</p>
                        <p>
                            JL. Setiabudhi No. 193 Sukasari, Bandung West Java,
                            Indonesia
                        </p>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center p-4 bg-secondary text-base-content">
                <aside>
                    <p> © 2023 - Create by Fajrin Nurhakim</p>
                </aside>
            </footer>
        </div>
    );
}
