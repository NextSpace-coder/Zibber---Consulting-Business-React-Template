import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function AboutOne() {
    return (
        <section className="about__area pb-200 pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 pr-0 col-lg-6">
                        <div className="about__thumb m-img">
                            <img src="/assets/img/about/about-1.jpg" alt="" />
                            <div className="about__shape">
                                <img src="/assets/img/about/red-shape.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
                        <div className="about__content">
                            <div className="section__title mb-25">
                                <span>Who we are</span>
                                <h2>We Unlock Potential</h2>
                            </div>
                            <p>Why I say old chap that is spiffing do one, cup of char bite your arm off lavatory bugger all mate bog-standard bits and bobs I am telling barmy blow.</p>
                            <div className="about__list">
                                <ul>
                                    <li ><span><i > <FaCheck /> </i>Innovative ideas</span></li>
                                    <li ><span><i > <FaCheck /> </i>Professional assistance</span></li>
                                    <li ><span><i > <FaCheck /> </i>Financial advisory</span></li>
                                </ul>
                            </div>
                            <NavLink to="/services" className="z-btn " >What we do<i > <CgArrowLongRight /> </i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
