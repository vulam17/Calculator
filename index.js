let num1 = "", num2 = "", operator = "", r = 0, dotFlag = false, negativeFlag = false;
let chain = " "
    //Nguoi dung nhan nut
function num(e) {
    //Nhap tham so thu 1
    if (operator === "") {
        if ((((e.innerHTML) >= 0 && (e.innerHTML) <= 9) || (e.innerHTML == ".") || (e.innerHTML == "-")) && (num1.toString().length < 13)) {
            if(((e.innerHTML == ".") && (num1 !== "") && (dotFlag == false)) ||((e.innerHTML != ".")))
            {
                let temp = []
                if(e.innerHTML == "-") 
                {
                    if((negativeFlag == false) && (num1 == "")) num1 += e.innerHTML  
                } else num1 += e.innerHTML  
                if(e.innerHTML == "-") negativeFlag = true 
                temp = num1.split("")
                if((temp[0] == "0") && ((temp[1] >=0) || (temp[1] <=9)))
                {
                    temp.splice(0,1)
                    num1 = temp.join("")
                }
                if(num1.toString().indexOf(".") !== -1) dotFlag = true
                display(num1)
            }
        }
        if (e.innerHTML == 'Del') {
            let temp = ""
            temp = num1.toString().split("")
            temp = temp.splice(0, temp.length - 1)
            num1 = temp.join("")
            if (num1 === "") num1 = 0
            if(num1.toString().indexOf(".") === -1) dotFlag = false
            display(num1)
        }
    }
    if((e.innerHTML == "+" || e.innerHTML == "-" || e.innerHTML == "*" || e.innerHTML == "/") && (num1 !== "")&& (num2 !== "")&& (operator !== ""))
    {
        result()
        num1 = r
        num2 = ""
        chain = fixNumber(num1) + " " + operator
        display(num1)
        displayChain()
    }
    //Nhap toan tu
    if (num1 !== "") {
        if (e.innerHTML == "+") {
            if ((operator == "") || (operator !== "+")) 
            {
                operator = "+"
                chain = fixNumber(num1) + " " + operator
            }
            else (operator == "+")
            {
                chain = fixNumber(num1) + " " + operator
                display(num1)
                displayChain()
                operator = "+"
            }
            dotFlag = false
        }
        if ((e.innerHTML == "-") && (num1!=="-")){
            if ((operator == "") || (operator !== "-")) 
            {
                operator = "-"
                chain = fixNumber(num1) + " " + operator
            }
            else (operator == "-")
            {
                chain = fixNumber(num1) + " " + operator
                display(num1)
                displayChain()
                operator = "-"
            }
            dotFlag = false
        }
        if (e.innerHTML == "*") {
            if ((operator == "") || (operator !== "x")) 
            {
                operator = "x"
                chain = fixNumber(num1) + " " + operator
            }
            else (operator == "x")
            {
                chain = fixNumber(num1) + " " + operator
                display(num1)
                displayChain()
                operator = "x"
            }
            dotFlag = false
        }
        if (e.innerHTML == "/") {
            if ((operator == "") || (operator !== "/")) 
            {
                operator = "/"
                chain = fixNumber(num1) + " " + operator
            }
            else (operator == "/")
            {
                chain = fixNumber(num1) + " " + operator
                display(num1)
                displayChain()
                operator = "/"
            }
            dotFlag = false
        }
    //Nguoi dung nhan nut =
        if ((e.innerHTML) == "=") {
            if((num1!=="") && (operator!="") && (num2!==""))
            {
                result()
                chain = fixNumber(num1) + " " + operator + " " + fixNumber(num2) + " = "
                num1 = r
                display(num1)
                displayChain()
                num2 = ""
                dotFlag = false
            }
        }
    }
    //Nhap tham so thu 2
    if ((num1 !== "") && (operator !== "")) {
        if ((((e.innerHTML) >= 0 && (e.innerHTML) <= 9) || (e.innerHTML == ".")) && (num2.toString().length < 13)) {
            if(((e.innerHTML == ".") && (num2 !== "") && (dotFlag == false)) ||((e.innerHTML != ".")))
            {
                let temp = []
                num2 += e.innerHTML
                temp = num2.split("")
                if((temp[0] == "0") && ((temp[1] >=0) || (temp[1] <=9)))
                {
                    temp.splice(0,1)
                    num2 = temp.join("")
                }
                if(num2.toString().indexOf(".") !== -1) dotFlag = true
                display(num2)
            }
        }
        if (e.innerHTML == 'Del') {
            let temp = ""
            if (num2 !== "") {
                temp = num2.toString().split("")
                temp = temp.splice(0, temp.length - 1)
                num2 = temp.join("")
                if (num2 === "") num2 = 0
                if(num2.toString().indexOf(".") === -1) dotFlag = false
                display(num2)
            }
        }
    }
    //Nhan nut C
    if ((e.innerHTML === "C")) {
        num1 = ""
        num2 = ""
        operator = ""
        negativeFlag = false
        chain = ""
        display("0")
        displayChain()
        dotFlag = false
    }
}
    //Ham hien thi so to
function display(num)
{
   if(num != "-") document.getElementById("result").innerHTML = fixNumber(num)
   else document.getElementById("result").innerHTML = "-"
}
    //Ham hien thi so nho
function displayChain()
{
    document.getElementById("his").innerHTML = chain
}
    //Chinh sua cach hien thi
function fixNumber(num) {
    let tempDec = ""
    let tempNegative = "", tempNega = []
    if(num.toString().indexOf("e") !== -1)
    {
        let temp = num.toString()
        tempDec = temp.split("").splice(temp.toString().indexOf("e"),temp.length).join("")
        num = Number(num).toExponential()
    }
    if(num.toString().split("")[0] == "-") 
    {
        tempNega = num.toString().split("")
        tempNega.splice(0,1)
        num = tempNega.join("")
        tempNegative = "-"
    }
    if(num.toString().indexOf(".") !== -1)
    {
        let temp = num.toString()
        tempDec = temp.split("").splice(temp.toString().indexOf("."),temp.length).join("")
    }
    let array = parseInt(num).toString().split("")
    let len = array.length
    let count
    count = len%3
    for(i = 0; i < parseInt(len/3); i++)
    {
        array.splice((count + 3 * i + i),0,",")
    }
    if(array[0] == ",") array.splice(0,1)
    return tempNegative + array.join("") + "" + tempDec
}
    //Tinh toan
function result() {
    switch (operator) {
        case "+": r = Number(num1) + Number(num2)
            break;
        case "-": r = Number(num1) - Number(num2)
            break;
        case "x": r = Number(num1) * Number(num2)
            break
        case "/": r = Number(num1) / Number(num2)
            break
    }
}