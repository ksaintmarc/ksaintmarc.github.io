import '../App.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


function Home() {
  return (
    <div className="App">
      <p className="title">
        Kelana Saint-Marc
      </p>
      <img className="profilepic" src={"img/ProfilePic.jpg"} alt="Kelana Saint-Marc" />
      <p className="desc">
        Développeuse informatique spécialisée dans le web et l'image 3D
      </p>
      <div className='contact'>
        <a href="https://github.com/ksaintmarc">
          <GitHubIcon/>     
        </a>
        <a href="https://www.linkedin.com/in/kelanasaintmarc/">
          <LinkedInIcon/>      
        </a>
        <a href="https://www.instagram.com/artemis.lavender/">
          <InstagramIcon/>      
        </a>
        <a href="https://www.youtube.com/@artemis653">
        <YouTubeIcon/>     
        </a>
      </div>
      
    </div>
  );
}

export default Home;