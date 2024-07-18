import './login.css'
import Navbar from '@/components/navbar/navbar';
import Footer from "@/components/footer"

export default function Component() {
  return (
    <main className='flex flex-col items-center'> 
      <Navbar />

      <div className="login">
        <div className="bloca"></div>
        <div className="blocb">
          <h1>Devcci tools</h1>
          <div className='w-full'>
            <h1>Commencer</h1>
            <p>Vous êtes pas encore inscrit? <span className='register-text'> inscrivez vous</span></p>
          </div>
          <form action="">
            <label htmlFor="">Email</label>
            <input className='my-3' type="email" name="" id="" />
            <label htmlFor="">Mot de passe</label>
            <input className='my-3' type="password" name="" id="" />
            <button className='my-3' type="submit">Se connecter</button>
          </form>
        </div>
      </div>

      <Footer/>
    </main>
  )
}
