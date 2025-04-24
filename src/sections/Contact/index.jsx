import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className='flex items-end gap-4 text-2xl'>
            <a
                href="https://github.com/Sirapop01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 hover:text-primary-title duration-1000"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                href="https://www.instagram.com/mol_lntain/?hl=th"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 hover:text-primary-title duration-1000"
            >
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>

    )
}
export default Contact;