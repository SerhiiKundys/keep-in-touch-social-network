import React from "react";
import { connect } from "react-redux";
import styles from "./Users.module.css";
import User from "./User/User";
import {
  changeFindUsersBody,
  resetFindUsersBody,
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  setPagesCount,
} from "../../../redux/actions/actions";
//import { usersAPI } from "../../../api/api";

import { UsersDb } from "../../../redux/reducers/contentUsersReducer";

const Users = (props) => {
  let pages = [];

  // API VERSION -------------
  /*
  onPageChanged(newPageNumber) => {
    usersAPI.getUsers(newPageNumber, props.numPerPage)
      .then(data => {
        setUsers(data.users);
        setTotalUsersCount(data.totalCount);
        setCurrentPage(newPageNumber);

      });
  }
  */
  // -------------------------

  // DEV VERSION -------------
  const onPageChanged = (newPageNumber) => {
    props.setTotalUsersCount(UsersDb.totalUsersCount);
    props.setCurrentPage(newPageNumber);
    props.setUsers(
      UsersDb.users.slice(
        newPageNumber * props.numPerPage - props.numPerPage,
        newPageNumber * props.numPerPage
      )
    );
    props.setPagesCount(Math.ceil(props.totalUsersCount / props.numPerPage));
    for (let i = 1; i <= props.pagesCount; i++) {
      pages.push(i);
    }
  };

  if (props.users.length === 0) {
    onPageChanged(1);
  }
  // -------------------------

  const onChangeFindUsersBody = (e) => {
    let body = e.target.value;
    console.log("body", body);
    props.changeFindUsersBody(body);
  };

  return (
    <div className={styles.findUsersContainer}>
      <div className={styles.findUsersTextAreaContainer}>
        <textarea
          onChange={onChangeFindUsersBody}
          value={props.findUsersBody}
          placeholder="Find users here"
        ></textarea>
      </div>
      <div className={styles.usersContainer}>
        {props.users
          .filter((user) =>
            user.username
              .toLowerCase()
              .includes(props.findUsersBody.toLowerCase())
          )
          .map((user) => (
            <User
              username={user.username}
              img={user.img}
              id={user.id}
              location={user.location}
              key={user.id}
              followed={user.followed}
            />
          ))}
      </div>
      <div className={styles.usersPagesPagination}>
        {pages.map((page) => {
          console.log("page: ", page);
          return (
            <span
              className={props.currentPage === page ? styles.activePage : null}
              onClick={() => onPageChanged(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users: state.contentUsers.users,
    findUsersBody: state.contentUsers.findUsersBody,
    pagesCount: state.contentUsers.pagesCount,
    totalUsersCount: state.contentUsers.totalUsersCount,
    numPerPage: state.contentUsers.numPerPage,
    currentPage: state.contentUsers.currentPage,
  };
}

export default connect(mapStateToProps, {
  changeFindUsersBody,
  resetFindUsersBody,
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  setPagesCount,
})(Users);
