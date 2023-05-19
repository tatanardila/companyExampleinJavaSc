class Comment {
  constructor ({
    content,
    username,
    typeOfUser,
  }) {
    this.content = content;
    this.username = username; 
    this.typeOfUser = typeOfUser;
    this.likes = 0;
  }
  
  publish() {
    console.log(this.username + "(" + this.typeOfUser + ")");
    console.log(this.likes + "likes");
    console.log(this.Comment)
  }
};




// funciones de play y pausa de un video demo de la case Demotopresent


//function playvideo(id){
//  const urlsecret = "https://www.youtube.com/watch?v=MVPTGNGiI-4&ab_channel=LofiGirl" + id;
//  console.log("se esta reproduciendo desde la url + playvideo");
//}


//function stopVideo(id){
//  const urlsecret = "https://www.youtube.com/watch?v=MVPTGNGiI-4&ab_channel=LofiGirl" + (id);
//  console.log ("pausamos el video" + urlsecret);
//}



// creamos la clase Demo to present creando los metodos de play y pausa

class DemoToPresent {
  constructor({
    name,
    videoId,
  }) {
    this.name = name;
    this.videoId = videoId;
  }


  play(){
    playvideo(this.videoId);
  }

  pause(){
     stopVideo(this.videoId);
  }
}
// hasta aca avance no pude hacer el doc index.hatml ni el archivo modeule.mjs





//creamos la clase Product manager =  clases en el curso
class ProductManager {
  constructor({
    productManagerName 
    }) {
    this.productManagerName = productManagerName;
  }
};
//creamos la clase Proyectos = cursos en el curso


class Projects {
  constructor({
    projectName, 
    productManager, 
    isInternal = false,
    lang = "English"
  }) {
    this._projectName = projectName;
    this.productManager = productManager;
    this.isInternal = isInternal;
    this.lang = lang;
  }

  get projectName() {
    return this._projectName;
  }

  set projectName(newName) {
    if (newName === "badWords") {
      console.error("no bro, don't change the project name");
    } else {
      this._projectName = newName;
    }
  } 
};

//creamos los proyectos (instancias del prototipo project) =  escuelas en el curso

const walt = new Projects ({
  projectName: "walt",
  productManager: "Carlos Herrera",
  isInternal: true,
  

});

const trinet = new Projects ({ 
  projectName: "trinet",
  productManager: "Stephany",
  lang: "German"
});

const ottomoto = new Projects ({
  projectName: "ottomoto",
  productManager: "Lizandra"
});

const waitlist = new Projects ({
  projectName: "waitlist",
  productManager: "Laura Ardila"
});

const carrierAsure = new Projects ({
  projectName: "carrier asure",
  productManager: "Sol Guevara"
});

const lss = new Projects ({
  projectName: "lss",
  productManager: "Laura Cruz"
});


const testBack = new Projects ({
  projectName: "test back",
  productManager: "Maria Paulina"
});




//creamos la Clase Cuentas = a learning paths en el curso

class Account{
  constructor({
    accountName,
    projects = []
  }) {
    this.accountName = accountName;
    this.projects = projects;
  }
};
//creamos lasinstancias de la clase cuentas
const LeanTech = new Account({
  accountName: "Lean Tech",
  projects: [
    walt,
    trinet,
    ottomoto
  ],
});

const p44 = new Account({
  accountName: "p44",
  projects: [
    walt,
    waitlist,
    carrierAsure
  ]
});

const leanSolution = new Account({
  accountName: "Lean Solutions",
  projects: [
    walt,
    lss,
    testBack
  ]
});





//Creamos la clase skill  
class Skill{
  constructor({
    skillName,
    technologies = []
  }) {
    this.skillName = skillName;
    this.technologies = technologies;
  }
};

// creamos las constantes skills o roles instancias de la clase Skill

const backend = new Skill({
    skillName: "backend dev",
    technologies:[
      "java Sc",
      "python"
    ]
});

const frontend = new Skill({
    skillName: "frontend dev",
    technologies: [
      "react",
      "html"
      ],
});

const scrum = new Skill({
    skillName: "scrum",
    technologies: [
      "Agile",
      "Jira"
    ]
});
const qa = new Skill({
    skillName: "qa",
    technologies: [
      "selenium",
      "postman"
    ]
});  



//Creamos la Clase usuario usamos herencia para a partir de esa clase crear diferentes tipos de usuario


class User {
  constructor({
    username,
    email = undefined,    
    account = [],
    projects = [],
    skill = [],
    })  
    { 
    this.username = username;
    this.email = email;
    this.account = account;
    this.projects = projects;
    this.skill = skill;
    }

  addNewSkill(newSkill) {
      this.skill.push(newSkill)
    };
  addNewProject(newProject) {
      this.projects.push(newProject)
    };
  addNewAccount(newAccount) {
      this.account.push(newAccount)
    }; 
    
    
  publishComment(commentContet) {
      const comment = new Comment ({
         content: commentContet,
         username: this.name
       }); 

       comment.publish
    }
};


//usamos la palabra reservada extends y super() para halar la informacion de nuestra clase madre User
// y creamos 3 tipos de usario - Contractor - direct employee - Admin


class ContractorUser extends User {
  constructor(props){
    super(props);
  }

  addNewProject(newProject) {
    if (newProject.isInternal){
      this.projects.push(newProject);
    } else {
      console.warn(" Hi" + this.username + "you are in an internal project, it is not a dedicated Client");
    }
  }
};

class DirectEmployeeUser extends User {
  constructor(props){
    super(props);
  }

  addNewProject(newProject) {
    if (newProject.lang !== "German"){
      this.projects.push(newProject);
    } else {
      console.warn("Hi" + this.username + "you can't work in a germans projects by the lenguaje");
    }
  }
};
  

//Polimorfismo donde podemos sobreescribir metodos
// que vienen de una superclase desde una subclase especial
// en este aso el tipo de  usuario lientUser
class ClientUser extends User{
  constructor(props){
    super(props);
  }
  addNewProject(newProject) {
    this.projects.push(newProject);
   }

   publishComment(commentContet) {
    const comment = new Comment ({
       content: commentContet,
       typeOfUser: "Client"
     }); 

     comment.publish
  } 

};



const daniel = new ClientUser ({
  username: "daniel",
  email: "askjaksj@sadad"
  
});

class AdminUser extends User {
  constructor(props){
    super(props);
  }

  addNewProject(newProject) {
     this.projects.push(newProject);
    }
  
};





const gianca = new ContractorUser({
  username: "gianxa",
  email: "askjaksj@sadad",
  account: [
    LeanTech,
    leanSolution
  ],
  projects: [
    walt,
    ottomoto
  ],
  skill: [
    backend
  ],
});

const carlos = new DirectEmployeeUser({
  username: "Carlos",
  email: "carlosj@gmail.com",
  account: [
    LeanTech,
    p44
  ],
  projects: [
        waitlist
  ],
  skill: [
    qa,
    frontend
  ],
});

gianca.addNewSkill(frontend);

carlos.addNewProject(trinet);

daniel.publishComment("hola soy el cliente");


gianca.publishComment("hola soy el Gianca el dev")

console.log(gianca);
console.log(carlos);
console.log(daniel);


