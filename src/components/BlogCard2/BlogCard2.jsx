import calender from '../../assets/icons/calender.svg'
import location from '../../assets/icons/location.svg'
import postImg1 from "../../assets/car2.png";
import menu from "../../assets/icons/menu.svg";
import eye from "../../assets/icons/eye.svg";
import share from "../../assets/icons/share.svg";
import profile from "../../assets/blogProfile.png";
import { DropDownMenu } from '../BlogCard/BlogCard';

const BlogCard2 = () => {
  return (
    <div className="card mb-3">
      <img src={postImg1} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="fw-bold">✍️ Article</p>
        <div className="d-flex align-items-start">
          <h5 className="card-title  flex-grow-1 card-title">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </h5>
          <DropDownMenu />
        </div>
        {/* <p className="card-text p-color">
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </p> */}
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-2">
            <img src={calender} alt="" />
            <p className='font-bold mb-0'>Fri, 12 Oct, 2018</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={location} alt="" />
            <p className='font-bold mb-0'>Ahmedabad, India</p>
          </div>
        </div>
        <button type="button" className="btn btn-outline-secondary w-100 my-4 ">Visit Website</button>
        {/* blog info */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="d-flex column-gap-3 align-items-center">
            <img src={profile} alt="" />
            <p className="card-profile-img">Sarthak Kamra</p>
          </div>
          <div className="d-flex align-items-center column-gap-3">
            <div className="d-flex align-items-center column-gap-1">
              <img src={eye} alt="" />
              <p className="view-paragraph margin-0 ">1.4k views</p>
            </div>
            <button className="btn btn-secondary">
              <img src={share} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;