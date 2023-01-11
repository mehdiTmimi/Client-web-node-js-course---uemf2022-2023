let xx=""
window.addEventListener('popstate', function (event) {
	singlePageManger(getPath())
});
const getPath=()=>window.location.hash || '#welcome'
const singlePageManger =(path)=>{
    console.log(path)
    const components=document.getElementsByClassName("component")
    Array.from(components).forEach(element=>{
        element.classList.add('hidden');
    })
    const links=document.querySelectorAll('header nav li')
    Array.from(links).forEach(element=>{
        element.classList.remove('selected');
    })
    this.document.querySelector(path).classList.remove('hidden')
    this.document.querySelector('header nav li:has(a[href="'+path+'"])').classList.add('selected')
}
singlePageManger(getPath())