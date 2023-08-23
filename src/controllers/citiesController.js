const getCities = (req, res) => {
    res.json({
        cities:[
            { 
            tittle: "aaa",
            info:"info",
            img:"img"
             }
            ]
    })
    }


    const getCity = (req, res) => {
        const {id} = req.params
        const {data} = req.query
        if (data) {
            res.json(
                {         
                        tittle: "xx",
                        info:"info",
                        img:"img",
                        paramId: id ,                              
                        queryData: data
                }
            )
        }else{
            res.json(
                {         
                        tittle: "xx",
                        info:"info",
                        img:"img",
                        paramId: id                              
                        
                }
            )
        }
       
        }




    module.exports = {getCity,getCities}