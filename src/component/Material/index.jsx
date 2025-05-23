import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({ icon, link }) => {
    return (

        <a href={link} target="blank" className="hover:scale-110"><FontAwesomeIcon icon={icon} /></a>

    )
}
export default Material;

