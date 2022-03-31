let library=[]
let a=0

function Book(title,author,pages,read,color){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.color=color
}

const sub=document.getElementById("submit")

const shelves=document.getElementById("shelves")

submit.addEventListener("click", function(){
    submit.classList.add("clicked")
    submit.addEventListener("transitionend",function (e){
    this.classList.remove("clicked")
    });
});


sub.addEventListener("click",function(){
    let title=document.getElementById("title").value
    let author=document.getElementById("author").value
    let pages=document.getElementById("pages").value
    let check=document.getElementById("readed").checked
    let r=Math.round(Math.random()*255)
    let g=Math.round(Math.random()*255)
    let b=Math.round(Math.random()*255)    
    let color="rgb("+r+","+g+","+b+")"
    let i=library.length
    library[i]=new Book(title,author,pages,check,color)       
    let book=document.createElement("div")
    shelves.appendChild(book)
    book.setAttribute("class",title)
    book.setAttribute("id","book")
    book.style.backgroundColor=color
    book.innerHTML=title
    book.style.width=90+"px"
    book.style.height=100+"%"
    book.addEventListener("click", function(){
        book.classList.add("clicked")
        book.addEventListener("transitionend",function (e){
        this.classList.remove("clicked")
        });
        if(document.getElementById(title)==null){
            let xy=book.getBoundingClientRect()
            let menu=document.createElement("div")
            menu.style.position="absolute"
            menu.setAttribute("class","menu")
            menu.setAttribute("id",title)
            menu.style.top=(xy.top+25)+"px"
            menu.style.left=(xy.left+90)+"px"
            shelves.appendChild(menu)
            let ptitle=document.createElement("p")
            ptitle.innerHTML="Title: "+title
            menu.appendChild(ptitle)
            let ppages=document.createElement("p")
            ppages.innerHTML="Number of pages: "+pages
            menu.appendChild(ppages)
            let pauthor=document.createElement("p")
            pauthor.innerHTML="Author: "+author
            menu.appendChild(pauthor)
            let pread=document.createElement("p")
            if(check==true){
                pread.innerHTML="Read: Yes"
            }else{
                pread.innerHTML="Read: No"
            }
            menu.appendChild(pread)
            let bread=document.createElement("button")
            bread.innerHTML="Change read status"
            bread.setAttribute("class","bread")
            menu.appendChild(bread)
            bread.addEventListener("click", function(){
                bread.classList.add("clicked")
                bread.addEventListener("transitionend",function (e){
                this.classList.remove("clicked")
                });
                if(check==true){
                    check=false
                    pread.innerHTML="Read: No"
                }else{check=true
                    pread.innerHTML="Read: Yes"}
            });
            let bremove=document.createElement("button")
            menu.appendChild(bremove)
            bremove.innerHTML="Remove book from library"
            bremove.setAttribute("class","bremove")
            bremove.addEventListener("click", function(){
                bremove.classList.add("clicked")
                bremove.addEventListener("transitionend",function (e){
                this.classList.remove("clicked")
                shelves.removeChild(book)
                let men=document.getElementById(title)
                shelves.removeChild(men)
                });
            });
        }else{
            let men=document.getElementById(title)
            shelves.removeChild(men)
        }
    });
    
})