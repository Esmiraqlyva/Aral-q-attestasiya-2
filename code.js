class Message {
    constructor(author, time, text) {
      this.author = author;
      this.time = time;
      this.text = text;
    }
    toString() {
      console.log(`${this.time} ${this.author}: ${this.text}`)
    }
  }
  class Messenger {
    constructor() {
      this.messages = [];
    }
    gettime() {
      let now = new Date();
      return `${now.getHours()}:${now.getMinutes()}`;
    }
    show_history() {  
      this.messages.forEach(el=> el.toString())
    }
    send(author, text) {
      this.messages.push(new Message(author, this.gettime(), text));
    }
  }
  let messenger = new Messenger()
  messenger.send('Adil', 'ilk mesaj')
  messenger.send('Məryəm', 'İkinci mesaj')
  messenger.send('Məhəmməd','Üçüncü mesaj')
  messenger.show_history()