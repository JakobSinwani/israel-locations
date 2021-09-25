
function one(callback){
    setTimeout(()=> {
        console.log('one')
        callback(three);
    },4000)

}
function two(callback){
    setTimeout(()=> {
        console.log('two')
            callback(four)
        },3000)
}
function three(){
    setTimeout(()=> {
        console.log('three')
    },2000)

}

function four(){
    setTimeout(()=> {
        console.log('four')
    }, 1000)

}

    const db = {
    items: [
        {id: 43423, dimensions: {sum: '123',height: '39', width: '422'}}
        ,{id: 123123, dimensions: {sum: '123', height: '39', width: '422'}}
        ,{id: 858584, dimensions: {sum: '123', height: '39', width: '422'}}]
    ,users: [
            {}
        ],
    admins: []
}


function deleteFomObj(id, property, tableName) {
    const rows = db[tableName]
    const index =  rows.findIndex(function (item) {
     return item.id === id
    });
    console.log("index: " + index)
    if(!property) {
        delete rows[index]['dimensions'];
       // rows.splice(index, 1);
       //  console.log(rows);
    } else {
        delete rows[index]['dimensions'][property];
    }
    console.log(rows[index]);
}

deleteFomObj(858584, 'width' , 'items')