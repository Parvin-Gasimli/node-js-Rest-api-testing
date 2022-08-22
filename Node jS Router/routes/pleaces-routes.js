const express =require("express")
const router =express.Router()


const DUMMY_PLACES=[

    {
        id:'p1',
        title:'Empire state Builfing',
        description:"One of the most sky scrapers in the world",
        location:{
            lat:40.7484474,
            lng:-73.9871516
        },
        adress:'20 W 34th St,New York,NY 10001',
        creator:'u1'
    }
]


router.get("/:pid",(req,res,next)=>{
    const pleaceId=req.params.pid;
    const place=DUMMY_PLACES.find((p)=>{
        return p.id===pleaceId
    })
    console.log("GET REQUJEST IN PLACES");
    res.status(200).json({data:place})
})



module.exports =router;




