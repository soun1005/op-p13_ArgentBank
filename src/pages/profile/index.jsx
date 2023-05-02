import style from './Profile.module.css';
import Footer from '../../layout/footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadUser } from '../../slices/profileSlice';
import NameEditor from '../../components/nameEditor';
import NameDisplay from '../../components/nameDisplay';

const Profile = (props) => {
  // const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // console.log('auth', auth);
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    setFirstName(profile.firstName);
    setLastName(profile.lastName);
  }, [profile]);

  const handleEditName = () => {
    // edit button disappear, two inputs appear, two buttons appear(save/cancel)
    setIsEditing(true);
  };

  // const handleSubmit = () => {
  //   // update DB, inputs disappear, two buttons disappear, name and edit button appears
  // };

  // const handleCancel = () => {
  //   // same as handleSubmit but nothing is changed -> just UI change
  //   setIsEditing(false);
  // };

  console.log(isEditing);

  return (
    <>
      <main className="main bgDark">
        <div className={style.header}>
          <h1>
            Welcome back
            <br />
            {isEditing ? (
              <NameEditor fName={firstName} lName={lastName} />
            ) : (
              <>
                <NameDisplay firstName={firstName} lastName={lastName} />
                <button className={style.editButton} onClick={handleEditName}>
                  Edit Name
                </button>
              </>
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
