(function () {

angular.module('Portfolio')
.service('SectionService', SectionService);

SectionService.$inject = [];
function SectionService() {
    var section = this;

    section.getEducation = function () {
      return {
        title: "Education",
        image_url: "http://www.collegeessayorganizer.com/blog/wp-content/uploads/Virginia-Tech-School-Logo-small-jpg.jpg",
        image_webpage: "https://www.vt.edu",
        description: "I graduated from Virginia Tech in 2012 with a bachelor's of science in Chemical Engineering. I graduated Magna Cum Laude with a GPA of 3.6."
      }
    };

    section.getCourses = function () {
      return {
        title: "Courses",
        image_url: "http://couponslane.com/wp-content/uploads/2016/02/coursera.png",
        image_webpage: "https://coursera.org",
        description: "I've taken every course in the Ruby On Rails Web Development specialization on Coursera (certificate coming January 2017). Once they release their last course, I will be able to add the whole specialization to my certificates. I also took programming courses while I was going to college including MATLAB, and Object Oriented Programming in Java. In the future, I plan on getting a master's degree in Computer Science."
      }
    }

    section.getExperience = function () {
      return {
        title: "Other Experience",
        image_url: "",
        image_webpage: "",
        description: "I worked for a mining company in southern Utah as a Metallurgical Test Engineer and then as a Process Engineer. While working there, I developed models for the plant in excel, determined process design criteria, handled and organized process data, and interacted with operators on daily basis."
      }
    }

    section.getProjects = function () {
      return {
        title: "Projects",
        image_url: "http://www.drodd.com/images12/computer-icon18.png",
        description: "I've completed one full project with HTML, CSS, JQuery and PHP, which was my wedding website last year.  I have also started my own Ruby On Rails application for makeup shade searches. The project is unfinished but up and running for now. I am also familiar with Java, Angular JS 1 (sample project coming soon), Github, WordPress, Chrome Web Developer Tools, Bootstrap, AJAX and SQL. All my websites are responsive to different devices. Feel free to browse through the projects to see these frameworks in action!",
        frameworks: ["Java", "Angular JS", "Github", "WordPress", "Chrome Web Developer Tools", "Bootstrap", "AJAX", "SQL"],
        projects: allProjects
      }
    }

    section.getCertainProject = function (projectNumber) {
      return allProjects[projectNumber - 1];
    }

    var allProjects = [
      {
        number: 1,
        name: "Wedding Website",
        image: "../images/project1.png",
        frameworks: ["HTML", "CSS", "JQuery", "PHP", "SQL"],
        description: "",
        url: ""
      },
      {
        number: 2,
        name: "Verbena Makeup Shades",
        image: "../images/project2.png",
        frameworks: ["Ruby on Rails", "Bootstrap", "Javascript", "JQuery", "AJAX"],
        additional: ["devise", "postgresql"],
        description: "Verbena is a fun web application that facilitates the search of makeup products by connecting users directly with the shades and products used to create a certain makeup look. Connected to a postgresql database and soon web services, the data is fetched and displayed dynamically to the users. Users are able to create a profile and share make up looks or just have an account to save their favorite looks, products, or shades.",
        url: ""
      },
      {
        number: 3,
        name: "Portfolio",
        image: "",
        frameworks: ["Angular JS", "Bootstrap"],
        additional: ["UI-Router"],
        description: "",
        url: ""
      }
    ];

    // menuData.getItemsForCategory = function (shortName) {
    //   return $http ( {
    //     method: "GET",
    //     url: ApiBasePath + "menu_items.json",
    //     params: {category: shortName}
    //   }).then( function (response) {
    //     return response.data.menu_items;
    //   }, function (error) {
    //     console.log("ERROR");
    //     return "Not Found";
    //   })
    // };
}

})();
