
class CourseController {
    show(req, res, next) {
        res.json("Courses new")
    }
}
module.exports = new CourseController();
