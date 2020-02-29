exports.showCourses = (req, res) => {
    res.render("courses", {
    offeredCourses: courses
});
};

exports.showSignUp = (req, res) => {
    res.render("contact");
};


exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};

var courses = [
    {
        title: "Bolos orientados a eventos",
        cost: 50
    },

    {
        title: "Alcachofra asincrona",
        cost: 25
    },

    {
        title: "Suco de laranja orientado a objetos",
        cost: 10
    }
];