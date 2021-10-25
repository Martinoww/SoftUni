class Contact{
    constructor(firstName, LastName, phoneNum, email){
        this.firstName = firstName;
        this.LastName = LastName;
        this.phoneNum = phoneNum;
        this.email = email;
        this._online = false;
    }

    get online(){
        return this._online;
    }

    set online(value){
    if(this.article){
        if(value){
            this.article.querySelector('.title').classList.add('online')
        }else {
            this.article.querySelector('.title').classList.remove('online')
        }
    }
        
        this._online = value;
    }

    render(id){
        this.article = document.createElement('article');
        this.article.innerHTML = `<div class="title">${this.firstName} ${this.LastName}<button>&#8505;</button></div>
                             <div class="info">
                                <span>&phone; ${this.phoneNum}</span>
                                <span>&#9993; ${this.email}</span>
                             </div>`;
        let articleInfoSection = this.article.querySelector('.info');
        articleInfoSection.style.display = 'none';
        this.article.querySelector('button').addEventListener('click', ()=>{
            articleInfoSection.style.display = articleInfoSection.style.display === 'none' ? 'block' : 'none';
        });


        if (this._online) {
            this.article.querySelector('.title').classList.add("online");
        }

        document.getElementById(id).appendChild(this.article);

};

}



let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[0].online = true, 2000);
  setTimeout(() => contacts[2].online = true, 1000);

  
  
  
  
  
  
  
  
  
  
  
  
  // function solve(){
  //     document.querySelector('button').addEventListener('click', ()=>{
  //         console.log(`hiii`);
  //     })
  // }
  