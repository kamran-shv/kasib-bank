let cards = []
let name = null

let getCardList = () =>{
    let str = '';
    cards.forEach(item =>{
        str += item.number + '\n';
    })
    return str;
}

let newCard = () =>{
    cards.push(
        {
            number: Math.floor(Math.random() * (4192999999999999 - 4192100000000000) + 4192100000000000),
            balance: 0
        }
    )
}



while(true){
    if (name == null){
        name = prompt('Adinizi qeyd edin');
    }
    if (cards.length === 0){
      let tmp =   prompt('Yeni kart yaradmaq ucun yes yazisini asaqida qeyd edin');
      if (tmp === 'yes' || tmp === 'YES'){
          newCard();
      }
    }else{
        let flag = Number(prompt(
            `Salam ${name}\n` +
            'Aktiv kartlariniz:\n' + getCardList() + '\n' +
            '1: Yeni kart yarat\n' +
            '2: Balansi goster\n' +
            '3: Balansi artir\n' +
            '4: Kartdan karta kocur\n' +
            '5: Sistemden cix\n'
        ))

        switch (flag){
            case 1:
                newCard();
                break;

        }
    }
}






