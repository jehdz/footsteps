var categoryData = [
    {
        "name": "Historical",
        "description": "Chicago's finest historical places to visit.",
        "img": "https://chicagology.com/wp-content/themes/revolution-20/goldenage/masonictemplesciam.jpg"
    },
    {
        "name": "Food",
        "description": "Look for delicious meals and world's top restaurants in Chicagoland.",
        "img": 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555449015/shape/mentalfloss/istock_000035287506_small.jpg?itok=MczNwF73'

    },
    {
        "name": "Shopping",
        "description": "Visit one of the biggest shopping streets in the world.",
        "img": 'https://pix10.agoda.net/hotelImages/4884379/0/a7be61b6eac2ceb335442e622917d67b.jpg?s=1024x768'
    },
    {
        "name": "Leisure",
        "description": "Enjoy your time by visiting iconic libraries and spend time with your family and friends.",
        "img":'https://www.thesoftwarereport.com/wp-content/uploads/2017/09/simpli.fi_.jpg'
    },
    {
        "name": "Events",
        "description": "World's biggest festivals and events are happening in Chicago.",
        "img":'https://urbanmatter.com/chicago/wp-content/uploads/2018/06/34191057_10155243843226370_3915767219006472192_o.jpg'
    },
    {
        "name": "Films",
        "description": "Check out the location of your favorite movies & tv shows filmed in the city!",
        "img":'https://www.legalzoom.com/sites/lz.com/files/inline-images/articles/film.jpg'


    }


    // {
    //     "category": "",
    //     "description": ""
    // }
    // {
    //     "category": "",
    //     "description": ""
    // },
];


var test = [
    {
        "name": "Al Capone Got his Haircut Here",
        "description": "In this hotel’s basement throughout the 1920’s, a windowless, marble-walled barber shop provided a haircut — as well as a secret meeting space — for Capone and his inner circle. The Greek-columned room is still in use, billed as a “palatial event space.”",
        "category": "Historical",
        "address": "The Blackstone Hotel, 636 S. Michigan Ave., Chicago, IL. 60605",
        "latitude": 41.8737,
        "longitude": -87.62455,
        "img": "https://cdn.choosechicago.com/uploads/2019/05/Huber_Palmer_House_Lobby_2013_Adjusted_92b57941-89ae-4b6c-a2a3-a10b2efe068c-2400x1600.jpg",
        "source": "https://en.wikipedia.org/wiki/The_Blackstone_Hotel",
        "author": "Henry Martin"
    },
    {
        "name": "Bad Axe Throwing",
        "description": "In the basement of a shopping mall and movie theater there is a fun alcove for some adrenaline pumping fun. A great idea for a date night, just hanging out with your friends, or letting off some steam. Throw giant axes at wooden bullseyes and watch them stick!",
        "category": "Leisure",
        "address": "2828 N Clark St Atrium Level, Chicago, IL 60657",
        "latitude": "41.93562689082965",
        "longitude": -87.6462879556674,
        "img": "https://media-cdn.tripadvisor.com/media/photo-s/0d/c2/5a/9a/double-axe-throw-provided.jpg\n",
        "source": "https://lh5.googleusercontent.com/p/AF1QipP-Q3u5z-knLAc7WMKzsAACT7VX_F7tRwsq0E9K=w408-h408-k-no",
        "author": "Oscar Yanek"
    },
    {
        "name": "Buckingham Fountain",
        "description": "Triple layered fountain and one of downtown Chicago's featured landmarks since 1927. With lights at night and scheduled water shows it is a great spot for pictures.",
        "category": "Histoical",
        "address": "Buckingham Fountain, 301 S Columbus Dr, Chicago, IL 60605",
        "latitude": 41.87611,
        "longitude": -87.61891,
        "img": "https://i.pinimg.com/originals/ed/fa/2c/edfa2ce193c752ea8aeb3b859d21ce1a.jpg",
        "source": "https://www.google.com/maps/place/Buckingham+Fountain/@41.8757941,-87.6276816,15z/data=!3m1!4b1!4m5!3m4!1s0x880e2ca005fd8e87:0x2440022c9be1ae59!8m2!3d41.8757944!4d-87.6189483",
        "author": "Oscar Yanek"
    },
    {
        "name": "Celebrity Restaurant With Great Food and Drinks",
        "description": "This corner restaurant \"Longman & Eagle\", bar and inn has a knack for gathering Logan Square’s hippest crowds—and that clientele now includes some of the indie world’s most prized musicians, including Whitney, Iron & Wine, and Glen Hansard. Indie band Local Natives were the most recent rockers to dine here with a pre-show showdown of falafel Scotch eggs, barbecue salmon, and whiskey highballs.",
        "category": "Restaurants",
        "address": "2657 N Kedzie Ave\nChicago, IL 60647",
        "latitude": 41.92972,
        "longitude": -87.70716,
        "img": "https://infatuation.imgix.net/media/reviews/longman-eagle/banners/longman-and-eagle_0.jpg?auto=format&fit=max&h=1200&w=3200",
        "source": "http://www.longmanandeagle.com/",
        "author": "Henry Martin"
    },
    {
        "name": "Celebrity Spot - Hub 51",
        "description": "This dark & intimate late-night lounge features banquette seating & bottle service with DJ tunes. A great place to dine in for a good night. Celebrities spotted: Ashton Kutcher, Mila Kunis, Jessica Simpson, Lindsay Lohan, Josh Duhamel and Fergie.",
        "category": "Restaurants",
        "address": "51 W Hubbard St, Chicago, IL 60654",
        "latitude": 41.89011,
        "longitude": -87.63182,
        "img": "https://media.timeout.com/images/102512723/image.jpg",
        "source": "https://www.hub51chicago.com/",
        "author": "Henry Martin"
    },
    {
        "name": "Chicago History Museum",
        "description": "For history buffs and lifelong Chicagoans visit the Chicago History Museum. Devoted entirely to different eras in Chicago's history learn about events like the Chicago Fire or Daniel Burnham's Chicago Plan. With first person accouts and memorabelia this is the ultimate stop to learn more about the city.",
        "category": "Historical",
        "address": "1601 N Clark St, Chicago, IL 60614",
        "latitude": "41.91220801510961",
        "longitude": -87.6317570638953,
        "img": "https://www.themagnificentmile.com/assets/Tourism-Operators/images/Chicago-History-Museum.jpg\n\n",
        "source": "https://lh5.googleusercontent.com/p/AF1QipMjEy9jWgr-c1heaYxrJq6JMWLGrlQkO1eVxE-J=w431-h240-k-no",
        "author": "Oscar Yanek"
    },
    {
        "name": "Columbia Yacht Club",
        "description": "Club that offers lots of watersports such as sailling, crew, ect. There is a club room and bar area where you can relax.. Learn to sail for the summer passes are 350 per person. ",
        "category": "Leisure",
        "address": "11 N Lake Shore Dr, Chicago, IL 60601",
        "latitude": "41.8840",
        "longitude": 87.6122,
        "img": "https://www.columbiayachtclub.org/images/dynamic/getImage.gif?ID=100001612\n\n",
        "source": "https://www.google.com/maps/uv?pb=!1s0x880e2b5854994aad:0x4d980eec292a642a!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipMhLbpnkiHTN-wxiIJNzrLqpJzhvfbxXyyLjLup%3Dw213-h160-k-no!5scolumbia+yacht+club+latitude+and+longitude+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipMhLbpnkiHTN-wxiIJNzrLqpJzhvfbxXyyLjLup&hl=en&sa=X&ved=2ahUKEwippILs17XvAhWMPM0KHahICSgQoiowFXoECCcQAw",
        "author": "Brian Waddell"
    },
    {
        "name": "Dusable Museum ",
        "description": "Celebrates the culture, artwork and history of  Afircan Americans. The museum is a historic landmark site being the one of the few academic insitutions to study black history",
        "category": "Historical ",
        "address": "740 E 56th Pl, Chicago, IL 60637",
        "latitude": 41.7919,
        "longitude": 87.60672,
        "img": "https://interactive.wttw.com/sites/default/files/dusable/dusable-museum.jpg\n",
        "source": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.timeout.com%2Fchicago%2Fthings-to-do%2Fdusable-museum-of-african-american-history&psig=AOvVaw0yocvkikpRHqXtffd2U9Wp&ust=1616013396568000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjJh5fVte8CFQAAAAAdAAAAABAD",
        "author": "Brian Waddell"
    },
    {
        "name": "Dyed River",
        "description": "The Chicago River has been dyed green for St. Patrick's Day! Head downtown to check it out before it turns back. (tag. free)",
        "category": "Event",
        "address": "Chicago Riverwalk, Chicago, IL 60601",
        "latitude": "41.88889971855798",
        "longitude": -87.6211718855627,
        "img": "https://media.gettyimages.com/videos/timelapse-chicago-river-dyeing-river-green-with-skyline-cityscape-on-video-id1165862513?s=640x640\n",
        "source": "https://cdn.vox-cdn.com/thumbor/U_kI7kX44yVBABCyoDv9c4Rcnhw=/0x0:3000x2000/1200x800/filters:focal(1153x1204:1633x1684)/cdn.vox-cdn.com/uploads/chorus_image/image/68968447/1306885563.0.jpg",
        "author": "Oscar Yanek"
    },
    {
        "name": "Ferris Bueller & Friends Take Ferrari Down Lakeshore",
        "description": "During John Hughes’ classic 1986 film “Ferris Bueller’s Day Off”, a high school wise-guy decides to take the day off with friends Cameron & Sloane. Take a trip to North Avenue Beach and check out this iconic shot taken on Lakeshore drive heading south towards downtown.  ",
        "category": "Movie",
        "address": "North Avenue Beach, Chicago, IL, 60614",
        "latitude": 41.917264,
        "longitude": 87.628672,
        "img": "https://assets.vogue.com/photos/5891407123f9887c0e0dfdcb/master/w_1600%2Cc_limit/1-lake-shore-drive-holding.gif",
        "source": "https://en.wikipedia.org/wiki/Ferris_Bueller%27s_Day_Off",
        "author": "Henry Martin"
    },
    {
        "name": "Frank Lloyd Wright - Walther Gale House ",
        "description": "The Walter H. Gale House, located in the Chicago suburb of Oak Park, Illinois, was designed by Frank Lloyd Wright and constructed in 1893. The house was commissioned by Walter H. Gale of a prominent Oak Park family and is the first home Wright designed after leaving the firm of Adler & Sullivan",
        "category": "History",
        "address": "1031 Chicago Ave, Oak Park, IL 60302",
        "latitude": 41.89454,
        "longitude": -87.80512,
        "img": "https://ap.rdcpix.com/3618450714/c3b379ebc2c0a8a3cd1a62632742c475l-w0xd-w1020_h770_q80.jpgg",
        "source": "https://en.wikipedia.org/wiki/Walter_Gale_House",
        "author": "Henry Martin"
    },
    {
        "name": "Hema's Kitchen",
        "description": "Located on the historic Devon ave. Hema's kitchen is a personal favorite when it comes to quality traditional indian food. Run by Hema herself this location is the original location of Hema's kitchen.",
        "category": "Food",
        "address": "2439 W Devon Ave, Chicago, IL 60659",
        "latitude": "41.99764354047893",
        "longitude": -87.6915373106808,
        "img": "https://img.grouponcdn.com/seocms/5kocZxqebCBkViZ7aMaadg/Hemas-Kitchen_3_600c390-600x390.jpeg\n",
        "source": "https://lh5.googleusercontent.com/p/AF1QipNmgN01lChVVTKXqNRG1rcQ_1xC-bojMOxGv2wD=w408-h407-k-no",
        "author": "Oscar Yanek"
    },
    {
        "name": "Home Alone House",
        "description": "The house of Kevin McCallister (Macaulay Culkin) is to the north of Chicago, at 671 Lincoln Avenue, Winnetka. Another classic film conceived by John Hughes, who thought of the idea when leaving for vacation and wondering what would happen if his boy was left home alone. One of the original notes for the film included the interesting observations that kids aren’t afraid of stuff adults are like robbers. Please note: this is a residential home, so be respectful",
        "category": "Movie",
        "address": "671 Lincoln Ave\nWinnetka, IL 60093",
        "latitude": 42.10978,
        "longitude": -87.73353,
        "img": "https://roomfortuesday.com/wp-content/uploads/2020/12/Home-Alone-House.jpg",
        "source": "https://en.wikipedia.org/wiki/Home_Alone",
        "author": "Henry Martin"
    },
    {
        "name": "Hudsucker Proxy Filmed Here",
        "description": "Check out this classic film location. the film set is heavily inspired by Art Deco architecture, which includes this towering building. If you want to get up close, you will notice how tall it really is!",
        "category": "Movie",
        "address": "Merchandise Mart, Chicago, IL 60654",
        "latitude": 41.88917,
        "longitude": -87.63401,
        "img": "http://2.bp.blogspot.com/-XhBzDpcFL4I/UN3vs1D_h1I/AAAAAAAAEgk/i8Z3sbiKA14/s1600/MerchandiseMartTop_HudsuckerProxy.jpg",
        "source": "https://en.wikipedia.org/wiki/The_Hudsucker_Proxy",
        "author": "Henry Martin"
    },
    {
        "name": "Lakeshore Ledge",
        "description": "A great view of the skyline and an even better sunbathing and swimming spot for those who want to enjoy the summer weather and lake without the need for a beach. The ledge is a part of the lakeshore path which is adjacent to the lake. In the summer on nice days it is not uncommon to see hundreds of people set up on the ledge. (tag.free)",
        "category": "Leisure",
        "address": "Lakefront Trail, Chicago, IL 60610",
        "latitude": "41.90774852651779",
        "longitude": -87.624819416252,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Up68RMagEimIqd16pAKhi4shlCYeiaNyzxeJ4fK3QwCUBm-k5wZQEEzfxdwBZHyocUU&usqp=CAU\n",
        "source": "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/cover-for-beach-places-in-chicago.jpg",
        "author": "Oscar Yanek"
    },
    {
        "name": "Loyola University of Chicago",
        "description": "Loyola University has been located on the Rogers park lakefront for over 150 years! formerly known as St. Ignatious College, Loyola has a beautiful campus that is perfect for reading a book and watching the lake or sitting in the quad and having a picnic. ",
        "category": "Historical",
        "address": "1032 W Sheridan Rd, Chicago, IL 60660",
        "latitude": "41.998888104365",
        "longitude": -87.6582155865389,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46FuZh4t6NaTNXWdkDuHdVYHDgoKWo2fZZri00EwuSSl3sBmxfXAzRaeZ7nLmMSFSbmY&usqp=CAU",
        "source": "https://lh5.googleusercontent.com/p/AF1QipPy66YKFx8k1Rnc9-0fSZCw5iujA8ryF9wYwTFx=w408-h305-k-no",
        "author": "Oscar Yanek"
    },
    {
        "name": "Raising Cane's Chicken Fingers",
        "description": "Fast food chain which servesChicken fingers and texas toast. ",
        "category": "Food",
        "address": "6568 N Sheridan Rd, Chicago, IL 60626",
        "latitude": 42.0029715097042,
        "longitude": -87.6606457096012,
        "img": "https://www.dinenaperville.com/images/restaurants/raisingcaneschickenfingers.jpg\n",
        "source": "https://lh5.googleusercontent.com/p/AF1QipM8-mlx93mtpH6k3r4nmhKGrKj0HvWpaQtOKtfm=w408-h306-k-no",
        "author": "Oscar Yanek"
    },
    {
        "name": "Second City Comedy house",
        "description": "Check out this historic comedy house which boats alums like Chris Farley, Stephen Colbert, and Steve Carell. This comedy house is famous for their classic with sketch and improv comedy, and makes for a great night out.",
        "category": "History",
        "address": "230 W North Ave, Chicago, IL 60614",
        "latitude": 41.91127,
        "longitude": -87.6354,
        "img": "https://www.secondcity.com/wp-content/uploads/2019/06/SC_GS_Website_Exterior_001.png",
        "source": "https://en.wikipedia.org/wiki/The_Second_City",
        "author": "Henry Martin"
    },
    {
        "name": "St. Valentine’s Massacre Took Place Here",
        "description": "On February 14, 1929, seven men in Bugs Moran's gang were lined up by men in police uniforms and gunned down. This event was a wake up call for many residents of Illinois, after the gruesome photo went viral through news coverage, depicting the true horror of organized crime. The original room can be visited through the Mob Museum. ",
        "category": "Historical",
        "address": "2122 N. Clark Street, Chicago IL, 60614",
        "latitude": 41.92058,
        "longitude": 87.63751,
        "img": "data:image/jpeg;base64,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\n",
        "source": "https://en.wikipedia.org/wiki/Saint_Valentine%27s_Day_Massacre",
        "author": "Henry Martin"
    },
    {
        "name": "The Art Institute of Chicago",
        "description": "Chicago's biggest art museum and most notorious the A.I.C contains every kind of art category from every era you could think of. Tickets for adults are $25 with discounts for college studen's and chicago residents. Recognizable by it's two giant bronze lions the building itself is a work of art.",
        "category": "Historical",
        "address": "111 S Michigan Ave, Chicago, IL 60603",
        "latitude": 41.87998,
        "longitude": -87.62298,
        "img": "https://api.time.com/wp-content/uploads/2014/09/148616068.jpg\n\n",
        "source": "https://lh5.googleusercontent.com/p/AF1QipOiAaz9th7kQFW66CA5uWuYfTCN5Wg1tljaWQz6=w408-h272-k-no",
        "author": "Oscar Yanek"
    },
    {
        "name": "The Gallagher House",
        "description": "Check out this famous house on the Southside of Chicago. Featured in the TV show Shameless. ",
        "category": "TV",
        "address": "2119 S Homan Ave, Chicago, IL 60623",
        "latitude": 41.85306,
        "longitude": -87.71009,
        "img": "http://lokagraph.com/wp-content/uploads/2018/06/house-shameless-gallagher.jpg",
        "source": "https://en.wikipedia.org/wiki/Shameless_(American_TV_series)",
        "author": "Henry Martin"
    },
    {
        "name": "Watertower Place",
        "description": "A shopping mall with 7 stories of different stores. Visit the food court on L1 for an array of cafeteria style dining.",
        "category": "Shopping",
        "address": "835 N Michigan Ave, Chicago, IL 60611",
        "latitude": 41.8986,
        "longitude": -87.62285,
        "img": "https://i.pinimg.com/originals/24/a7/87/24a7877696267112a06815e89f997e14.jpg\n",
        "source": "https://www.google.com/maps/place/Water+Tower+Place/@41.89793,-87.631626,15z/data=!3m2!4b1!5s0x880fd3546416dcb7:0x3333a570ff1df010!4m5!3m4!1s0x880fd35383aa0379:0xe132dc09c888b814!8m2!3d41.8979303!4d-87.6228927",
        "author": "Oscar Yanek"
    },
    {
        "name": "Where the Great Chicago Fire Started",
        "description": "In October 1871, dry weather and an abundance of wooden buildings, streets and sidewalks made Chicago vulnerable to fire. The Great Chicago Fire began on the night of October 8, in or around a barn located on the property of Patrick and Catherine O'Leary at 137 DeKoven Street on the city's southwest side.",
        "category": "Historical",
        "address": "137 DeKoven Street, Chicago, IL 60607\n",
        "latitude": 41.86902,
        "longitude": -87.64078,
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Chicago_in_Flames_by_Currier_%26_Ives%2C_1871_%28cropped%29.jpg ",
        "source": "https://en.wikipedia.org/wiki/Great_Chicago_Fire",
        "author": "Henry Martin"
    },
    {
        "name": "Wrigley Field",
        "description": "Historic Chicago landmark and staple of the northside. Home field for the Cubs, one of Chicago's two baseball teams. The stadium has been around since 1914 and still maintains much of it's original interior and exterior.",
        "category": "Historical",
        "address": "1060 W Addison St, Chicago, IL 60613",
        "latitude": "41.94866180583689",
        "longitude": -87.6552415069834,
        "img": "https://images.squarespace-cdn.com/content/v1/5c2a6a3f8ab7224aa18f545c/1548031491369-EBMUORAPY7VOWXH3TMPD/ke17ZwdGBToddI8pDm48kJeg4s6veog0rNcjHTCQNwh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmujyyI7Frso6MRdplGTbhDpMGdeM8OBEQAzLO35Q5amTnaglVaVzA-hLYjFHbo-x9/4185.jpg?format=1500w\n",
        "source": "https://lh6.googleusercontent.com/proxy/iR_LbdSOvq7Q5YafIgyaf7GikZc3upJsaBiq9nXpzBA555JN1NUvGgUIbCxiO0NtIhc6HEYWTFUwsCamAtBTaCl_yKN-BKWeL8SKM8b37psScm2oHG_ExMEBAB1jhpUz7WorsN6gdr0hlGowO01bv2_lVLI44MU=w419-h240-k-no",
        "author": "Oscar Yanek"
    }

]


document.getElementById("category-card-div").innerHTML = ` 
     ${categoryData.map(categoriesCardTemplate).join("")} `;  //This displays the card template on the modal




function categoriesCardTemplate(category) {
    return `
            <div class="property-card">
              <a href="#">
                <div id="property-image-${category.name}" class="property-image" style="background-image:url(${category.img});"> </div>
              </a>
              <div class="property-description">
                <h4 class="card-name"> ${category.name} </h4>
                <p class="card-des">${category.description}</p>
              </div>
            </div>`;

}


function getInfo(id){

    for (let i = 0; i < test.length; i++){
        let target = test[i].category;
        let name = test[i].name;

        if(id === target){
            return `
                <div class="location">
                    <h2 class="location-name">${name} </h2>
                 </div>`;
        }

    }
}




for (let i = 0; i < categoryData.length; i++) {

    let id = categoryData[i].name;
    var picture = document.getElementById(`property-image-${id}`);

    picture.addEventListener('click', ()  => {

        getInfo(id);
        console.log("It works " + i + " " + id);
    });
}










