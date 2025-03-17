import "./block.css"
export const Block = ({ column }) => {

    return (
        <>
            <div className={`block ${column!=0 ? `block-${column}` : ""} `}>  {column != 0 ? column : ""}</div>
        </>
    )
}