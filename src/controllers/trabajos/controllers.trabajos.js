const TRABAJO = require("../../model/trabajos/trabajos")
const ctrls = {}




try {
    ctrls.createJob = async(req, res)=>{
        const { date,
            numero,
            trabajadores, 
            supervisor,
            progress,  
            fechaEnd,
            gastos,
            presupuesto} = req.body
        const data = new TRABAJO({
            date,
            numero,
            trabajadores, 
            supervisor,
            progress,  
            fechaEnd,
            gastos,
            presupuesto
        })
        await data.save() 
        res.json({
            message: "success",
            body: data

        })
    }
} catch (error) {
    res.json({
        message: "error",
        body: error
    })
}



ctrls.findJobById = async(req, res)=>{
    try {
         const data = await TRABAJO.findById({_id:req.params.id}).populate("presupuesto")
        if(!data){
            res.status(404).json({
                message:"error",
                body:"not found"
            })
        }
        
        res.status(200).json({
            message:"success",
            body:data
        })

    } catch (error) {
        res.status(500).json({
            message:"error",
            body: error
        })
    }
   

}



ctrls.allJobs = async(req, res)=>{
    try {
        const data = await TRABAJO.find()
        if(!data){
            res.status(404).json({
                message:"error",
                body:"not found"
            })
        }
        
        res.status(200).json({
            message:"success",
            body:data
        })
    } catch (error) {
        res.status(500).json({
            message:"error",
            body: error
        })
    }
}

ctrls.deleteJob = async(req, res)=>{
    try {
        const data = await TRABAJO.findByIdAndDelete({_id:req.params.id})
        if(!data){
            res.status(404).json({
                message:"error",
                body:"not found"
            })
        }
        
        res.status(200).json({
            message:"success",
            body:data
        })
    } catch (error) {
      
            res.status(500).json({
                message:"error",
                body: error
            })
        }
   
}
module.exports = ctrls