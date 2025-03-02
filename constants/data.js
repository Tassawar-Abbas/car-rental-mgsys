import { fadeIn } from "./motion"

export const headerLinks=[
    {
        link:'/',
        text:'Home',
        exact:true
    },
    {
        link:'/booking',
        text:'Tranfer',
        exact:true
    },
    {
        link:'/local',
        text:'Local Transfer',
        exact:true
    },
    {
        link:'/services',
        text:'Services',
        exact:true
    },
    {
        link:'/our-fleet',
        text:'Our Fleet',
        exact:true
    },
    {
        link:'/about-us',
        text:'About Us',
        exact:true
    },
]

export const carouselData=[
    {
        title:'Profile',
        img:'/images/n1.jpg',
        text:'Select your favored vehicle, timetable and objective effortlessely',
        icon:'paint-brush'
    },
    {
        title:'Quotes',
        img:'/images/n2.jpg',
        text:'Your definitive decision for lavish or high limit transport whenever at any place',
        icon:'quote-left'
    },
    {
        title:'Inspiration',
        img:'/images/n3.jpg',
        text:'Find our spic and span limolux administration, conveying unmatched class and accomodation',
        icon:'paint-brush'
    },
    
    
]

export const exploreWorlds=[
    {
        id:'world-1',
        imgUrl:'/images/c1.jpg',
        title:'Secure, Dependable and Opulet',
        description:'At Amahh, we understand your desired a seasoned chaffeur behind the wheel',
    },
    {
        id:'world-2',
        imgUrl:'/images/c2.jpg',
        title:'Vehicles for any ocassion',
        description:'From unmatched luxury to spacious comfort: Amahh awaits your selection!',
    },
    {
        id:'world-2',
        imgUrl:'/images/c3.jpg',
        title:'Need wedding transportation',
        description:'On your wedding day, Amahh deliver the ultimate luxury ride for an unforgettable journy.',
    },
]

export const objectiveData=[
    {
        img:'/images/c1.jpg',
        title:'Our Vission',
        description:'Tranforming transportation with real time vehicle tracking for peak efficency and minimal downtime.',
    },
    {
        img:'/images/c2.jpg',
        title:'Our Mission',
        description:'Empowering progress through innovative solutions and cjutting edge technology, our mission is to drive efficiency, enhance experinces and create lasting value for our stakeholders.',
    },
    {
        img:'/images/c3.jpg',
        title:'Our Approach',
        description:'Crafting success through a strategic and adoptive approach, we navigate challenges with creativity, innovation and a commitment to excellence.',
    },
]

export const servicesData=[
    {
        id:1,
        text:`See mountains, see wonder — where every peak tells a story. Escape to nature's beauty with unforgettable mountain tours designed for adventure and serenity. Let your journey begin where the sky meets the earth.`,
        title:'Mointain Tours',
        img:'/images/m1.jpg',
        varient1:fadeIn('right','tween',0.2,1),
        varient2:fadeIn('left','tween',0.2,1),

    },
    {
        id:2,
        text:'See travel like never before — where every journey becomes a story waiting to be explored. From hidden gems to iconic destinations, we bring the world closer to you with unforgettable experiences. Let your next adventure begin with a new way to see travel.',
        title:'See Tour',
        img:'/images/s1.jpg',
        varient1:fadeIn('right','tween',0.2,1),
        varient2:fadeIn('left','tween',0.2,1),

    },
    {
        id:3,
        text:'See weddings, see memories — where every moment is crafted to perfection. From intimate ceremonies to grand celebrations, we make your special day seamless and unforgettable. Start your forever with a booking experience made just for you.',
        title:'Wedding',
        img:'/images/w1.jpg',
        varient1:fadeIn('right','tween',0.2,1),
        varient2:fadeIn('left','tween',0.2,1),

    },
    {
        id:4,
        text:'For the people who requesr only the best, entertain yourself with our top level cars.',
        title:'Amahh Service',
        img:'/images/n2.jpg',
        varient1:fadeIn('right','tween',0.2,1),
        varient2:fadeIn('left','tween',0.2,1),

    },
    {
        id:5,
        text:'See travel, see ease — your seamless journey starts here. From airport pickups to drop-offs, we ensure every ride is smooth, reliable, and stress-free. Travel smarter, arrive happier.',
        title:'Airport Transfer',
        img:'/images/ar.jpg',
        varient1:fadeIn('right','tween',0.2,1),
        varient2:fadeIn('left','tween',0.2,1),

    },
]

export const insightList=[
    {
        imgUrl:'/images/m1.jpg',
        title:'Audii',
        subTitle:'Experience the encapsulation of luxury with Amahh astonishing decision of premium vehicle.',
    },
    {
        imgUrl:'/images/s1.jpg',
        title:'Porsche',
        subTitle:'Amahh present a handpicked determination of the best extravagance vehicle for the individual.',
    },
    {
        imgUrl:'/images/n2.jpg',
        title:'Ferrari',
        subTitle:'Amahh offer an answer for those looking for both more than adequate baggage limit and positive',
    },
    {
        imgUrl:'/images/n1.jpg',
        title:'Fortuner',
        subTitle:'Find the fortuner, a top decision for obliging 5-6 travelers easily with more than adequate baggage.',
    },
]

export const bookingSteps=[
    {
        name:'Enter Ride Details'
    },
    {
        name:'Choose a Vehicle'
    },
    {
        name:'Enter Contact Details'
    },
    {
        name:'Booking Summary'
    },
]