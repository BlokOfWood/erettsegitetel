function hashString(string)
{
  var h = 0, l = string.length, i = 0;
  if ( l > 0 )
    while (i < l)
      h = (h << 5) - h + string.charCodeAt(i++) | 0;
  return h;
}
var quizElement;

var Quiz = [
    {
        Question: "Hányféle háttértípus létezik a mai világban?",
        Answers: ["1", "2", "3", "4"],
        AnswerHash: "51"
    },
    {
        Question: "A felsoroltak közül melyik optikai meghajtó?",
        Answers: ["Mágneses szalag", "CD meghajtó", "Pendrive"],
        AnswerHash: "860527040"
    },
    {
        Question: "Leggyorsabb háttértár a felsoroltak közül?",
        Answers: ["Merevlemez", "DVD", "Blue-ray", "SSD"],
        AnswerHash: "82404"
    }
]
function init()
{
  quizElement = document.getElementById("Quiz");
  for(i = 0; i < Quiz.length; i++)
  {
    addQuizElement(i);
  }
  quizElement.innerHTML += '<input type="button" onclick="checkResults()" value="Beadás">'
}

function addQuizElement (questionIndex) {
    quizElement.innerHTML += 
        "<h2>" + Quiz[questionIndex].Question + "</h2>\n";

    Quiz[questionIndex].Answers.forEach(element => {
        quizElement.innerHTML += 
          '<input type="radio" id="'+element+'"class="AnswerInput" name="'+Quiz[questionIndex].Question+'" value="'+element+'">'+
          '<label style="margin-left:20px" for="'+element+'">'+element+'</label><br>'
    });
}

function checkResults()
{
  var points = 0;
  var data = new FormData(quizElement);
  var output = "";
  for (const entry of data) {
    output = output + entry[0] + "=" + entry[1] + ";";
    if(hashString(entry[1]) == Quiz.find((x) => x.Question == entry[0]).AnswerHash)
      points++;
  };
  document.getElementById("Result").innerHTML="Pontszám: " + points + "/" + Quiz.length;
  return [points, output];
}