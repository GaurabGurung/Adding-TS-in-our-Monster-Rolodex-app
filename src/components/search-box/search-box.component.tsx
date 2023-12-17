import "./search-box.styles.css";
import { ChangeEvent } from "react";

type SearchBox = {
  className: string;
  placeHolder?: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ className, placeHolder, onChangeHandler }: SearchBox) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeHolder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
