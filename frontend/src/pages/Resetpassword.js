import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Custominput from "../components/Custominput";

const Resetpassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <Custominput type="password" name="password" placeholder="Password" />
                <Custominput type="password" name="confpassword" placeholder="Confirm Password" />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Ok
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resetpassword;
