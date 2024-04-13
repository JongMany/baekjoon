const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")
const input = `5 7
4 5 1 3 2`.toString().trim().split("\n")

const [n, m] = input[0].split(" ").map(Number)
const numbers = input[1].split(" ").map(Number);

let times = 0;


function mergeSort(list, left, right) {
  if(left < right) {
    const mid = Math.floor((left + right)/2);
    mergeSort(list, left, mid); // 분할
    mergeSort(list, mid+1, right); // 분할
    merge(list, left, mid, right); // 병합
  }
}

const sorted = [];
let word;
function merge(list, left, mid, right) {

  let i = left; // 정렬된 왼쪽 리스트에 대한 인덱스
  let j = mid + 1; // 정렬된 오른쪽 리스트에 대한 인덱스
  let k = left; // 정렬될 리스트에 대한 인덱스

  // 분할 정렬된 list의 합병
  while(i<= mid && j<=right) {
    if (list[i] <= list[j]) { // 왼쪽이 더 작은 경우
      times++;
      if(times === m) {
        word = list[i];
      }
      sorted[k++] = list[i++];
    } else {
      times++;
      if(times === m) {
        word = list[j];
      }
      sorted[k++] = list[j++];
    }
  }

  // 남아있는 값들을 복사
  if(i>mid) {
    for(let l=j;l<=right; l++) {
      times++;
      if(times === m) {
        word = list[l];
      }
      sorted[k++] = list[l];
    }
   }else {
    for(let l=i;l<=mid; l++) {
      times++;
      if(times === m) {
        word = list[l];
      }
      sorted[k++] = list[l];
    }
  }

  // 배열 sorted[](임시 배열)의 리스트를 배열 list[]로 재복사
  for(l=left; l<=right; l++) {
    list[l] = sorted[l];
  }
}


mergeSort(numbers, 0, numbers.length-1);
if(m > times) {
  console.log(-1);
} else {
  console.log(word);
}