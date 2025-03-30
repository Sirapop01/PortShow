const Tech = ({ isHighLight, data }) => {
    return (
        <div className="flex gap-2 text-sm">
            {
                data.map((e,i) => (
                    <div key={`${e}-tech-${i}`} className={`bg-primary-base px-2 py-1 duration-500 rounded-md ${isHighLight ? "hover:text-primary-title" : ""}`}>{e}</div>
                ))
            }
        </div>
    )
}
export default Tech;

