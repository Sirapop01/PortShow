import { useEffect } from 'react';
import { data } from '../../contents/about.js'

const About = ({
    onInitial,
    title = "",
}) => {

    const SECTION_ID = `${title}-section`;

    useEffect(() => {
        onInitial(SECTION_ID);
    }, []);

    return (
        <div className='space-y-4 px-2 scroll-m-14' id={SECTION_ID}>
            <div className='text-primary-title'>{data.title}</div>
            <div className="text-primary-content">{data.desception}</div>
        </div>
    )
}
export default About;  