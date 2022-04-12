import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState } from 'react';
const auth = getAuth(app);

function App() {

  const [validated, setValidated] = useState('false');
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [name, setName] = useState('')

  const [user, setUser] = useState('')

  console.log(validated)

  const handleNameBlur = (e) => {

    setName(e.target.value)
    setUser(e.target.value)
  }

  const handleEmailBlur = event => {
    setEmail(event.target.value);



  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleRegisterdChange = event => {
    setRegistered(event.target.checked)
  }



  const handleFormSubmit = event => {
    event.preventDefault();
    // const form = event.currentTarget;
    // if (!form.checkValidity() === false) {
    //   event.stopPropagation();
    //   return;
    // }

    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError('Password Should contain at least one special character');
      return;
    }
    setValidated('true');
    setError('');

    if (registered) {

      console.log(registered)
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          console.log(validated)
          setEmail('');
          setPassword('');
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })

      // setEmail('');
      // setPassword('');
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setEmail('');
          setPassword('');
          verifyEmail()
          setUserName();
          console.log(validated)


        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })
    }

    console.log(validated)



  }

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name



    })
      .then((e) => {
        console.log('update profile', e)

      })
      .catch(error => {

        setError(error)
      })

    setUser(auth.currentUser)

  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)

      .then(() => {
        console.log('varied email')
      })
  }

  const hanndlePasswordReset = () => {

    console.log('reset')
    sendPasswordResetEmail(auth, email)
      .then(() => {

        console.log('email sent')
      })
  }

  console.log(user.displayName)





  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs">

        <p>{user.displayName}</p>


        <form noValidate validated={validated} onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">
          <h2 className="text-lg text-center bg-orange-400">Please {registered ? "Login" : "Register"}</h2>
          {

            !registered ? <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>

              <input onBlur={handleNameBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" required />
              {
                !name ? <p className="text-red-500 text-xs italic">Please fill out this name field.</p> : ''
              }
            </div> : ''
          }

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
              !(/^(?=.*[A-Z])/.test(password)) ? <p className="text-red-500 text-xs italic">{error}</p> : ''
            }
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input id="terms" onChange={handleRegisterdChange} aria-describedby="terms" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-900 dark:text-gray-300">Already register</label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <input type='submit' className="bg-blue-200 hover:bg-gray-600 hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value={registered ? 'login' : 'sign up'} />
            <button onClick={hanndlePasswordReset} className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
              Forgot Password?
            </button>
          </div>
        </form>
      </div>


    </div>
  );
}

export default App;
