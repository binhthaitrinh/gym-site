import 'waypoints/lib/jquery.waypoints.min.js';
import SmoothScroll from 'smooth-scroll';

// const feature = new Waypoint({
//     element: document.querySelector('.js--wp-1'),
//     handler: () => {
//         document.querySelector('.js--wp-1').classList.add('animated', 'fadeIn');
//     },
//     offset: '50%'
// });

// const contactUs = new Waypoint({
//     element: document.querySelector('.js--wp-2'),
//     handler: () => {
//         document.querySelector('.js--wp-2').classList.add('animated', 'fadeIn');
//     },
//     offset: '50%'
// });
$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
}, {
    offset: '50%'
});

$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

var scroll = new SmoothScroll('a[href*="#"]');