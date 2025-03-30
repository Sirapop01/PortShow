import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div>
            <div className="flex justify-end mb-10">
                <span>
                    Powered by React.js and Tailwind CSS
                    <a href="http://localhost:5173/" target="blank">
                        <FontAwesomeIcon className="ml-2" icon={faGithub} />
                    </a>
                </span>
            </div>
        </div>
    )
}
export default Footer;