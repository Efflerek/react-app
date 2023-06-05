import styles from './Column.module.scss'
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';

const Column = props => {
  return (
    <article className={styles.column}>
      <h3 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h3>
      <ul className={styles.cards}>
        {props.cards.map(card => <Card key={card.id} title={card.title} />)}
      </ul>
      <CardForm columnId={props.id} action={props.action} />
    </article>
  );
};

export default Column;

//ALTERNATYWA
//const Column = ({ children }) => {
   // return (
//<article className={styles.column}>
//<h2 className={styles.title}>{children}</h2>
//</article>
//);
//};

//export default Column;