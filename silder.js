var sindex=0;

slideshow();

function goslide(n)
{
    var s=document.getElementsByClassName('slide');
    var count=s.length;
    sindex=sindex+n;
    for(var i=0; i<count;i++)
    {
        s[i].style.display="none";
    }
    if(sindex > count)
    sindex=1;
    if(sindex <= 0)
    sindex=count;
    s[sindex-1].style.display="block";
    clearTimeout(mytime)
    
}

function slideshow()

{
    var i;
    var s=document.getElementsByClassName('slide');
    var count=s.length;

    for(i=0; i<count;i++)
    {
        s[i].style.display="none";
    }

    sindex++;

    if(sindex > count)
    {
        sindex=1;
    }
    s[sindex-1].style.display="block";
    mytime=setTimeout(slideshow,2000);
}