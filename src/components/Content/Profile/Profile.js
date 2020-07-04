import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from "./Profile.module.css";
import {
  setProfileId,
  changeFollowingUser,
} from "../../../redux/actions/actions";
import defaultUserImg from "../../../assets/images/user-icon.png";

import { UsersDb } from "../../../redux/reducers/contentUsersReducer";

const Profile = (props) => {
  const Unfollow = "Unfollow";
  const Follow = "Follow";
  console.log(props.location.pathname);
  console.log(props.match.params.userId);
  const userId = +props.match.params.userId;
  return (
    <div className={styles.profileContainer}>
      {/* <img src={props.img != null ? props.img : defaultUserImg} alt="Profile" /> */}
      {UsersDb.users.map(
        (user) =>
          user.id === userId && (
            <img
              src={user.img != null ? user.img : defaultUserImg}
              alt="Profile"
            />
          )
      )}

      {/* <div className={styles.profileShortDescription}>
        <p className={styles.profileUserName}>{props.username}</p>
        <p className={styles.profileUserLocation}>
          {props.location.city}, {props.location.country}
        </p>
      </div> */}
      <div className={styles.profileShortDescription}>
        <p className={styles.profileUserName}>TEST Username</p>
        <p className={styles.profileUserLocation}>TEST City, TEST Country</p>
      </div>

      <div className={styles.profileUserFollowingContainer}>
        <button
          onClick={() => {
            props.changeFollowingUser(props.id);
          }}
          className={styles.changeFollowingButton}
        >
          {props.followed ? Unfollow : Follow}
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    profileId: state.contentProfile.profileId,
  };
}

const ProfileWithUrlData = withRouter(Profile);

export default connect(mapStateToProps, { setProfileId, changeFollowingUser })(
  ProfileWithUrlData
);
