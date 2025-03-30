import ContentContainer from "../../component/ContentContainer";
import About from "../About";
import { data as dataExperience } from "../../contents/experience";
import { data as dataProject } from "../../contents/project";
import Footer from "../Footer";


const RigthSection = ({ onInitial }) => {
    return (
        <div className="grid gap-y-14 lg:gap-y-40 px-3">

            <div className=''>
                <About 
                onInitial={onInitial}
                title="About"
                />
            </div>
            <ContentContainer
                onInitial={onInitial}
                title="Experience"
                data={dataExperience}

            />

            <ContentContainer
                onInitial={onInitial}
                title="Project"
                data={dataProject}
            />

            <ContentContainer
                onInitial={onInitial}
                title="Article"
                data={dataExperience}
            />

            <Footer />
        </div>
    );
}
export default RigthSection;