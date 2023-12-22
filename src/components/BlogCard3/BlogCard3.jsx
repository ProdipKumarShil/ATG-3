import calender from '../../assets/icons/calender.svg'
import location from '../../assets/icons/location.svg'
import bag from '../../assets/icons/bag.svg'
import eye from "../../assets/icons/eye.svg";
import share from "../../assets/icons/share.svg";
import profile from "../../assets/blogProfile.png";
import { DropDownMenu } from '../BlogCard/BlogCard';

const BlogCard3 = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <p className="fw-bold">💼️ Job</p>
        <div className="d-flex align-items-start">
          <h5 className="card-title  flex-grow-1 card-title">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </h5>
          <DropDownMenu />
        </div>
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-2">
            <img src={bag} alt="" />
            <p className='font-bold mb-0'>Innovaccer Analytics Private Ltd.</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={location} alt="" />
            <p className='font-bold mb-0'>Noida, India</p>
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

export default BlogCard3;