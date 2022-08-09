class NewController {

        index(req,res){

                res.render('news')

        }
        show(req,res){

            res.send('aaaa')

    }


}

module.exports =  new NewController