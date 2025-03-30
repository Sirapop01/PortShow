import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
    { title: "About", sectionId: "About-section" },
    { title: "Experience", sectionId: "Experience-section" },
    { title: "Project", sectionId: "Project-section" },
    { title: "Article", sectionId: "Article-section" },
]
const Navbar = ({navBarItems, currentSection}) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const handleClick = (sectionId) => {
        console.log(sectionId);
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    return (
        <div className='hidden lg:flex flex-col  font-semibold '>
            {
                navBarItems.map((e, i) => (
                    <div
                        key={`nav-${e}-${i}`}
                        onClick={() => handleClick(e.sectionId)}
                        className="cursor-pointer flex py-3"
                        onMouseEnter={() => setIsMouseEnter({ [e.title]: true })}
                        onMouseLeave={() => setIsMouseEnter({ [e.title]: false })}
                    >
                        <div>
                            <FontAwesomeIcon 
                            className={`text-primary-title new-arrow ${currentSection === e.sectionId ? "text-primary-title" : isMouseEnter[e.title] ? "" : "hidden"}`} icon={faArrowRight} />
                        </div>
                            <div className={`${currentSection === e.sectionId || isMouseEnter[e.title] ? "translate-x-4" : ""} transition-all duration-500 ease-out`}>
                                {e.title}
                            </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Navbar;