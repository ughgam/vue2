let curr=0, next=1, temp;
//cant alert or prompt like in browser
const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("numbers please? ",series_count=>{
    console.log("el macho series:")
    for (let i=1; i<=series_count; i++){
        console.log(curr)
        temp=curr+next
        curr=next
        next=temp
    }
    readline.close()
})