import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./User.module.css";
import * as Actions from "../../../../redux/actions/actions";
import defaultUserImg from "../../../../assets/images/user-icon.png";
//import { usersAPI } from "../../../../api/api";

const User = (props) => {
  const Unfollow = "Unfollow";
  const Follow = "Follow";
  return (
    <div className={styles.userContainer}>
      <NavLink to={`/profile/${props.id}`} className={styles.navLinkContainer}>
        <img
          src={props.img != null ? props.img : defaultUserImg}
          alt="Contact"
        />
        <div className={styles.userShortDescription}>
          <p className={styles.userName}>{props.username}</p>
          <p className={styles.userLocation}>
            {props.location.city}, {props.location.country}
          </p>
        </div>
      </NavLink>

      <div className={styles.userFollowingContainer}>
        <button
          onClick={() => {
            // API VERSION ------------------
            /* 
            // Move to api.js
            axios.put(`https://api/change-following/id=${props.id}`,{}, 
            withCredentials: true,
            headers: {
              "API-KEY": "fvdgb3gfsdgfd335b35b3"
            }
            )
            .then(response => {
              if(response.data.resultCode === 0){
                props.changeFollowingUser(props.id);
              }
            }) */
            // -------------------------

            // DEV VERSION -------------
            props.changeFollowingUser(props.id);
            // -------------------------
          }}
          className={styles.changeFollowingButton}
        >
          {props.followed ? Unfollow : Follow}
        </button>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    changeFollowingUser: (message) => {
      dispatch(Actions.changeFollowingUser(message));
    },
  };
}

export default connect(null, mapDispatchToProps)(User);
