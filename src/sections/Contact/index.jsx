import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className='flex items-end gap-4 text-2xl' >
            <FontAwesomeIcon className='hover:scale-125 hover:text-primary-title duration-1000' icon={faGithub} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primary-title duration-1000' icon={faInstagram} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primary-title duration-1000' icon={faFacebook} />
          </div>
    )
}
export default Contact;