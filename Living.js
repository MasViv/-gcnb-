img=""
status="";
objects=[];

function setup()
{
    canvas=createCanvas(620,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="-_-";
}

function preload()
{
img=loadImage("https://www.miyainteriors.com/wp-content/uploads/2020/01/LindsaySalazar.com-104.jpg");
}

function draw()
{
    image(img,0,0,620,420);
    if(status!="")
    {
        for(i=0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML="LOL YOU GOTS NEGATIVE RIZZ";

            fill("red");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("red");   
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded()
{
    console.log("Modal is lodad");
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects=results;
}