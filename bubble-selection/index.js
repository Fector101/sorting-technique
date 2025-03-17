function Sorter(numbers){
  for (let i = 0; i < numbers.length; i++) {
    let smallest_number = numbers[i]
    for (let j = i+1; j < numbers.length; j++) {
      if(numbers[j] < smallest_number){
        numbers[i]=numbers[j]
        numbers[j]=smallest_number
        smallest_number=numbers[i]
    }
  }
}
console.log(numbers)
}
Sorter([8, 3, 5, 1]);
Sorter([3, 1, 2])
Sorter([64, 25, 12, 22, 11])
Sorter([5, 4, 3, 2, 1])
Sorter([1,22,1,223, 355,3,33,-46,32,89,5,2,78])
Sorter([10, 20, 10, 5, 1]);
