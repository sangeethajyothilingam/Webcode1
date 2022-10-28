var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
container.append(row);

var lst=[];
var length= 2;
var pagecount =1;
async function loadData(){
  var res=await fetch("https://www.anapioficeandfire.com/api/books");
  lst = await res.json();
  pagecount = Math.ceil(lst.length/length);
  pagemove(0);
  document.body.append(container);
}


function pagemove(pg){
  try {
  row.innerHTML="";
  for(var i =pg;i<lst.length&&i<pg+length;i++)
  {
           
    row.innerHTML+=`<div class="col-md-6">
            <div class="card text-white bg-primary mb-4" style="max-width: 18rem;">
            
             <div class="card-body">
             <h5 class="card-title">Name of the Book: ${lst[i].name}</h5>
             <h5 class="card-title">ISBN: ${lst[i].isbn}</h5>
             <h5 class="card-title">Number of pages ${lst[i].numberOfPages}</h5>
             <h5 class="card-title">Authors: ${lst[i].authors}</h5>
             <h5 class="card-title">Publisher: ${lst[i].publisher }</h5>
             <h5 class="card-title">Released Date: ${lst[i].released}</h5>
             <h5 class="card-title">Characters: ${lst[i].characters.slice(0,5)}</h5>      
             </div>
           </div></div>`;
    
          
        }
     row.innerHTML+=`<div>
                     `+(pg>0?`<button onclick = pagemove(`+(pg-1)+`)><</button>`:``)+`
                     `+(pg<=pagecount?`<button onclick = pagemove(`+(pg+1)+`)>></button>`:``)+`
                     </div>`;
    }  catch (error) {
      console.log(error);
    }
    
  }
loadData();