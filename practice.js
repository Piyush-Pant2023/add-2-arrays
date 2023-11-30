arr1=[1,2,3,4,5]
arr2=[6,7,8,9,10]
let arr3=[];
for(let i=0;i<arr1.length;i++){
    arr3[i]=arr1[i]
}
for(let j=0;j<arr2.length;j++){
    arr3[j+arr1.length]=arr2[j]
}
console.log(arr3)