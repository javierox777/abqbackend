const {createJob, findJobById, allJobs, deleteJob, updateJob} = require("../../controllers/trabajos/controllers.trabajos")
const {Router} = require("express")
const router = Router()




router.post("/createtrabajo", createJob)
router.get("/forid/:id", findJobById)
router.get("/alljob", allJobs)
router.put("/updatejob/:id", updateJob)
router.delete("/deletejob/:id", deleteJob)









module.exports = router