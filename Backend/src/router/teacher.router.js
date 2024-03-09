const router = require("express").Router();

const { count } = require("../model/teacher.model");
const Teachers = require("../model/teacher.model")

router.get("/", async (req, res) => {
    const teacher = await Teachers.findAll();
    res.status(200).json({
        ok: true,
        status: 200,
        body: teacher,
    });
});


router.get("/findOne/:id_teacher", async (req, res) => {
    const id = req.params.id_teacher;
    const teacher = await Teachers.findOne({
        where: {
            id_teacher: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: teacher,
    });

});

router.post("/new", async (req, res) => {
    const dataTeachers = req.body
    await Teachers.sync()
    const createTeacher = await Teachers.create({
        id_card: dataTeachers.id_card,
        name: dataTeachers.name,
        last_name: dataTeachers.last_name,
        group: dataTeachers.group
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Created Teacher",
    });
});

router.put("/:id_teacher", async (req, res) => {
    const id = req.params.id_teacher;
    const dataTeachers = req.body;
    const updateTeacher = await Teachers.update(
        {
            id_card: dataTeachers.id_card,
            name: dataTeachers.name,
            last_name: dataTeachers.last_name,
            group: dataTeachers.group
        },
        {
            where: {
                id_teacher: id,
            },
        }
    );
    res.status(200).json({
        ok: true,
        status: 200,
        body: updateTeacher,
    });
})

router.delete("/:id_teacher", async (req, res) => {
    const id = req.params.id_teacher;
    const deleteTeacher = await Teachers.destroy({
        where: {
            id_teacher: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 204,
        body: deleteTeacher,
    });
})



// Cantidad Profesores: 
router.get("/count", async (req, res) => {
    const teachers = await Teachers.count();
    res.status(200).json({
        ok: true,
        status: 200,
        body: teachers,
    });
});




module.exports = router;