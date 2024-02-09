let mark={
    fullname:'mark miller',
    height:'150',
    Mass:'60',
    calcBMI: function(){
        this.BMI= (this.Mass/(this.height*this.height));
        return this.BMI;
    }
}
let john={
    fullname:'john smith',
    height:'160',
    Mass:'70',
    calcBMI: function(){
        this.BMI= (this.Mass/(this.height*this.height));
        return this.BMI;
    }
}
if(mark.calcBMI() > john.calcBMI())
{
    console.log(` ${mark.fullname}'s BMI (${mark.BMI}) is higher than ${john.fullname}'s BMI (${john.BMI})!`)
}
else{
    console.log(` ${john.fullname}'s BMI (${john.BMI}) is higher than ${mark.fullname}'s BMI (${mark.BMI})!`)
}

let arr=[1,2,3]
console.log(typeof arr)

