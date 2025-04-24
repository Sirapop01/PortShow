import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from '../../contents/header.js'
const Header = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='text-3xl text-primary-title font-semibold'>{data.name}</div>
            <div className='text-primary-subcontent font-semibold'>{data.title}</div>
            <div className='text-sm'>{data.caption}</div>
            <a href='https://www.canva.com/design/DAGi7cYKvrE/rCZxZCLayEBmeRJr-9I1ug/edit?utm_content=DAGi7cYKvrE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target='_blank' >
                <div className='my-4 '>
                    <span className='rounded-md bg-primary-title text-gray-300 py-2 px-4'>
                        {data.btnText}
                        <span className='rotate-90 inline-block ml-2'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown} /></span>
                    </span>
                </div>
            </a>
        </div>
    )
}

export default Header;