function area (largura,altura){
    const area = largura*altura 
        if(area > 20) {
            console.log(`Você excedeu o limite da área: ${area} m2`)
        
    } else {
        return area
    }
}

console.log(area(2,3))
console.log(area (2))
console.log(area (2,1,2,5,5,8,2))
console.log(area ())
console.log(area (5,10))
