import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';

export const Footer = () => {
    return (
        <CDBFooter className="shadow text-white bg-dark container px-0">
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                    <CDBBox>
                        <a href="/" className="d-flex align-items-center p-0 text-light">
                            <img alt="logo" src="./assests/images/logo.png" width="30px" />
                            <span className="ml-3 h5 font-weight-bold">React E-ticaret</span>
                        </a>
                        <p className="my-3" style={{ width: '250px' }}>
                            React E-ticaret Projesi
                        </p>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            React E-ticaret 
                        </p>
                        <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="#hakkimizda">Hakkımızda</CDBFooterLink>
                            <CDBFooterLink href="#insan-kaynaklari">İnsan Kaynakları</CDBFooterLink>
                            <CDBFooterLink href="#iletisim">İletişim</CDBFooterLink>
                            <CDBFooterLink href="#kvkk">KVKK</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Kategoriler
                        </p>
                        <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="/">Bilgisayar</CDBFooterLink>
                            <CDBFooterLink href="/">Ev Aletleri</CDBFooterLink>
                            <CDBFooterLink href="#">Akıllı Telefon</CDBFooterLink>
                            <CDBFooterLink href="#">Moda</CDBFooterLink>
                            <CDBFooterLink href="#">Sağlık & Yaşam</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Markalar
                        </p>
                        <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="#category/apple">Apple</CDBFooterLink>
                            <CDBFooterLink href="#category/avon">Avon</CDBFooterLink>
                            <CDBFooterLink href="#category/samsung">Samsung</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                </CDBBox>
                <CDBBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{ width: '100%' }}
                    className="mx-auto mt-4"
                >
                    <small className="text-center" style={{ width: '50%' }}>
                        Copyright © {new Date().getFullYear()} React E-ticaret
                    </small>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </CDBBox>
            </CDBBox>
        </CDBFooter>
    );
};