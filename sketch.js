//Name: Seongwon Jang(장성원)
//Assignment name: Random Grade Generator Exercise
//Course Number: 20616-09(cs099)
//Term & Year: Spring 2020
var grade;
var L_grade;
function setup() {
  createCanvas(200, 200);
  grade = random(100);
  textSize(20);
}
function mousePressed(){
grade = random(100);
}
function draw() {

  background(220);

   grade = round(grade);
     
  if(97<=grade)
  {
    L_grade = 'A+';
  } else if(96>=grade&&grade>=93)
  {
     L_grade = 'A';
  }  else if(92>=grade&&grade>=90)
  {
     L_grade = 'A-';
  } else if(89>=grade&&grade>=87)
  {
     L_grade = 'B+';
  } else if(86>=grade&&grade>=83)
  {
     L_grade = 'B';
  } else if(82>=grade&&grade>=80)
  {
     L_grade = 'B-';
  } else if(79>=grade&&grade>=77)
  {
     L_grade = 'C+';
  } else if(76>=grade&&grade>=73)
  {
     L_grade = 'C';
  } else if(72>=grade&&grade>=70)
  {
     L_grade = 'C-';
  } else if(69>=grade&&grade>=67)
  {
     L_grade = 'D+';
  } else if(66>=grade&&grade>=63)
  {
     L_grade = 'D';
  } else if(62>=grade&&grade>=60)
  {
     L_grade = 'D-';
  } else
  {
   L_grade = 'F';
  }
  text(grade,100,100);
  text(L_grade,100,150);
  

console.log(L_grade);
}

