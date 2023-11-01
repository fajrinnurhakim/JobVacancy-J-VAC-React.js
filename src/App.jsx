import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/footer";
import NavigationBar from "./components/navbar";
import Home from "./pages/home/home";
import JobVacancy from "./pages/jobVacancy/job";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import JobDetail from "./pages/jobDetail/jobDetail";
import NavigationDashboard from "./components/navbarDashboard";
import Dashboard from "./pages/dashboard/dashboard";
import FooterDashboard from "./components/footerDashboard";
import ListJobVacancy from "./pages/listJobVacancy/listJobVacancy";
import Profile from "./pages/profile/profile";
import Form from "./pages/form/form";
import ChangePassword from "./pages/changePassword/changePassword";
import LoginRoute from "./components/auth";
import NotFound from "./components/notFound";
import ApplyJob from "./pages/applyjob/applyjob";

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {loading ? (
                <div className="w-full h-screen bg-lime-50 flex flex-col justify-center items-center">
                    <span className="loading loading-infinity loading-lg"></span>
                </div>
            ) : (
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <NavigationBar />
                                    <Home />
                                    <Footer />
                                </>
                            }
                        />

                        <Route
                            path="/job-vacancy"
                            element={
                                <>
                                    <NavigationBar />
                                    <JobVacancy />
                                    <Footer />
                                </>
                            }
                        />

                        <Route
                            path="/login"
                            element={
                                <>
                                    <NavigationBar />
                                    <Login />
                                    <Footer />
                                </>
                            }
                        />

                        <Route
                            path="/apply-job"
                            element={
                                <>
                                    <NavigationBar />
                                    <ApplyJob />
                                    <Footer />
                                </>
                            }
                        />

                        <Route
                            path="/register"
                            element={
                                <>
                                    <NavigationBar />
                                    <Register />
                                    <Footer />
                                </>
                            }
                        />

                        <Route
                            path="/job-vacancy/:id"
                            element={
                                <>
                                    <NavigationBar />
                                    <JobDetail />
                                    <Footer />
                                </>
                            }
                        />

                        <Route
                            path="/dashboard"
                            element={
                                <>
                                    <LoginRoute>
                                        <NavigationDashboard />
                                        <Dashboard />
                                        <FooterDashboard />
                                    </LoginRoute>
                                </>
                            }
                        />

                        <Route
                            path="/dashboard/list-job-vacancy"
                            element={
                                <>
                                    <LoginRoute>
                                        <NavigationDashboard />
                                        <ListJobVacancy />
                                        <FooterDashboard />
                                    </LoginRoute>
                                </>
                            }
                        />

                        <Route
                            path="/dashboard/list-job-vacancy/form"
                            element={
                                <>
                                    <LoginRoute>
                                        <NavigationDashboard />
                                        <Form />
                                        <FooterDashboard />
                                    </LoginRoute>
                                </>
                            }
                        />

                        <Route
                            path="/dashboard/profile"
                            element={
                                <>
                                    <LoginRoute>
                                        <NavigationDashboard />
                                        <Profile />
                                        <FooterDashboard />
                                    </LoginRoute>
                                </>
                            }
                        />

                        <Route
                            path="/dashboard/change-password"
                            element={
                                <>
                                    <LoginRoute>
                                        <NavigationDashboard />
                                        <ChangePassword />
                                        <FooterDashboard />
                                    </LoginRoute>
                                </>
                            }
                        />

                        <Route
                            path="*"
                            element={
                                <>
                                    <NotFound />
                                </>
                            }
                        />
                    </Routes>
                </Router>
            )}
        </>
    );
}

export default App;
