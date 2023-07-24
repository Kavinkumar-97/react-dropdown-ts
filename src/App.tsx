import './App.css'
import {useState} from "react";
import DropDown from "./components/DropDown.tsx";

function App() {

  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedItem, setSelectItem] = useState<string | null>(null);

  const items: string[] = ['Yes', 'No'];

  const onHoverHandler = () => {
    setShowDropDown(true)
  }

  const onSelectItem = (item: string) => {
    setShowDropDown(false);
    setSelectItem(item);
  }

  return (
    <>
      <div className="root">
        <h2 className="heading">Should you use this dropdown</h2>
        <button className="dropdown-toggle" onMouseEnter={onHoverHandler}>{selectedItem || 'Select'}</button>
        {showDropDown && (<DropDown items={items} onSelectItem={onSelectItem}/>)}
      </div>
    </>
  );
}

export default App
