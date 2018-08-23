document.getElementById('button1').addEventListener('click',loadTxt);

document.getElementById('button2').addEventListener('click',loadJSON);
document.getElementById('button3').addEventListener('click',loadRest);

//load text
function loadTxt(){
    fetch('data.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
     console.log(data);
     document.getElementById('result').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    })
    
}


//load and print JSON
function loadJSON(){
    fetch('employees.json')
    .then(function(response){
       
        return response.json();
    }).then(function(data){
    
        let html;
        data.forEach(employee => {
            html +=`<li>${employee.name} - ${employee.job}</li>`;
        });
        document.getElementById('result').innerHTML = html;
    })
}


//print their response from rest API
function loadRest(){
    fetch('https://picsum.photos/list')
    .then(function(response){
        return response.json();
    }).then(function(images){
        let html='';
        images.forEach(function(image){
            html +=`
            <li>
               <a target="_blank" href="${image.post_url}">View image</a>
               ${image.author}
               </li>`;
        });
        document.getElementById('result').innerHTML = html;
    })
    .catch(function(error){
        Console.log(error);
    })
}