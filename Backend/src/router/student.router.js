const router = require("express").Router();

const { count } = require("../model/student.model");
const Students = require("../model/student.model")

router.get("/", async (req, res) => {
    const student = await Students.findAll();
    res.status(200).json({
        ok: true,
        status: 200,
        body: student,
    });
});


router.get("/findOne/:id_student", async (req, res) => {
    const id = req.params.id_student;
    const student = await Students.findOne({
        where: {
            id_student: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: student,
    });

});

router.post("/new", async (req, res) => {
    const dataStudents = req.body
    await Students.sync()
    const createStudent = await Students.create({
        id_card: dataStudents.id_card,
        name: dataStudents.name,
        last_name: dataStudents.last_name,
        group: dataStudents.group
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Created Student",
    });
});

router.put("/:id_student", async (req, res) => {
    const id = req.params.id_student;
    const dataStudents = req.body;
    const updateStudent = await Students.update(
        {
            id_card: dataStudents.id_card,
            name: dataStudents.name,
            last_name: dataStudents.last_name,
            group: dataStudents.group
        },
        {
            where: {
                id_student: id,
            },
        }
    );
    res.status(200).json({
        ok: true,
        status: 200,
        body: updateStudent,
    });
})

router.delete("/:id_student", async (req, res) => {
    const id = req.params.id_student;
    const deleteStudent = await Students.destroy({
        where: {
            id_student: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 204,
        body: deleteStudent,
    });
})



// Cantidad usuarios: 
router.get("/count", async (req, res) => {
    const students = await Students.count();
    res.status(200).json({
        ok: true,
        status: 200,
        body: students,
    });
});


module.exports = router;