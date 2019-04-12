import 'waypoints/lib/noframework.waypoints.min.js';
import SmoothScroll from 'smooth-scroll';

const feature = new Waypoint({
    element: document.querySelector('.js--wp-1'),
    handler: () => {
        document.querySelector('.js--wp-1').classList.add('animated', 'fadeIn');
    },
    offset: '50%'
});

const contactUs = new Waypoint({
    element: document.querySelector('.js--wp-2'),
    handler: () => {
        document.querySelector('.js--wp-2').classList.add('animated', 'fadeIn');
    },
    offset: '50%'
});


var scroll = new SmoothScroll('a[href*="#"]');