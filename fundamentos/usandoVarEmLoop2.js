const funcs = []

for(let i = 0; i < 3; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[1]()
funcs[2]()