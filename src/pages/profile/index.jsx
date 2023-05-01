import style from './Profile.module.css';
import Footer from '../../layout/footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from '../../slices/profileSlice';

const Profile = (props) => {
  // const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  // const [userName, setUserName] = useState({
  //   firstName: '',
  //   lastName: '',
  // });

  useEffect(() => {
    // console.log('auth', auth);
    // if (auth.token) {
    dispatch(loadUser());

    // }
  }, [dispatch]);
  console.log(profile);
  // console.log('loginpage auth:', auth);

  return (
    <>
      <main className="main bgDark">
        <div className={style.header}>
          <h1>
            Welcome back
            <br />
            {profile.firstName}
          </h1>
          <button className={style.editButton}>Edit Name</button>
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
