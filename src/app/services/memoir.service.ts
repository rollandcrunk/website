import { Injectable } from '@angular/core';
import { CarouselMedia } from '../components/carousel.component';
import { SEARS_POINT_LAP } from '../components/shared/iframe.source';

const dickyB: CarouselMedia = {
  src: 'assets/img/uss-rb-russell.jpg', media: 'image', title: 'USS R.B. Russell; SSN 687',
  description: `
    <p>
      The <em>Dicky B.</em> A nuclear fast attack submarine home ported at New London Connecticut.
      Served as a data systems technician (<em>DS2(SS)</em>) responsible for the repair and maintenance of the 
      <a href="https://en.wikipedia.org/wiki/AN/UYK-7" target="_blank">AN/UYK-7</a> central computer complex. 
    </p>
    <p>
      International ports of call included 
      <a href="https://en.wikipedia.org/wiki/La_Maddalena" target="_blank">La Maddalena</a> and 
      <a href="https://en.wikipedia.org/wiki/Naples" target="_blank">Naples Italy</a>; 
      <a href="https://en.wikipedia.org/wiki/Submarine_Squadron_14" target="_blank">Holy Loch</a> and 
      <a href="https://en.wikipedia.org/wiki/HMNB_Clyde" target="_blank">Faslane Scotland</a>; 
      <a href="https://en.wikipedia.org/wiki/Trondheim" target="_blank">Trondheim</a> and 
      <a href="https://en.wikipedia.org/wiki/Bergen" target="_blank">Bergen Norway</a>; and, 
      <a href="https://en.wikipedia.org/wiki/Antigua" target="_blank">St. Johns, Antigua</a>.
    </p>
 `
};

const mcRide: CarouselMedia = {
  src: 'assets/img/cb750f.jpg', media: 'image', title: 'The Ride',
  description: `
    1979 Honda CB-750f. I added highway pegs and replaced the handlebars with higher ones, thinking that
    if I could lean back a little, it would be more comfortable over distance. As it turned out, the 
    battering of the wind&mdash;in particular the reclining position&mdash;caused me to spend most of the time
    on the open highway laying across the tank with my feet on the passenger pegs in the most aerodynamic
    position as possible;
    <a href="http://www.revzilla.com/motorcycle/woodcraft-clip-ons" target="_blank">clip ons</a>
    would have been a much better handlebar choice.
  `
};

const mcRoute: CarouselMedia = {
  src: 'assets/img/route.jpg', media: 'image', title: 'The Route',
  description: `
    <p>
    South as far as I could go before taking a right turn and heading west. The long way. 
    <p>
    Why? I departed Connecticut the 1st week of December and it was pretty chilly; there would be too much 
    snow (any at all) if I headed due west. As it was, it took 5 days to reach
    western Louisiana, mainly by drafting the fastest semi heading in the same direction. 
    The truckers were pretty cool about me hanging a couple yards from their bumper coming out of the 
    frozen northeast, and I gradually increased the draft distance as it became less cold.
    <p>
    Contrast that with the burn across the desert averaging 550 miles per day, with a finale of 740 miles.
  `,
  destination: 'https://goo.gl/maps/g7shF1uz5sk'
};

const ibmEastwood: CarouselMedia = {
  src: 'assets/img/ibm-eastwood.jpg', media: 'image', title: 'Simtería Philippines',
  description: `
    <p>
    Company was located on the twelve floor of the IBM building in the 
    <a href="https://www.megaworldcorp.com/offices/quezon-city/eastwood-city/eastwood-city-cyberpark/" target="_blank">
      Eastwood City Cyberpark
    </a> at Libis, Quezon City, Metro Manila, Philippines. 
    This location was chosen because of its close proximity to three major universities, 
    state of the art infrastructure, and world class financial, legal, accounting and other support services, as
    well as qualification for incentives offered by the 
    <a href="http://www.peza.gov.ph/" target="_blank">
      Philippine Economic Zone Authority (PEZA)
    </a>.
    <p>
    In the Philippines very first I.T. park.
  `
};

const outsideOffice: CarouselMedia = {
  src: 'assets/img/outside-office.jpg', media: 'image', title: '<abbr rel="tooltip" data-title="The office">Ang opisina</abbr>',
  description: `
    <p>
    <img src="assets/img/simteria_ph-logo.jpg" alt="Simtería Philippines logo" class="pull-xs-right" style="border-radius: 6px;">
    Simtería Philippines was created to provide high-level expertise and 
    contract-programming services focusing on internet and web based technologies. Leveraging
    Java enterprise and relational database technologies to offer full-stack web application
    development.
    Clients included both US and German based companies, with 
    projects involving cloud provisioning, workflow and on-line collaborations, and web site design
    and implementation.
    <p>
  `
};

const insideOffice: CarouselMedia = {
  src: 'assets/img/inside-office.jpg', media: 'image', title: 'Ready to go',
  description: `
    <p>
    Workstations installed; blinds on their way.
    <p>
    Six full-time and two part time employees occupying approximately 3,000 square feet of office space.
    Achieved profitability for a short time until the events of 9/11 caused severe downturn in business
    and retreat by potential venture capitol interests that led to our closing a few months later. 
    <p>
  `
};

const officeWindow: CarouselMedia = {
  src: 'assets/img/office-window.jpg', media: 'image', title: 'Location, location, location',
  description: `
    <p>
    Looking out my office window in 
    <a href="https://en.wikipedia.org/wiki/Quezon_City" target="_blank">Quezon City</a> towards home, which is about 1 kilometer away
    (somewhere roughly center about 1/3 of the way down).
    <p>
    The tall buildings to the upper right are the financial district of 
    <a href="https://en.wikipedia.org/wiki/Ortigas_Center" target="_blank">Ortegas</a>.
  `
};


const greenMeadows: CarouselMedia = {
  src: 'assets/img/green-meadows.jpg', media: 'image', title: 'Home',
  description: `
    Green Meadows. Not far from work, I walked to and fro most days if the weather wasn't inclimate (and a couple of 
    times when it was).
  `
};


const racer: CarouselMedia = {
  src: 'assets/img/racer.jpg', media: 'image', title: '#629',
  description: `
    <p>
    At Sears Point (now known as 
    <a href="https://www.youtube.com/watch?v=WQPevaUvotI" target="_blank">
      Sonoma Raceway).
    </a>.
    <p>
    I competed in the 750cc Super Street class in
    <a href="http://afmracing.org/" target="_blank">American Federation of Motorcyclist</a> sanctioned
    motorcycle road racing events riding a 1983 GPz750 Kawasaki. Fun stuff!
  `
};

// tslint:disable:max-line-length
const searsPointLap: CarouselMedia =  {
  src: SEARS_POINT_LAP, media: 'iframe', title: 'Sears Point Lap',
  description: `
    <a href="https://www.youtube.com/watch?v=WQPevaUvotI" target="_blank">
      Click here
    </a>
    or the play button to take a lap around Sonoma Raceway. 
    This was taken several years after I raced (I am not in this race) and is the 600cc production class, but except 
    for course differences after turn 8a
    <span style="word-wrap: break-word">
    (<a href="https://en.wikipedia.org/wiki/Sonoma_Raceway#/media/File:Infineon_(Sears_Point)_with_emphasis_on_Moto-IRL_track.svg" target="_blank">
      video
    </a></span>
    vs.
    <a href="https://upload.wikimedia.org/wikipedia/commons/6/6c/Infineon_%28Sears_Point%29_with_emphasis_on_Long_track.svg" target="_blank">
      past
    <a>)
    it is pretty close to how I remember it.
  `
};
// tslint:enable:max-line-length

const states: CarouselMedia = {
  src: 'assets/img/states.jpg', media: 'image', title: 'US States',
  description: `
    <p>
    Most were drive throughs, with a few business trips sprinkled in. In alphabetical order:
    <br>
    Alabama, Arkansas, Arizona, California, Colorado, Connecticut, Delaware, 
    Florida, Georgia, Iowa, Idaho, Illinois, Kansas, Louisiana, Massachusetts,
    Maryland, Maine, Mississippi, North Carolina, New Hampshire, New Jersey, 
    New Mexico, Nevada, New York, Oklahoma, Oregon, Pennsylvania, Rhode Island, 
    South Carolina, Texas, Utah, Virginia, Washington, and West Virginia.
    <p>
    States where there was an airport only stop are not included (otherwise I would have made a dozen trips
    to Hawaii).
    The states that I have stayed in for some time in are: California, Connecticut, South Carolina, Maine,
    Virginia, and Louisiana.
  `
};

const countries: CarouselMedia = {
  src: 'assets/img/countries.jpg', media: 'image', title: 'Countries',
  description: `
    <p>
    Not as extensively travelled internationally. If Canada weren't so big,
    there would hardly be any color (and I only visited Niagara Falls). In rough
    order visited: Canada, Italy, UK (Scotland/England), Netherlands, Virgin Islands,
    Antigua, Norway, Mexico, Germany, Philippines, and South Korea.
    <p>
    The only country I've spent any significant time in (more than a few weeks) is the
    Philippines.
  `
};

const nyeManila: CarouselMedia = {
  src: 'assets/img/nye-manila-trance.jpg', media: 'image', title: 'New Years Eve, Makati Philippines',
  description: `
      To find a party, all one needs to do is step outdoors.
  `
};

const glorietta: CarouselMedia = {
  src: 'assets/img/glorietta.jpg', media: 'image', title: 'Jeepneys',
  description: `
    The primary mode of transportation. Here is a line of
    <a href="https://en.wikipedia.org/wiki/Jeepney" target="_blank">jeepneys</a> 
    outside the Glorietta Mall in Makati Philippines. A major transportation hub in Makati
    that, in addition to jeepneys, features buses, taxis, and a nearby light rail.
  `
};

const highRise: CarouselMedia = {
  src: 'assets/img/makati-highrise.jpg', media: 'image', title: 'On the move',
  description: `
    I saw several high rises being built while living in Metro Manila (and
    some finished). The growth is impressive; traffic, well, that's another
    thing&mdash;impressive in its own right.
  `
};

const atPlay: CarouselMedia = {
  src: 'assets/img/at-play.jpg', media: 'image', title: 'At the beach',
  description: `
    Kids just doing their job: playing and having fun.
  `
};

const hogsTied: CarouselMedia = {
  src: 'assets/img/pigs-in-blanket.jpg', media: 'image', title: 'Think you\'re having a bad day?',
  description: `
    Could be. I certainly hope not. Anyway, what these piglets have to look forward to is either another day of
    this, or being the main ingredient for <a href="https://en.wikipedia.org/wiki/Lechon" target="_blank">Lechon</a>.
  `
};

const davaoBoat: CarouselMedia = {
  src: 'assets/img/davao-boat.jpg', media: 'image', title: 'Outrigger',
  description: `
    With over 7,700 islands in the Philippines, boats like this are indispensable in transporting people and
    supplies between population centers and other&mdash;often remote&mdash;islands. 
  `
};


const usgp: CarouselMedia = {
  src: 'assets/img/usgp.jpg', media: 'image',
  title: '<abbr rel="tooltip" data-title="US Gran Prix">USGP</abbr>, Laguna Seca, California',
  description: `
      The very best in the world competing in the MotoGP at Laguna. 
      I've had the pleasure of observing many greats race there over the years, including: 
      <a href="https://en.wikipedia.org/wiki/Kenny_Roberts" target="_blank">Kenny Roberts</a>,
      <a href="https://en.wikipedia.org/wiki/Eddie_Lawson" target="_blank">Eddie Lawson</a>,
      <a href="https://en.wikipedia.org/wiki/Freddie_Spencer" target="_blank"><i>"Fast" Freddy</i> Spencer</a>,
      and
      <a href="https://en.wikipedia.org/wiki/Valentino_Rossi" target="_blank">Valentino Rossi</a>,
    </a>
  `
};

const dhrolin: CarouselMedia = {
  src: 'assets/img/dhrolin-85.jpg', media: 'image', title: 'Dhrolin - level 110 Human Rogue',
  description: `
    I play a bit of
    <a href="https://worldofwarcraft.com" target="_blank">World of Warcraft</a> on occasion. 
    <a href="http://us.battle.net/wow/en/character/alexstrasza/Dhrolin/simple" target="_blank">Dhrolin</a> 
    is my main; the first toon
    I rolled and the beneficiary of the lions share of my attention; the best gear; the most
    achievements. I have a few other level 100+ toons (14+), in both the
    <a href="http://wowwiki.wikia.com/wiki/Alliance" target="_blank">Alliance</a> and
    <a href="http://wowwiki.wikia.com/wiki/Horde" target="_blank">Horde</a> factions,
    but playing any of these I've never achieved the same level of muscle memory as I do playing as Dhrolin.
  `
};

@Injectable()
export class MemoirService {
  private static memoirs: Map<string, CarouselMedia[]> = new Map<string, CarouselMedia[]>()
    .set('sub', [dickyB])
    .set('ride', [mcRide, mcRoute])
    .set('racer', [racer, searsPointLap])
    .set('business', [ibmEastwood, outsideOffice, insideOffice, officeWindow, greenMeadows])
    .set('traveller', [states, countries])
    .set('gallery', [nyeManila, glorietta, atPlay, hogsTied, davaoBoat, highRise, usgp, dhrolin]);


  public getMemoir(title: string): CarouselMedia[] {
    return MemoirService.memoirs.get(title);
  }
}
