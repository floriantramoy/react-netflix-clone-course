import './SearchBar.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const SearchBar = () => {
    return (
        <div className="formContainer">
            <TextField className="inputEmail" label="Adresse e-mail" />
            <Button className="buttonStart" variant="contained" color="error">Commencer {'>'}</Button>
        </div>
    );
}

export default SearchBar;