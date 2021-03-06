const { Router } = require("express");
const Homepages = require("../models").homepage
const Story = require("../models").story
const router = new Router();
const authMiddleware = require("../auth/middleware");





router.get('/homepages/:id', async(req, res)=>{
    const id = req.params.id;
    
    
    if(!id){
        res.status(400).send('no homepage found')
    }
    
  
    const detailPage = await Homepages.findByPk(id, {
       include: [Story],
       
       order: [[Story,"createdAt", "DESC"]]
       
       
    })

        
    if(!detailPage) {
        console.log('finding err')
        res.status(400).send('no homepage found')
    }
    res.status(200).send(detailPage)
    
  }
  )

router.get('/homepages', async(req, res)=>{
    const pages = await Homepages.findAll()
    
    try{
    
    
    res.status(200).send(pages.map(p=>p))
    } catch(e){
        res.status(400).send(`error: ${e.message}`)
    }

}
) 


router.get('/myhomepage/:id', async(req, res, next)=>{
    const id = req.params.id;
    
    
    if(!id){
        res.status(400).send('no homepage found')
    }
    
    
  
    const detailPage = await Homepages.findByPk(id, {
       include: [Story],
       
       order: [[Story,"createdAt", "DESC"]]
       
       
    })

   
    
    if(!detailPage) {
        console.log('finding err')
        res.status(400).send('no homepage found')
    }
    res.status(200).send(detailPage)
    
  }
  )

router.patch('/myhomepage/', async(req, res, next)=>{
    const id = req.body.id;
      
    if(!id){
        res.status(400).send('please login first to edit your page')
    }
    const detailPage = await Homepages.findByPk(id, {
        include: [Story],
        
        order: [[Story,"createdAt", "DESC"]]
        
        
     })

    detailPage.title = req.body.title;
    detailPage.description = req.body.description;
    detailPage.backgroundColor = req.body.backgroundColor
    detailPage.color = req.body.color;

    await detailPage.save();




   
    
    if(!detailPage) {
        console.log('finding err')
        res.status(400).send('no homepage found')
    }

    res.status(200).send(detailPage)
    
  }
  )  




  router.patch('/story/:id',async(req,res,next) =>{
    id = req.params.id; 
    try{

    let story = await Story.findByPk(id)
    if(story){
        story.name = req.body.name;
        story.content = req.body.content;
        story.imageUrl = req.body.imageUrl;

        await story.save();
    }

    
    res.status(200).send(story)

    } catch(e){
        next(e)
    }
  }) 

  router.delete('/story/:id', async(req,res,next)=>{
    id = req.params.id; 
    try{  
    if(!id){
        res.status(400).send('please login first to delete your story')
    }
    let story = await Story.findByPk(id)

    await story.destroy();
  
    if(!story) {
        console.log('finding err')
        res.status(400).send('no homepage found')
    }

    res.status(200).send(story)
    } catch(e){
    next(e)
    }

})  

router.post('/story/:id', async(req,res,next)=>{
    id = req.params.id; 
       
    try{  
    if(!id){
        res.status(400).send('please login first to create your story')
    }

    if(!req.body.name){
        res.status(400).send('please enter a name for your story')
    }
    const story = await Story.create({
       name: req.body.name,
       content: req.body.content,
       imageUrl: req.body.imageUrl,
       homepageId: id, 
    })

    
    

    res.status(200).send(story)
    } catch(e){
    next(e)
    }

})  

module.exports = router;