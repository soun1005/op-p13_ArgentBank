import style from './Profile.module.css';
import Footer from '../../layout/footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadUser } from '../../slices/profileSlice';
import NameEditor from '../../components/nameEditor';
import NameDisplay from '../../components/nameDisplay';
import { editName } from '../../slices/profileSlice';

const Profile = () => {
  // get first and last name from state
  const profile = useSelector((state) => state.profile);
  const firstNameFromState = profile.firstName;
  const lastNameFromState = profile.lastName;

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // To dispatch loadUser reducer
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // To display user name based on DB
  useEffect(() => {
    setFirstName(firstNameFromState);
    setLastName(lastNameFromState);
  }, [firstNameFromState, lastNameFromState, profile]);

  const handleEditName = () => {
    setIsEditing(true);
  };

  // reduce PUT request here
  const handleSubmit = (e) => {
    dispatch(editName({ firstName, lastName }));
    // update DB, inputs disappear, two buttons disappear, name and edit button appears
    // using dispatch(), I apply reduce function to do PUT request
    setIsEditing(false);
  };

  const handleCancel = (e) => {
    // same as handleSubmit but nothing is changed -> just UI change
    setIsEditing(false);
  };

  return (
    <>
      <main className="main bgDark">
        <div className={style.header}>
          <h1>
            Welcome back
            <br />
            {!isEditing ? (
              <>
                <NameDisplay firstName={firstName} lastName={lastName} />
                <button className={style.editButton} onClick={handleEditName}>
                  Edit Name
                </button>
              </>
            ) : (
              <NameEditor
                fName={firstName}
                lName={lastName}
                onClickCancel={handleCancel}
                onClickSave={handleSubmit}
                firstNameOnChange={(e) => {
                  setFirstName(e.target.value);
                }}
                lastNameOnChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            )}
          </h1>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className={style.account}>
          <div className={style.accountContentWrapper}>
            <h3 className={style.accountTitle}>Argent Bank Checking (x8349)</h3>
            <p className={style.accountAmount}>$2,082.79</p>
            <p className={style.accountAmountDescription}>Available Balance</p>
          </div>
          <div className={`${style.accountContentWrapper} ${style.cta}`}>
            <button className={style.transactionButton}>
              View transactions
            </button>
          </div>
        </section>
        <section className={style.account}>
          <div className={style.accountContentWrapper}>
            <h3 className={style.accountTitle}>Argent Bank Savings (x6712)</h3>
            <p className={style.accountAmount}>$10,928.42</p>
            <p className={style.accountAmountDescription}>Available Balance</p>
          </div>
          <div className={`${style.accountContentWrapper} ${style.cta}`}>
            <button className={style.transactionButton}>
              View transactions
            </button>
          </div>
        </section>
        <section className={style.account}>
          <div className={style.accountContentWrapper}>
            <h3 className={style.accountTitle}>
              Argent Bank Credit Card (x8349)
            </h3>
            <p className={style.accountAmount}>$184.30</p>
            <p className={style.accountAmountDescription}>Current Balance</p>
          </div>
          <div className={`${style.accountContentWrapper} ${style.cta}`}>
            <button className={style.transactionButton}>
              View transactions
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
