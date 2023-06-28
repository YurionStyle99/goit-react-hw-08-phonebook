import css from './styles.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <div className={css.stars}></div>
      <div className={css.stars2}></div>
      <div className={css.stars3}></div>
      <div className={css.title}>
        <span>Welcome to the Contacts Book application</span>
      </div>
    </div>
  );
}
