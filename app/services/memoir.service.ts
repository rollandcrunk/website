import {Injectable} from "@angular/core";
import {CarouselMedia} from "../components/carousel.component";
import {SEARS_POINT_LAP} from "../components/shared/iframe.source";

const dickyB: CarouselMedia = {
  src: 'img/uss-rb-russell.jpg', media: 'image', title: 'USS R.B. Russell; SSN 687',
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

const mcCalendar: CarouselMedia = {
  src: 'img/dec79.png', media: 'image', title: 'In December',
  description: `
    Brrr. Not the month I would have selected if the choice were mine, but fortunate having an late Indian summer
    that made the whole thing feasible.
    
  `
};

const mcRide: CarouselMedia = {
  src: 'img/cb750f.jpg', media: 'image', title: '1979 Honda CB-750f',
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
    leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
    Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
    vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
    metus eu accumsan iaculis.
  `
};

const mcRoute: CarouselMedia = {
  src: 'img/route.jpg', media: 'image', title: 'The Route',
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
    leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
    Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
    vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
    metus eu accumsan iaculis.
  `,
  destination: 'https://goo.gl/maps/g7shF1uz5sk'
};

const racer: CarouselMedia = {
  src: 'img/racer.jpg', media: 'image', title: '1983 Kawasaki GPz750',
  description: `
    <a href="https://www.youtube.com/watch?v=WQPevaUvotI" target="_blank">
      Take a lap around Sears Point Raceway.
    </a>
  `
};

const searsPointLap: CarouselMedia =  {
  src: SEARS_POINT_LAP, media: 'iframe', title: 'Sears Point Lap',
  description: `
    <a href="https://www.youtube.com/watch?v=WQPevaUvotI" target="_blank">
      Take a lap around Sears Point Raceway.
    </a>
  `
};

const outsideOffice: CarouselMedia = {
  src: 'img/outside-office.jpg', media: 'image', title: 'Simteria Philippines',
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
    leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
    Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
    vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
    metus eu accumsan iaculis.
  `
};

const officeWindow: CarouselMedia = {
  src: 'img/office-window.jpg', media: 'image', title: 'Simteria Philippines',
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
    leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
    Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
    vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
    metus eu accumsan iaculis.
  `
};

const insideOffice: CarouselMedia = {
  src: 'img/inside-office.jpg', media: 'image', title: 'Simteria Philippines',
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
    leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
    Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
    vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
    metus eu accumsan iaculis.
  `
};

const glorietta: CarouselMedia = {
  src: 'img/glorietta.jpg', media: 'image', title: 'Glorietta Mall, Makati Philippines',
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
    leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
    Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
    vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
    metus eu accumsan iaculis.
  `
};

const nyeManila: CarouselMedia = {
  src: 'img/nye-manila-trance.jpg', media: 'image', title: 'New Years Eve 2004, Makati Philippines',
  description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
      leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
      Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
      vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
      metus eu accumsan iaculis.
    `
};

const pasayRoad: CarouselMedia ={
  src: 'img/pasay-road.jpg', media: 'image', title: 'Pasay Road, Makati Philippines',
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
    leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
    Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
    vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
    metus eu accumsan iaculis.
  `
};

const hogsTied: CarouselMedia = {
  src: 'img/pigs-in-blanket.jpg', media: 'image', title: 'Pigs for sale, Davao Philippines',
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
    leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
    Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
    vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
    metus eu accumsan iaculis.
  `
};

@Injectable()
export class MemoirService {
  private static memoirs: Map<string, CarouselMedia[]> = new Map<string, CarouselMedia[]>()
    .set('sub', [dickyB])
    .set('ride', [mcRide, mcRoute])
    .set('racer', [racer, searsPointLap])
    .set('business', [outsideOffice, insideOffice, officeWindow])
    .set('gallery', [nyeManila, glorietta, pasayRoad, hogsTied]);


  public getMemoir(title: string): CarouselMedia[] {
    return MemoirService.memoirs.get(title);
  }
}