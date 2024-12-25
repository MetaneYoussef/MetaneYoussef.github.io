export default function Info() {
    return (
        <div className="info">
            <img src="/images/MyPicture.jpg" alt="" className="info--picture" />
                <h2 className="name">Metane Youcef</h2>
                <h3 className="job">CyberSecurity Student</h3>
            <a href="https://metaneyoussef.github.io/" className="Website">metaneyoussef.github.io</a>
            <div className="socials">
                
                <a className="Resume" href="https://rxresu.me/mtn.youssef.kh/metaneyousseffr">
                    {/* <img src="../images/cv.svg" alt="mail" className="cv" /> */}
                    <i className="fa fa-file cv"></i>
                    <p>Resume</p>
                </a>
                <a className="LinkedIn" href="https://www.linkedin.com/in/youcef-metane/">
                    <img src="/images/LinkedIn.svg" alt="mail" />
                    <p>LinkedIn</p>
                </a>
                <a href="https://metaneyoussef.github.io/blog/" className="blog">
                    <img src="/images/blog.png" alt="blog" className="blogimg" />
                    <p>Blog</p>
                </a>
            </div>
        </div>
    )
}
