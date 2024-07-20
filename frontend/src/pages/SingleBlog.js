import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" />
                Go back to Blogs
              </Link>
              <h3 className="title">A beautiful Sunday Morning</h3>
              <img src={blog} className="w-100 my-4 img-fluid" alt="blog" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, velit
                sapiente similique minus ad quaerat doloribus repellendus itaque, iusto adipisci
                iure incidunt deleniti laudantium, voluptatem architecto? Quam commodi eveniet et!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
