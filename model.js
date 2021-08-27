var loginbox=document.getElementById('loginbox');
var close=document.getElementById('close');
var login=document.getElementById('login');
var model=document.getElementById('model');

loginbox.onclick=function()
{
    model.style.display="block";
}

close.onclick=function()
{
    model.style.display="none";
}

login.onclick=function()
{
    var e=document.getElementById('email');
    var p=document.getElementById('password');

    if(e.value=="ntmishra98shivu@gmail.com")
    {
        if(p.value=="1234")
        {
            alert("Login Succesfull")
        }
        else
        {
            alert("Login in incorrect!..")
        }
    }

}
