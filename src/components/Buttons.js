
const Buttons = ({cat, onToggleSelected, isClicked}) => {

    return (
        <button id={cat} className={isClicked === cat ? "selected" : null} onClick={() => onToggleSelected(cat)}>{cat}</button>
    )
}

export default Buttons;