import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useState } from 'react';
const auth = getAuth(app);

function App() {

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [error, setError] = useState('password Should contain a Capital')

  const [validated, setValidated] = useState('false');

  console.log(typeof validated);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);

  }

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);

  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.checkValidity())
    if (form.checkValidity() === false) {

      event.stopPropagation();
      return
    }

    if (/^(?=.*[A-Z])/.test(password)) {
      setError('')
    }

    setValidated('true');

    // setError('')

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {

        console.error(error)
      })


    console.log(event, email, password);
    event.preventDefault();

    console.log(validated)

    return form
  }

  console.log(!error)
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs">

        <form noValidate validated={validated} onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">
          <h2 className="text-lg text-center bg-orange-400">Please Register</h2>
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="Email">
              Email
            </label>

            <input onBlur={handleEmailBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" required />
            {
              !email ? <p className="text-red-500 text-xs italic">Please fill out this email field.</p> : ''
            }
          </div>



          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input onBlur={handlePasswordBlur} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required />

            {
              !password ? <p className="text-red-500 text-xs italic">{error}.</p> : ''
            }
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
