import {Injectable} from "@angular/core";

export class Juncture {
  constructor(public name: string,
              public caption: string,
              private categoryMap: Map<string, string[]>) {}

  get categories(): string[] { return Array.from(this.categoryMap.keys()) }

  public category(key: string): string[] { return this.categoryMap.get(key) }
}

class Experience {
  name: string;
  timeFrame: string;
  technologies: string[];
  organizations: string[];
  titles: string[];
}

const EXPERIENCE: Experience[] = [
  {
    name: 'Hardware', timeFrame: 'In the beginning',
    technologies: [
      'AND gates, OR gates, flip-flops; core memory.',
      'Assembly and machine language.',
      'Real time systems.',
      'Removable disk storage devices.',
    ],
    organizations: [
      'US Navy',
      'BTI Computer Systems',
      'Formaster',
    ],
    titles: [
      'Data Systems Technician',
      'Technical Instructor',
      'Field Service Engineer',
      'Technical Support Engineer',
    ]
  },
  {
    name: 'System software', timeFrame: 'Building blocks for hardware vendors',
    technologies: [
      'UNIX, C, Shell scripting',
      'Compilers, symbolic debuggers, language tools, symbol table generation.',
      '<abbr rel="tooltip" data-title="Scalable Processor ARchitecture">SPARC</abbr>-64 processor architecture simulator.',
      'C++, Object oriented programming',
    ],
    organizations: [
      'Pyramid Technology',
      'Versatec',
      'Stratus Computer',
      'HaL Computer Systems',
    ],
    titles: [
      'Sr. Software Instructor',
      'Software Engineer',
      'Manager, MIS Development',
      'Sr. Software Engineer',
      'Manager, Language Tools',
    ]
  },
  {
    name: 'Early web', timeFrame: 'Connecting people and machines',
    technologies: [
      'Java, <abbr rel="tooltip" data-title="HyperText Markup Language">HTML</abbr>, JavaScript.',
      '<abbr rel="tooltip" data-title="HyperText Transfer Protocol">HTTP</abbr>,'
      + ' <abbr rel="tooltip" data-title="Lightweight Directory Access Protocol">LDAP</abbr>,'
      + ' <abbr rel="tooltip" data-title="Remote Method Invocation">RMI</abbr>,'
      + ' <abbr rel="tooltip" data-title="Java Native Interface">JNI</abbr>',
      'Object and relational databases.',
      'Specialized application servers.',
      'Web based collaboration, workflow, and address book applications.',
      'Distributed <abbr rel="tooltip" data-title="High Availability">HA</abbr> system monitoring and control.',
    ],
    organizations: [
      'WebFlow',
      'FullTime Systems',
      '<abbr rel="tooltip" data-title="Co-founder">Accentuate Systems<span class="small">*</span></abbr>',
      'Netscape Communications',
    ],
    titles: [
      'Director, Open Systems Development',
      'Senior Member of Technical Staff',
      '<abbr rel="tooltip" data-title="Co-founder">Chief Technical Officer<span class="small">*</span></abbr>',
      'Website Application Architect',
    ]
  },
  {
    name: 'Early cloud', timeFrame: 'Utility computing',
    technologies: [
      'Virtualization; horizontal and vertical scaling.',
      'Provisioning, push deployment, VM instantiation and isolation.',
      'High availability monitoring and control',
      'Servlet, '
      + ' <abbr rel="tooltip" data-title="Java Server Pages">JSP</abbr>,'
      + ' <abbr rel="tooltip" data-title="Java Database Connectivity">JDBC</abbr>,'
      + ' <abbr rel="tooltip" data-title="Enterprise Java Beans">EJB</abbr>,'
      + ' <abbr rel="tooltip" data-title="Java Persistence Architecture">JPA</abbr>',
      'Grails, Groovy, Gradle, Spring Security',
      '<abbr rel="tooltip" data-title="Cascading Style Sheets">CSS</abbr>,'
      + ' <abbr rel="tooltip" data-title="Document Object Model">DOM</abbr>,'
      + ' jQuery,'
      + ' <abbr rel="tooltip" data-title="Asynchronous JavaScript and XML">AJAX</abbr>',

      '<abbr rel="tooltip" data-title="Extensible Markup Language">XML</abbr>,'
      + ' <abbr rel="tooltip" data-title="XML Schema Definition">XSD</abbr>,'
      + ' <abbr rel="tooltip" data-title="XML Path">XPATH</abbr>,'
      + ' <abbr rel="tooltip" data-title="EXtensible Stylesheet Language">XSL</abbr>',
      '<abbr rel="tooltip" data-title="Simple Object Access Protocol">SOAP</abbr>,'
      + ' <abbr rel="tooltip" data-title="Web Service Definition Language">WSDL</abbr>',
    ],
    organizations: [
      '<abbr rel="tooltip" data-title="Contract and permanent">Ejasent<span class="small">*</span></abbr>',
      '<abbr rel="tooltip" data-title="Co-founder">Simteria Philippines<span class="small">*</span></abbr>',
      '<abbr rel="tooltip" data-title="Contract ">SyncObs<span class="small">*</span></abbr>',
      '<abbr rel="tooltip" data-title="By acquisition of Ejasent">Veritas<span class="small">*</span></abbr>',
      '<abbr rel="tooltip" data-title="By merger with Veritas">Symantec<span class="small">*</span></abbr>',
      '<abbr rel="tooltip" data-title="Gratis">Kite Dance<span class="small">*</span></abbr>',
      '<abbr rel="tooltip" data-title="Contract and permanent">ClearApp<span class="small">*</span></abbr>',
      'Oracle',
      'Aryaka Networks',
    ],
    titles: [
      'Software Architect',
      '<abbr rel="tooltip" data-title="Co-founder">Chief Executive Officer<span class="small">*</span></abbr>',
      'Software Consultant',
      'Senior Principal Software Engineer',
      'Principal Member of Technical Staff',
      'Principal Software Engineer',
    ]
  },
  {
    name: 'Au courant', timeFrame: 'Humbled by the brilliance that surrounds me',
    technologies: [
      'Mobile and responsive web development',
      '<abbr rel="tooltip" data-title="Google Web Toolkit">GWT</abbr>,'
      + ' <abbr rel="tooltip" data-title="Google App Engine">GAE</abbr>,'
      + ' <abbr rel="tooltip" data-title="Universal Analytics">UA</abbr>,'
      + 'Guava, Guice, Gin, Closure (soy) templates',
      'Google Maps',
      'Email and push notifications',
      'Typescript, Dart',
      'Angular 2, Ionic 2',
      'NPM, Gulp, LESS, SASS',
      '<abbr rel="tooltip" data-title="REpresentational State Transfer">REST</abbr>,'
      + ' Spring Boot'
    ],
    organizations: [
      '<abbr rel="tooltip" data-title="Contract ">Google<span class="small">*</span></abbr>',
      '<abbr rel="tooltip" data-title="Contract ">Intranotions<span class="small">*</span></abbr>',
      '<abbr rel="tooltip" data-title="Founder">Crunk Biz, LLC<span class="small">*</span></abbr>',
    ],
    titles: [
      'Java Developer',
      'Managing Director',
    ]
  },
];

@Injectable()
export class ExperienceService {
  private static allExperience: Juncture[] = ExperienceService.junctures();

  public get experience(): Juncture[] {
    return ExperienceService.allExperience;
  }

  private static junctures(): Juncture[] {
    let result: Juncture[] = [];

    for (let i = 0; i < EXPERIENCE.length; ++i) {
      let experience = EXPERIENCE[i];
      let categories = new Map<string, string[]>();
      if (experience.technologies && experience.technologies.length > 0)
        categories.set('technologies', experience.technologies);
      if (experience.organizations && experience.organizations.length > 0)
        categories.set('organizations', experience.organizations);
      if (experience.titles && experience.titles.length > 0)
        categories.set('titles', experience.titles);

      result.push(new Juncture(experience.name, experience.timeFrame, categories));
    }

    return result;
  }
}