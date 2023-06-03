import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." /> {/* Use double quotes for attribute values */}
            <Button text="Search" />
        </form>
    );
};

export default SearchForm;

  //const SearchForm = () => {
   // return `
        //<form>
            //<input type="text" />
            //<button>Search</button>
        //</form>
    //`;
  //};

  //export default SearchForm;