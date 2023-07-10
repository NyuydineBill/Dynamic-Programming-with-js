const gridTraveler = (m,n)=>{
    if (m===1 && n===1) return 1;
    if (m===0 || n===0) return 0;
    return gridTraveler(m-1,n) + gridTraveler(m,n-1)
}

console.log(gridTraveler(3,3))
console.log(gridTraveler(1,1))
console.log(gridTraveler(18,18))