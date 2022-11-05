import { Link } from 'react-router-dom';
import { Logo } from '../components';

import main from '../assets/images/main.svg';

import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby tacos raclette tbh, vaporware intelligentsia hot chicken
            portland. Kinfolk yuccie vaporware roof party tumeric, single-origin
            coffee coloring book aesthetic blue bottle. Offal tumblr tonx enamel
            pin stumptown. Four dollar toast marfa slow-carb blog farm-to-table.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
