class CourseController {
    show(req, res, next) {
        res.render('home');
    }
}
module.exports = new CourseController();