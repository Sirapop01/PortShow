import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink = ({ isHighLight, title, link }) => {
    
    if(!link) {
        return (
            <div className={`text-sm duration-500 ${isHighLight ? "text-primary-title" : ""} `}>
                {title}
            </div>
        )
    }
    return (
        <div className={`text-sm duration-500 ${isHighLight ? "text-primary-title" : ""} `}>
            <a href={link} target="blank">
                {title}
                <FontAwesomeIcon className={`text-xs -rotate-45 duration-1000 ease-out ${isHighLight ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
            </a>
        </div>
    )
}
export default TitleLink;

