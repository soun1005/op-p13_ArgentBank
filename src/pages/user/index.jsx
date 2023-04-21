import style from './User.module.css';
import NavBar from '../../layout/navBar';
import Footer from '../../layout/footer';

const User = () => {
  return (
    <>
      <NavBar />
      <main className="main bgDark">
        <div className={style.header}>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
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

export default User;
