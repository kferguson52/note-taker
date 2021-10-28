const util =  require('util');
const fs =  require('fs');

const uuid = require('uuid/v1');

const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);

class Notes {
    read(){
        return readAsync('db/db.json', 'utf-8');
    }

    write(note){
        return writeAsync('db/db.json', JSON.stringify(note))
    }

    readNotes(){
        return this.read().then((notes)=>{
            let data;

            try{
                data = [].concat(JSON.parse(notes))
            }catch(err){
                data = []
            }
            return data;
        })
    }

    writeNotes(note){
        const { title, text} = note;


        const newNote = {
            title, 
            text,
            id: uuid()
        }

        return this.readNotes().then((data)=> [...data, newNote]).then((updatedNotes)=> this.write(updatedNotes)).then(()=> newNote);
    }

    // function needs to receive the ID. Then, grabbing notes in write function. Then, pass / filter the note out and remove out the 1 with ID we are passing in. That info is passed down. In short, it will take out the clicked / delete note and then re-write data via writesNotes.
}

module.exports = new Notes();