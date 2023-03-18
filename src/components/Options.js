
const Options = ({ cat }) => {
    return (
        <option value={cat} name="cat" id={cat}>{cat}</option>
    )
}

export default Options;