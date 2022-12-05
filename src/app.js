const { stdin, stdout } = process;
stdout.write('Введи первое число\n');
stdin.on('data', data => {
    const dataString = data.toString();

    stdout.write(`\nВведи второе число`)
    stdout.write(`\nТвоё имя наоборот ${dataString}`)
})

function checkData(d) {
    if (dataString.isInteger()) {
        return d;
    } else {
        stdout.write(`\nЧисло - не число. Введи другое.`)
    }
}