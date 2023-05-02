import style from './nameEditor.module.css';

const NameEditor = (props) => {
  return (
    <div>
      <form action="" className={style.inputContainer}>
        <div className={style.inputWrap}>
          <input
            type="text"
            placeholder={props.fName}
            className={style.input}
          />
          <button className={style.btn}>Save</button>
        </div>
        <div className={style.inputWrap}>
          <input
            type="text"
            placeholder={props.lName}
            className={style.input}
          />
          <button className={style.btn}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NameEditor;
