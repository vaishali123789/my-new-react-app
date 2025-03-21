import React from "react";
import bannerImage from "../assets/pharma_banner.jpg"; // Import image

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <img src={bannerImage} alt="Banner" />
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop destination for amazing products.</p>
      </div>

      {/* End banner section */}
      {/* why choose us*/}
      <div className="why-choose-us">

        <div className="container" style={{ marginTop: "7%" }}>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="content me-3">
                <h2 className="fw-bold mb-4">Why Choose Curigen Franchise?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Duis aute irure dolor in reprehenderit.
                  Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad
                  corporis.
                </p>
                <div className="
                
                
                
                ">
                  <a href="/" className="more-btn btn rounded-pill px-4">
                    Contact Us! <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-8 d-flex align-items-stretch mt-5">
              <div className="icon-boxes d-flex justify-content-center">
                <div className="row">
                  {/* Our Vision */}
                  <div className="col-lg-4 p-2 d-flex align-items-center">
                    <div className="border h-95 border-light-subtle rounded-3 bg-white p-2">
                      <div className="icon-box mt-4 mt-xl-0 text-center">
                        <i className="bi bi-receipt icons-theme" style={{ fontSize: "30px" }}></i>
                        <h4 className="mt-5">Our Vision</h4>
                        <p className="mt-3">
                          Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Our Mission */}
                  <div className="col-lg-4 p-2 d-flex align-items-center">
                    <div className="border h-95 border-light-subtle rounded-3 bg-white p-2">
                      <div className="icon-box mt-4 mt-xl-0 text-center">
                        <i className="fa-solid fa-cube icons-theme" style={{ fontSize: "30px" }}></i>
                        <h4 className="mt-5">Our Mission</h4>
                        <p className="mt-3">
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Our Products */}
                  <div className="col-lg-4 p-2 d-flex align-items-center">
                    <div className="border h-95 border-light-subtle rounded-3 bg-white p-2">
                      <div className="icon-box mt-4 mt-xl-0 text-center">
                        <i className="bi bi-images icons-theme" style={{ fontSize: "30px" }}></i>
                        <h4 className="mt-5">Our Products</h4>
                        <p className="mt-3">
                          Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere.
                        </p>
                      </div>
                    </div>
                  </div>

                </div> {/* Row End */}
              </div>
            </div>




          </div>

        </div>


      </div>

      <div className="container">
        <div className="about d-flex ">
          <div className="col-lg-6">
            <img src="D:\React\react_first_app\src\assets\pharma_banner.jpg" alt="" />



          </div>
          <div className="col-lg-6">
            <h2>Welcome To Curigen Pharmaceuticals Family</h2>
            <p className="text-start">Curigen Pharmaceutical has established itself as a renowned name in the pharmaceutical industry, recognized for its unwavering dedication to delivering high-quality and effective pharmaceutical products. With years of experience, Curigen has rapidly grown to become one of the fastest-growing pharmaceutical organizations in the industry. As one of the top PCD Pharma Franchise Companies in India, Curigen offers a wealth of opportunities for aspiring entrepreneurs and professionals who wish to make their mark in the healthcare sector.

              Curigen’s success is built on the foundation of its experienced core team, consisting of highly skilled professionals who are masters in their fields. Our team has vast expertise in pharmaceutical manufacturing, quality control, research, and product development. This collective knowledge and dedication allow us to maintain impeccable quality standards across our product range. Our facilities are equipped with advanced technology and are operated by a team that ensures 24×7 availability of stock, even for high-demand medicines. This ensures that our franchise partners can rely on us for a continuous and uninterrupted supply of products.

              As a leader in the healthcare industry, Curigen focuses on meeting the needs of a quality-conscious public by providing a diverse and targeted range of medicines. Our product portfolio includes Derma, Cardiac-Diabetic, Ortho, Eye & Ear Drops, Ointments, Capsules, Injections, Analgesic, Antibiotic . Each product is manufactured following stringent quality control protocols, ensuring that we meet the highest industry standards and deliver products that healthcare professionals and patients can trust.

              <br/>   One of the key reasons behind our impeccable quality is the dedication of our workforce. Their expertise ensures that every product that leaves our facility is of the highest caliber, contributing to our reputation as a top PCD Pharma Franchise Company . In addition to our domestic success, Curigen Pharmaceutical has established strong collaborations with international partners, including those in African Countries. At Curigen Pharmaceutical, we believe in mutual growth and respect for our partners. We are actively expanding our presence across India by inviting PCD Pharma Franchise Professionals to join us in our mission to improve healthcare access and quality. Our franchise model is designed to offer monopoly-based opportunities, allowing our partners to operate in their designated regions without facing competition from within the network. We provide comprehensive support to our franchisees, including marketing materials, regular incentives, promotional inputs, and discounts to help them succeed. We are constantly on the lookout for dedicated and experienced entrepreneurs who are ready to take on the challenge of distributing our extensive range of medicines. Whether you are interested in dealership, distributorship, or a PCD franchise, Curigen offers an unparalleled opportunity to partner with a trusted leader in the pharmaceutical industry. With our strong market presence, reliable product range, and unwavering commitment to quality, Curigen Pharmaceutical is the ideal choice for professionals seeking long-term success in the pharmaceutical sector.</p>
          </div>
        </div>
      </div>



    </div>

  );
};

export default Home;




