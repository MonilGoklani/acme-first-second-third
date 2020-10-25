const slots = ['first','second','third']

let users = [
    {id: 1, name: 'moe', slot: 'first', selected: false},
    {id: 2, name: 'larry', slot: 'second', selected: false},
    {id: 3, name: 'curly', slot: 'third', selected: false},
    {id: 4, name: 'lucy', slot: 'third', selected: false}
]
const reset = () => {
    let slots = [...document.querySelectorAll('#lists div')]
    slots.map(elem=>{
            [...elem.children].map(child=>{
                if([...child.classList].includes('listItem')){
                    child.parentElement.removeChild(child)
                }
            })
    })
}

const display = (users) => {
    reset()
    let slots = [...document.querySelectorAll('#lists div')]
    users.map(elem=>{
        if(elem.slot==='first'){
            let listItem = document.createElement('button')
            listItem.classList.add('listItem')
            console.log(elem.selected)
            if(elem.selected===true){
                listItem.classList.add('colorize')
            }
            listItem.innerHTML=elem.name
            slots[0].appendChild(listItem)
        }
        else if(elem.slot==='second'){
            let listItem = document.createElement('button')
            listItem.classList.add('listItem')
            if(elem.selected===true){
                listItem.classList.add('colorize')
            }
            listItem.innerHTML=elem.name
            slots[1].appendChild(listItem)
        }
        else if(elem.slot==='third'){
            let listItem = document.createElement('button')
            listItem.classList.add('listItem')
            if(elem.selected===true){
                listItem.classList.add('colorize')
            }
            listItem.innerHTML=elem.name
            slots[2].appendChild(listItem)
        }
    })
}
display(users)

const select = (name,flag) =>{
    users.map(user=>{
           if(user.name===name.innerHTML && flag===true){
               user.selected=flag
           }else if(user.name===name.innerHTML && flag===false){
               user.selected=flag
           }
    })
}

const moveItems = (target,source) => {
    users.map(user=>{
        if(user.selected===true){
            if(target==='first' && user.slot===source){
                user.slot = target
            }else if(target === 'third' && user.slot===source){
                user.slot = target
            }else if(target === 'second' && user.slot===source){
                user.slot = target
            }
        }   
    })
}

let slot = document.querySelector('#lists')
slot.addEventListener('click',(ev)=>{
    if([...ev.target.classList].includes('listItem')){
        if([...ev.target.classList].includes('colorize')){
            ev.target.classList.remove('colorize')
            select(ev.target,false)
        }else{
            ev.target.classList.add('colorize')
            select(ev.target,true)
        }
    }
})

slot.addEventListener('click',(ev)=>{
    if(ev.target.id==='fright'){
        moveItems('second','first')
        display(users)
    }else if (ev.target.id==='sleft'){
        moveItems('first','second')
        display(users)
    }else if (ev.target.id==='sright'){
        moveItems('third','second')
        display(users)
    }else if (ev.target.id==='tleft'){
        moveItems('second','third')
        display(users)
    }
})


