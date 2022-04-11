import app from './firebase.init';
import { getAuth } from 'firebase/auth'
const auth = getAuth(app);

function App() {

  const handleEmailBlur = (event) => {
    console.log(event.target.value);

  }

  const handlePasswordBlur = (event) => {
    console.log(event.target.value);

  }

  const handleFormSubmit = (event) => {
    console.log(event);
    event.preventDefault();
  }
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs">

        <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">
          <h2 className="text-lg text-center bg-orange-400">Please Register</h2>
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="Email">
              Email
            </label>
            <input onBlur={handleEmailBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input onBlur={handlePasswordBlur} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <input type='submit' className="bg-blue-200 hover:bg-gray-600 hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value='Sign up' />
            <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="/">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
