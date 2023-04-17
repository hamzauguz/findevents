import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Sosyal Medya</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                FindEvents
              </h6>
              <p>Türkiyenin her tarafında sayısız etkinlikleri görmek istiyorsanız FindEvents tam size göre.</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Menu</h6>
              <p>
                <a href="#!" className="text-reset">
                  Anasayfa
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Etkinlikler
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Etkinlik Ekle
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  İletişim
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">İLETİŞİM</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Avcılar
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@findevents.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +905459551668
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2023 Copyright
      </div>
    </MDBFooter>
  );
};

export default Footer;
