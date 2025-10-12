export const Projects = [
  {
    name: "Biz Visiting Cards",
    image: "/cards.png",
    date: "2025",
    url: "http://bizvisitingcard.com/",
    desc: "A PHP full-stack visiting card management platform that allows businesses and professionals to create, customize, and share their digital business cards online. It includes an admin panel for managing users and card templates, while users can design, save, and share their own cards.",
    features: [
      "User-friendly digital visiting card creation",
      "Role-based authentication and authorization",
      "CRUD functionality for business card templates",
      "Admin panel for managing users and designs",
      "Option to share visiting cards via link or QR code",
      "Customizable themes, fonts, and colors",
      "Mobile-friendly and fully responsive design",
      "Download cards as PDF or image format"
    ]
  },
  {
    name: "Ecommerce Web",
    image: "/ecommerce.png",
    date: "2025",
    url: "https://vktradingsolution.in/ecommerce",
    desc: "A full-stack e-commerce web application built with PHP CodeIgniter framework, providing a seamless shopping experience with secure authentication, product management, and order handling.",
    features: [
      "Developed using PHP CodeIgniter framework with MVC architecture",
      "MySQL database integration for secure data storage",
      "Admin panel for managing products, categories, orders, and users",
      "User registration and login with role-based authentication",
      "Shopping cart and checkout functionality",
      "Order management system with invoice generation",
      "Product search and filtering with pagination",
      "Responsive UI using Bootstrap and Tailwind CSS",
      "Session and form validation for data security",
      "SEO-friendly URLs with CodeIgniter routing"
    ]
  }
]




export const Menus = [
  {
    id: `home-${Date.now()}`,
    // Icon: FaHouse,
    Icon: "Home",
    uri: "#home",
    name: "Home",
  },
  {
    id: `projects-${Date.now()}`,
    // Icon: FaDiagramProject,
    Icon: "Projects",
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `about-${Date.now()}`,
    // Icon: FaUser,
    Icon: "About",
    uri: "#about",
    name: "About",
  },

  {
    id: `repo-${Date.now()}`,
    // Icon: FaGithub,
    Icon: "Contact",
    uri: "#contact",
    name: "Repositoriries",
  },
]
