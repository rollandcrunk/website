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
    name: 'Hardware', timeFrame: 'Late 70s - early 80s',
    technologies: [
      'AND gates, OR gates, flip-flops; core memory.',
      'Assembly and machine language.',
      'Real time systems.',
      'Removable disk storage.',
    ],
    organizations: [
      'US Navy',
      'BTI Computer Systems',
      'Formaster',
      'Pyramid Technology',
    ],
    titles: [
      'Data Systems Technician',
      'Technical Instructor',
      'Field Service Engineer',
      'Technical Support Engineer',
    ]
  },
  {
    name: 'System software', timeFrame: 'mid 80s - mid 90s',
    technologies: [
      'UNIX, C, Shell scripting',
      'Compilers, symbolic debuggers, language tools, symbol table generation.',
      'SPARC-64 processor architecture simulator.',
      'C++, Object oriented programming',
    ],
    organizations: [
      'Pyramid Technology',
      'Versatec',
      'Stratus Computer',
      'National University',
      'HaL Computer Systems',
    ],
    titles: [
      'Sr. Software Instructor',
      'Software Engineer',
      'Sr. Software Engineer',
      'Graduate',
      'Manager, Language Tools',
    ]
  },
  {
    name: 'Early web', timeFrame: 'mid 90s - y2k; connecting people',
    technologies: [
      'Java, <abbr rel="tooltip" data-title="HyperText Markup Language">HTML</abbr>, JavaScript.',
      '<abbr rel="tooltip" data-title="HyperText Transfer Protocol">HTTP</abbr>,'
      + ' <abbr rel="tooltip" data-title="Lightweight Directory Access Protocol">LDAP</abbr>,'
      + ' <abbr rel="tooltip" data-title="Remote Method Invocation">RMI</abbr>,'
      + ' <abbr rel="tooltip" data-title="Java Native Interface">JNI</abbr>',
      'Object and relational databases.',
      'Specialized application servers.',
    ],
    organizations: [
      'WebFlow',
      'FullTime Systems',
      'Accentuate Systems',
      'Netscape Communications',
    ],
    titles: [
      'Director, Open Systems Development',
      'Senior Member of Technical Staff',
      'Chief Technical Officer',
      'Website Application Architect',
    ]
  },
  {
    name: 'Infrastructure', timeFrame: 'Late 70s - early 80s',
    technologies: [
      'Virtualization; horizontal and vertical scaling.',
      'Provisioning, push deployment, VM instantiation and isolation.',
      'High availability monitoring and control',
      'Servlet, JSP, JDBC',
    ],
    organizations: [
      'Ejacent',
      'Simteria Philippines',
      'SyncObs',
      'Veritas',
      'Symantec',
      'Kite Dance',
      'ClearApp',
      'Oracle',
      'Aryaka Networks',
    ],
    titles: [
      'Software Architect',
      'Chief Executive Officer',
      'Software Consultant',
      'Senior Principal Software Engineer',
      'Principal Member of Technical Staff',
      'Principal Software Engineer',
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