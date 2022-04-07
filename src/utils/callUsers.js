import { usersDefined } from "../providers/users";

export async function loadUsers() {
    const {users, setUsers} = usersDefined()
    const pastUsers = users
    const problems = ''
    if(problems != ''){
        setUsers(problems)
    }else{
        setUsers(pastUsers)
    }
    const request = fetch('https://randomuser.me/api/?results=10')
    const [requests] = await Promise.all([request]);
    const requestJson = await requests.json();
    return setUsers(requestJson.results)
} 




// Principal < Chamada < Replace // Não pode perder o principal e continuar sem o replace

// Recebe o principal
// aloca o principal em outro lugar se $Pesquisa != "" User == $Pesquisa else Valor antigo = valor atual