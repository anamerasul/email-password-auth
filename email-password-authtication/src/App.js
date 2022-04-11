
import './App.css';

import app from './firebase.init';
import { getAuth } from 'firebase/auth'
const auth = getAuth(app);
function App() {
  return (
    <div className=" App ">
      <form className="bg-white shadow-md rounded px-8 pt-16 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl" style={{ 'margin': '20px' }}>
        <div className="m-4 pt-18 style={{ 'margin': '20px' }}">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 ml-8" style={{ 'margin': '20px' }}
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mx-16 block w-full appearance-none leading-normal"
            type="email"
            id="username"
            placeholder="jane@example.com"
          />
        </div>
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2" style={{ 'margin': '20px' }}
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            id="password"
            type="password"
          />
        </div>
      </form>
    </div>
  );
}

export default App;
