import styles from '../styles/DropDown.module.css'
import {FunctionComponent} from "react";

interface Props {
  items: string[];

  onSelectItem(item: string): void;
}

const DropDown: FunctionComponent<Props> = ({items, onSelectItem}) => {
  return (
    <div className={styles.dropdown}>
      {
        items.map(item => <button
            key={item}
            className={styles.dropdownItem}
            onClick={() => onSelectItem(item)}
          >
            {item}
          </button>
        )
      }
    </div>
  );
}

export default DropDown;