import React, { useEffect } from 'react';
import 'animate.css';
import $ from 'jquery';

function Home() {
  useEffect(() => {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var navbarHeight = $('.navbar').outerHeight();

      if (scroll >= navbarHeight) {
        $('.navbar').addClass('scroll');
      } else {
        $('.navbar').removeClass('scroll');
      }
    });
  }, []);

  return (
    <div>
      <nav className="navbar">
        <p className="float-left">My Collection</p> {/* add class name for floating */}
        <ul className="right-nav">
          <li><a href="./Home">Home</a></li>
          <li><a href="./About">About</a></li>
          <li><a href="g">Work</a></li>
          <li><a href="h">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
