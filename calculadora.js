var pontuacao =[
               [5, 2], 
               [15, 8], 
               [27, 1], 
               [70, 20], 
               [90, 2],
               [95, 90],
               [1200, 0] 
                
            ]

var saldoVitorias = 0;
  
var nivel = ""


for (let i = 0; i < pontuacao.length; i++) {

    

    

            if( pontuacao[i][0] < 10
            
            ) {


                nivel = "Ferro"

                saldoVitorias = pontuacao[i][0] - pontuacao[i][1]

                console.log("O herói tem saldo de " + saldoVitorias + " está no nível de " + nivel)

             
                
            }


            else if ( (pontuacao[i][0] > 10 ) &&
                    (pontuacao[i][0] < 21) 
            
            ) {

                nivel = "Bronze"

                saldoVitorias = pontuacao[i][0] - pontuacao[i][1]

                console.log("O herói tem saldo de " + saldoVitorias + " está no nível de " + nivel)

             

                

            }


            else if ( (pontuacao[i][0] > 20 ) &&
                    (pontuacao[i][0] < 51) 
            
            ) {

                nivel = "Prata"

                saldoVitorias = pontuacao[i][0] - pontuacao[i][1]

                console.log("O herói tem saldo de " + saldoVitorias + " está no nível de " + nivel)

               

                

            }

            else if ( (pontuacao[i][0] > 50 ) &&
                    (pontuacao[i][0] < 81) 
            
            ) {

                nivel = "Ouro"

                saldoVitorias = pontuacao[i][0] - pontuacao[i][1]

                console.log("O herói tem saldo de " + saldoVitorias + " está no nível de " + nivel)

               
                

            }

            else if ( (pontuacao[i][0] > 80) &&
                    (pontuacao[i][0] < 91) 
            
            ) {

                nivel = "Diamante"

                saldoVitorias = pontuacao[i][0] - pontuacao[i][1]

                console.log("O herói tem saldo de " + saldoVitorias + " está no nível de " + nivel)

                

            }

            else if ( (pontuacao[i][0] > 90 ) &&
                    (pontuacao[i][0] < 101) 
            
            ) {

                nivel = "Lendario"

                saldoVitorias = pontuacao[i][0] - pontuacao[i][1]

                console.log("O herói tem saldo de " + saldoVitorias + " está no nível de " + nivel)

             

                

            }

            else if (pontuacao[i][0] > 100 ) {

                nivel = "Imortal"        

                saldoVitorias = pontuacao[i][0] - pontuacao[i][1]

                console.log("O herói tem saldo de " + saldoVitorias + " está no nível de " + nivel)

           

                

            }

          

              




       
           
      

}