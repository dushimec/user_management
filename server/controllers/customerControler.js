exports.homepage = async (req, res) => {
  const locals = {
    title: "Node",
    description: "Free nodeJs user management system",
  };
  res.render("index", locals);
};

exports.computer = async (req, res) => {
  const locals = {
    title: "Computer",
    description: "Free nodeJs user management system",
  };
  res.render("pages/computer", locals);
};

exports.contact = async (req, res) => {
  const locals = {
    title: "Contact",
    description: "Free nodeJs user management system",
  };
  res.render("pages/contact", locals);
};

exports.laptop = async (req, res) => {
  const locals = {
    title: "Laptop",
    description: "Free nodeJs user management system",
  };
  res.render("pages/laptop", locals);
};

exports.product = async (req, res) => {
  const locals = {
    title: "Product",
    description: "Free nodeJs user management system",
  };
  res.render("pages/product", locals);
};

exports.about = async (req, res) => {
  const locals = {
    title: "Product",
    description: "Free nodeJs user management system",
  };
  res.render("pages/about", locals);
};




