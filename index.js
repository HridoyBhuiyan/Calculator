        let inputValue1, x1, OutputValue1;
        function change1()
        {            
            inputValue1 = document.getElementById("input1").value;
            //formula1
            OutputValue1 = inputValue1*1000;
            OutputValue1 = (OutputValue1 . toPrecision(8))
            document.getElementById("output1").innerHTML=OutputValue1 + "Grams";
        }
        let arr1=[];
        let inpArr1=[];

        function pushprint1()
        {
            if(inputValue1==null)
            {
                document.getElementById("dropHistory1").innerHTML=("Invalid Input")
            }
            else {
                arr1.push(OutputValue1);
                inpArr1.push(inputValue1);
                var p1 = document.createElement('p');
                var lastItem1 = arr1.pop();
                var inpItem1 = inpArr1.pop();
                p1.innerHTML = inpItem1 + " KG = "+lastItem1 + "  Grams";
                document.getElementById("dropHistory1").appendChild(p1)                
                x1 = 0;
                guesses1 = [];
                document.getElementById("input1").value = "";
            }     
        }





        let inputValue2, x2, OutputValue2;
        function change2() 
        {            
            inputValue2 = document.getElementById("input2").value;

            //formula2
            OutputValue2 = inputValue2/1000;
            OutputValue2 = (OutputValue2 . toPrecision(8))
            document.getElementById("output2").innerHTML=OutputValue2+ " KG";
        }
        let arr2=[];
        let inpArr2=[];

        function pushprint2()
        {
            if(inputValue2==null)
            {
                document.getElementById("dropHistory2").innerHTML=("Invalid Input")
            }
            else {
                arr2.push(OutputValue2);
                inpArr2.push(inputValue2);
                var p2 = document.createElement('p');
                var lastItem2 = arr2.pop();
                var inpItem2 = inpArr2.pop();
                p2.innerHTML = inpItem2 + " Grams = "+lastItem2 + " KG";
                document.getElementById("dropHistory2").appendChild(p2)                
                x2 = 0;
                guesses2 = [];
                document.getElementById("input2").value = "";
            }     
        }




    