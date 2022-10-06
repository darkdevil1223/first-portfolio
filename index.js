console.log("script running....")
document.querySelector('.cross').style.display ='none'
document.querySelector('.menu').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.menu').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.cross').style.display = 'inline'
        // document.querySelector('.menu').style.display = 'none'

    }
})
