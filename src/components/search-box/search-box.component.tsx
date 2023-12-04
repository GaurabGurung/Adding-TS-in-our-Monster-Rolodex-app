
import './search-box.styles.css'
import { ChangeEventHandler } from 'react';

type SearchBox = {
  className: string;
  placeHolder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
} 

const SearchBox = ({className, placeHolder , onChangeHandler}: SearchBox) => (
  <input 
    className= { `search-box ${className}` } 
    type= 'search' 
    placeholder= {placeHolder }
    onChange={ onChangeHandler }
  />
) 

export default SearchBox;