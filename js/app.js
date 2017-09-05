function populate(){
  if(quiz.isEnded()){
    //show scores
    showScores();
  }
  else{
    //show questions
    var element=document.getElementById('question');
    element.innerHTML=quiz.getQuestionIndex().text;
    // alert(quiz.getQuestionIndex().text);

    //show choices
    var choices=quiz.getQuestionIndex().choices;
    for(var i=0;i<choices.length;i++){
      var ele=document.getElementById('choice'+i);
      ele.innerHTML=choices[i];

      guess('btn'+i,choices[i]);
    }
    showProgress();
  }
}

function showProgress(){
  var currentQuestionIndex=quiz.questionIndex+1;
  var ele=document.getElementById('progress');
  ele.innerHTML='Question '+ currentQuestionIndex +'of '+quiz.questions.length;
}


function guess(id,guess){
  var ele=document.getElementById(id);
  ele.onclick=function(){
    quiz.guess(guess);
    populate();
  };
}

function showScores(){
  var gameOverHTMl="<h1>Result</h2>";
  gameOverHTMl+="<h2 id='scores'>Your Scores: "+ quiz.score + '/' + quiz.questions.length +"</h2>";
  var ele=document.getElementById('quiz');
  ele.innerHTML=gameOverHTMl;
}

var questions=[
  new Question("Which one is not object oriented programming language?",["Java","C#","C++","C"],'C'),
  new Question("Which language is used for styling webpage?",['HTML','CSS','JQUERY','XML'],'CSS'),
  new Question("There are _____ main components in object oriented programming ?",['1','6','2','4'],'4'),
  new Question("Which language is used for web apps ?",['PHP','Python','Javascript','All'],'All'),
  new Question("MVC is a _____ ?",['Language','Library','Framwork','All'],'Framwork'),
  new Question("Which of the following launches digital education programme for media agency professionals in Asia Pacific?",['Facebook','Twitter','Google','Microsoft'],'Twitter'),
  new Question("WikiLeaks website was hacked by?",['Dragonfly','Morpho','Chaos Computer Club','OurMine'],'OurMine'),
  new Question("A computer assisted method for the recording and analyzing of existing or hypothetical systems is?",['Data Transmission','Data Flow','Data Capture','Data Processing'],'Data Flow'),
  new Question("A database management system based on the concept of ownership is?",['Network Topology','Network Layer','Network database system','Network License system'],'Network database system'),
  new Question("A magnetic tape volume that is used on a data processing operation without any change to its contents is?",['Magnetic Disk','Punched paper tape','Master tape','Card reader'],'Maste tape')


];

var quiz=new Quiz(questions);

//initialize the app
populate();
