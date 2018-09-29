const lutadores = ['Anderson Silva', 'Marreta', 'Sonnen', 'Connor']

lutadores.forEach(function(value, index){
    console.log(`${index+1}) ${value}`)
})

Array.prototype.myForEach = function(fun){
    for(let i = 0; i < this.length; i++){
        //value = this[i]
        //index = this.indexOf(value)
        fun(this[i], i, this)
    }
}

lutadores.myForEach(function(value, index){
    console.log(`${index + 1}) ${value}`)
})