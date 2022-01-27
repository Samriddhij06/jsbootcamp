const gradeMap = {
  frank: 92,
  elise: 95,
  angie: 96
};

//Object mehtods
Object.keys(gradeMap);
Object.values(gradeMap);
Object.entries(gradeMap);

const source ={
  frank: 92,
  elise: 95,
  angie: 96,
  timmy: 79
};

const target = {
  timmy: 89,
  joyce: 87
};

const source2 = {
  jacob:91,
  timmy: 99
};

const combined = Object.assign(target,source,source2);
console.log('combined',combined);
