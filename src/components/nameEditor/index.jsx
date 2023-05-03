import style from './nameEditor.module.css';

const NameEditor = (props) => {
  return (
    <div>
      <form className={style.inputContainer}>
        <div className={style.inputWrap}>
          <input
            type="text"
            placeholder={props.fName}
            className={style.input}
            onChange={props.firstNameOnChange}
          />
          <button className={style.btn} onClick={props.onClickSave}>
            Save
          </button>
        </div>
        <div className={style.inputWrap}>
          <input
            type="text"
            placeholder={props.lName}
            className={style.input}
            onChange={props.lastNameOnChange}
          />
          <button className={style.btn} onClick={props.onClickCancer}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NameEditor;
