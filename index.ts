import * as level from 'level';
const db = level('./leveldb.db', { valueEncoding: 'json' });

//Get data based on key
db.get('count', function(err, value) {
    //If key not exist, err not null, but value = undefined
    let num = (value || 0) + 1;
    db.put('count', num, function(err, value) {
        if(err){
            console.error(err)
        }
        else{
            console.log(value);
        }
    });
});

//batch ensure atomicity
// db.batch()

//createReadStream
//level convert all key to string and store it acsending order (lexicographically)