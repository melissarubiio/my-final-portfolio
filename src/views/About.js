import React from 'react';

function About() {
    return (
      <section className='move-down'>
        <div>
            <h1 className='about-style'>ABOUT ME</h1>
            <img
              src="./images/certificate.png"
              alt="melissa"
              className=""
              style={{
                width: "480px",
                height: "380px",
                top: "0",
                float: "right",
                position: "inline",
                marginRight: "48px",
                marginLeft: "100px",
              }}
            />
            <div className='intro-pgs'>
            <p className='intro-style'>
                Hello, I'm Melissa Rubio, an apspiring web developer based in Phoenix, Arizona. I've always been passionate about 
                technology and making a meaningful impact in this field. After graduating high school in May 2021, I eagerly
                joined the University of Arizona Coding Bootcamp in July 2022 to further develop my skills.
            </p>
            <p className='intro-style'> 
                During the bootcamp, I immersed myself in web development, gaining a solid foundation in industry-standard practices
                and cutting-edge technologies. From front-end design to back-end functionality, I acquired a comprehensive 
                understanding of web development principles.
            </p>
            <p className='intro-style'>
                I'm excited to bring my technical expertise, passion for web development, and dedication to delivering 
                exceptional projects to a dynamic and innovative team. With my commitment to constant growth and improvement,
                I'm confident that my skills and enthusiasm will contribute to the success and goals of any organization.
            </p>

            </div>
        </div>
      </section>
    );
  }  

export default About;