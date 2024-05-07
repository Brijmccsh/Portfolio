import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

{/* <div className="container mx-auto p-6"> */}
const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="text-center md:text-left md:flex justify-center m-auto">
        <img className="mx-auto w-64 h-64 rounded-full" src="/images/profile.png" /> {/* image */}
        <div className="my-auto p-6 text-lg">
          <div className="font-display font-semibold text-3xl">
          Brijesh Tiwari
          </div>
          <div>
            Computer & Information Science at Syracuse University
          </div>
          <div>
            Software Engineer || Graduate Researcher
          </div>
          <div className="space-x-4 mt-3" style={{fontSize: 32}}>
            <button className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-500">
              <a href="mailto:brtiwari@syr.edu">
                <FontAwesomeIcon
                  icon={faEnvelope}
                />
              </a>
            </button>
            <button className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-500">
              <a target="_blank" href="/CV.pdf">
                <FontAwesomeIcon
                  icon={faFileLines}
                />
              </a>
            </button>
            <button className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-500">
              <a target="_blank" href="https://github.com/Brijmccsh/">
                <FontAwesomeIcon
                  icon={faGithub}
                />
              </a>
            </button>
            <button className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-500">
              <a target="_blank" href="https://linkedin.com/in/brijmccsh/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
