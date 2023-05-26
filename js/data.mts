enum Students {
  Leo,
}

class Project {
  name: string;
  description?: string;
  backgroundImage?: string;
  contributions?: Record<Students, string[]>;
  subProjects?: Project[];
  constructor(
    name: string,
    description?: string,
    backgroundImage?: string,
    contributions?: Record<Students, string[]>,
    subProjects?: Project[]
  ) {
    this.name = name;
    this.description = description;
    this.backgroundImage = backgroundImage;
    this.contributions = contributions;
    this.subProjects = subProjects;
  }
  static New(
    name: string,
    description?: string,
    backgroundImage?: string,
    constributions?: Record<Students, string[]>
  ) {
    return new Project(name, description, backgroundImage, constributions);
  }
  static MetaProject(
    name: string,
    subProjects: Project[],
    description?: string,
    backgroundImage?: string
  ): Project {
    return new Project(
      name,
      description,
      backgroundImage,
      undefined,
      subProjects
    );
  }
  IsMetaProject() {
    return this.subProjects !== undefined;
  }
}

const projects: Project[] = [
  Project.MetaProject(
    "Webbshop",
    [
      Project.New(
        "Paperboys",
        "En webbshop där man kan köpa papper, pennor och mer!",
        undefined,
        { [Students.Leo]: ["Javascript"] }
      ),
    ],
    "Vi blev uppdelade i 3 grupper, som var och en skulle göra enn webbshop med HTML, CSS och JavaScript."
  ),
];
