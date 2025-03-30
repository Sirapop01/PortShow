

const FormattedDate = ({isHighLight, children}) => {
    return (
        <div className="">
            <span className={`text-sm duration-500 ${isHighLight ? "text-primary-title" : ""} `} >
                {children}
            </span>

        </div>
    )
}
export default FormattedDate;

