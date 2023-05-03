import style from './nameEditor.module.css';

const NameEditor = ({
  fName,
  lName,
  firstNameOnChange,
  onClickSave,
  lastNameOnChange,
  onClickCancel,
}) => {
  return (
    <div>
      <form className={style.inputContainer}>
        <div className={style.inputWrap}>
          <input
            type="text"
            placeholder={fName}
            className={style.input}
            onChange={firstNameOnChange}
          />
          <button className={style.btn} onClick={onClickSave}>
            Save
          </button>
        </div>
        <div className={style.inputWrap}>
          <input
            type="text"
            placeholder={lName}
            className={style.input}
            onChange={lastNameOnChange}
          />
          <button className={style.btn} onClick={onClickCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NameEditor;
