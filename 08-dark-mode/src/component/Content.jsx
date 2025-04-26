import logo from '../assets/ProfileMain.svg'

const Content = () => {
  return (
    <>
      <article className="profile-icon">
        <img src={logo} alt="profile" />
      </article>
      <article className="profile-into">
        <h1>Hi, I am Aman Singh</h1>
        <p>Frontend Developer</p>
      </article>
    </>
  )
}

export default Content
