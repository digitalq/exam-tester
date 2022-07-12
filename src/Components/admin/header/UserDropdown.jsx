import React, { Component } from "react";

export class UserDropdown extends Component {
  render() {
    const { userDetail } = this.props;
    return (
      <li className="dropdown">
        <a
          href="/dashboard"
          data-toggle="dropdown"
          className="nav-link dropdown-toggle nav-link-lg nav-link-user"
        >
          <img
            alt="image1"
            src={userDetail.userImg}
            className="rounded-circle mr-1"
          />
          <div className="d-sm-none d-lg-inline-block">
            Hi, {userDetail.userName}
          </div>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <div className="dropdown-title">
            Logged in {userDetail.logTime} ago
          </div>

          {userDetail.datas.map((data, idata) => {
            return (
              <a
                key={idata}
                to={data.link}
                activeStyle={{
                  color: "#6777ef",
                }}
                exact
                className="dropdown-item has-icon"
              >
                <i className={data.icode} /> {data.title}
              </a>
            );
          })}

          <div className="dropdown-divider" />
          <a
            href="/dashboard"
            className="dropdown-item has-icon text-danger"
            // onClick={() => {
            //   Auth.logout(() => {
            //     window.location.reload();
            //   });
            // }}
          >
            <i className={userDetail.logoutIcon} /> {userDetail.logoutTitle}
          </a>
        </div>
      </li>
    );
  }
}

export default UserDropdown;
