import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

export default function ChangePassword() {
  let navigate = useNavigate();

  const handleChangePassword = async (event) => {
    event.preventDefault();

    const currentPassword = event.target.current_password.value;
    const newPassword = event.target.new_password.value;
    const newConfirmPassword = event.target.new_confirm_password.value;

    if (newPassword !== newConfirmPassword) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Password do not match',
        timer: 1500,
      });
      return;
    }

    const token = Cookies.get('token');

    const requestData = {
      current_password: currentPassword,
      new_password: newPassword,
      new_confirm_password: newConfirmPassword,
    };

    try {
      const response = await axios.post(
        'https://final-project-api-alpha.vercel.app/api/change-password',
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your Password has been update',
          timer: 1500,
        });
        navigate('/dashboard');
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Password change failed. Please try again',
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: error,
        timer: 1500,
      });
    }
  };

  return (
    <div className="px-6 py-6 lg:px-12 bg-lime-50">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Change Password | J-VAC</title>
      </Helmet>
      <div className="flex flex-col-reverse items-center justify-center lg:justify-between lg:flex-row">
        <div className="hidden lg:w-2/5 lg:inline">
          <img src="/assets/image-hero5.svg" alt="" />
        </div>

        <div className="items-center w-full p-6 text-center bg-white shadow-lg card md:w-3/5 md:mx-auto lg:w-2/5 lg:p-12">
          <form
            className="flex flex-col w-full space-y-3 lg:space-y-6"
            onSubmit={handleChangePassword}
          >
            <h1 className="text-4xl font-bold">Change Password</h1>
            <img src="/assets/logo.svg" alt="" className="w-32 mx-auto" />

            <div className="w-full form-control">
              <label className="label" htmlFor="current_password">
                <span className="label-text">Current Password</span>
              </label>
              <input
                id="current_password"
                placeholder="Current password"
                className="w-full input input-bordered"
                type={'password'}
                name="current_password"
                minLength="8"
                required
              />
            </div>

            <div className="w-full form-control">
              <label className="label" htmlFor="new_password">
                <span className="label-text">New Password</span>
              </label>
              <input
                id="new_password"
                placeholder="New password"
                className="w-full input input-bordered"
                type={'password'}
                name="new_password"
                minLength="8"
                required
              />
            </div>

            <div className="w-full form-control">
              <label className="label" htmlFor="new_confirm_password">
                <span className="label-text">New Confirm Password</span>
              </label>
              <input
                id="new_confirm_password"
                placeholder="New confirm password"
                className="w-full input input-bordered"
                type={'password'}
                name="new_confirm_password"
                minLength="8"
                required
              />
            </div>

            <input
              type={'submit'}
              className="btn btn-secondary"
              value="Change Password"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
