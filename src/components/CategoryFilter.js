import Buttons from "./Buttons";

function CategoryFilter({ categoriesState, isClicked, setIsClicked }) {

  const toggleSelected = (cat) => {
    setIsClicked(cat)
  }

  const displayCatBtns = categoriesState.map((cat) => {
    return <Buttons cat={cat} key={cat} isClicked={isClicked} onToggleSelected={toggleSelected} />
  });
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCatBtns}
    </div>
  );
}

export default CategoryFilter;
