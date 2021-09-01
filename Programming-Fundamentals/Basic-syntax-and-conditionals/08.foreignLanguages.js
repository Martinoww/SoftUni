function foreignLanguages(country){
let language = ''
switch(country){
    case 'England':
        language = 'English';
        break;
        case 'USA':
            language = 'English';
            break;
            case 'Argentina':
            case 'Spain':
            case 'Mexico':
                language = 'Spanish';
                break;
                default:
                    console.log(`unknown`)
}
console.log(language)

}
foreignLanguages('Spain')