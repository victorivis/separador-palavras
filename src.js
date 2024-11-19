let input = document.getElementById("entrada");
let colunaA = document.getElementById("colunaA").firstElementChild;

function separar(){
    let resultado = "";

    let linhas=input.value.split("\n");
    for(let j=0; j<linhas.length; j++){
        let linhaAtual = linhas[j];

        let ultimo=0;
        for(let i=0; i<linhaAtual.length; i++){
            const letraAtual = linhaAtual[i];
            if(letraAtual>='a' && letraAtual<='z' || letraAtual>='A' && letraAtual<='Z'){
                ultimo=i+1;
            }
        }
        

        console.log("tamanho: ", linhaAtual.length, ultimo);
        if(ultimo>3 && linhaAtual[ultimo-3]=='T' && linhaAtual[ultimo-2]=='R' && linhaAtual[ultimo-1]=='F' && linhaAtual[ultimo]=='5'){
            ultimo++;
        }

        resultado += linhaAtual.slice(0, ultimo) + "\t" + linhaAtual.slice(ultimo) + "\n";

        
    }
    navigator.clipboard.writeText(resultado)
                    .then(() => {
                        console.log("Texto copiado para o clipboard!");
                    })
                    .catch(err => {
                        console.error("Erro ao copiar: ", err);
                    });
    colunaA.textContent=resultado;
}

input.addEventListener("keyup", separar);