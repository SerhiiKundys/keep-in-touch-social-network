import React from "react";
import styles from "./NavUser.module.css";

const NavUser = ({ nickname }) => {
  /* 
  axios.get(`https://api/auth.me`, withCredentials: true)
  .the(response => {
    if(response.data.resultCode === 0){
      let {id, login, email} = response.data.data;
      props.setAuthUserData(id, email, login);
    }
  })
   */
  return (
    <div className={styles.navUser}>
      <div className={styles.navUserIcon}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU" />
      </div>
      <p className={styles.navUserDescription}>{nickname}</p>
    </div>
  );
};

export default NavUser;
