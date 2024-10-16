function contar(){
    var ini = document.querySelector('#txti')
    var fim = document.querySelector('#txtf')
    var passo = document.querySelector('#txtp')
    var res = document.querySelector('#res')

    if(ini.value.length == 0 ||fim.value.length == 0 ||passo.value.length == 0) {
        alert('Está faltando dados!!!')
        res.innerHTML = `Não consigo contar`
    }
    else{
        res.innerHTML ='Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if( i < f){
            while(i <= f ){
            res.innerHTML += `${i} \u{1F449}`
            i+=p
            }
        }
        else{
            while(i >= f ){
            res.innerHTML += `${i} \u{1F449}`
            i-=p
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}