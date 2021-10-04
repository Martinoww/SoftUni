function solve() {
Array.from(document.querySelectorAll('li.quiz-answer')).forEach(d => d.addEventListener('click', onClick));
let [secondQ, thirdQ] = document.querySelectorAll('.hidden');
let resultArea = document.querySelector('.results-inner h1');
let resultParent = document.querySelector('#results');
let rightAnswers = 0;
let questionNums = 0;

function onClick(e){
let parentSection = e.currentTarget.parentElement.parentElement;
let targetTrimedContent = e.currentTarget.textContent.trim();
if(questionNums == 0){
  if(targetTrimedContent === 'onclick'){
    rightAnswers++; 
  }
  questionNums++;
  parentSection.style.display = 'none';
  secondQ.style.display = 'block';
}else if(questionNums == 1){
  if(targetTrimedContent === 'JSON.stringify()'){
    rightAnswers++; 
  }
  questionNums++;
  parentSection.style.display = 'none';
  thirdQ.style.display = 'block';
}else if(questionNums == 2){
  if(targetTrimedContent === 'A programming API for HTML and XML documents'){
    rightAnswers++; 
  }
  questionNums++;
  parentSection.style.display = 'none';
 
    if(rightAnswers == 3){
      console.log(resultArea);
      resultArea.textContent = 'You are recognized as top JavaScript fan!';
      resultParent.style.display = 'block';
    }else {
      resultArea.textContent = `You have ${rightAnswers} right answers`;
      resultParent.style.display = 'block';
    }
}

  
}
}
